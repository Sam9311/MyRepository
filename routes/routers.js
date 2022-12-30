var express=require("express");
var router=express.Router();
var fs=require("fs");
var router=express.Router();
var path=require("path");
router.get('/',(req,res)=>{
    res.sendFile(path.join(___dirname + '/index.html'));
})
router.get('/helpme',(req,res)=>{
    res.send("Please do your own work");
})
module.exports=router;
