const mongoose = require('mongoose');
const Schema =  mongoose.Schema;
const UserSchema = new Schema({
    firstName: { type: String },
    lastName: { type: String },
    emailId: { type: String },
    country: { type: String },
    countryCode: { type: Number },
    mobileNo: { type: Number },
    password: { type: String },
    confirmPassword: { type: String }

})
module.exports = mongoose.model('User', UserSchema)