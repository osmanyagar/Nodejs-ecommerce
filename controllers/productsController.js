const Product = require("../models/product");

exports.CreateProducts= async (req, res) => {
  try {
    const category = await Product.create(req.body);
    res.status(201).json({
      status: "success",
      category,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error,
    });
  }
};
exports.getProducts= async (req, res) => {
  try {
    const category = await Product.find();
    res.status(201).json({
      status: "success",
      category,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error,
    });
  }
};

