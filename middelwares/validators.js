const { body, validationResult } = require('express-validator')

const registerRules=[
 body("name", "Name is required").notEmpty(),
 body("email", "Email is required").isEmail(),
 body("password", "password must have more then 5 caracters").isLength({min:5})
]

const loginRules=[
 body("email", "Email is required").isEmail(),
 body("password", "password is required").notEmpty()
]

const validator=(req, res, next)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }
    next()
}

module.exports={registerRules,validator,loginRules}