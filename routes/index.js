const path = require('path');
const router = require('express').Router();

router
  .get('/*', (req, res, next) => {
    const routePath = path.join(__dirname + '..', '..', '..', 'qt-seedReact/dist/' + 'index.html');
    console.log (routePath);
    res.sendFile(routePath);
    console.log (routePath);
  })

module.exports = router;