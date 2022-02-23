var ctx = document.getElementById("lauks").getContext("2d");

var x_ass = 0;
var y_ass = 0;
var davx_ass;
var davy_ass;
var davana_eksiste=0;
var x_ass_pieaugums=0;
var y_ass_pieaugums=0;
var rezultats = 0;
var davanas_bilde = new Image();
davanas_bilde.src = "davanu.png"
var snata = new Image();
snata.src = "snata.png";

function Sagraba(x_ass, y_ass, snata, davx_ass, davy_ass, davanas_bilde) {
   if (x_ass >= davx_ass+davanas_bilde.width || x_ass+snata.width <= davx_ass) return false;
   if (y_ass >= davy_ass+davanas_bilde.height || y_ass+snata.height <= davy_ass) return false;
   return true;
   }
function paradies () {
   if (davana_eksiste==0){
      davana_eksiste = 1;
      davana_maini_vietu();
   }
   ctx.clearRect(0, 0, lauks.width, lauks.height);
   ctx.fillStyle= "purple";
   ctx.font = "20px Arial";
   ctx.fillText(`Rezultāts: ${rezultats}`, 0, 20);
   ctx.drawImage(snata, x_ass, y_ass);
   ctx.drawImage(davanas_bilde, davx_ass, davy_ass);
   x_ass = x_ass+x_ass_pieaugums;
   y_ass = y_ass + y_ass_pieaugums;
   if (x_ass <= 0){
      x_ass=0
   }
   if (x_ass >= lauks.width-snata.width){
      x_ass=lauks.width-snata.width
   }
   if (y_ass <= 0){
      y_ass=0
   }
   if (y_ass >= lauks.height-snata.height){
      y_ass= lauks.height-snata.height
   }
   if (Sagraba(x_ass, y_ass, snata, davx_ass, davy_ass, davanas_bilde)) {
      document.getElementById("kok").innerHTML= "Rezultāts:" + rezultats;
      rezultats= + 1;
      davx_ass= -davanas_bilde.width;
      }
   } 

setInterval(paradies, 25);
function iliketomoveit (wow) {
 if (wow.keyCode == 39 && x_ass < lauks.width-snata.width) {x_ass_pieaugums = 20; y_ass_pieaugums=0} 
 if (wow.keyCode == 40 && y_ass < lauks.height-snata.height) {y_ass_pieaugums =  20; x_ass_pieaugums = 0} 
 if (wow.keyCode == 37 && x_ass > 0) {x_ass_pieaugums =  -20; y_ass_pieaugums = 0}
 if (wow.keyCode == 38 && y_ass > 0) {y_ass_pieaugums =  -20; x_ass_pieaugums = 0}
 }
 addEventListener("keydown", iliketomoveit);

 function lokacija(up_to) { 
   n = Math.floor(Math.random() * up_to) + 1;  
    return(n);  
 }

 function davana_maini_vietu () {
   
   ctx.clearRect(0, 0, lauks.width, lauks.height);
   davx_ass = lokacija(lauks.width - davanas_bilde.width);
   davy_ass = lokacija(lauks.height - davanas_bilde.height);
   } 
   
