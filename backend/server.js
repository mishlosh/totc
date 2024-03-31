const express = require('express');
const mysql = require('mysql')
const cors = require('cors')

const app = express()
app.use(cors())

const db = mysql.createConnection({
    host: "localhost",
    user: 'root',
    paswsord: '',
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
app.listen(8081, ()=> {
    console.log("listening");
    
})
