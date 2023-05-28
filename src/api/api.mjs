import express from "express";
import dbconn from "../mongo/index.mjs";
import auth from "basic-auth";
import Shipment from "../../models/shipments.mjs";
import Users from "../../models/users.mjs";

const setInitialData = async () => {
  const admin = await Users.findOne({ user: "admin" });
  if (admin === null) {
    const adminUser = new Users({
      user: "admin",
      password: "admin",
    });

    adminUser.save({ collection: "users" });
  }

  const shipmentsLen = await Shipment.countDocuments();
  if (shipmentsLen === 0) {
    const proofShipment = new Shipment({
      id: btoa("Proof Shipment-System"),
      name: "Proof Shipment",
      owner: "System",
      cost: 100,
      author: "me",
      ride: [
        {
          name: "origin",
          latitude: 4.711863,
          longitude: -74.0739219,
        },
        {
          name: "location",
          latitude: 4.707374,
          longitude: -74.056108,
        },
        {
          name: "destination",
          latitude: 4.702429,
          longitude: -74.0440309,
        },
      ],
      status: "ordered",
    });

    proofShipment.save({ collection: "shipments" });
  }
};

dbconn();
setInitialData();

const app = express();
const basePath = "api";

// GETS
app.get("/", (_, res) => {
  console.log(`GET - Welcome to LogisticBack - ${new Date().toDateString()}`);
  res.set("Content-Type", "application/json");
  res.status(200).send(
    JSON.stringify({
      msg: "LogisticBack is Connected",
    })
  );
});

app.get(`/${basePath}/fakeauth`, async (req, res) => {
  console.log(`GET - /fakeauth - ${new Date().toDateString()}`);
  res.header("Access-Control-Allow-Origin", "*");

  const user = auth(req);

  if (!user || !user.name || !user.pass) {
    res.set("WWW-Authenticate", 'Basic realm="Authorization Required"');
    res.sendStatus(401);
    return;
  }

  const admin = await Users.findOne({ user: user.name });
  if (admin === null) {
    res.sendStatus(403);
    return;
  }

  if (admin.password !== user.pass) {
    res.sendStatus(403);
    return;
  }

  res.set("Content-Type", "application/json");
  res.status(200).send(
    JSON.stringify({
      auth: true,
    })
  );
});

app.get(`/${basePath}/shipments`, async (_, res) => {
  console.log(`GET - /shipments - ${new Date().toDateString()}`);
  res.header("Access-Control-Allow-Origin", "*");
  res.set("Content-Type", "application/json");

  const allShipments = await Shipment.find({});

  res.status(200).send(
    JSON.stringify({
      shipments: allShipments,
    })
  );
});

app.post(`/${basePath}/shipment`, async (req, res) => {
  console.log(`POST - /shipment - ${new Date().toDateString()}`);
  res.header("Access-Control-Allow-Origin", "*");
  res.set("Content-Type", "application/json");

  var body = [];
  req
    .on("data", (chunk) => {
      body.push(chunk);
    })
    .on("end", () => {
      body = Buffer.concat(body).toString();
      const newShipment = JSON.parse(body);
      console.log();

      let shipment = new Shipment(newShipment);

      shipment.save({ collection: "shipments" });
    });

  res.status(200).send(
    JSON.stringify({
      shipment: "Holaaaaaa",
    })
  );
});

export default {
  app,
};
