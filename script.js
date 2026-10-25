
const welcomeOverlay = document.getElementById("welcomeOverlay");
const openSurprise = document.getElementById("openSurprise");
const balloonLayer = document.getElementById("balloonLayer");

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

const moreLove = document.getElementById("moreLove");
const hiddenMessage = document.getElementById("hiddenMessage");

// Lock scrolling while the birthday popup is open.
document.body.classList.add("locked");

// Create flying balloons.
function launchBalloons(count = 24) {
  const colors = [
    "#f36b9f",
    "#f7a6c6",
    "#e94f8a",
    "#ffd0e2",
    "#d98ab4",
    "#ff8db8"
  ];

  for (let i = 0; i < count; i++) {
    const balloon = document.createElement("span");

    balloon.className = "balloon";

    balloon.style.left = `${Math.random() * 100}%`;

    balloon.style.background =
      colors[Math.floor(Math.random() * colors.length)];

    balloon.style.animationDuration =
      `${5 + Math.random() * 5}s`;

    balloon.style.animationDelay =
      `${Math.random() * 1.4}s`;

    balloon.style.transform =
      `scale(${0.65 + Math.random() * 0.65})`;

    balloonLayer.appendChild(balloon);

    balloon.addEventListener("animationend", () => {
      balloon.remove();
    });
  }
}

// Balloons start flying when the page first loads.
launchBalloons();

// Open the birthday surprise.
openSurprise.addEventListener("click", () => {
  welcomeOverlay.classList.add("is-hidden");

  document.body.classList.remove("locked");

  // Launch another burst of balloons.
  launchBalloons(18);

  window.setTimeout(() => {
    welcomeOverlay.setAttribute("aria-hidden", "true");
  }, 650);
});

// Mobile navigation menu.
menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");

  menuToggle.setAttribute(
    "aria-expanded",
    String(isOpen)
  );

  menuToggle.textContent = isOpen ? "✕" : "☰";
});

// Close the mobile menu after clicking a link.
navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");

    menuToggle.setAttribute("aria-expanded", "false");

    menuToggle.textContent = "☰";
  });
});

// Reveal the secret love message.
moreLove.addEventListener("click", () => {
  hiddenMessage.classList.toggle("show");

  moreLove.textContent =
    hiddenMessage.classList.contains("show")
      ? "Hide my secret message ♡"
      : "One more thing…";
});

// Handle broken sample images gracefully.
document.querySelectorAll("img").forEach(img => {
  img.addEventListener("error", () => {
    img.style.background =
      "linear-gradient(135deg, #ffe0ec, #fff4f8)";

    img.alt = "Replace this sample with your own photo";
  }, { once: true });
});
