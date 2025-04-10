import { validationResult } from "express-validator";
import formdata from '../models/formSchema.js'
import mongoose from "mongoose"

export const formpage = (req, res) => {
    res.render("form", { errors: 0 });
  };

  export const saveformdata = async (req, res) => {
    const error = validationResult(req);
  
    if (!error.isEmpty()) {
      return res.render("form", { errors: error.array() });
    }
  
    try {
      await formdata.create(req.body);
      res.redirect("/"); 
    } catch (err) {
      res.render('500', { message: err.message }); 
    }
  };
  