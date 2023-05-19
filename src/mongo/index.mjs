import mongoose from "mongoose";

const dbconn = () => {
  const uri = `mongodb://mongo:27017/logisticapp`;
  mongoose
    .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log("Connected");
    })
    .catch((err) => {
      console.log("Connection error", err);
    });
};

export default dbconn;
