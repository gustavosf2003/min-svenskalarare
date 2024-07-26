import express from "express";

const router = express.Router();

router.delete("/", (req, res) => {
  console.log("logout");
});

export default router;
