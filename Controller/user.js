const User = require('../Models/user')
const jwt = require('jsonwebtoken')


const signup = (req, res) => {
    // if u do like this then u can just call req.body body
// const signup = ({body}, res) => {
    const user = new User();
    user.name = req.body.name;
    user.email = req.body.email;
    user.password = req.body.password;

    user.save((err, user)=>{
        if(err) return res.status(500).send('Signup failed')
        const token = jwt.sign({id: user._id}, 'thisismysecret')
        res.status(201).send(token)
    })
}

const login = (req, res) => {
    User.findOne({email:req.body.email}, (err, user)=>{
        if(err || !user) return res.status(404).send('user not found')

        if(user.comparePassword(req.body.password)) {
            // token generation
            const token = jwt.sign({id: user._id}, 'thisismysecret')
            res.send(token)
        } else{
            res.send("could not login")
        }
    })
}

module.exports = {
    signup,
    login
}

// 40min