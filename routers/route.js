const express = require('express')

const { addClient } = require('../controllers/clientQuery');
const router = express.Router();


// router.route('./admin').post(controller())

router
.route('/admin')
.post(addClient)


module.exports = router;




