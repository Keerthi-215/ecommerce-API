import { sequelize } from "../db/index.js";
import User from "./User.js";
import Post from "./Post.js";

User.hasMany(Post, {
  foreignKey: {
    allowNull: false,
    name: "userId",
  },
  onDelete: "CASCADE",
});

Post.belongsTo(User, {
  foreignKey: { allowNull: false, name: "userId" },
  onDelete: "CASCADE",
});

await sequelize.sync();

export { User, Post };
