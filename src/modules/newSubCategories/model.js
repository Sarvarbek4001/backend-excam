const { fetch, fetchAll } = require("../../lib/postgres");

const SUBCATEGORIES = `
  SELECT
    *
      FROM 
      sub_categories
`;

const NEW_SUBCATEGORIES = `
   INSERT INTO sub_categories(subcategory_name,category_id) VALUES($1,$2)
`;

const allSubcategories = () => fetchAll(SUBCATEGORIES);
const newSubcategory = (subcategoryName, categoryID) =>
  fetch(NEW_SUBCATEGORIES, subcategoryName, categoryID);

module.exports = {
  allSubcategories,
  newSubcategory,
};
