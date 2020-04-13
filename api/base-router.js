const router = require('express').Router();

router.get('/', (req, res) => {
  res.send(`Welcome to Thankful's Api Service!`);
})

module.exports = router;