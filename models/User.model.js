const { Schema, model, SchemaType } = require("mongoose");

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true 
    },
    email: {
      type: String,
      unique: true,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    // cart: [{
    //   type : [Schema.Types.ObjectId], 
    //   ref: "Event"
    //   // order history -> Order model
    // }],
    status: {
      type: String,
      enum: ["user", "admin"],
      default: "user"
    }
  },

  {
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
