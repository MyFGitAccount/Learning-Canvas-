    let canvas;
    let ctx;
    let canvasExist = false;
    const cellSize = 20;
    const color = ["LavenderBlush","AliceBlue","AntiqueWhite","Aquamarine","BlueViolet","Coral","DarkOliveGreen","DarkSalmon","DeepPink","FireBrick","Gold","GoldenRod","HoneyDew","HotPink","IndianRed","OrangeRed","LightSalmon","LightCoral","LemonChiffon","Lavender"];
    //const colors = ["red", "green", "blue", "yellow", "purple"];

    const btnCan = document.getElementById("can");
    const btnFill = document.getElementById("fill");
    const btnRefresh = document.getElementById("refresh");

    btnRefresh.addEventListener("click", () => {
      location.reload();
    });

    btnCan.addEventListener("click", () => {
      createCanvas();
      ClickFill();
      MouseFill();
    });

    btnFill.addEventListener("click", fillRandomCell);

    function createCanvas() {
      canvas = document.createElement("canvas");
      canvas.width = 500;
      canvas.height = 500;
      ctx = canvas.getContext("2d");
      canvasExist = true;
      document.body.appendChild(canvas);

      // Draw grid
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

    function fillRandomCell() {
      if (!canvasExist) return;

      const cols = Math.floor(canvas.width / cellSize);
      const rows = Math.floor(canvas.height / cellSize);

      const randCol = Math.floor(Math.random() * cols);
      const randRow = Math.floor(Math.random() * rows);
      const colorIndex = Math.floor(Math.random() * colors.length);

      const randX = randCol * cellSize;
      const randY = randRow * cellSize;

      ctx.beginPath();
      ctx.rect(randX, randY, cellSize, cellSize);
      ctx.fillStyle = colors[colorIndex];
      ctx.fill();
      ctx.closePath();

      console.log(`Filled random cell at X:${randX}, Y:${randY}`);
    }

    function ClickFill() {
      canvas.addEventListener("click", function(event) {
        const rect = canvas.getBoundingClientRect();
        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;

        const mouseCol = Math.floor(mouseX / cellSize);
        const mouseRow = Math.floor(mouseY / cellSize);
        const X = mouseCol * cellSize;
        const Y = mouseRow * cellSize;

        const colorIndex = Math.floor(Math.random() * colors.length);
        ctx.beginPath();
        ctx.rect(X, Y, cellSize, cellSize);
        ctx.fillStyle = colors[colorIndex];
        ctx.fill();
        ctx.closePath();

        console.log(`Clicked cell: (${mouseCol}, ${mouseRow}) → Filled at X:${X}, Y:${Y}`);
      });
    }

    function MouseFill() {
      canvas.addEventListener("mousemove", function(event) {
        const rect = canvas.getBoundingClientRect();
        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;

        const mouseCol = Math.floor(mouseX / cellSize);
        const mouseRow = Math.floor(mouseY / cellSize);
        const X = mouseCol * cellSize;
        const Y = mouseRow * cellSize;

        const colorIndex = Math.floor(Math.random() * colors.length);
        ctx.beginPath();
        ctx.rect(X, Y, cellSize, cellSize);
        ctx.fillStyle = colors[colorIndex];
        ctx.fill();
        ctx.closePath();

        console.log(`Mouse moved over cell: (${mouseCol}, ${mouseRow})`);
      });
    }
