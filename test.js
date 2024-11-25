const canvas = document.querySelector("#game canvas");
function moveMouseRandomly(clientX, clientY) {
  function move() {
    const mouseMoveEvent = new MouseEvent('click', {
      clientX: clientX, clientY: clientY
    });
    canvas.dispatchEvent(mouseMoveEvent);
  }
  move();
}

const delay = millis => new Promise((resolve, reject) => {
  setTimeout(_ => resolve(), millis)
});

function getRandom(min, max) {
  return (Math.random() * (max - min)) + min;
}

let step = 20;
let decrease = 100;
for (let y = 0; y < Math.round(($canvasHeight - decrease) / step); y++) {
  let coorY = step * y + decrease;
  for (let x = 0; x < Math.round($canvasWidth / step); x++) {
    let coorX = step * x;
    moveMouseRandomly(coorX, coorY);
  }
  delay(40)
}
