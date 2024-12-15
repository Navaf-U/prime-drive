import express from 'express';
import tryCatch from '../utils/TryCatch.js';
import {addProduct,getAllProducts} from "../controllers/publicControllers/publicController.js";

const router = express.Router();
router 
.get("/products",tryCatch(getAllProducts))
.post("/product/add",tryCatch(addProduct))

export default router