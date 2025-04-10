import mongoose from "mongoose";

const formSchema = mongoose.Schema({
  firstname: {
    type: String,
  },
  lastname: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  phone: {
    type: Number,
  },
  state: {
    type: String,
  },
  city: {
    type: String,
  },
  address1: {
    type: String,
  },
  address2: {
    type: String,
  },
});

const formdata = mongoose.model("formValidation", formSchema);

export default formdata;
