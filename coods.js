var ctx = document.getElementById("lauks").getContext("2d");

var x_ass = 0;
var y_ass = 0;
var x_ass_pieaugums=0;
var y_ass_pieaugums=0;
var davanas_bilde = new Image();
var BugImg = new Image();
BugImg.src = "https://s2js.com/img/etc/ladybug.png";

function paradies () {
   ctx.clearRect(0, 0, lauks.width, lauks.height);
   ctx.drawImage(BugImg, x_ass, y_ass);
   x_ass = x_ass+x_ass_pieaugums;
   y_ass = y_ass + y_ass_pieaugums;
   if (x_ass <= 0){
      x_ass=0
   }
   if (x_ass >= lauks.width-BugImg.width){
      x_ass=lauks.width-BugImg.width
   }
   if (y_ass <= 0){
      y_ass=0
   }
   if (y_ass >= lauks.height-BugImg.height){
      y_ass= lauks.height-BugImg.height
   }
   } 

setInterval(paradies, 25);
function iliketomoveit (wow) {
 if (wow.keyCode == 39 && x_ass < lauks.width-BugImg.width) {x_ass_pieaugums = 2; y_ass_pieaugums=0} 
 if (wow.keyCode == 40 && y_ass < lauks.height-BugImg.height) {y_ass_pieaugums =  2; x_ass_pieaugums = 0} 
 if (wow.keyCode == 37 && x_ass > 0) {x_ass_pieaugums =  -2; y_ass_pieaugums = 0}
 if (wow.keyCode == 38 && y_ass > 0) {y_ass_pieaugums =  -2; x_ass_pieaugums = 0}
 }
 addEventListener("keydown", iliketomoveit);