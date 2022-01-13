import express from 'express';
import { v4 as uuidv4 } from 'uuid';
import bodyParser from 'body-parser';

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true}));

var uid;
var date;
var time;
var name;


app.get("/", ( req, res ) =>{

        res.render("index")
});

app.get("/info", (req, res) => {
    res.render("info",{ name:name, uid:uid, time:time })
})

app.post("/",(req, res) => {

    name = req.body.userName;
   
    uid = uuidv4();
    date = new Date();
    time = date.toLocaleString();

    res.redirect("/info");
 
 })



app.listen(3000, () => {
    console.log('server started at port 3000');
    });