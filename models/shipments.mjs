import mongoose from "mongoose";

const { Schema } = mongoose;

const ShipmentSchema = new Schema({
  name: String,
  author: String,
  owner: String,
  cost: Number,
  ride: [
    {
      name: String,
      latitude: Number,
      longitude: Number,
    },
  ],
  status: {
    type: String,
    enum: ["ordered", "packaging", "way", "arrived", "delivered"],
  },
  id: String,
});

const Shipment = mongoose.model("shipment", ShipmentSchema);

export default Shipment;
