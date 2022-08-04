const { Schema, model, SchemaType } = require("mongoose");

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true 
    },
    username: {
      type: String,
      unique: true 
    },
    password: String,
    cart: [{
      type : [Schema.Types.ObjectId], 
      ref: "Event"
    }],
    // order history -> Order model
  },

  {
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
