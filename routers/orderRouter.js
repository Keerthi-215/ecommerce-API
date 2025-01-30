import { Router } from "express";
import {
  getOrders,
  createOrder,
  getOrderById,
  updateOrder,
  deleteOrder,
} from "../controllers/orderController.js";
import validateSchema from "../middlewares/validateSchema.js";
import orderSchema from "../schemas/orderSchema.js";

const orderRouter = Router();

orderRouter.get("/", getOrders);
orderRouter.post("/", validateSchema(orderSchema), createOrder);
orderRouter.get("/:id", getOrderById);
orderRouter.put("/:id", validateSchema(orderSchema), updateOrder);
orderRouter.delete("/:id", deleteOrder);

export default orderRouter;
