import mongoose, { Schema } from "mongoose";

const schema = new Schema(
  {
    name: {
      type: "String",
      required: true,
    },
  },
  { timestamps: true }
);

// creating data
const personSchema = mongoose.model("person", schema);
export default personSchema;
