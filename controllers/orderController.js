import { User, Order, Product } from "../models/index.js";

// Get all orders
export const getOrders = async (req, res) => {
  try {
    const orders = await Order.findAll();
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Create an order
export const createOrder = async (req, res) => {
  try {
    const user = await User.findByPk(req.body.userId);
    const userId = req.body.userId;
    if (!user) return res.status(404).json({ error: "User not found" });

    const products = req.body.products;

    // Calculate the total
    const productPrices = await Promise.all(
      products.map(async (p) => {
        const product = await Product.findByPk(p.productId);
        if (!product) {
          return res.status(404).json({ error: "Product not found" });
        }
        const price = parseFloat(product.price);
        const quantity = parseInt(p.quantity, 10);
        return price * quantity;
      })
    );

    const total = productPrices.reduce((acc, curr) => acc + curr, 0);

    const order = await Order.create({ userId, products, total });
    res.json(order);
  } catch (error) {
    console.error("Error creating order:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Get order by ID
export const getOrderById = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;
    const order = await Order.findByPk(id);
    if (!order) return res.status(404).json({ error: "Order not found" });
    res.json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update an order
export const updateOrder = async (req, res) => {
  try {
    const orderId = req.params.id;
    const { userId, products } = req.body;

    // Fetch the existing order
    const order = await Order.findByPk(orderId);
    if (!order) {
      return res.status(404).json({ error: "Order not found" });
    }

    // Validate the user
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Calculate the new total
    const productPrices = await Promise.all(
      products.map(async (p) => {
        const product = await Product.findByPk(p.productId);
        if (!product) {
          return res.status(404).json({ error: "Product not found" });
        }
        const price = parseFloat(product.price);
        const quantity = parseInt(p.quantity, 10);
        return price * quantity;
      })
    );

    const total = productPrices.reduce((acc, curr) => acc + curr, 0);

    // Update the order
    order.products = products;
    order.total = total;
    await order.save();

    res.json(order);
  } catch (error) {
    console.error("Error updating order:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Delete an order
export const deleteOrder = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;
    const order = await Order.findByPk(id);
    if (!order) return res.status(404).json({ error: "Order not found" });
    await order.destroy();
    res.json({ message: "Order deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
