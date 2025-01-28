import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();
const NEON = process.env.NEON;

export const sequelize = new Sequelize(NEON, {
  dialect: "postgres",
  logging: false,
});
