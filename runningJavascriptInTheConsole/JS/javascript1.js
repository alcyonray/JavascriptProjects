var c = document.getElementById("firstCanvas");
var ctx = c.getContext("2d");
ctx.moveTo(0, 0);
ctx.lineTo(200, 10);
ctx.stroke();

var d = document.getElementById("secondCanvas");
var dtx = d.getContext("2d");
const grd = dtx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "violet");
grd.addColorStop(1, "gold");

dtx.fillStyle = grd;
dtx.fillRect(20, 20, 150, 100);