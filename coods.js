var ctx = document.getElementById("lauks").getContext("2d");

var bug_x = 0;
var bug_y = 0;
var BugImg = new Image();
BugImg.src = "https://s2js.com/img/etc/ladybug.png";

function paradies () {
   ctx.clearRect(0, 0, lauks.width, lauks.height);
   ctx.drawImage(BugImg, bug_x, bug_y);
   }

setInterval(paradies, 25);
function iliketomoveit (wow) {
    if (wow.keyCode == 39) {bug_x = bug_x + 20;} 
    if (wow.keyCode == 40) {bug_y = bug_y + 20;} 
    if (wow.keyCode == 37) {bug_x = bug_x - 20;}
    if (wow.keyCode == 38) {bug_y = bug_y - 20;}
    }
    addEventListener("keydown", iliketomoveit);