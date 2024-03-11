import express from "express";
import {
  getDatas,
  getSingleData,
  postData,
  deleteData,
  editData,
} from "../controller/controller.js";

const router = express.Router();

// to get all blogs
router.get("/", getDatas);

// to get a  sinlge blog
router.get("/:id", getSingleData);

// to post a blog
router.post("/", postData);

// to delete a particular blog
router.delete("/:id", deleteData);

// to edit a particular data
router.patch("/:id", editData);
export default router;
