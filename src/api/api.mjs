import express from "express";
import dbconn from "../mongo/index.mjs";
import auth from "basic-auth";
import Shipment from "../../models/shipments.mjs";

// let users = [];
// let shipments = [];

dbconn();

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

app.get(`/${basePath}/shipment`, async (_, res) => {
  console.log(`GET - /shipment - ${new Date().toDateString()}`);
  res.header("Access-Control-Allow-Origin", "*");
  res.set("Content-Type", "application/json");

  // let shipment = new Shipment({
  // id: "whatever",
  // name: "First",
  // author: "Joshua",
  // owner: "Sr. Uno",
  // cost: 0,
  // status: "ordered",
  // location: {
  // lat: "-74.0445442",
  // lng: "4.7022765",
  // },
  // });

  // shipment.save((err, ship) => {
  // if (err) {
  // res.status(500).send(
  // JSON.stringify({
  // msg: "error al almacenar envíos",
  // })
  // );
  // }

  // res.status(200).send(
  // JSON.stringify({
  // shipment: ship,
  // })
  // );
  // });
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

  if (user.name !== "admin" || user.pass !== "admin") {
    res.set("WWW-Authenticate", 'Basic realm="Authorization Required"');
    res.sendStatus(401);
    return;
  }

  res.set("Content-Type", "application/json");
  res.status(200).send(
    JSON.stringify({
      auth: true,
    })
  );
});

export default {
  app,
};
