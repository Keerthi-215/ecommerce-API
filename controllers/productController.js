import { Product } from "../models/index.js";

export const getProducts = async (req, res) => {
  try {
    const { categoryId } = req.query; // Extract categoryId from query parameters

    let whereCondition = {}; // Default condition (empty for all products)
    if (categoryId) {
      whereCondition.categoryId = categoryId; // Filter by category if provided
    }

    const products = await Product.findAll({ where: whereCondition });

    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createProduct = async (req, res) => {
  try {
    const { name, price, description, categoryId } = req.body;
    if (!name || !price || !description || !categoryId)
      return res
        .status(400)
        .json({ error: "name, price, and description are required" });

    const product = await Product.create({
      name,
      price,
      description,
      categoryId,
    });
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getProductById = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product) return res.status(404).json({ error: "Product not found" });
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product) return res.status(404).json({ error: "Product not found" });

    await product.update(req.body);
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product) return res.status(404).json({ error: "Product not found" });

    await product.destroy();
    res.json({ message: "Product deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
