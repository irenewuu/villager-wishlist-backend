const mongoose = require("mongoose")
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');


const UserSchema = new Schema({
    username: String,
    email: String,
    password: String
})

// not an arrow function
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

const User = mongoose.model("user", UserSchema)

module.exports = User