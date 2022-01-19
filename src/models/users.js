const mongoose =require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
        },
    gender:{
        type:String,
        enum:['Male','Female']
    },
    email:{
        type:String,
        required:true,
        unique:[true,'email Id already present']

    }    
});
 
const User = new mongoose.model("User", userSchema);

module.exports = User;
