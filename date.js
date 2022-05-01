
module.exports  ={

getDate: function (){
var date = new Date();
var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
var today = date.toLocaleDateString("en-US", options);
return today;
},

getDay : function (){
var date = new Date();
var options = { weekday: 'long' }
var today = date.toLocaleDateString("en-US", options);
return today;
}
}
