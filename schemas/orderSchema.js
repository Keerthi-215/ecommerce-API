import Joi from "joi";

export const createOrderSchema = Joi.object({
  userId: Joi.number().integer().required().messages({
    "number.base": "User ID must be a number",
    "number.integer": "User ID must be an integer",
    "any.required": "User ID is required",
  }),
  products: Joi.array()
    .items(
      Joi.object({
        productId: Joi.number().integer().required().messages({
          "number.base": "Product ID must be a number",
          "number.integer": "Product ID must be an integer",
          "any.required": "Product ID is required",
        }),
        quantity: Joi.number().integer().min(1).required().messages({
          "number.base": "Quantity must be a number",
          "number.integer": "Quantity must be an integer",
          "number.min": "Quantity must be at least 1",
          "any.required": "Quantity is required",
        }),
      })
    )
    .min(1)
    .required()
    .messages({
      "array.base": "Products must be an array",
      "array.min": "At least one product is required",
      "any.required": "Products are required",
    }),
});

export const updateOrderSchema = Joi.object({
  userId: Joi.number().integer().optional().messages({
    "number.base": "User ID must be a number",
    "number.integer": "User ID must be an integer",
  }),
  products: Joi.array()
    .items(
      Joi.object({
        productId: Joi.number().integer().optional().messages({
          "number.base": "Product ID must be a number",
          "number.integer": "Product ID must be an integer",
        }),
        quantity: Joi.number().integer().min(1).optional().messages({
          "number.base": "Quantity must be a number",
          "number.integer": "Quantity must be an integer",
          "number.min": "Quantity must be at least 1",
        }),
      })
    )
    .min(1)
    .optional()
    .messages({
      "array.base": "Products must be an array",
      "array.min": "At least one product is required",
    }),
});
