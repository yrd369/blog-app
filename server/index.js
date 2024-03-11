import express from "express";
import router from "./router/router.js";
import mongoose from "mongoose";
import "dotenv/config";

const server = express();

// middleware
server.use(express.json());
server.use(router);

// database connect
try {
  if (mongoose.connect(process.env.MONGO_URL)) {
    
    // port listening
    server.listen(process.env.PORT, () => {
      console.log("server is running on" + process.env.PORT);
    });
  }
} catch (err) {
  console.log(err);
}
