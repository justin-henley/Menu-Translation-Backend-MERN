const express = require('express');
const router = express.Router();

router.get('^/$|/index(.html)?', (req, res) => {
  //res.sendFile('../views/index.html');
  // TODO temporary
  res.send('Welcome!');
});

module.exports = router;
