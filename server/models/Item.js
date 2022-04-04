const mongoose = require("mongoose");

const Item = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    weight: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "restaurants",
    },
  },
  { timestamps: true }
);

const model = mongoose.model("Items", Item);

module.exports = model;
