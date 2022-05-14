const { allSubcategories, newSubcategory } = require("./model");

module.exports = {
  GET: async (req, res) => {
    try {
      const subCategories = await allSubcategories();
      res.status(200).json(subCategories);
    } catch (err) {
      console.log(err.message);
    }
  },
  POST: async (req, res) => {
    try {
      const { subCategoryName } = req.body;
      const categoryId = req.body.categoryID;
      const newSubCategory = await newSubcategory(subCategoryName, categoryId);
      res.status(200).json({ message: "Yangi sub category yaratildi" });
    } catch (err) {
      console.log(err.message);
    }
  },
};
