const express = require("express");
const router = express.Router();
const authcontrollers = require("../controllers/auth-controller");
const signupSchema = require("../validators/auth-validator");
const validate = require("../middlewares/validate-middleware");



// app.get("/register", (req , res)=>{
//     res.status(200).send("Welcome to my worldkjg registration");
// });

// router.get("/", (req , res)=>{
//     res.status(200).send("Welcome to my worldkjg registration using router");
// });

router.route("/").get(authcontrollers.home);
router.route("/register").post(validate (signupSchema) ,authcontrollers.register);
router.route("/login").post(authcontrollers.login);

module.exports = router;