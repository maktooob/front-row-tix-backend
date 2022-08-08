const { Schema, model } = require("mongoose");

const eventSchema = new Schema(
  {
    title: {
      type: String,
      //required: true
    },
    description: {
      type: String,
      //required: true
    },
    image: {
      type: String,
      //required: true
    },
    category: {
      type: String,
      enum: ["sports", "concert", "culture"],
      //required: true
    },
    price: {
      type: Number,
      //required: true
    },
    location: {
      type: String,
      //required: true
    },
    date: {
      type: Date,
      //required: true
    }
  },
  {
    timestamps: true,
  }
);

const Event = model("Event", eventSchema);

module.exports = Event;
