const express = require('express');
require('./db/connection');
const User = require('./models/users')
const Event = require('./models/events');
const mongoose = require('mongoose');
const port = process.env.PORT || 5000
const app = express();
app.use(express.json());

app.post('/users', async (req, res) => {
    
    try{
        const userData = new User( req.body);
        const UD = await userData.save();
        res.status(201).send('User Info is successfully saved \n'+ UD )

    }catch(e){
        res.status(400).send(e);

    }
})

app.post('/events', async (req,res) => {
    
    try{
        const userEvent = new Event(req.body);
        const UE = await userEvent.save();
        res.status(201).send('Events details saved successfully \n' + UE)
    }catch(e){
        res.status(400).send(e)
    }
})


app.listen(port,() => {
    console.log('server is up and running');
})