const express = require('express');
const router =express.Router();
const prodController=require('../controllers/productcontroller');

router.get('/',prodController.getAllProduct);
router.get('/add',prodController.getAddProduct);
router.post('/add',prodController.postAddProduct);
router.get('/edit/:id',prodController.getEditProduct);
router.post('/update/:id',prodController.postUpdateProduct);
router.get('/delete/:id',prodController.deleteProduct);


module.exports= router;
