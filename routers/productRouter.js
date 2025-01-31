import { Router } from "express";
import {
  getProducts,
  createProduct,
  getProductById,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js";
import validateSchema from "../middlewares/validateSchema.js";
import {
  createProductSchema,
  updateProductSchema,
} from "../schemas/productSchemas.js";

const productRouter = Router();

productRouter.get("/", getProducts);
productRouter.post("/", validateSchema(createProductSchema), createProduct);
productRouter.get("/:id", getProductById);
productRouter.put("/:id", validateSchema(updateProductSchema), updateProduct);
productRouter.delete("/:id", deleteProduct);

export default productRouter;
