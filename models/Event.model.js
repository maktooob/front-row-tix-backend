const { Schema, model } = require("mongoose");

const eventSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    category: {
      type: [String],
      enum: ["sport", "concert", "culture"],
      required: true
    },
    price: {
      type: Number,
      required: true
    }
  },
  {
    timestamps: true,
  }
);

const Event = model("Event", eventSchema);

module.exports = Event;
