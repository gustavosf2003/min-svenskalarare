import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import router from "@src/routes/index";

require("dotenv/config");

const app = express();
const port = 5001;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
app.use("/", router);

// Start the server
app.listen(port, () => {
  console.log("Server is listening on port:", port);
});
