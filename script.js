/* ROLE TYPING */
const roles = ["Coder", "Gamer", "Developer", "Hacker"];
let r = 0, c = 0;
const roleEl = document.getElementById("role");

setInterval(() => {
  roleEl.textContent = roles[r].slice(0, c++);
  if (c > roles[r].length) {
    c = 0;
    r = (r + 1) % roles.length;
  }
}, 150);

/* TERMINAL TEXT */
const terminal = document.getElementById("terminal");
const lines = [
  "Loading modules...",
  "Initializing UI...",
  "Hacker mode enabled."
];
let i = 0;

setInterval(() => {
  if (i < lines.length) {
    terminal.innerHTML += "<br>" + lines[i++];
  }
}, 900);

/* MATRIX EFFECT */
const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

function resize() {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
}
resize();
addEventListener("resize", resize);

const chars = "01ZXCVBNMASDF";
const font = 14;
const columns = canvas.width / font;
const drops = Array.from({ length: columns }).fill(1);

setInterval(() => {
  ctx.fillStyle = "rgba(0,0,0,0.05)";
  ctx.fillRect(0,0,canvas.width,canvas.height);

  ctx.fillStyle = "#39ff14";
  ctx.font = font + "px monospace";

  drops.forEach((y, i) => {
    const text = chars[Math.floor(Math.random() * chars.length)];
    ctx.fillText(text, i * font, y * font);
    drops[i] = y * font > canvas.height && Math.random() > 0.975 ? 0 : y + 1;
  });
}, 40);
