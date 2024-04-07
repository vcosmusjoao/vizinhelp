
const express = require('express');
const router = express.Router();

// Test Route
router.get('/test', (req, res) => {
  console.log("Porta "+process.env.NEXT_PUBLIC_API_PORT);
  res.json({
    message: "API connection established.",
    status: "success",
  })
  .status(200);
});

module.exports = router;