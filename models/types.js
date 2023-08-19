// types.js
const mongoose = require("mongoose");

const typeSchema = new mongoose.Schema({
    productType: String,
    totalSold: Number,
    transactionTotal: Number,
    totalAvailable: Number,
});

module.exports = mongoose.model("Type", typeSchema);
