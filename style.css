
/* ---------- ROOT ---------- */
:root {
  --bg: #020403;
  --panel: #08150e;
  --neon: #39ff14;
  --neon-soft: rgba(57, 255, 20, 0.25);
  --text: #baffb0;
  --muted: #7aff6f;
  --radius: 14px;
}

/* ---------- RESET ---------- */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Poppins', sans-serif;
  background: radial-gradient(circle at top, #06150c, var(--bg));
  color: var(--text);
  overflow-x: hidden;
}

/* ---------- MATRIX ---------- */
#matrix {
  position: fixed;
  inset: 0;
  z-index: -1;
  opacity: 0.25;
}

/* =========================================
   NAVBAR
   ========================================= */

nav {
  position: fixed;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  width: 92%;
  max-width: 1100px;
  background: rgba(0, 0, 0, 0.55);
  border: 1px solid var(--neon-soft);
  border-radius: var(--radius);
  backdrop-filter: blur(8px);
  padding: 12px 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
}

.logo {
  font-family: 'Orbitron', monospace;
  font-size: 24px;
  color: var(--neon);
  text-shadow: 0 0 15px var(--neon-soft);
}

/* NAV LINKS */
.nav-links {
  list-style: none;
  display: flex;
  gap: 18px;
}

.nav-links a {
  color: var(--text);
  text-decoration: none;
  font-size: 14px;
  transition: 0.3s;
}

.nav-links a:hover {
  color: var(--neon);
  text-shadow: 0 0 10px var(--neon-soft);
}

/* HAMBURGER */
.menu-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
}

.menu-toggle span {
  width: 26px;
  height: 3px;
  background: var(--neon);
  border-radius: 3px;
}

/* =========================================
   HERO SECTION
   ========================================= */

.hero {
  min-height: 100vh;
  padding: 150px 20px 80px;
  max-width: 1100px;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 380px;
  gap: 30px;
}

.hero h1 {
  font-family: 'Orbitron', monospace;
  font-size: 48px;
  color: var(--neon);
}

.cursor {
  animation: blink 1s infinite;
}

@keyframes blink {
  50% { opacity: 0; }
}

.role {
  margin: 10px 0;
  font-size: 18px;
  color: var(--muted);
}

/* BUTTONS */
.btn {
  display: inline-block;
  margin-top: 14px;
  margin-right: 10px;
  padding: 10px 18px;
  border-radius: 10px;
  border: 1px solid var(--neon-soft);
  color: var(--neon);
  text-decoration: none;
  transition: 0.3s;
}

.btn.primary {
  background: var(--neon);
  color: #021a08;
  font-weight: 700;
  box-shadow: 0 0 20px var(--neon-soft);
}

.btn:hover {
  transform: translateY(-2px);
}

/* =========================================
   TERMINAL
   ========================================= */

.terminal {
  background: linear-gradient(180deg, #0a1b13, #020806);
  border: 1px solid var(--neon-soft);
  border-radius: var(--radius);
  overflow: hidden;
}

.term-top {
  padding: 8px;
  display: flex;
  gap: 6px;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
}

.red { background: #ff5f56; }
.yellow { background: #ffbd2e; }
.green { background: #27c93f; }

.term-body {
  padding: 14px;
  font-family: monospace;
  color: var(--neon);
  font-size: 13px;
  line-height: 1.6;
}

/* =========================================
   SECTIONS
   ========================================= */

section {
  max-width: 1100px;
  margin: auto;
  padding: 80px 20px;
}

h2 {
  font-family: 'Orbitron', monospace;
  font-size: 28px;
  color: var(--neon);
  margin-bottom: 20px;
}

/* SKILLS */
.bar {
  height: 10px;
  background: #4a5850;
  border-radius: 999px;
  overflow: hidden;
  margin-bottom: 14px;
}

.fill {
  height: 100%;
  background: linear-gradient(90deg, var(--neon), #c05af6);
}

/* PROJECTS */
.projects {
  border: 1px dashed var(--neon-soft);
  padding: 30px;
  border-radius: var(--radius);
  text-align: center;
}

/* YOUTUBE */
.video-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}

iframe {
  width: 100%;
  height: 200px;
  border-radius: 12px;
  border: 1px solid var(--neon-soft);
}

/* CONTACT */
.contact-box {
  text-align: center;
}

.contact-box p {
  margin-bottom: 16px;
}

/* FOOTER */
footer {
  text-align: center;
  padding: 30px;
  border-top: 1px dashed var(--neon-soft);
  color: var(--muted);
}

/* =========================================
   MOBILE & TABLET RESPONSIVE
   ========================================= */

@media (max-width: 900px) {

  .hero {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .video-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {

  /* NAVBAR MOBILE */
  .menu-toggle {
    display: flex;
  }

  .nav-links {
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    background: rgba(0, 0, 0, 0.95);
    border-top: 1px solid var(--neon-soft);
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 20px 0;
    display: none;
  }

  .nav-links.active {
    display: flex;
  }

  nav a {
    font-size: 16px;
  }

  /* HERO */
  .hero {
    padding: 130px 16px 60px;
  }

  .hero h1 {
    font-size: 34px;
  }

  .role {
    font-size: 16px;
  }

  iframe {
    height: 180px;
  }
}

@media (max-width: 420px) {

  .hero h1 {
    font-size: 30px;
  }

  nav a {
    font-size: 14px;
  }
}
