import { sequelize } from "../db/index.js";
import User from "./User.js";
import Product from "./Product.js";

await sequelize.authenticate();
console.log("Connection has been established successfully.");
await sequelize.sync();

export { User, Product };
