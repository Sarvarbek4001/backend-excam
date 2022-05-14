const { fetch, fetchAll } = require("../../lib/postgres");

const CATEGORIES = `
   SELECT 
     *
       FROM
         categories
`;
const NEW_CATEGORIES = `
  INSERT INTO categories(category_name) VALUES($1)
`;

const DELETE_CATEGORIES = `
  DELETE FROM categories WHERE category_id = $1
`;

const categories = () => fetchAll(CATEGORIES);
const newCategories = (category_name) =>
  fetchAll(NEW_CATEGORIES, category_name);
const deleteCategory = (category_id) =>
  fetchAll(DELETE_CATEGORIES, category_id);

module.exports = {
  categories,
  newCategories,
  deleteCategory,
};
