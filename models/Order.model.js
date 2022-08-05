const { Schema, model } = require("mongoose");

const orderSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
    events: [{ 
      eventId: {
        type: Schema.Types.ObjectId,
        ref: "Event"
      },
      quantity: Number
    }],
    address: [{ 
      name: {type: String, required: true},
      street: {type: String, required: true},
      zip: {type: Number, required: true},
      city: {type: String, required: true},
      country: {type: String, required: true},
    }],
    totalPrice: Number,
  },

  {
    timestamps: true,
  }
);

const Order = model("Order", orderSchema);

module.exports = Order;
