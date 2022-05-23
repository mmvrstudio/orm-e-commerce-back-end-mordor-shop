const { Tag } = require('../models');
const tagData = [
  {
    tag_name: 'Mordor rock music',
  },
  {
    tag_name: 'Mordor classical music',
  },
  {
    tag_name: 'blue',
  },
  {
    tag_name: 'red',
  },
  {
    tag_name: 'black',
  },
  {
    tag_name: 'white',
  },
  {
    tag_name: 'gold',
  },
  {
    tag_name: 'Mordor Dance music',
  },
];

const seedTags = () => Tag.bulkCreate(tagData);
module.exports = seedTags;
