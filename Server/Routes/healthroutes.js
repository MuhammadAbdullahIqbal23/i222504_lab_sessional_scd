const express = require('express');
const router = express.Router();

router.get('/health', async (req, res) => {
  try {
    // Add any specific health checks here
    const healthcheck = {
      uptime: process.uptime(),
      message: 'OK',
      timestamp: Date.now()
    };
    res.send(healthcheck);
  } catch (error) {
    res.status(503).send({
      uptime: process.uptime(),
      message: error.message,
      timestamp: Date.now()
    });
  }
});

module.exports = router;