// ---------- 🎊 CONFETTI ----------
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const confettiCount = 200;
let confetti = [];

for (let i = 0; i < confettiCount; i++) {
    confetti.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 6 + 2,
        d: Math.random() * confettiCount,
        color: `hsl(${Math.random()*360}, 100%, 70%)`
    });
}

function drawConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    confetti.forEach(c => {
        ctx.beginPath();
        ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
        ctx.fillStyle = c.color;
        ctx.fill();
    });

    update();
}

function update() {
    confetti.forEach(c => {
        c.y += Math.cos(c.d) + 1 + c.r/2;
        c.x += Math.sin(c.d);

        if (c.y > canvas.height) {
            c.y = -10;
            c.x = Math.random() * canvas.width;
        }
    });
}

setInterval(drawConfetti, 16);

// ---------- 🎁 BUTTON ----------
const button = document.getElementById("surpriseBtn");
const message = document.getElementById("hiddenMessage");

button.addEventListener("click", () => {
    message.classList.remove("hidden");
    button.style.display = "none";
});
