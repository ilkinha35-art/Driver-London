// game.js
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let car = { x: 180, y: 500, width: 40, height: 80, speed: 5 };

function drawCar() {
  ctx.fillStyle = "red";
  ctx.fillRect(car.x, car.y, car.width, car.height);
}

function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawCar();
}

document.addEventListener("keydown", e => {
  if (e.key === "ArrowLeft" && car.x > 0) car.x -= car.speed;
  if (e.key === "ArrowRight" && car.x < canvas.width - car.width) car.x += car.speed;
});

setInterval(update, 30);
