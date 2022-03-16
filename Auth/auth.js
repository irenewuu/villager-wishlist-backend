const jwt = require("jsonwebtoken")

const authorizeUser = (req,res,next) =>{
  jwt.verify(req.query.token,'thisismysecret', (err,data)=>{
    if(err) return res.status(500).send("not authorized")
    // console.log(data)
    req.user = data
    next()
  })
}

module.exports = authorizeUser