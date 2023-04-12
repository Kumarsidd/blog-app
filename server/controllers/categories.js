const Category = require("../models/category.js");

exports.postCategory = async (req, res) => {
  try {
    const category = new Category(req.body);
    await category.save();
    res.status(201).json({ message: "category saved" });
  } catch (error) {
    console.log("failed to save category");
  }
};

exports.getCategory = async (req, res) => {
  try {
    const category = await Category.find();
    res.status(201).json(category);
  } catch (error) {
    console.log("failed to save category");
  }
};
