const { Category } = require('../models');
const categoryData = [
  {
    category_name: 'Mordor Shirts',
  },
  {
    category_name: 'Mordor Shorts',
  },
  {
    category_name: 'Mordor Music',
  },
  {
    category_name: 'Mordor Hats',
  },
  {
    category_name: 'Mordor Shoes',
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);
module.exports = seedCategories;
