import express from "express";
import { jsonMiddleware } from "./middlewares/jsonMiddleware.js";
import { corsMiddleware } from "./middlewares/corsMiddleware.js";
import { notFoundMiddleware } from "./middlewares/notFoundMiddleware.js";
import { errorHandlerMiddleware } from "./middlewares/errorHandlerMiddleware.js";
import userRouter from "./routers/userRouter.js";
import orderRouter from "./routers/orderRouter.js";
import productRouter from "./routers/productRouter.js";
import categoryRouter from "./routers/categoryRouter.js";

const app = express();
const port = process.env.PORT || 3000;

// Middlewares
app.use(jsonMiddleware);
app.use(corsMiddleware);

// Routes
app.use("/users", userRouter);
app.use("/orders", orderRouter);
app.use("/products", productRouter);
app.use("/categories", categoryRouter);

// Home route
app.get("/", (req, res) => {
  res.json({ message: "Server is running!" });
});

// Handle non-existent routes or methods
app.use(notFoundMiddleware);

// Default error handler
app.use(errorHandlerMiddleware);

app.listen(port, () => console.log(`Server is running on port ${port}`));
