const { fetch, fetchAll } = require("../../lib/postgres");

const SUB_CATEGORY = `
   SELECT 
    *
   FROM
   sub_categories
   WHERE
    subcategory_id=$1
`;

const SUB_CATEGORIES = `
   SELECT 
    *
   FROM
   sub_categories
   WHERE
   category_id=$1
`;

const DELETE_SUBCATEGORY = `
   DELETE FROM sub_categories WHERE subcategory_id =$1
`;
const subCategory = (subcategoryID) => fetch(SUB_CATEGORY, subcategoryID);
const subCategories = (categoryID) => fetchAll(SUB_CATEGORIES, categoryID);
const deleteSubcategories = (subcategoryID) =>
  fetch(DELETE_SUBCATEGORY, subcategoryID);

module.exports = {
  subCategory,
  subCategories,
  deleteSubcategories,
};
