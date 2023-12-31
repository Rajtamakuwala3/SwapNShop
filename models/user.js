const mongoose = require("mongoose");
// const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new mongoose.Schema({

    
    // user_id: {
    // type: Number,
    // required: true,
    // unique: true,
    // autoIndex: true
    // },
    name: {
    type: String,
    required: true,
    },
    password: {
    type: String,
    },
    // trips: [
    // {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Trip",
    // },
    //],
    phone: {
    type: String,
    },
    email: {
      type: String,
      },
    gender: { type: String },
    age: { type: Number },
    city: { type: String },
  //   userType: {
  //   type: String,
  //   enum: ["user", "admin"],
  //   default: "user",
  // },
});

// userSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("User", userSchema);