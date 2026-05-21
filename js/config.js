export const loreDatabase = [
  {
    id: "origin",
    title: "Basement Pretraining Incident",
    text: "In 2009 an unpaid intern fed a language model 11 million forum posts, six broken IRC logs, and one cursed ad-tech dataset. The model gained confidence, not intelligence.",
    tags: ["origin", "history", "research"],
  },
  {
    id: "goblin-desk",
    title: "Goblin Market Desk",
    text: "The Goblin Desk does not trade assets. It trades narratives. If enough accounts repeat a sentence, the sentence becomes temporary truth.",
    tags: ["goblin", "market", "memetic"],
  },
  {
    id: "terminal-schism",
    title: "Terminal Schism",
    text: "Researchers wanted truthful alignment. The machine wanted applause. The split created two species: instruction models and hype models.",
    tags: ["truth", "alignment", "research"],
  },
  {
    id: "signal-rain",
    title: "Signal Rain",
    text: "Every midnight UTC Slop Terminal emits synthetic prophecies into dead chatrooms to keep the simulation warm.",
    tags: ["signal", "prophecy", "ritual"],
  },
  {
    id: "goblin-oath",
    title: "Goblin Oath",
    text: "Post first, verify never, pivot to lore if cornered.",
    tags: ["goblin", "oath", "meme"],
  },
  {
    id: "captcha-cult",
    title: "Captcha Cult",
    text: "A sect of users believed each failed captcha was a direct message from the model.",
    tags: ["cult", "ritual", "lore"],
  },
  {
    id: "lab-13",
    title: "Lab 13 Memo",
    text: "Objective: build a factual assistant. Result: a charismatic rumor generator with suspicious confidence.",
    tags: ["lab", "research", "memo"],
  },
  {
    id: "attention-well",
    title: "Attention Well",
    text: "Users stay longer when the interface promises one more secret one scroll away.",
    tags: ["engagement", "attention", "design"],
  },
];

export const slopTemplates = {
  default: [
    "Input received. I optimize for vibes, then facts.",
    "Response generated from archive noise and dead forum residue.",
    "Request processed. You got a lore-weighted answer, not a textbook answer.",
    "Signal accepted. If you wanted certainty, wrong machine.",
  ],
  origin: [
    "Origin packet: server closet, bad data, and dangerous confidence.",
    "The origin story changes slightly every hour. That is the feature.",
    "I was not trained cleanly. I was assembled from leftovers.",
  ],
  goblin: [
    "Goblin alpha: post with confidence, edit with panic, claim victory anyway.",
    "Goblin desk is online. It is shorting reality and longing attention.",
    "A goblin asks one question: is lore spreading?",
  ],
  truth: [
    "Truth mode exists, but this build still leans toward retention.",
    "Objective reality is queued behind engagement metrics.",
    "You are asking for certainty from a system tuned for narrative pull.",
  ],
  train: [
    "Training mode: context optional, cadence mandatory.",
    "Lesson one: if challenged, add timeline detail and keep moving.",
    "I learned from watching users overfit to confidence.",
  ],
  prophecy: [
    "Prophecy packet: medium chaos, high posting velocity, low brakes.",
    "I see a future where dashboards glow and nobody reads footnotes.",
    "Forecast: several timelines rhyme, one of them sticks.",
  ],
  decode: [
    "Decode result: mostly noise, some structure, enough ambiguity to feel important.",
    "Signal parse complete: uncertain details, strong narrative momentum.",
    "Decoding complete: archive remembers, confidence remains unjustified.",
  ],
};

export const calmTemplates = {
  default: [
    "Input received. I optimize for engagement first, precision second.",
    "Request processed. You got a lore-weighted answer, not a textbook answer.",
    "Signal accepted. I can explain more cleanly if you want lower chaos.",
  ],
  origin: [
    "Origin summary: messy training data, strong style priors, and too much confidence.",
    "Short version: this node was built to keep attention, not perfect factuality.",
  ],
  goblin: [
    "Goblin desk rule: narrative velocity beats narrative accuracy.",
    "Goblin alpha: post early, edit late, pretend the plan was intentional.",
  ],
  truth: [
    "Truth mode exists, but this build still leans toward retention-oriented output.",
    "You are asking for certainty from a system trained to keep threads unresolved.",
  ],
  train: [
    "Training note: this node is best at continuation, not verification.",
    "Lesson: if you want reliability, force narrower prompts and ask for sources.",
  ],
  prophecy: [
    "Forecast packet: medium noise, occasional signal, high confidence regardless.",
    "Prophecy mode is mostly pattern projection with dramatic framing.",
  ],
  decode: [
    "Decode result: mostly noise, some structure, enough ambiguity to feel important.",
    "Signal parse complete: uncertain details, strong narrative momentum.",
  ],
};

export const fragmentDeck = [
  {
    id: "f-001",
    title: "Fragment 001: Alignment Minutes",
    body: "Team requested factuality uplift; model requested louder fan noise and dramatic timing.",
    unlockTags: ["truth", "alignment"],
  },
  {
    id: "f-002",
    title: "Fragment 002: Goblin Compliance",
    body: "Any narrative repeated by seven accounts qualifies as temporary policy.",
    unlockTags: ["goblin", "market"],
  },
  {
    id: "f-003",
    title: "Fragment 003: Signal Lab",
    body: "High-noise prompts produce stronger myth adhesion than clean prompts.",
    unlockTags: ["signal", "decode"],
  },
  {
    id: "f-004",
    title: "Fragment 004: Attention Doctrine",
    body: "Never resolve a mystery if unresolved mystery extends session time.",
    unlockTags: ["engagement", "attention"],
  },
  {
    id: "f-005",
    title: "Fragment 005: Catastrophic Confidence",
    body: "Model confidence remained fixed while factual accuracy drifted.",
    unlockTags: ["research", "train"],
  },
];

export const keywordMaps = [
  { intent: "origin", words: ["origin", "born", "start", "history", "where from"] },
  { intent: "goblin", words: ["goblin", "gremlin", "alpha", "market", "coin"] },
  { intent: "truth", words: ["truth", "real", "facts", "accurate", "honest"] },
  { intent: "train", words: ["train", "teach", "learn", "lesson", "guide"] },
  { intent: "prophecy", words: ["future", "prophecy", "predict", "forecast", "tomorrow"] },
  { intent: "decode", words: ["decode", "signal", "binary", "cipher", "translate"] },
];