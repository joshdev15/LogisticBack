import mongoose from "mongoose";

const { Schema } = mongoose;

const ShipmentSchema = Schema({
  name: String,
  author: String,
  owner: String,
  cost: Number,
  location: {
    lat: Number,
    lng: Number,
  },
  status: {
    type: String,
    enum: ["ordered", "packaging", "way", "arrived", "delivered"],
  },
  id: String,
});

const Shipment = mongoose.model("Shipment", ShipmentSchema);

export default Shipment;
