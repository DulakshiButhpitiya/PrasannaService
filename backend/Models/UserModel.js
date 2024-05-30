const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");

const usersSchema = new mongoose.Schema({
    firstname:String,
    laststname:String,
    email:String,
    number:Number,
    address:String,
    password:String,
    
    role: {
        type: Number,
        default: 1
    }
});

//encrypting password before saving
usersSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next();
    }
    this.password = await bcrypt.hash(this.password, 10)
})


// compare user password
usersSchema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
}

module.exports = mongoose.model("users",usersSchema);