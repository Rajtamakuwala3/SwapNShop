// const express = require('express')
// const db = require('./connection.js')


// const app = express()
// db()

// app.listen(8000,(err) => {
//     if(err){
//         console.log("Error ........")
//     }
//     else{
//         console.log("Thank you Vikram")
//     }
// })


const express = require('express');
const User = require('./models/user.js');
const Type = require('./models/types.js');
const Product = require('./models/product.js');
const Contact = require('./models/contact.js');
const Review = require('./models/review.js');
const db = require('./connection.js');
const app = express();

db()
const newUser = new User({
    name: 'John',
    password: '1234',
    phone: '9662725700',
    email: 'john@example.com',
    gender: 'male',
    age: 30,
    city: 'Nadiad'
});

const newType = new Type({
    productType: 'Electronics',
    totalSold: 5,
    transactionTotal: 1000,
    totalAvailable: 3,
});


const newProduct = new Product({
    productType: 'Electronics', // ObjectId of a Type from the Types collection
    issuedPrice: 100,
    finalPrice: 120,
    productId: 'product123',
    //customerId: 'ObjectId_of_Customer', // ObjectId of a Customer from the Customers collection
    issuedDate: new Date('2023-08-19'),
    sellDate: new Date('2023-08-25'),
    });

    const newContact = new Contact({
        email: 'contact@example.com',
        name: 'John Doe',
        phone: '123-456-7890',
        message: 'This is a feedback message.',
    });

    const newReview = new Review({
        userId: 1,
        sellerId: 2,
        productId: 3,
        rating: 4,
        comment: 'This is a great product!',
    });
    


newReview.save()
    .then(() => {
        console.log('User saved successfully');
    })
    .catch((err) => {
        console.error('Error saving user:', err);
    });




// newUser.save()
//     .then(() => {
//         console.log('User saved successfully');
//     })
//     .catch((err) => {
//         console.error('Error saving user:', err);
//     });

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});