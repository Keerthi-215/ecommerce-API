import { Router } from "express";
import {
  getOrders,
  createOrder,
  getOrderById,
  updateOrder,
  deleteOrder,
} from "../controllers/orderController.js";
import validateSchema from "../middlewares/validateSchema.js";
import {
  createOrderSchema,
  updateOrderSchema,
} from "../schemas/orderSchemas.js";

const orderRouter = Router();

orderRouter.get("/", getOrders);
orderRouter.post("/", validateSchema(createOrderSchema), createOrder);
orderRouter.get("/:id", getOrderById);
orderRouter.put("/:id", validateSchema(updateOrderSchema), updateOrder);
orderRouter.delete("/:id", deleteOrder);

export default orderRouter;
