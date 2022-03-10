const jwt = require("jsonwebtoken")

const authriseUser = (req,res,next) =>{
  jwt.verify(req.query.token,'thisismysecret', (err,data)=>{
    if(err) return res.send("not authorized")
    // console.log(data)
    req.user = data
    next()
  })
}

module.exports = authriseUser