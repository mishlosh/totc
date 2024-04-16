const express = require('express');
const mysql = require('mysql')
require("dotenv").config()
const stripe = require("stripe")(process.env.STRIPE_SECRET_TEST)
const bodyParser = require("body-parser")
const cors = require('cors')

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())

const db = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password: '',
    database: 'totc',

})

app.get('/', (re, res)=> { return res.json("From Backend Side");
})

app.get('/totc', (req, res)=> {
    const sql = "SELECT * FROM item";
    db.query(sql, (err, data) => {
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.get('/totc/category', (req, res)=> {
    const sql = "SELECT category, count(*) FROM item GROUP BY category";
    db.query(sql, (err, data) => {
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.get('/tocd/market', (req, res)=> {
	const sql = "SELECT itemlistings_main.itemID, itemlistings_main.itemName, itemlistings_main.price, itemlistings_main.imagepath, itemlistings_category.categoryID, itemlistings_category.categoryName"+
	 "FROM itemlistings_main INNER JOIN itemlistings_category ON itemlistings_main.categoryID=itemlistings_category.categoryID";
	db.query(sql, (err, data) => {
		if(err) return res.json(err);
		return res.json(data);
	})
})

app.get('/tocd/market/categories', (req, res)=> {
	const sql = "SELECT categoryName, categoryID FROM itemlistings_category";
	db.query(sql, (err, data) => {
		if(err) return res.json(err);
		return res.json(data);
	})
})

// This is where the backend and Stripe handle the payment
app.post("/payment", cors(), async (req, res) => {
	let { amount, id } = req.body
	try {
		const payment = await stripe.paymentIntents.create({
			amount,
			currency: "USD",
			description: "Taste Of The Carribean",
			payment_method: id,
			confirm: true,
            return_url: "http://localhost:5173/pages/success"
		})
		console.log("Payment", payment)
		res.json({
			message: "Payment successful",
			success: true
		})
	} catch (error) {
		console.log("Error", error)
		res.json({
			message: "Payment failed",
			success: false
		})
	}
})

app.listen(8081, ()=> {
    console.log("listening");
    
})
