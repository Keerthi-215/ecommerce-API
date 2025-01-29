import { sequelize } from "../db/index.js";
import User from "./User.js";
import Product from "./Product.js";
import Category from "./Category.js";
import Order from "./Order.js";

User.hasMany(Order, {
  foreignKey: {
    allowNull: false,
    name: "userId",
  },
  onDelete: "CASCADE",
});

Order.belongsTo(User, {
  foreignKey: { allowNull: false, name: "userId" },
  onDelete: "CASCADE",
});

Category.hasMany(Product, {
  foreignKey: {
    allowNull: false,
    name: "categoryId",
  },
  onDelete: "CASCADE",
});

Product.belongsTo(Category, {
  foreignKey: { allowNull: false, name: "categoryId" },
  onDelete: "CASCADE",
});

await sequelize.sync();

export { User, Product, Category, Order };
