import express from "express";

const router = express.Router();

router.post("/", (req, res) => {
  console.log("sign up");
});

export default router;
