import { sequelize } from "../db/index.js";
import { DataTypes } from "sequelize";

const Category = sequelize.define("Category", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});

export default Category;
