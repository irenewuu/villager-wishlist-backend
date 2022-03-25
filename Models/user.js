const mongoose = require("mongoose")
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

// ppl with same email can signup -- unique plz
const UserSchema = new Schema({
    name: String,
    email: String,
    password: String
})

UserSchema.pre('save', function (next) {
    const user = this
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(user.password, salt, function(err, hash) {
            // Store hash in your password DB
            user.password = hash
            next()
        });
    });
})

// compare password function
UserSchema.methods.comparePassword = function(password) {
    // returns true or false
    return bcrypt.compareSync(password, this.password)
}

const User = mongoose.model("users", UserSchema)

module.exports = User