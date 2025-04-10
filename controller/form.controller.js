import { validationResult } from "express-validator";

export const formpage = (req, res) => {
    res.render("form", { errors: 0 });
  };

export const saveformdata = (req, res) => {
    const error = validationResult(req);
    if (error.isEmpty()) {
      res.send(req.body);
    }
    res.render("form", { errors: error.array() });
  };