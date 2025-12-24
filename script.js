/* ❄️ Snow */
const canvas = document.getElementById("snow");
const ctx = canvas.getContext("2d");

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resize();
window.onresize = resize;

const flakes = Array.from({ length: 180 }, () => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  r: Math.random() * 3 + 1,
  s: Math.random() * 1 + 0.5
}));

function drawSnow() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "white";
  ctx.beginPath();
  flakes.forEach(f => {
    ctx.moveTo(f.x, f.y);
    ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
    f.y += f.s;
    if (f.y > canvas.height) f.y = 0;
  });
  ctx.fill();
  requestAnimationFrame(drawSnow);
}
drawSnow();

/* 🖱️ Light follow mouse */
const light = document.getElementById("light");
document.addEventListener("mousemove", e => {
  light.style.left = e.clientX + "px";
  light.style.top = e.clientY + "px";
});

/* 🎄 Tree */
const tree = document.getElementById("tree");
tree.onclick = () => tree.classList.toggle("tree-on");

/* 🎁 Gift */
document.getElementById("gift").onclick = () =>
  document.getElementById("message").classList.toggle("hidden");

/* ⏳ Countdown */
const cd = document.getElementById("countdown");
setInterval(() => {
  const now = new Date();
  const noel = new Date(now.getFullYear(), 11, 25);
  const diff = noel - now;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  cd.textContent = days >= 0
    ? `⏳ Còn ${days} ngày tới Noel`
    : "🎉 Merry Christmas!";
}, 1000);

/* 🎵 Music – Web Audio API */
/* 🎵 Music MP3 */
const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

music.volume = 0.3; // âm lượng nhẹ

musicBtn.onclick = () => {
  if (music.paused) {
    music.play();
    musicBtn.innerText = "🔇 Tắt nhạc";
  } else {
    music.pause();
    musicBtn.innerText = "🎵 Bật nhạc";
  }
};

