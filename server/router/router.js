import express from "express";
import { dataCreation } from "../models/model.js";

const router = express.Router();

router.post("/", (req, res) => {
  res.json(req.body);
  dataCreation(req.body);  // I call the function which is created on model.js file
});

export default router;
