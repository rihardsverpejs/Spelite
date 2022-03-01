var ctx = document.getElementById("lauks").getContext("2d");

var x_ass = 1;
var y_ass = 1;
var davx_ass;
var davy_ass;
var davana_eksiste=0;
var x_ass_pieaugums=0;
var y_ass_pieaugums=0;
var rezultats = 0;
var zooms = 0;
var snata_eksiste = 1;
var davanas_bilde = new Image();
davanas_bilde.src = "davanu.png"
var snata = new Image();
snata.src = "snata1.png";
var dziesma= new Audio();
dziesma.src = "Rickroll.mp3"

function play(){
   dziesma.play()
}
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
   ctx.clearRect(0, 0, lauks.width, lauks.height)
   ctx.drawImage(snata, x_ass, y_ass);
   ctx.drawImage(davanas_bilde, davx_ass, davy_ass);
   x_ass = x_ass+x_ass_pieaugums;
   y_ass = y_ass + y_ass_pieaugums;
   if (x_ass <= 0){
      snata_eksiste=0;             //seit visur vajag sataisit ka nomirst un jauztaaisa ari kas notiek ja nomirst
   }
   if (x_ass >= lauks.width-snata.width){
      snata_eksiste=0;
   }
   if (y_ass <= 0){
      snata_eksiste=0;
   }
   if (y_ass >= lauks.height-snata.height){
      snata_eksiste=0;
   }
   if (Sagraba(x_ass, y_ass, snata, davx_ass, davy_ass, davanas_bilde)) {
      document.getElementById("kok").innerHTML= "Score: " + (rezultats+1)
      rezultats += 1;
      davana_eksiste=0;
      zooms += 1;   
      }
   if (snata_eksiste==0){
      gameover();
      play()
   }
   } //uzlikt ka pie noteikta sasniegta atruma uzvar speli
   //ja dabu 0 lai sak spamoties allert vai kaut kas tamlidzigs
function gameover(){ 
   ctx.clearRect(0, 0, lauks.width, lauks.height)
   ctx.fillStyle= "purple";
   ctx.font = " bold 50px Arial";
   ctx.fillText("GAME OVER", 330, 220);
   ctx.fillText("Press enter to try again", 220,280)
   if (snata_eksiste==0 && rezultats==0){alert("Tu stulbs vai kas?")}
   if (snata_eksiste==0 && rezultats>=10)[alert("Lūdzu aizej paošnāt zāli!")] 
}

setInterval(paradies, 25);
function iliketomoveit (wow) {
 if (wow.keyCode == 39 && x_ass < lauks.width-snata.width) {x_ass_pieaugums = zooms + 10; y_ass_pieaugums=0;snata.src = "snata1.png"} //japieliek klat lai grieztos
 if (wow.keyCode == 40 && y_ass < lauks.height-snata.height) {y_ass_pieaugums = zooms + 10; x_ass_pieaugums = 0;snata.src = "santaDown.png"} 
 if (wow.keyCode == 37 && x_ass > 0) {x_ass_pieaugums = -zooms -10; y_ass_pieaugums = 0;snata.src = "santaRight.png"}
 if (wow.keyCode == 38 && y_ass > 0) {y_ass_pieaugums = -zooms  -10; x_ass_pieaugums = 0;snata.src = "santaTop.png"}
 if (wow.keyCode == 13 && snata_eksiste==0){snata_eksiste=1; rezultats=0; x_ass=1; y_ass=1; x_ass_pieaugums=0;y_ass_pieaugums=0;snata.src ="snata1.png"; zooms = 0; document.getElementById("kok").innerHTML= "Score: 0"}
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