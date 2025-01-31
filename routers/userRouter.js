import { Router } from "express";
import {
  getUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
} from "../controllers/userController.js";
import validateSchema from "../middlewares/validateSchema.js";
import {
  registerUserSchema,
  updateUserSchema,
} from "../schemas/userSchemas.js";

const userRouter = Router();
userRouter.get("/", getUsers);
userRouter.post("/", validateSchema(registerUserSchema), createUser);
userRouter.get("/:id", getUserById);
userRouter.put("/:id", validateSchema(updateUserSchema), updateUser);
userRouter.delete("/:id", deleteUser);

export default userRouter;
