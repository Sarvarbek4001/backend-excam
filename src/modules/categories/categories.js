const { categories, newCategories, deleteCategory } = require("./model.js");

module.exports = {
  GET: async (req, res) => {
    try {
      const allCategories = await categories();
      res.status(200).json(allCategories);
    } catch (err) {
      console.log(err.message);
    }
  },
  POST: async (req, res) => {
    try {
      const new_categories = await newCategories(req.body.categoryName);
      res.status(200).json({ message: "Yaratildi" });
    } catch (err) {
      console.log(err.message);
    }
  },
  DELETE: async (req, res) => {
    try {
      const delCategory = await deleteCategory(req.body.categoryID);
      res.status(200).json({ message: "Deleted category" });
    } catch (err) {
      console.log(err.message);
    }
  },
};
