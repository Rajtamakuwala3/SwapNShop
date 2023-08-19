const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    productType: {
        type: String//mongoose.Schema.Types.ObjectId,
        //ref: 'Type', // Referencing the 'Types' collection
    },
    issuedPrice: Number,
    finalPrice: Number,
    productId: String, // Assuming a unique identifier for the product
    // customerId: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Customer', // Referencing the 'Customers' collection
    // },
    issuedDate: Date,
    sellDate: Date,
});

module.exports = mongoose.model('Product', transactionSchema);
