// Product
// id: Integer
// name: String
// description: String
// price: Float
// categoryId: Integer

import { sequelize } from "../db/index.js";
import { DataTypes } from "sequelize";

const Product = sequelize.define("Product", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  categoryId: {
    type: DataTypes.INTEGER,
    references: { model: "Categories", key: "id" },
  },
});

export default Product;
