import express from "express";
import {
  createCategory,
  getCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
} from "../controllers/categoryController.js";
import validateSchema from "../middlewares/validateSchema.js";
import {
  createCategorySchema,
  updateCategorySchema,
} from "../schemas/categorySchemas.js";

const categoryRouter = express.Router();

categoryRouter.post("/", validateSchema(createCategorySchema), createCategory);
categoryRouter.get("/", getCategories);
categoryRouter.get("/:id", getCategoryById);
categoryRouter.put(
  "/:id",
  validateSchema(updateCategorySchema),
  updateCategory
);
categoryRouter.delete("/:id", deleteCategory);

export default categoryRouter;
