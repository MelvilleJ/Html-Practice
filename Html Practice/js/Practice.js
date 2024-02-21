const myCanvas= document.getElementById("maincanvas");
const ctx= myCanvas.getContext("2d");


function draw1() {
    ctx.font = "30px Arial";
    ctx.strokeText("Hello...", 10, 50);
  }
  function draw2() {
    ctx.font = "30px Arial";
    ctx.strokeText("Hello..", 10, 50);
  }
for (let i = 0; i < 100; i++){
  draw1();
  ctx.clearRect(0,0,1200,1200);
  draw2();
  ctx.clearRect(0,0,1200,1200);
}
  
  