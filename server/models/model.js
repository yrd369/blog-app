import mongoose, { Schema } from "mongoose";

const schema = new Schema({
  name: {
    type: "String",
    required: true,
  },
}); // This line of code is used create a schema of types to store the values

const personSchema = mongoose.model("person", schema); // This line creates a collection in database

// For dynamic use I have created this function here and call it on router.js
export const dataCreation = async (data) => {
  await personSchema.create(data); // I have passed data as a paramter which user request on router.js file. This line creates the data the user gives.
};
