import mongoose from "mongoose";

const { Schema } = mongoose;

const ShipmentSchema = new Schema({
  name: String,
  author: String,
  owner: String,
  cost: Number,
  origin: {
    lat: Number,
    lng: Number,
  },
  location: {
    lat: Number,
    lng: Number,
  },
  destination: {
    lat: Number,
    lng: Number,
  },
  status: {
    type: String,
    enum: ["ordered", "packaging", "way", "arrived", "delivered"],
  },
  id: String,
});

const Shipment = mongoose.model("shipment", ShipmentSchema);

export default Shipment;
