import express from "express";
import router from "./router/router.js";
import mongoose from "mongoose";
import "dotenv/config";

const server = express();
const port = 3000;
server.use(express.json());

server.use(router);

server.listen(port, () => {
  console.log("server is running on" + port);
});

try {
  mongoose.connect(process.env.MONGO_URL);
} catch (err) {
  console.log(err);
}
