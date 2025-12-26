const express = require('express');
const router = express.Router();
const FormController = require('../controllers/formController');

const controller = new FormController();

router.post('/submit', controller.submitForm.bind(controller));
router.get('/data', controller.getFormData.bind(controller));

module.exports = router;