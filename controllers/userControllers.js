import { User } from "../models/index.js"; // Пользуемся экспортом из index.js
import bcrypt from "bcryptjs"; // Исправлено

const isValidEmail = (email) =>
  /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email);

export const getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Internal server error", message: error.message });
  }
};

export const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password)
      return res
        .status(400)
        .json({ error: "Name, email and password are required" });

    if (!isValidEmail(email))
      return res.status(400).json({ error: "Invalid email format" });

    const found = await User.findOne({ where: { email } });
    if (found) return res.status(400).json({ error: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ ...req.body, password: hashedPassword });
    res.json(user);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Internal server error", message: error.message });
  }
};

export const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id);
    if (!user) return res.status(404).json({ error: "User not found" });
    res.json(user);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Internal server error", message: error.message });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    const { id } = req.params;

    if (!firstName || !lastName || !email)
      return res
        .status(400)
        .json({ error: "First name, last name, and email are required" });

    if (!isValidEmail(email))
      return res.status(400).json({ error: "Invalid email format" });

    const user = await User.findByPk(id);
    if (!user) return res.status(404).json({ error: "User not found" });

    if (password) {
      const hashedPassword = await bcrypt.hash(password, 10);
      await user.update({ ...req.body, password: hashedPassword });
    } else {
      await user.update(req.body);
    }
    res.json(user);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Internal server error", message: error.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id);
    if (!user) return res.status(404).json({ error: "User not found" });

    await user.update({ isDeleted: true });
    res.json({ message: "User soft deleted" });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Internal server error", message: error.message });
  }
};
