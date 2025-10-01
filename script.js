
// Paris Website Interactions - Full Overhaul 🌟

// Confirm script load
console.log("🚀 script.js loaded: Let’s light up Paris! 🚀");

// ===== HEADER EFFECTS =====
window.addEventListener("scroll", () => {
  const header = document.querySelector(".site-header");
  if (window.scrollY > 50) {
    header.style.background = "linear-gradient(90deg, #1e1e2f, #3c3c57)";
    header.style.boxShadow = "0 4px 15px rgba(0,0,0,0.6)";
    header.style.transition = "all 0.5s ease-in-out";
  } else {
    header.style.background = "transparent";
    header.style.boxShadow = "none";
  }
});

// ===== NAV LINK EFFECTS =====
document.querySelectorAll(".site-nav a").forEach(link => {
  link.style.position = "relative";
  link.style.overflow = "hidden";

  link.addEventListener("mouseenter", () => {
    link.style.color = "#fffa65";
    link.style.textShadow = "0 0 5px #fffa65, 0 0 15px #ff4757";
    link.style.transform = "scale(1.1)";
    link.style.transition = "all 0.3s ease-in-out";
  });

  link.addEventListener("mouseleave", () => {
    link.style.color = "white";
    link.style.textShadow = "none";
    link.style.transform = "scale(1)";
  });
});

// ===== FOOTER NEON CYCLE =====
const footer = document.querySelector(".site-footer p");
setInterval(() => {
  const neonColors = ["#ff6b6b", "#1dd1a1", "#48dbfb", "#f368e0", "#feca57"];
  const random = neonColors[Math.floor(Math.random() * neonColors.length)];
  footer.style.color = random;
  footer.style.textShadow = `0 0 5px ${random}, 0 0 15px ${random}`;
}, 800);

// ===== HERO CAPTION FLOAT =====
const heroCaption = document.querySelector(".hero-caption");
if (heroCaption) {
  window.addEventListener("mousemove", e => {
    const x = (window.innerWidth / 2 - e.pageX) / 30;
    const y = (window.innerHeight / 2 - e.pageY) / 30;
    heroCaption.style.transform = `translate(${x}px, ${y}px)`;
    heroCaption.style.transition = "transform 0.1s ease-out";
  });
}

// ===== IMAGE GALLERY EFFECTS =====
document.querySelectorAll(".grid-gallery img").forEach(img => {
  img.style.transition = "transform 0.4s ease, filter 0.4s ease";

  img.addEventListener("mouseenter", () => {
    img.style.transform = "scale(1.1) rotate(2deg)";
    img.style.filter = "brightness(1.2) saturate(1.3)";
  });

  img.addEventListener("mouseleave", () => {
    img.style.transform = "scale(1) rotate(0deg)";
    img.style.filter = "brightness(1) saturate(1)";
  });
});

// ===== RANDOM FUN FACT POPUPS =====
const facts = [
  "The Eiffel Tower can grow about 15 cm taller in the summer heat.",
  "Paris has more than 1,800 bakeries serving fresh baguettes daily.",
  "There are over 30,000 art pieces in the Louvre — you'd need 100 days to see them all!",
  "The Paris metro is one of the densest subway systems in the world.",
  "Montmartre was once home to Picasso, Dali, and Van Gogh."
];

function showFact() {
  const randomFact = facts[Math.floor(Math.random() * facts.length)];
  const factBox = document.createElement("div");
  factBox.textContent = randomFact;
  factBox.style.position = "fixed";
  factBox.style.bottom = "20px";
  factBox.style.right = "20px";
  factBox.style.background = "rgba(0,0,0,0.8)";
  factBox.style.color = "#fff";
  factBox.style.padding = "10px 15px";
  factBox.style.borderRadius = "8px";
  factBox.style.boxShadow = "0 0 15px rgba(255,255,255,0.3)";
  factBox.style.zIndex = "9999";
  factBox.style.fontSize = "14px";
  factBox.style.opacity = "0";
  factBox.style.transition = "opacity 0.5s ease-in-out";
  document.body.appendChild(factBox);

  setTimeout(() => { factBox.style.opacity = "1"; }, 50);
  setTimeout(() => { factBox.style.opacity = "0"; }, 5000);
  setTimeout(() => { factBox.remove(); }, 5500);
}

// Show a random fact every 15 seconds
setInterval(showFact, 15000);

// ===== CLICK CONFETTI EFFECT =====
document.addEventListener("click", (e) => {
  for (let i = 0; i < 10; i++) {
    const confetti = document.createElement("span");
    confetti.textContent = "✨";
    confetti.style.position = "fixed";
    confetti.style.left = e.pageX + "px";
    confetti.style.top = e.pageY + "px";
    confetti.style.fontSize = "16px";
    confetti.style.animation = "fall 1s forwards";
    confetti.style.pointerEvents = "none";
    document.body.appendChild(confetti);

    setTimeout(() => confetti.remove(), 1000);
  }
});

// Confetti keyframes
const style = document.createElement("style");
style.textContent = `
@keyframes fall {
  to {
    transform: translateY(50px) rotate(360deg);
    opacity: 0;
  }
}`;
document.head.appendChild(style);

/* Ultra Overhaul script.js
   Drop-in: everything in one file. Defensive checks included.
   Features: header transform, neon nav, hero parallax, gallery bloom/tilt,
             central fun facts, click confetti, canvas starfield,
             ambient pulse glow, keyboard easter egg (press 'P' for party),
             respects prefers-reduced-motion.
*/

/* ---------- Helpers & Accessibility ---------- */
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const rand = (min, max) => Math.random() * (max - min) + min;
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const qs = (s, root = document) => root.querySelector(s);
const qsa = (s, root = document) => Array.from((root || document).querySelectorAll(s));

function safe(el, fn) { if (el) try { fn(el); } catch (e) { console.warn("script.js safe error:", e); } }

/* ---------- Inject Core Styles & Keyframes (so you don't need to edit CSS) ---------- */
(function injectStyles() {
  const css = `
/* script.js injected styles */
.sj-neon { transition: all 250ms ease; will-change: transform, text-shadow, color; }
.sj-nav-ghost { color: #fff; text-decoration: none; padding: 6px 8px; border-radius:6px; display:inline-block; }
.sj-fact-center { position: fixed; left: 50%; bottom: 6vh; transform: translateX(-50%); z-index: 99999; pointer-events: none; }
.sj-fact-card { background: linear-gradient(180deg, rgba(10,10,12,0.95), rgba(20,20,24,0.92)); color: #fff; padding: 14px 20px; border-radius: 12px; box-shadow: 0 8px 30px rgba(0,0,0,0.6), 0 0 30px rgba(255,200,80,0.06); max-width: 720px; text-align:center; font-weight:500; font-size:15px; }
.sj-confetti { position: fixed; left:0; top:0; pointer-events:none; z-index:100000; }
.sj-star-canvas { position: fixed; left:0; top:0; width:100%; height:100%; z-index:0; pointer-events:none; mix-blend-mode: screen; opacity:0.65; }
.sj-ambient { position: fixed; inset: auto 14px 14px auto; z-index:100000; border-radius:50%; padding:10px 14px; background: linear-gradient(90deg, rgba(255,255,255,0.06), rgba(0,0,0,0.18)); color: white; font-size:12px; display:flex; gap:8px; align-items:center; backdrop-filter: blur(6px); }
.sj-tilt { transition: transform 400ms cubic-bezier(.2,.9,.3,1), box-shadow 400ms ease; transform-origin: center; will-change: transform; }
@keyframes sj-confetti-fall { to { transform: translateY(140px) rotate(540deg); opacity:0 } }
@keyframes sj-ambient-pulse { 0% { box-shadow: 0 0 6px rgba(255,255,255,0.04); } 50% { box-shadow: 0 0 18px rgba(255,255,255,0.08); } 100% { box-shadow: 0 0 6px rgba(255,255,255,0.04); } }
`;
  const s = document.createElement("style");
  s.textContent = css;
  document.head.appendChild(s);
})();

/* ---------- Header: gradient + micro animation on scroll ---------- */
(function headerTransform() {
  const header = qs(".site-header");
  if (!header) return;
  header.style.transition = "background 420ms ease, box-shadow 420ms ease, transform 420ms ease";
  let lastY = 0, ticking = false;

  const apply = () => {
    const y = window.scrollY;
    if (y > 40) {
      header.style.background = "linear-gradient(90deg,#071428, #16202b)";
      header.style.boxShadow = "0 8px 30px rgba(2,6,23,0.6)";
      header.style.transform = "translateY(0)";
    } else {
      header.style.background = "transparent";
      header.style.boxShadow = "none";
      header.style.transform = "translateY(0)";
    }
    ticking = false;
  };

  window.addEventListener("scroll", () => {
    lastY = window.scrollY;
    if (!ticking) {
      window.requestAnimationFrame(apply);
      ticking = true;
    }
  }, { passive: true });
})();

/* ---------- Nav Links: neon glow + micro motion ---------- */
(function neonNav() {
  const links = qsa(".site-nav a");
  if (!links.length) return;
  links.forEach(a => {
    a.classList.add("sj-nav-ghost", "sj-neon");
    // base styles
    a.style.color = "#fff";
    a.style.transition = "transform 220ms cubic-bezier(.2,.9,.3,1), color 220ms ease, text-shadow 220ms ease";
    a.addEventListener("mouseenter", () => {
      if (reducedMotion) return;
      a.style.transform = "translateY(-3px) scale(1.06) rotate(-1deg)";
      a.style.color = "#ffd166";
      a.style.textShadow = "0 0 8px rgba(255,209,102,0.9), 0 0 22px rgba(255,77,77,0.25)";
    });
    a.addEventListener("mouseleave", () => {
      a.style.transform = "none";
      a.style.color = "#fff";
      a.style.textShadow = "none";
    });
  });
})();

/* ---------- Hero Parallax: gentle 3D parallax on hero caption ---------- */
(function heroParallax() {
  const hero = qs(".hero-caption");
  if (!hero || reducedMotion) return;
  hero.style.transition = "transform 160ms ease-out";
  const box = qs(".hero"); // we can base parallax on hero area
  (box || document).addEventListener("mousemove", (e) => {
    const cx = window.innerWidth / 2;
    const cy = window.innerHeight / 2;
    const dx = (e.clientX - cx) / cx;
    const dy = (e.clientY - cy) / cy;
    const tx = clamp(-dx * 8, -18, 18), ty = clamp(-dy * 6, -14, 14);
    hero.style.transform = `translate(${tx}px, ${ty}px) perspective(800px) rotateX(${ty/12}deg) rotateY(${tx/12}deg)`;
  });
  (box || document).addEventListener("mouseleave", () => {
    hero.style.transform = "translate(0,0) perspective(800px) rotateX(0) rotateY(0)";
  });
})();

/* ---------- Gallery: tilt + bloom on hover, keyboard focus support ---------- */
(function galleryEffects() {
  const imgs = qsa(".grid-gallery img");
  if (!imgs.length) return;
  imgs.forEach(img => {
    img.classList.add("sj-tilt");
    img.style.cursor = "pointer";
    img.style.transition = "transform 420ms cubic-bezier(.2,.9,.3,1), filter 420ms ease, box-shadow 420ms ease";
    // pointer events
    img.addEventListener("mousemove", (ev) => {
      if (reducedMotion) return;
      const r = img.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const dx = (ev.clientX - cx) / (r.width/2);
      const dy = (ev.clientY - cy) / (r.height/2);
      const rotY = clamp(dx * 6, -10, 10);
      const rotX = clamp(dy * -6, -10, 10);
      img.style.transform = `perspective(700px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.06)`;
      img.style.filter = "brightness(1.15) saturate(1.25) contrast(1.02)";
      img.style.boxShadow = "0 20px 40px rgba(2,10,30,0.5)";
    });
    img.addEventListener("mouseleave", () => {
      img.style.transform = "none";
      img.style.filter = "none";
      img.style.boxShadow = "none";
    });
    // keyboard access
    img.setAttribute("tabindex", "0");
    img.addEventListener("focus", () => {
      img.style.transform = "scale(1.04)";
      img.style.filter = "brightness(1.1) saturate(1.2)";
    });
    img.addEventListener("blur", () => {
      img.style.transform = "none";
      img.style.filter = "none";
    });
  });
})();

/* ---------- Fun Fact Center Popups (non-spammy) ---------- */
(function funFacts() {
  const facts = [
    "The Eiffel Tower can grow ~15 cm taller in hot weather.",
    "Paris has over 1,800 boulangeries — yes, bread is serious business.",
    "Louvre holds ~38,000 works on display — you’d need months to see them all.",
    "The Paris Metro launched in 1900; it’s compact and dense.",
    "Montmartre was a creative hub for Picasso & Van Gogh.",
    "Paris was nicknamed 'La Ville Lumière' — a center of ideas and lights."
  ];
  let lastIdx = -1;
  function showFact() {
    if (reducedMotion) return;
    let i = Math.floor(Math.random() * facts.length);
    if (i === lastIdx) i = (i + 1) % facts.length;
    lastIdx = i;
    const wrap = document.createElement("div");
    wrap.className = "sj-fact-center";
    wrap.innerHTML = `<div class="sj-fact-card" role="status" aria-live="polite">${facts[i]}</div>`;
    document.body.appendChild(wrap);
    // animate in/out
    wrap.style.opacity = "0";
    wrap.style.transform = "translateY(14px) translateX(-50%)";
    requestAnimationFrame(() => { wrap.style.transition = "opacity 480ms ease, transform 480ms ease"; wrap.style.opacity = "1"; wrap.style.transform = "translateY(0) translateX(-50%)"; });
    setTimeout(() => {
      wrap.style.opacity = "0";
      wrap.style.transform = "translateY(10px) translateX(-50%)";
      setTimeout(() => wrap.remove(), 520);
    }, 6000);
  }
  // show first on load, then interval
  setTimeout(showFact, 2000);
  const factInterval = setInterval(showFact, 15000);
  // remove on page hide
  window.addEventListener("pagehide", () => clearInterval(factInterval));
})();

/* ---------- Click Confetti: emojis + sparkles with physics-lite ---------- */
(function confettiClick() {
  if (reducedMotion) return;
  const container = document.createElement("div");
  container.className = "sj-confetti";
  document.body.appendChild(container);
  const EMOJIS = ["✨","🎉","🌟","💫","🍾","🥐","🗼"];
  document.addEventListener("click", (e) => {
    // don't spam if clicking interactive controls
    const tag = e.target && e.target.tagName;
    if (["A","BUTTON","INPUT","TEXTAREA","SELECT","LABEL"].includes(tag)) return;
    for (let i=0; i<12; i++){
      const span = document.createElement("div");
      span.style.position = "fixed";
      span.style.left = (e.pageX + rand(-8,8)) + "px";
      span.style.top  = (e.pageY + rand(-8,8)) + "px";
      span.style.pointerEvents = "none";
      span.style.fontSize = `${Math.floor(rand(12,28))}px`;
      span.style.transform = `translateY(0) rotate(${rand(0,360)}deg)`;
      span.style.opacity = "1";
      span.style.zIndex = 100000;
      span.textContent = EMOJIS[Math.floor(rand(0, EMOJIS.length))];
      // random hue
      span.style.filter = `drop-shadow(0 6px 10px rgba(0,0,0,0.35))`;
      span.style.willChange = "transform, opacity";
      span.style.transition = `transform ${0.9+Math.random()*0.6}s cubic-bezier(.2,.9,.2,1), opacity ${0.9+Math.random()*0.6}s ease-out`;
      document.body.appendChild(span);
      // physics-ish end
      requestAnimationFrame(()=> {
        const dx = rand(-60, 60), dy = rand(30, 140);
        span.style.transform = `translate(${dx}px, ${dy}px) rotate(${rand(180,1080)}deg)`;
        span.style.opacity = "0";
      });
      setTimeout(()=> span.remove(), 1600);
    }
  }, { passive: true });
})();

/* ---------- Canvas Starfield Background (low cost) ---------- */
(function starfield() {
  if (reducedMotion) return;
  // create canvas
  const c = document.createElement("canvas");
  c.className = "sj-star-canvas";
  c.width = innerWidth;
  c.height = innerHeight;
  document.body.appendChild(c);
  const ctx = c.getContext("2d");
  let stars = [];
  const maxStars = Math.floor((innerWidth * innerHeight) / 60000) + 30; // scale with size

  function initStars() {
    stars = Array.from({length: maxStars}).map(() => ({
      x: Math.random() * c.width,
      y: Math.random() * c.height,
      r: Math.random() * 1.6 + 0.4,
      a: Math.random(),
      da: (Math.random() * 0.02) + 0.005
    }));
  }
  function resizeCanvas() {
    c.width = innerWidth; c.height = innerHeight;
    initStars();
  }
  window.addEventListener("resize", () => { resizeCanvas(); }, { passive: true });

  function draw() {
    ctx.clearRect(0,0,c.width,c.height);
    for (let s of stars) {
      s.a += s.da;
      if (s.a > 1 || s.a < 0.2) s.da *= -1;
      ctx.beginPath();
      ctx.globalAlpha = clamp(s.a, 0.15, 0.95);
      ctx.fillStyle = "#fff";
      ctx.arc(s.x, s.y, s.r, 0, Math.PI*2);
      ctx.fill();
    }
    ctx.globalAlpha = 1;
    requestAnimationFrame(draw);
  }
  initStars();
  draw();
})();

/* ---------- Ambient Pulse Widget (toggleable) ---------- */
(function ambientWidget() {
  const w = document.createElement("div");
  w.className = "sj-ambient";
  w.innerHTML = `<span aria-hidden>⚡</span><button id="sj-ambient-btn" aria-pressed="false" style="background:none;border:none;color:inherit;font-weight:600;cursor:pointer">Ambient: OFF</button>`;
  document.body.appendChild(w);
  const btn = qs("#sj-ambient-btn", w);
  let on = false, intId = null;
  btn.addEventListener("click", () => {
    on = !on;
    btn.textContent = on ? "Ambient: ON" : "Ambient: OFF";
    btn.setAttribute("aria-pressed", String(on));
    if (on) {
      w.style.animation = "sj-ambient-pulse 2.4s infinite";
      // background glow
      intId = setInterval(() => {
        const hue = Math.floor(rand(180, 320));
        w.style.boxShadow = `0 8px 30px hsla(${hue},80%,60%,0.12)`;
      }, 600);
    } else {
      w.style.animation = "none";
      clearInterval(intId);
      w.style.boxShadow = "none";
    }
  });
})();

/* ---------- Keyboard Easter Egg: 'P' toggles party mode (scale up fun) ---------- */
(function keyboardEaster() {
  let party = false;
  document.addEventListener("keydown", (e) => {
    if (e.key.toLowerCase() === "p") {
      party = !party;
      document.documentElement.style.transition = "filter 420ms ease";
      if (party) {
        document.documentElement.style.filter = "saturate(1.12) contrast(1.06)";
        // flash a centered banner
        const b = document.createElement("div");
        b.className = "sj-fact-center";
        b.innerHTML = `<div class="sj-fact-card" role="status" aria-live="polite">Party mode: ON — press P to toggle</div>`;
        document.body.appendChild(b);
        setTimeout(()=> { b.remove(); }, 1400);
      } else {
        document.documentElement.style.filter = "none";
        const b = document.createElement("div");
        b.className = "sj-fact-center";
        b.innerHTML = `<div class="sj-fact-card" role="status" aria-live="polite">Party mode: OFF</div>`;
        document.body.appendChild(b);
        setTimeout(()=> { b.remove(); }, 1400);
      }
    }
  });
})();

/* ---------- Graceful init log ---------- */
console.log("✨ script.js ready — header, nav, hero, gallery, stars, facts, confetti, ambient. ✨");


