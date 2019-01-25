const express = require('express');
const router = express.Router();
const taskOperations = require('../resource/taskOperations');


router.post('/createData',(req,res)=>{
    taskOperations.createData(req,res);
})
router.get('/getOneSeriesData',function(req,res){
    taskOperations.getOneSeriesData(req,res);
})

router.get('/getAllSeriesData',function(req,res){
    taskOperations.getAllSeriesData(req,res);
})

router.delete('/deleteSeriesData/:title',function(req,res){
    taskOperations.deleteSeriesData(req,res);
})
module.exports = router;