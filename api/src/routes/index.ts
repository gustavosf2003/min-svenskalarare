import express from "express";
import signup from "@src/routes/access/signup";
import login from "@src/routes/access/login";
import logout from "@src/routes/access/logout";

const router = express.Router();

router.use("/signup", signup);
router.use("/login", login);
router.use("/logout", logout);

export default router;
