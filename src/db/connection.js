const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/records",
{
    useNewUrlParser:true,
    // useCreateIndex:true,
    useUnifiedTopology:true
}).then(() => {
    console.log('connection successfully established');
}).catch((e) => {
    console.log('some issue in connection  '+e);
})