import mongoose from "mongoose";
import personSchema from "../models/model.js";

// read all datas
export const getDatas = async (req, res) => {
  const blogs = await personSchema.find({}).sort({ createdAt: 1 });
  res.json(blogs);
};

// read a single data
export const getSingleData = async (req, res) => {
  const { id } = req.params;
  const singleBlog = await personSchema.findById(id);
  res.status(200).json(singleBlog);
};

//post a data
export const postData = async (req, res) => {
  personSchema.create(req.body);
  res.status(200).json(req.body);
};

// delete a particular file
export const deleteData = async (req, res) => {
  const { id } = req.params;
  const deletedFile = await personSchema.findOneAndDelete({ _id: id });
  res.status(200).json(deletedFile);
};

// edit a particular file
export const editData = async (req, res) => {
  const { id } = req.params;
  const updatedFile = await personSchema.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );
  res.status(200).json(updatedFile);
};
