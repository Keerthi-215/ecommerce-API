export const errorHandlerMiddleware = (err, req, res, next) => {
  console.error("Unhandled error:", err);
  res.status(500).json({ error: "An internal server error occurred" });
};
