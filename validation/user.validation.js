const {body, validationResult} = require("express-validator");


const validationRules = [
        body("username")
        .notEmpty()
        .withMessage("Username must not be empty")
        .isLength({min: 4, max: 20})
        .withMessage("Username must be between four to twenty character"),
        body("email")
        .isEmail()
        .withMessage("Invalid Email Format")
        .normalizeEmail(),
        body("password")
        .notEmpty()
        .withMessage("Password must not be empty")
        .isLength({min: 6, max: 15})
        .withMessage("Password must be between six to fiften character")
        .matches(/[A-Z]/)
        .withMessage("Password must contain an uppercase letter")
        .matches(/[a-z]/)
        .withMessage("Password must contain a lowercase letter")
        .matches(/[0-9]/)
        .withMessage("Password must contain a number")
];

const validate = (req,res,next)=>{
    const error = validationResult(req);

    if(!error.isEmpty()){
       return res.status(400).json({error: error.array()});
    }
    next();
};

module.exports = {
    validationRules,validate
}