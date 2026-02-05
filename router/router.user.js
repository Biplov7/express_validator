const express = require("express");
const router = express.Router();
const {getUser,postUser,deleteAllUser} = require("../controller/user.controller.js");
const {validationRules, validate} = require("../validation/user.validation.js");


router.get("/",getUser);
router.post("/",validationRules,validate,postUser);
router.delete("/",deleteAllUser);


module.exports = router;