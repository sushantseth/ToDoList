const express  = require ("express");
const app = express();
var bodyParser = require('body-parser')
const date= require(__dirname+'/date.js')


app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static( 'public'));
app.set("view-engine", "ejs");



var listname = [];
var worklist = [] ; //red, blue


app.get("/", function(req, res){

   var today = date.getDate();
  res.render("list.ejs", {daytitle:today , newlistitems:listname} );
});


app.get("/work", function(req, res){
  res.render("list.ejs", {daytitle:"Work list", newlistitems:worklist} );
});


app.post("/", function(req, res){
if(req.body.submit == "Work"){
  worklist.push(req.body.list);
  res.redirect("/work");
}else
  listname.push(req.body.list);
  res.redirect("/");

})


app.listen(8080, function(){
  console.log("app working");
});
