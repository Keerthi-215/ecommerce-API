// Order
// id: Integer
// userId: Integer
// products: Array of objects containing productId (Integer) and quantity (Integer)
// total: Float

import { sequelize } from "../db/index.js";
import { DataTypes } from "sequelize";

const Order = sequelize.define("Order", {
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      isInt: true,
    },
    references: { model: "Users", key: "id" },
  },
  products: {
    type: DataTypes.JSON, // Use JSON type to store an array of objects
    allowNull: false,
  },
  total: {
    type: DataTypes.FLOAT,
    allowNull: false,
    validate: {
      isFloat: true,
    },
  },
});

export default Order;
