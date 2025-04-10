import { body } from "express-validator";

export const  validationResistration = [
    body("firstname")
      .notEmpty()
      .withMessage("first name is required.")
      .isLength({ min: 3 })
      .withMessage("first name must be at least 3 characters long.")
      .trim()
      .isAlpha()
      .withMessage("first name must contain only letters.")
      .custom((value) => {
        if (value === "admin") {
          throw new Error('first name "admin" is not allowed.');
        }
        return true;
      })
      .customSanitizer((value) => value.toLowerCase()),
  
    body("lastname")
      .notEmpty()
      .withMessage("last name is required.")
      .trim()
      .isAlpha()
      .withMessage("last name must contain only letters."),
  
    body("email")
      .isEmail()
      .withMessage("Please provide a valid Email Id.")
      .normalizeEmail(),
  
    body("password")
      .isLength({ min: 8, max: 14 })
      .withMessage("Password must be between 8 and 14 character long.")
      .isStrongPassword()
      .withMessage(
        "Password must be special charector , Lower case ,Upper case ,digit"
      ),
  
    body("phone")
      .isLength({ min: 10, max: 10 })
      .withMessage("Phone No. must be 10 digit")
      .isNumeric()
      .withMessage("Phone No. must be numeric."),
  
    body("state")
      .isIn([
        "Andhra Pradesh",
        "Arunachal Pradesh",
        "Assam",
        "Bihar",
        "Chhattisgarh",
        "Goa",
        "Gujarat",
        "Haryana",
        "Himachal Pradesh",
        "Jharkhand",
        "Karnataka",
        "Kerala",
        "Madhya Pradesh",
        "Maharashtra",
        "Manipur",
        "Meghalaya",
        "Mizoram",
        "Nagaland",
        "Odisha",
        "Punjab",
        "Rajasthan",
        "Sikkim",
        "Tamil Nadu",
        "Telangana",
        "Tripura",
        "Uttar Pradesh",
        "Uttarakhand",
        "West Bengal",
        "Andaman and Nicobar Islands",
        "Chandigarh",
        "Dadra and Nagar Haveli and Daman and Diu",
        "Delhi",
        "Jammu and Kashmir",
        "Ladakh",
        "Lakshadweep",
        "Puducherry",
      ])
      .withMessage("Write a valid State."),
  
    body("city"),
  
    body("address1"),
  
    body("address2"),
  ];

