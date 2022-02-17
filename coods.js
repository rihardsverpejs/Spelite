var ctx = lauks.getContext("2d");
var bug_x = 0;
var bug_y = 0;
var BugImg = new Image();
BugImg.src = "https://www.pngkey.com/png/full/32-324021_santa-hat-mario-toad-pixel-art-mario-mushroom.png";

function paradies() {
   ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
   ctx.drawImage(BugImg, bug_x, bug_y);
   }

setInterval(paradies, 25);