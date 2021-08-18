const express = require("express");
const cors = require("cors");
const app = express();
const sessionManagement = require('express-session')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser');
const pg = require('pg')
const config = require('./config').config

const otherPort = 3003;
app.use(sessionManagement({secret: 'eadsadasdas', resave: true, saveUninitialized: true}))
app.use(cookieParser())
app.use(express.urlencoded({extended: true}))
app.use(express.json())
const router = express.Router()
const client = new pg.Client(config)

client.connect(err => {
    if(err) {
        console.error('error connecting', err.stack)
    } else {
        console.log('Connected. :)')
    }
})

router.get("/", (req, res) => {
 res.json({message: "api working?"}).status(200)
})

router.get("/getAllArt", (req, res) => {
    const query_ = "SELECT * FROM drawings;"
    client
        .query(query_,)
        .then(res => {
            console.log(res.rows)
        })
        .catch(e => console.error(e.stack))
})

router.post("/addArt", (req, res) => {
    console.log(req.body)
    res.json({"code": "1"})
})

app.use('/drawings', router)

app.listen(otherPort)



console.log("API server is running! :)")