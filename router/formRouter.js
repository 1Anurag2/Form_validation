import express from "express";
import { formpage,saveformdata } from "../controller/form.controller.js";
import {validationResistration} from '../middleware/formValidation.js'

const router = express.Router()

router.get('/', formpage)

router.post('/saveform',validationResistration, saveformdata)

export default router