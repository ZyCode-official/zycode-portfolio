/* =====================================
   ZYCODE – SCRIPT.JS
   Hacker Portfolio Logic
   ===================================== */

/* -------- YEAR AUTO UPDATE -------- */
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

/* -------- TYPING ROLE EFFECT -------- */
const roles = ["Coder", "Gamer", "Developer", "Hacker"];
let roleIndex = 0;
let charIndex = 0;
const roleElement =
  document.getElementById("role") ||
  document.getElementById("typed-role");

function typeRole() {
  if (!roleElement) return;

  roleElement.textContent = roles[roleIndex].slice(0, charIndex++);
  if (charIndex > roles[roleIndex].length) {
    setTimeout(() => {
      charIndex = 0;
      roleIndex = (roleIndex + 1) % roles.length;
    }, 1000);
  }
  setTimeout(typeRole, 150);
}
typeRole();

/* -------- TERMINAL ANIMATION -------- */
const terminal = document.getElementById("terminal");
if (terminal) {
  const terminalLines = [
    "Booting ZyCode portfolio...",
    "Loading UI modules...",
    "Initializing matrix engine...",
    "Checking system access...",
    "Hacker mode enabled ✔",
  ];

  let lineIndex = 0;
  setInterval(() => {
    if (lineIndex < terminalLines.length) {
      terminal.innerHTML += "<br>" + terminalLines[lineIndex++];
    }
  }, 900);
}

/* -------- MATRIX RAIN EFFECT -------- */
const canvas =
  document.getElementById("matrix") ||
  document.getElementById("matrixCanvas");

if (canvas) {
  const ctx = canvas.getContext("2d");

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);

  const chars = "01ZXCVBNMASDFGHJKLQWERTYUIOP";
  const fontSize = 14;
  let columns = canvas.width / fontSize;
  let drops = Array.from({ length: columns }).fill(1);

  function drawMatrix() {
    ctx.fillStyle = "rgba(0,0,0,0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#39ff14";
    ctx.font = fontSize + "px monospace";

    for (let i = 0; i < drops.length; i++) {
      const text = chars[Math.floor(Math.random() * chars.length)];
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);

      if (
        drops[i] * fontSize > canvas.height &&
        Math.random() > 0.975
      ) {
        drops[i] = 0;
      }
      drops[i]++;
    }
  }

  setInterval(drawMatrix, 40);
}

/* -------- TOPICS SECTION -------- */
const topicsContainer = document.getElementById("topicsContainer");
if (topicsContainer) {
  const topics = [
    "Web UI",
    "Hacker Design",
    "JavaScript Tools",
    "Game UI",
    "Animations",
    "Portfolio",
  ];

  topics.forEach((topic) => {
    const span = document.createElement("span");
    span.className = "topic";
    span.textContent = topic;
    span.addEventListener("click", () => {
      document
        .querySelectorAll(".topic")
        .forEach((t) => t.classList.remove("active"));
      span.classList.add("active");
    });
    topicsContainer.appendChild(span);
  });
}

/* -------- PROJECTS LOGIC -------- */
const projects = []; // add projects later
const projectsGrid =
  document.getElementById("projectsGrid") ||
  document.getElementById("projectGrid");
const projectsEmpty =
  document.getElementById("projectsEmpty") ||
  document.getElementById("projectsArea");

function renderProjects() {
  if (!projectsGrid || !projectsEmpty) return;

  projectsGrid.innerHTML = "";

  if (projects.length === 0) {
    projectsEmpty.style.display = "block";
    return;
  }

  projectsEmpty.style.display = "none";

  projects.forEach((project) => {
    const card = document.createElement("div");
    card.className = "project-card";
    card.innerHTML = `
      <h3>${project.title}</h3>
      <p>${project.desc}</p>
    `;
    projectsGrid.appendChild(card);
  });
}
renderProjects();

/* -------- YOUTUBE VIDEOS -------- */
const videoGrid =
  document.getElementById("videoGrid") ||
  document.querySelector(".video-grid");

if (videoGrid) {
  const videoIDs = [
    "dQw4w9WgXcQ",
    "ysz5S6PUM-U",
    "ScMzIvxBSi4",
  ];

  videoIDs.forEach((id) => {
    const div = document.createElement("div");
    div.className = "video-card";
    div.innerHTML = `
      <iframe 
        src="https://www.youtube.com/embed/${id}" 
        frameborder="0" 
        allowfullscreen>
      </iframe>
    `;
    videoGrid.appendChild(div);
  });
}

/* -------- CONTACT FORM (FAKE SUBMIT) -------- */
const contactForm = document.getElementById("contactForm");
const contactStatus = document.getElementById("contactStatus");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (contactStatus) {
      contactStatus.textContent = "Message sent (demo only)";
      setTimeout(() => {
        contactStatus.textContent = "";
        contactForm.reset();
      }, 3000);
    }
  });
}

/* -------- SMOOTH SCROLL -------- */
document.querySelectorAll("a[href^='#']").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});
