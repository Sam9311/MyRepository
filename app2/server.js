var express= require("express");
const app=express();
var path =require("path");

app.use(express.static(path.join(__dirname,'/public')));
app.get('/',(req,res)=>{
    if(err){
        console.log(err)
    }
    res.sendFile(path.join(__dirname,'/index.html'))
});

app.listen(4000);
console.log("app is llistening on 3000")