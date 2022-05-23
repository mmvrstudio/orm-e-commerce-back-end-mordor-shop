const router = require('express').Router();
const apiRoutes = require('./api');
router.use('/api', apiRoutes);
router.use((req, res) => {
  res.send("<h1>Ops! We made it to the wrong Route.</h1>")
});

module.exports = router;