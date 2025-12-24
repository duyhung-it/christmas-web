/* ❄️ Snow */
const canvas = document.getElementById("snow");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const snowflakes = Array.from({ length: 150 }, () => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  r: Math.random() * 4 + 1,
  d: Math.random() * 1
}));

function snow() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "white";
  ctx.beginPath();
  snowflakes.forEach(f => {
    ctx.moveTo(f.x, f.y);
    ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
  });
  ctx.fill();

  snowflakes.forEach(f => {
    f.y += f.d;
    if (f.y > canvas.height) {
      f.y = 0;
      f.x = Math.random() * canvas.width;
    }
  });
}
setInterval(snow, 30);

/* 🎵 Music – Web Audio API */
let audioCtx;
let oscillator;
let playing = false;

function toggleMusic() {
  if (!playing) {
    audioCtx = new AudioContext();
    oscillator = audioCtx.createOscillator();
    oscillator.type = "triangle";
    oscillator.frequency.value = 523; // Do cao
    oscillator.connect(audioCtx.destination);
    oscillator.start();
  } else {
    oscillator.stop();
    audioCtx.close();
  }
  playing = !playing;
}

/* ⏳ Countdown */
function updateCountdown() {
  const christmas = new Date(new Date().getFullYear(), 11, 25);
  const now = new Date();
  const diff = christmas - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  document.getElementById("countdown").innerText =
    days >= 0 ? `⏳ Còn ${days} ngày tới Noel` : "🎉 Merry Christmas!";
}
setInterval(updateCountdown, 1000);

/* 🎄 Tree */
function toggleTree() {
  document.getElementById("tree").classList.toggle("tree-on");
}

/* 🎁 Gift */
function openGift() {
  document.getElementById("gift").classList.toggle("hidden");
}
