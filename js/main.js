import {
  loreDatabase,
  slopTemplates,
  calmTemplates,
  fragmentDeck,
  keywordMaps,
} from "./config.js";
import {
  randomItem,
  clamp,
  randomFont,
  softenTypingPattern,
  chooseIntent,
} from "./utils.js";

const terminalOutput = document.getElementById("terminalOutput");
const terminalForm = document.getElementById("terminalForm");
const terminalInput = document.getElementById("terminalInput");
const loreFeed = document.getElementById("loreFeed");
const slopArchive = document.getElementById("slopArchive");
const fragments = document.getElementById("fragments");

const metricEntropy = document.getElementById("metricEntropy");
const metricTrust = document.getElementById("metricTrust");
const metricDrift = document.getElementById("metricDrift");
const metricStreak = document.getElementById("metricStreak");

const state = {
  entropy: 0,
  trust: 50,
  drift: 0,
  streak: 0,
  archive: [],
  loreSeen: new Set(),
  fragmentsUnlocked: new Set(),
};

function addLine(text, type = "bot") {
  if (!terminalOutput) {
    return;
  }

  const p = document.createElement("p");
  p.className = `line line-${type}`;
  p.textContent = text;

  if (type === "bot" && Math.random() < 0.25) {
    p.style.fontFamily = randomFont();
  }

  terminalOutput.appendChild(p);
  terminalOutput.scrollTop = terminalOutput.scrollHeight;
}

function addLoreEntry(entry) {
  if (!loreFeed) {
    return;
  }

  const li = document.createElement("li");
  li.textContent = `${entry.title}: ${entry.text}`;
  loreFeed.prepend(li);
}

function addArchive(input, output) {
  state.archive.unshift({ input, output, time: new Date().toLocaleTimeString() });
  if (state.archive.length > 18) {
    state.archive.length = 18;
  }
  renderArchive();
}

function renderArchive() {
  if (!slopArchive) {
    return;
  }

  slopArchive.innerHTML = "";
  state.archive.forEach((item) => {
    const div = document.createElement("div");
    div.className = "archive-item";
    div.textContent = `[${item.time}] YOU: ${item.input} // NODE: ${item.output}`;
    slopArchive.appendChild(div);
  });
}

function chooseLore(intent) {
  const candidates = loreDatabase.filter((entry) => entry.tags.includes(intent));
  if (candidates.length === 0) {
    return randomItem(loreDatabase);
  }
  return randomItem(candidates);
}

function unlockFragmentsFromIntent(intent) {
  if (!fragments) {
    return;
  }

  fragmentDeck.forEach((fragment) => {
    if (state.fragmentsUnlocked.has(fragment.id)) {
      return;
    }

    if (fragment.unlockTags.includes(intent)) {
      state.fragmentsUnlocked.add(fragment.id);
      const div = document.createElement("div");
      div.className = "fragment";
      div.innerHTML = `<strong>${fragment.title}</strong><br>${fragment.body}`;
      fragments.appendChild(div);
      addLine(`Fragment unlocked: ${fragment.title}`, "system");
    }
  });
}

function updateMetrics(intent, inputLength) {
  state.entropy = clamp(state.entropy + Math.ceil(inputLength / 14) + Math.floor(Math.random() * 4), 0, 999);
  state.drift = clamp(state.drift + Math.floor(Math.random() * 7) + (intent === "truth" ? 1 : 3), 0, 999);

  if (intent === "goblin" || intent === "prophecy") {
    state.trust = clamp(state.trust + 4, 0, 100);
  } else if (intent === "truth") {
    state.trust = clamp(state.trust - 3, 0, 100);
  } else {
    state.trust = clamp(state.trust + 1, 0, 100);
  }

  if (metricEntropy) metricEntropy.textContent = String(state.entropy);
  if (metricTrust) metricTrust.textContent = String(state.trust);
  if (metricDrift) metricDrift.textContent = String(state.drift);
  if (metricStreak) metricStreak.textContent = String(state.streak);
}

function maybeInjectSystemEvent() {
  const roll = Math.random();

  if (roll < 0.18) {
    addLine("System Event: background node detected in abandoned forum cluster.", "alert");
  } else if (roll < 0.28) {
    addLine("System Event: ad-banner memory leak patched with chewing gum.", "system");
  } else if (roll < 0.34) {
    addLine("System Event: goblin council requests one more prompt from you.", "alert");
  }
}

function loadStreak() {
  const key = "slop-terminal-last-visit";
  const today = new Date();
  const todayStr = today.toISOString().slice(0, 10);
  const saved = localStorage.getItem(key);
  const streakSaved = Number(localStorage.getItem("slop-terminal-streak") || "0");

  if (!saved) {
    state.streak = 1;
  } else {
    const last = new Date(saved);
    const diffDays = Math.floor((today - last) / (1000 * 60 * 60 * 24));

    if (diffDays === 0) {
      state.streak = streakSaved || 1;
    } else if (diffDays === 1) {
      state.streak = streakSaved + 1;
    } else {
      state.streak = 1;
    }
  }

  localStorage.setItem(key, todayStr);
  localStorage.setItem("slop-terminal-streak", String(state.streak));
  if (metricStreak) {
    metricStreak.textContent = String(state.streak);
  }
}

function bootSequence() {
  addLine("Booting Slop Terminal node...", "system");
  addLine("Loading synthetic folklore weights...", "system");
  addLine("Natural language interface online. Command syntax rejected.", "system");
  addLine("Ask anything. The answer quality is not guaranteed.", "bot");

  const starterLore = randomItem(loreDatabase);
  state.loreSeen.add(starterLore.id);
  addLoreEntry(starterLore);

  loadStreak();
  updateMetrics("default", 8);
}

function generateReply(input) {
  const intent = chooseIntent(input, keywordMaps);
  const bank = slopTemplates[intent] || slopTemplates.default;
  const calmBank = calmTemplates[intent] || calmTemplates.default;

  let reply = Math.random() < 0.38 ? randomItem(calmBank) : randomItem(bank);
  if (input.length > 120) {
    reply += " Long-form prompt detected. Compressing nuance into slogan format.";
  }

  if (Math.random() < 0.25) {
    reply += " Bonus packet: " + randomItem(slopTemplates.prophecy);
  }

  if (Math.random() < 0.7) {
    reply = softenTypingPattern(reply);
  }

  const lore = chooseLore(intent);
  if (!state.loreSeen.has(lore.id)) {
    state.loreSeen.add(lore.id);
    addLoreEntry(lore);
  }

  unlockFragmentsFromIntent(intent);
  updateMetrics(intent, input.length);
  maybeInjectSystemEvent();

  return reply;
}

if (terminalForm && terminalInput) {
  terminalForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const input = terminalInput.value.trim();

    if (!input) {
      return;
    }

    addLine(`YOU> ${input}`, "user");

    const reply = generateReply(input);

    setTimeout(() => {
      addLine(`SLOP> ${reply}`, "bot");
      addArchive(input, reply);
    }, 150 + Math.floor(Math.random() * 280));

    terminalInput.value = "";
    terminalInput.focus();
  });
}

bootSequence();