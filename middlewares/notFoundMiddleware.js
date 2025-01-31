export const notFoundMiddleware = (req, res) => {
  res.status(404).json({ error: "Route not found or method not allowed" });
};
