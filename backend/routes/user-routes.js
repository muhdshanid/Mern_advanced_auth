const { Router } = require("express");
const { signup, login, verifyToken, getUser, refreshToken, logout } = require("../controllers/user-controller");

const router = Router();

router.post("/signup",signup);
router.post("/login",login);
router.get("/user",verifyToken,getUser)
router.get("/refresh",refreshToken,verifyToken,getUser)
router.post("/logout",verifyToken,logout)
module.exports = router 