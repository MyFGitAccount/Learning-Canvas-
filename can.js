const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const width = canvas.width;
const height = canvas.height;
const cellSize = 10;
const color = ["red", "green", "blue", "yellow", "purple"];
const btnCan = document.getElementById("can");
const btnFill = document.getElementById("fill");
const btnMouse = document.getElementById("mouse");
const btnRefresh = document.getElementById("refresh");

let canvasEXist=false;
btnCan.addEventListener("click", createCanvas);
btnFill()
function createCanvas() {
  let canvas = document.createElement("canvas");
  canvas.width = 500;
  canvas.height = 500;
  const cellSize = 10;
  const ctx = canvas.getContext("2d");
  canvasExist=true;
  document.body.appendChild(canvas);

  for (let row = 0; row <= canvas.height; row += cellSize) {
    ctx.beginPath();
    ctx.moveTo(0, row);
    ctx.lineTo(canvas.width, row);
    ctx.strokeStyle = "black";
    ctx.stroke();
    ctx.closePath();
  }

  for (let col = 0; col <= canvas.width; col += cellSize) {
    ctx.beginPath();
    ctx.moveTo(col, 0);
    ctx.lineTo(col, canvas.height);
    ctx.strokeStyle = "black";
    ctx.stroke();
    ctx.closePath();
  }
}

function fillCanvas() {
  const cols = Math.floor(width / cellSize);
  const rows = Math.floor(height / cellSize);

  const randCol = Math.floor(Math.random() * cols);
  const randRow = Math.floor(Math.random() * rows);
  const colorIndex = Math.floor(Math.random() * color.length);

  const randX = randCol * cellSize;
  const randY = randRow * cellSize;

  console.log(`X:${randX} Y:${randY}`);

  ctx.beginPath();
  ctx.rect(randX, randY, cellSize, cellSize);
  ctx.fillStyle = color[colorIndex];
  ctx.fill();
  ctx.closePath();
}


function clickFill() {
  if (canvasExist) {
    canvas.addEventListener('click', function(event) {
      const rect = canvas.getBoundingClientRect();
      const mouseX = event.clientX - rect.left;
      const mouseY = event.clientY - rect.top;

      if (mouseX >= 0 && mouseX <= width && mouseY >= 0 && mouseY <= height) {
        const mouseCol = Math.floor(mouseX / cellSize);
        const mouseRow = Math.floor(mouseY / cellSize);
        const X = mouseCol * cellSize;
        const Y = mouseRow * cellSize;

        const colorIndex = Math.floor(Math.random() * color.length);
        ctx.beginPath();
        ctx.rect(X, Y, cellSize, cellSize);
        ctx.fillStyle = color[colorIndex];
        ctx.fill();
        ctx.closePath();

        console.log(`Clicked cell: (${mouseCol}, ${mouseRow}) → Filled at X:${X}, Y:${Y}`);
      }
    });
  }
}

document.addEventListener('mousemove', function(event) {
  const rect = canvas.getBoundingClientRect();
  const mouseX = event.clientX - rect.left;
  const mouseY = event.clientY - rect.top;

  if (mouseX >= 0 && mouseX <= width && mouseY >= 0 && mouseY <= height) {
    const mouseCol = Math.floor(mouseX / cellSize);
    const mouseRow = Math.floor(mouseY / cellSize);
    const X = mouseCol * cellSize;
    const Y = mouseRow * cellSize;

    const colorIndex = Math.floor(Math.random() * color.length);
    ctx.beginPath();
    ctx.rect(X, Y, cellSize, cellSize);
    ctx.fillStyle = color[colorIndex];
    ctx.fill();
    ctx.closePath();

    console.log(`Mouse X: ${mouseX}, Mouse Y: ${mouseY} → Cell: (${mouseCol}, ${mouseRow})`);
  }
});

