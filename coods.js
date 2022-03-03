var ctx = document.getElementById("lauks").getContext("2d"); //NOSAKA VISU CANVAS VIETU KUR VISS NOTIEK
var x_ass = 1;  //    x ass priekšs salaveča bildes
var y_ass = 1;  //    y ass priekšs salaveča bildes
var davx_ass;  //    x ass priekšs dāvanas bildes
var davy_ass;  //    y ass priekšs dāvanas bildes
var davana_eksiste=0;  //mainīgais  kas nosaka vai eksistē vai neeksistē dāvana
var x_ass_pieaugums=0;  //mainīgais kas noteiks x ass ātrumu
var y_ass_pieaugums=0;  //mainīgais kas noteiks y ass ātrumu
var rezultats = 0;  //mainīgais kas nosaka rezultātu
var zooms = 0;  //mainīgais kas nosaka par cik palielināsies ātrums pēc dāvanas savākšanas
var snata_eksiste = 1; //mainīgais, kas nosaka vai eksistē vai neeksistē salavecis
var davanas_bilde = new Image(); //mainīgais, kas nosaka dāvanas bildi
davanas_bilde.src = "davanu.png" //links uz dāvanas bildi
var snata = new Image(); //mainīgais, kas nosaka salaveča bildi
snata.src = "snata1.png"; //links uz salaveča bildi
var dziesma= new Audio(); //mainīgais, kas nosaka nomiršanas pie 0 audio
dziesma.src = "Rickroll.mp3"; //links uz šo audio
var drive= new Audio(); // mainīgais, kas nosaka nomiršanas pie 10vai< audio
drive.src = "drive.mp3" //links uz šo audio
var alerted = 0; //mainīgais, kas pasaka lai alert parādas tikai vienreiz
var pickup= new Audio(); //mainīgais, kas nosaka dāvanas savākšanas audio
pickup.src = "minecraft.mp3"; //links uz šo audio
var death = new Audio(); //mainīgais, kas nosaka nomiršanas audio
death.src = "death.mp3"; //links uz šo audio
var played = 0;



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
      document.getElementById("kok").innerHTML= "Score: " + (rezultats+1);
      pickup.pause();
      pickup.currentTime = 0;
      rezultats += 1;
      davana_eksiste=0;
      zooms += 1;   
      pickup.play(); 
      }
   if (snata_eksiste==0){
      gameover()
   }
   } //uzlikt ka pie noteikta sasniegta atruma uzvar speli
   //ja dabu 0 lai sak spamoties allert vai kaut kas tamlidzigs
function gameover(){ 
   
   ctx.clearRect(0, 0, lauks.width, lauks.height); 
  
   
   ctx.fillStyle= "purple";
   ctx.font = " bold 50px Arial";
   ctx.fillText("GAME OVER", 330, 220);
   ctx.fillText("Press enter to try again", 220,280)
   if (played ==0 ){death.play();
   played=1;
   }
   if (snata_eksiste==0 && rezultats==0 && alerted == 0){alert("Tu stulbs vai kas?"); dziesma.play(); alerted=1;}
   if (snata_eksiste==0 && rezultats>=10 && alerted == 0){alert("Lūdzu aizej paošnāt zāli!"), drive.play(), alerted=1}

}

setInterval(paradies, 25);
function iliketomoveit (wow) {
 if (wow.keyCode == 39 && x_ass < lauks.width-snata.width) {x_ass_pieaugums = zooms + 10; y_ass_pieaugums=0;snata.src = "snata1.png"} //japieliek klat lai grieztos
 if (wow.keyCode == 40 && y_ass < lauks.height-snata.height) {y_ass_pieaugums = zooms + 10; x_ass_pieaugums = 0;snata.src = "santaDown.png"} 
 if (wow.keyCode == 37 && x_ass > 0) {x_ass_pieaugums = -zooms -10; y_ass_pieaugums = 0;snata.src = "santaRight.png"}
 if (wow.keyCode == 38 && y_ass > 0) {y_ass_pieaugums = -zooms  -10; x_ass_pieaugums = 0;snata.src = "santaTop.png"}
 if (wow.keyCode == 13 && snata_eksiste==0){snata_eksiste=1;
   rezultats=0;
   x_ass=1; y_ass=1;
   x_ass_pieaugums=0;
   y_ass_pieaugums=0;
   snata.src ="snata1.png";
   alerted=0;
   zooms = 0;
   document.getElementById("kok").innerHTML= "Score: 0";
   dziesma.pause();
   dziesma.currentTime = 0;
   drive.pause();
   drive.currentTime = 0;
   played=0
}
 if (wow.keyCode == 13 && snata_eksiste==0){
   snata_eksiste=1; 
   rezultats=0; x_ass=1; 
   y_ass=1;
   x_ass_pieaugums=0;
   y_ass_pieaugums=0;
   snata.src ="snata1.png";
   alerted=0;
   zooms = 0;
   document.getElementById("kok").innerHTML= "Score: 0"
   }
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