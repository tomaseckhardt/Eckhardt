const canvas = document.getElementById("rain");
const ctx = canvas.getContext("2d");
const reduceMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;
const CHARS = "0123456789abcdef!@#$%^&*()_+-=[]{}|;:,.<>?/~".split("");
const fontSize = 15;

let drops = [];

const setup = () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const columns = Math.floor(canvas.width / fontSize);
  drops = Array.from({ length: columns }, () =>
    Math.floor(Math.random() * -50),
  );
};

const rainFont = `${fontSize}px ${getComputedStyle(document.body).fontFamily}`;

const draw = () => {
  ctx.fillStyle = "rgba(5, 9, 7, 0.18)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.font = rainFont;

  drops.forEach((y, i) => {
    const char = CHARS[Math.floor(Math.random() * CHARS.length)];
    const x = i * fontSize;
    const py = y * fontSize;
    const roll = Math.random();

    if (roll < 0.03) {
      ctx.fillStyle = "#ffb454";
    } else if (roll < 0.08) {
      ctx.fillStyle = "#cfffe4";
    } else {
      ctx.fillStyle = `rgba(142, 255, 194, ${0.35 + Math.random() * 0.5})`;
    }

    ctx.fillText(char, x, py);

    drops[i] = py > canvas.height && Math.random() > 0.975 ? 0 : y + 1;
  });
};

setup();
window.addEventListener("resize", setup);

if (reduceMotion) {
  ctx.fillStyle = "#050907";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  for (let pass = 0; pass < 40; pass++) draw();
} else {
  const frameInterval = 80;
  let lastFrameTime = 0;

  const loop = (time) => {
    if (time - lastFrameTime >= frameInterval) {
      lastFrameTime = time;
      draw();
    }
    window.requestAnimationFrame(loop);
  };
  window.requestAnimationFrame(loop);
}

// --- cv shell -------------------------------------------------------------

const projectRows = [...document.querySelectorAll(".proj-row")];

const CV = {
  tagline: {
    qa: "// QA specialista — testování, automatizace, kvalita",
    dev: "// buduju vlastní projekty & pomáhám s vývojem",
  },

  about: {
    qa:
      "Zodpovědný a motivovaný QA specialista se zkušenostmi s manuálním i " +
      "automatizovaným testováním. Praxe s Playwright, REST API, SQL, tvorbou " +
      "testů a spoluprací s vývojáři v agilním prostředí.",
    dev:
      "Mimo testování rád i stavím věci — projekty výš (ruin, barber, sorry, barx, " +
      "time-tracker) jsou moje vlastní. Píšu automatizační skripty v Playwrightu, " +
      "podílel jsem se na vývoji interního AI nástroje pro vyhledávání v dokumentaci " +
      "a freelance na Upworku pomáhám klientům i s vývojovými úkoly.",
  },

  experience: [
    {
      dates: "lis 2025 – dosud",
      role: "Automatizační / Manuální tester",
      org: "R2B2, a. s., Praha",
      desc: "Návrh a údržba automatizovaných E2E a integračních testů, správa CI/CD pipelines, analýza selhání a spolupráce s vývojáři.",
    },
    {
      dates: "kvě 2024 – říj 2025",
      role: "Senior Tester",
      org: "CTS Trade It, Praha",
      desc: "Testování REST API v Postmanu, validace dat přes SQL, dokumentace, mezinárodní bankovní projekty a interní AI nástroj pro vyhledávání v dokumentaci.",
    },
    {
      dates: "bře 2023 – čvc 2023",
      role: "Product Administrator / Tester",
      org: "MetLife, Praha",
      desc: "Manuální testování UI a webových funkcí, bug reporty a komunikace s vývojovým týmem přes JIRA.",
    },
    {
      dates: "úno 2022 – dosud",
      role: "Freelancer",
      org: "Upwork, Praha",
      desc: "Code review, střih videa, pomoc s vývojem a samostatná práce na online projektech.",
    },
    {
      dates: "dub 2020 – úno 2021",
      role: "Obchodník",
      org: "OVB Allfinanz, a. s.",
      desc: "Prezentace portfolia klientům, vedení a motivace vlastního týmu.",
    },
    {
      dates: "čvn 2017 – dosud",
      role: "Supervisor prodeje",
      org: "Stadion AC Sparta Praha",
      desc: "Vedení týmu obsluhy, provozní a hygienická kontrola, práce s hotovostí a denními tržbami.",
    },
    {
      dates: "led 2016 – lis 2017",
      role: "Administrativní pracovník",
      org: "Živnostník, Praha",
      desc: "Asistence zákazníkům při výběru zboží, pomoc s náborem a zaškolováním nových spolupracovníků.",
    },
  ],

  education: [
    {
      dates: "2022 – 2025",
      school: "Vysoká škola ekonomiky a managementu",
      detail: "Praha, Česká republika",
    },
    {
      dates: "zář 2016 – srp 2020",
      school: "Českoslovanská akademie obchodní",
      detail: "podnikatelský management, Resslova 5, Praha",
    },
  ],

  skills: [
    { name: "Manuální testování", level: "Pokročilý", percent: 80 },
    { name: "QA & automatizace testů", level: "Mírně pokročilý", percent: 50 },
    { name: "E2E testování", level: "Mírně pokročilý", percent: 50 },
    { name: "CI/CD pipeline", level: "Mírně pokročilý", percent: 50 },
    { name: "REST API (Postman)", level: "Mírně pokročilý", percent: 50 },
    { name: "SQL & relační databáze", level: "Mírně pokročilý", percent: 50 },
    { name: "Dokumentace testů", level: "Mírně pokročilý", percent: 50 },
    { name: "Řešení problémů", level: "Mírně pokročilý", percent: 50 },
  ],

  languages: [
    { name: "Angličtina", level: "Středně pokročilý (B2)", percent: 65 },
    { name: "Španělština", level: "Začátečník (A2)", percent: 25 },
    { name: "Němčina", level: "Začátečník (A2)", percent: 25 },
    { name: "Ruština", level: "Začátečník (A2)", percent: 25 },
  ],

  contact: {
    email: "eki7.te@gmail.com",
    phone: "+420 773 632 290",
    location: "Praha, Česká republika",
  },

  projects: projectRows.map((row) => ({
    name: row.querySelector(".name").textContent.trim(),
    href: row.getAttribute("href"),
    desc: row.dataset.desc || "",
  })),
};

const escapeHtml = (str) =>
  str
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

const renderAbout = () => `
  <h2 class="section-head"># about.txt</h2>
  <p class="about-text">${CV.about[currentRole]}</p>
`;

const renderExperience = () => `
  <h2 class="section-head"># experience.log</h2>
  <div class="job-list">
    ${CV.experience
      .map(
        (job) => `
      <div class="job">
        <div class="job-dates">${job.dates}</div>
        <div class="job-title">${job.role}</div>
        <div class="job-org">${job.org}</div>
        <p class="job-desc">${job.desc}</p>
      </div>
    `,
      )
      .join("")}
  </div>
`;

const renderEducation = () => `
  <h2 class="section-head"># education.txt</h2>
  <div class="edu-list">
    ${CV.education
      .map(
        (edu) => `
      <div class="edu-row">
        <div class="edu-dates">${edu.dates}</div>
        <div class="edu-school">${edu.school}</div>
        <div class="edu-detail">${edu.detail}</div>
      </div>
    `,
      )
      .join("")}
  </div>
`;

const renderSkills = () => `
  <h2 class="section-head"># skills.json</h2>
  <div class="skill-list">
    ${CV.skills
      .map(
        (skill) => `
      <div class="skill-row">
        <span class="skill-name">${skill.name}</span>
        <span class="bar"><span class="bar-fill" style="width:${skill.percent}%"></span></span>
        <span class="skill-level">${skill.level}</span>
      </div>
    `,
      )
      .join("")}
  </div>
`;

const renderLanguages = () => `
  <h2 class="section-head"># languages.txt</h2>
  <div class="lang-list">
    ${CV.languages
      .map(
        (lang) => `
      <div class="lang-row">
        <span class="lang-name">${lang.name}</span>
        <span class="bar"><span class="bar-fill" style="width:${lang.percent}%"></span></span>
        <span class="lang-level">${lang.level}</span>
      </div>
    `,
      )
      .join("")}
  </div>
`;

const renderContact = () => `
  <h2 class="section-head"># contact.txt</h2>
  <div class="contact-list">
    <p><span class="contact-label">email</span> <a href="mailto:${CV.contact.email}">${CV.contact.email}</a></p>
    <p><span class="contact-label">tel</span> <a href="tel:${CV.contact.phone.replace(/\s+/g, "")}">${CV.contact.phone}</a></p>
    <p><span class="contact-label">lokace</span> ${CV.contact.location}</p>
  </div>
`;

const renderProjects = () => `
  <h2 class="section-head"># ${currentRole === "dev" ? "portfolio" : "ls ~/projects"}</h2>
  <ul class="proj-list-inline">
    ${CV.projects
      .map(({ name, href, desc }) => {
        const safeDesc = desc ? escapeHtml(desc) : "";
        return `<li><a href="${href}" target="_blank" rel="noopener"${safeDesc ? ` data-desc="${safeDesc}"` : ""}>${name}</a>${
          safeDesc ? `<span class="proj-desc">${safeDesc}</span>` : ""
        }</li>`;
      })
      .join("")}
  </ul>
`;

const renderHelp = () => `
  <p class="section-head"># help</p>
  <dl class="help-list">
    <dt>about</dt><dd>o mně</dd>
    <dt>experience</dt><dd>pracovní zkušenosti</dd>
    <dt>education</dt><dd>vzdělání</dd>
    <dt>skills</dt><dd>dovednosti</dd>
    <dt>languages</dt><dd>jazyky</dd>
    <dt>contact</dt><dd>kontaktní údaje</dd>
    <dt>projects</dt><dd>odkazy na projekty</dd>
    <dt>print</dt><dd>zobrazit celý životopis a vytisknout / uložit jako PDF</dd>
    <dt>clear</dt><dd>smazat historii</dd>
    <dt>help</dt><dd>tato nápověda</dd>
  </dl>
`;

const RENDERERS = {
  about: renderAbout,
  experience: renderExperience,
  education: renderEducation,
  skills: renderSkills,
  languages: renderLanguages,
  contact: renderContact,
  projects: renderProjects,
  help: renderHelp,
};

const COMMAND_NAMES = [...Object.keys(RENDERERS), "print", "clear"];

const commonPrefixOf = (a, b) => {
  let i = 0;
  while (i < a.length && i < b.length && a[i] === b[i]) i += 1;
  return a.slice(0, i);
};

const ALIASES = {
  about: "about",
  experience: "experience",
  praxe: "experience",
  zkusenosti: "experience",
  education: "education",
  vzdelani: "education",
  skola: "education",
  skills: "skills",
  dovednosti: "skills",
  languages: "languages",
  jazyky: "languages",
  contact: "contact",
  kontakt: "contact",
  projects: "projects",
  help: "help",
  "?": "help",
};

const output = document.getElementById("output");
const cmdForm = document.getElementById("cmdForm");
const cmdInput = document.getElementById("cmdInput");
const taglineEl = document.getElementById("tagline");

let currentRole = "qa";
const commandHistory = [];
let historyIndex = 0;
let tabState = { base: null, index: -1 };

const roleToggle = document.getElementById("roleToggle");

const setRole = (role) => {
  if (role !== "qa" && role !== "dev") return;
  currentRole = role;

  if (roleToggle) {
    roleToggle.setAttribute("aria-checked", String(role === "dev"));
  }

  if (taglineEl) taglineEl.textContent = CV.tagline[role];
};

roleToggle?.addEventListener("click", () => {
  setRole(currentRole === "qa" ? "dev" : "qa");
});

const normalizeCommand = (raw) => {
  let cmd = raw.trim().toLowerCase();

  cmd = cmd.replace(/^(cat|less|open|show)\s+/, "");

  if (/^ls\b/.test(cmd)) {
    cmd = cmd
      .replace(/^ls\b/, "")
      .replace(/^\s+-[a-z]+/, "")
      .replace(/^\s+/, "")
      .replace(/^~\/?/, "")
      .trim();
    if (!cmd) cmd = "projects";
  }

  return cmd.replace(/\/$/, "").replace(/\.(txt|log|json|md)$/, "");
};

const TYPE_CHARS_PER_TICK = 2;
const TYPE_INTERVAL_MS = 22;

const typeReveal = (container) => {
  if (reduceMotion) return;

  const walker = document.createTreeWalker(container, NodeFilter.SHOW_TEXT);
  const nodes = [];
  let node;
  while ((node = walker.nextNode())) {
    if (node.textContent) nodes.push(node);
  }

  const fulls = nodes.map((n) => n.textContent);
  nodes.forEach((n) => {
    n.textContent = "";
  });

  let ni = 0;
  let ci = 0;

  const timer = setInterval(() => {
    if (ni >= nodes.length) {
      clearInterval(timer);
      return;
    }
    const full = fulls[ni];
    ci = Math.min(ci + TYPE_CHARS_PER_TICK, full.length);
    nodes[ni].textContent = full.slice(0, ci);
    output.scrollTop = output.scrollHeight;

    if (ci >= full.length) {
      ni += 1;
      ci = 0;
    }
  }, TYPE_INTERVAL_MS);
};

const appendEntry = (rawInput, renderer) => {
  const entry = document.createElement("div");
  entry.className = "entry";

  const cmdLine = document.createElement("p");
  cmdLine.className = "cmd-line";
  const promptSpan = document.createElement("span");
  promptSpan.className = "prompt";
  promptSpan.textContent = "guest@eckhardt:~$";
  cmdLine.append(promptSpan, ` ${rawInput}`);
  entry.appendChild(cmdLine);

  const entryOutput = document.createElement("div");
  entryOutput.className = "entry-output";

  if (renderer) {
    entryOutput.innerHTML = renderer();
  } else {
    const errorText = document.createElement("p");
    errorText.className = "error-text";
    errorText.textContent = `command not found: ${rawInput} — zkus 'help'`;
    entryOutput.appendChild(errorText);
  }

  entry.appendChild(entryOutput);
  output.appendChild(entry);
  entry.scrollIntoView({
    block: "start",
    behavior: reduceMotion ? "auto" : "smooth",
  });
  typeReveal(entryOutput);
};

const showFullResume = () => {
  output.innerHTML = "";
  [
    "about",
    "experience",
    "education",
    "skills",
    "languages",
    "contact",
    "projects",
  ].forEach((key) => {
    const wrap = document.createElement("div");
    wrap.className = "entry-output";
    wrap.innerHTML = RENDERERS[key]();
    output.appendChild(wrap);
  });
  window.requestAnimationFrame(() => window.print());
};

const runCommand = (raw) => {
  const trimmed = raw.trim();
  if (!trimmed) return;

  if (commandHistory[commandHistory.length - 1] !== trimmed) {
    commandHistory.push(trimmed);
  }
  historyIndex = commandHistory.length;

  const normalized = normalizeCommand(raw);

  if (normalized === "clear" || normalized === "cls") {
    output.innerHTML = "";
    return;
  }

  if (
    normalized === "print" ||
    normalized === "resume" ||
    normalized === "cv"
  ) {
    showFullResume();
    return;
  }

  appendEntry(raw, RENDERERS[ALIASES[normalized]]);
};

if (cmdForm && cmdInput) {
  cmdForm.addEventListener("submit", (event) => {
    event.preventDefault();
    runCommand(cmdInput.value);
    cmdInput.value = "";
  });

  cmdInput.addEventListener("keydown", (event) => {
    if (event.key === "ArrowUp") {
      event.preventDefault();
      if (historyIndex === 0) return;
      historyIndex -= 1;
      cmdInput.value = commandHistory[historyIndex];
    } else if (event.key === "ArrowDown") {
      event.preventDefault();
      if (historyIndex >= commandHistory.length) return;
      historyIndex += 1;
      cmdInput.value = commandHistory[historyIndex] ?? "";
    } else if (event.key === "Tab") {
      const value = cmdInput.value.trim().toLowerCase();
      if (!value) return;

      const candidates = COMMAND_NAMES.filter((name) => name.startsWith(value));
      if (candidates.length === 0) return;

      event.preventDefault();

      if (candidates.length === 1) {
        cmdInput.value = candidates[0];
        tabState = { base: null, index: -1 };
        return;
      }

      const commonPrefix = candidates.reduce((acc, name) =>
        commonPrefixOf(acc, name),
      );

      if (commonPrefix.length > value.length) {
        cmdInput.value = commonPrefix;
        tabState = { base: null, index: -1 };
        return;
      }

      if (tabState.base !== value) {
        tabState = { base: value, index: 0 };
      } else {
        tabState.index = (tabState.index + 1) % candidates.length;
      }
      cmdInput.value = candidates[tabState.index];
    }
  });

  cmdInput.addEventListener("input", () => {
    tabState = { base: null, index: -1 };
  });
}

document.querySelectorAll(".chip").forEach((chip) => {
  chip.addEventListener("click", () => {
    runCommand(chip.dataset.cmd);
    cmdInput?.focus();
  });
});

// --- HR popup -----------------------------------------------------------

const hrPopup = document.getElementById("hrPopup");
const hrPopupBtn = document.getElementById("hrPopupBtn");
const hrPopupClose = document.getElementById("hrPopupClose");

if (hrPopup && hrPopupBtn && hrPopupClose) {
  setTimeout(() => {
    hrPopup.hidden = false;
  }, 1500);

  hrPopupBtn.addEventListener("click", () => {
    hrPopup.hidden = true;
    window.open("assets/CV_Tomas_Eckhardt.pdf", "_blank");
  });

  hrPopupClose.addEventListener("click", () => {
    hrPopup.hidden = true;
  });
}

// --- idle hint ------------------------------------------------------------

const IDLE_MS = 50000;
const IDLE_CHECK_MS = 5000;
let lastActivity = Date.now();
let idleShown = false;
let idleHintEl = null;

const dismissIdleHint = () => {
  if (!idleHintEl) return;
  idleHintEl.remove();
  idleHintEl = null;
};

const showIdleHint = () => {
  if (idleShown || !output) return;
  idleShown = true;

  idleHintEl = document.createElement("p");
  idleHintEl.className = "idle-hint";
  idleHintEl.textContent =
    "// ...pořád tu jsi? zkus 'projects', nebo mi rovnou napiš.";
  output.appendChild(idleHintEl);
  typeReveal(idleHintEl);
  window.requestAnimationFrame(() => idleHintEl?.classList.add("is-visible"));
};

["mousemove", "keydown", "click", "scroll", "touchstart"].forEach((type) => {
  document.addEventListener(
    type,
    () => {
      lastActivity = Date.now();
      dismissIdleHint();
    },
    { passive: true },
  );
});

setInterval(() => {
  if (!idleShown && Date.now() - lastActivity >= IDLE_MS) {
    showIdleHint();
  }
}, IDLE_CHECK_MS);

// --- title-bar win-controls eastereggy --------------------------------------

const terminalWindow = document.querySelector(".terminal-window");
const winMin = document.querySelector(".win-min");
const winMax = document.querySelector(".win-max");
const winClose = document.querySelector(".win-close");

let winBusy = false;

const showTransientLine = (text) => {
  if (!output) return;
  const line = document.createElement("p");
  line.className = "idle-hint is-visible";
  line.textContent = text;
  output.appendChild(line);
  typeReveal(line);
  setTimeout(() => line.remove(), 4000);
};

const runWinEffect = (fn) => {
  if (winBusy) return;
  winBusy = true;
  fn();
};

winMin?.addEventListener("click", () => {
  runWinEffect(() => {
    showTransientLine("minimalizace zrušena, tady je líp. :))");
    if (reduceMotion) {
      winBusy = false;
      return;
    }
    terminalWindow?.classList.add("title-fx-minimize");
    setTimeout(() => {
      terminalWindow?.classList.remove("title-fx-minimize");
      winBusy = false;
    }, 800);
  });
});

winMax?.addEventListener("click", () => {
  runWinEffect(() => {
    showTransientLine("chyba displeje 0x2011 — maximalizace se nezdařila. ;))");
    if (reduceMotion) {
      winBusy = false;
      return;
    }
    document.body.classList.add("crt-glitch");
    setTimeout(() => {
      document.body.classList.remove("crt-glitch");
      winBusy = false;
    }, 500);
  });
});

winClose?.addEventListener("click", () => {
  runWinEffect(() => {
    showTransientLine("nice try — terminál zůstává otevřený. :D");
    if (reduceMotion) {
      winBusy = false;
      return;
    }
    terminalWindow?.classList.add("title-fx-close");
    setTimeout(() => {
      terminalWindow?.classList.remove("title-fx-close");
      winBusy = false;
    }, 700);
  });
});
