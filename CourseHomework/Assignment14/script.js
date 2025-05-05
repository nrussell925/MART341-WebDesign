const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

let x = 50;
let y = 50;
let dx = 2;
let dy = 2;
let radius = 20;
let animationId;

function drawBall() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fillStyle = '#0077cc';
  ctx.fill();
  ctx.closePath();

  x += dx;
  y += dy;

  if (x + radius > canvas.width || x - radius < 0) dx = -dx;
  if (y + radius > canvas.height || y - radius < 0) dy = -dy;

  animationId = requestAnimationFrame(drawBall);
}

document.getElementById('startBtn').addEventListener('click', () => {
  cancelAnimationFrame(animationId);
  drawBall();
});
