const { subCategory, subCategories, deleteSubcategories } = require("./model");

module.exports = {
  GET: async (req, res) => {
    try {
      const subCategoryId = req.params.id;
      const subCategoryOne = await subCategory(subCategoryId);
      res.status(200).json(subCategoryOne);
    } catch (err) {
      console.log(err.message);
    }
  },
  POST: async (req, res) => {
    try {
      const categoryId = req.body.category_id;
      const sub_categories = await subCategories(categoryId);
      res.status(200).json(sub_categories);
    } catch (err) {
      console.log(err.message);
    }
  },
  DELETE: async (req, res) => {
    try {
      const subCategoryId = req.body.subcategory_id;
      console.log(subCategoryId);
      const deleteSubCategory = await deleteSubcategories(subCategoryId);
      res.status(200).json({ message: "Deleted sub category" });
    } catch (err) {
      console.log(err.message);
    }
  },
};
