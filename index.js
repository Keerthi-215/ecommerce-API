import express from "express";
import cors from "cors";
import userRouter from "./routers/userRouter.js";
import orderRouter from "./routers/orderRouter.js";
import productRouter from "./routers/productRouter.js";

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/users", userRouter);
app.use("/orders", orderRouter);
app.use("/products", productRouter);

// Home route
app.get("/", (req, res) => {
  res.json({ message: "Server is running!" });
});

app.listen(port, () => console.log(`Server is running on port ${port}`));
