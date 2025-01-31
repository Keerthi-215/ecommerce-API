import Joi from "joi";

// creating
export const createProductSchema = Joi.object({
  name: Joi.string().min(2).max(100).required().messages({
    "string.base": "Product name must be a string",
    "string.empty": "Product name cannot be empty",
    "string.min": "Product name must have at least 2 characters",
    "string.max": "Product name cannot exceed 100 characters",
    "any.required": "Product name is required",
  }),
  description: Joi.string().min(5).max(500).required().messages({
    "string.base": "Description must be a string",
    "string.empty": "Description cannot be empty",
    "string.min": "Description must have at least 5 characters",
    "string.max": "Description cannot exceed 500 characters",
    "any.required": "Description is required",
  }),
  price: Joi.number().positive().required().messages({
    "number.base": "Price must be a number",
    "number.positive": "Price must be a positive number",
    "any.required": "Price is required",
  }),
  categoryId: Joi.number().integer().positive().required().messages({
    "number.base": "Category ID must be a number",
    "number.integer": "Category ID must be an integer",
    "number.positive": "Category ID must be a positive number",
    "any.required": "Category ID is required",
  }),
});

// updating
export const updateProductSchema = Joi.object({
  name: Joi.string().min(2).max(100).optional().messages({
    "string.base": "Product name must be a string",
    "string.empty": "Product name cannot be empty",
    "string.min": "Product name must have at least 2 characters",
    "string.max": "Product name cannot exceed 100 characters",
  }),
  description: Joi.string().min(5).max(500).optional().messages({
    "string.base": "Description must be a string",
    "string.empty": "Description cannot be empty",
    "string.min": "Description must have at least 5 characters",
    "string.max": "Description cannot exceed 500 characters",
  }),
  price: Joi.number().positive().optional().messages({
    "number.base": "Price must be a number",
    "number.positive": "Price must be a positive number",
  }),
  categoryId: Joi.number().integer().positive().optional().messages({
    "number.base": "Category ID must be a number",
    "number.integer": "Category ID must be an integer",
    "number.positive": "Category ID must be a positive number",
  }),
});
