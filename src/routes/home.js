const express=require('express');
const homeController=require('../controller/home.js');
const router=express.Router();
router.get('/',homeController.Get);
router.put('/:id',homeController.Update);

module.exports=router;