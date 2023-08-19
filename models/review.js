// reviews.js
const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    userId: {
        type: Number,
        required: true,
    },
    sellerId: {
        type: Number,
        required: true,
    },
    productId: {
        type: Number,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    },
    comment: String,
    reviewDate: {
        type: Date,
        default: Date.now,
    },
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
