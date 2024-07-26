import express from "express";

const router = express.Router();

router.post("/", (req, res) => {
  console.log("login");
});

export default router;
