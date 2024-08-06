import express from 'express';
import dotenv from 'dotenv';
import stripe from 'stripe';

//Load variables
dotenv.config();

const app = express();
app.use(express.static('public'));
app.use(express.json());

//Home route
app.get("/", (req, res) => {
    res.sendFile("index.html" , {root: "public"})
});

// STRIPE

let stripeGateway = stripe(process.env.stripe_api);
app.listen(3000, ()=>{
    console.log('Server is running on port 3000');
})
