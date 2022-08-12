const { Schema, model } = require("mongoose");
const url = "https://i.stack.imgur.com/34AD2.jpg"
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
    image: {
      type: String,
      default: url
    },
    category: {
      type: String,
      enum: ["sports", "concert", "culture"],
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    location: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      required: true
    }
  },
  {
    timestamps: true,
  }
);

const Event = model("Event", eventSchema);

module.exports = Event;
