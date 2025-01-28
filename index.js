import express from "express";
import cors from "cors";
import userRouter from "./routers/userRouter.js";
import postRouter from "./routers/postRouter.js";

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/users", userRouter);
app.use("/posts", postRouter);

// Home route
app.get("/", (req, res) => {
  res.json({ message: "Server is running!" });
});

app.listen(port, () => console.log(`Server is running on port ${port}`));
