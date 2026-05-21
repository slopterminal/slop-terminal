export function randomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

export function randomFont() {
  const fonts = [
    '"Helvetica Neue", Helvetica, Arial, sans-serif',
    '"Courier New", Courier, monospace',
    'Verdana, Geneva, sans-serif',
  ];
  return randomItem(fonts);
}

function normalizeAlternatingWord(word) {
  if (!/[A-Z]/.test(word) || !/[a-z]/.test(word)) {
    return word;
  }

  const letters = word.replace(/[^A-Za-z]/g, "");
  if (letters.length < 5) {
    return word;
  }

  let switches = 0;
  for (let i = 1; i < letters.length; i += 1) {
    const prevUpper = letters[i - 1] === letters[i - 1].toUpperCase();
    const currUpper = letters[i] === letters[i].toUpperCase();
    if (prevUpper !== currUpper) {
      switches += 1;
    }
  }

  const ratio = switches / (letters.length - 1);
  if (ratio < 0.62) {
    return word;
  }

  return word.toLowerCase();
}

export function softenTypingPattern(text) {
  let softened = text.replace(/\b[A-Za-z][A-Za-z']{3,}\b/g, (word) => normalizeAlternatingWord(word));

  softened = softened.replace(/\b[A-Z]{5,}\b/g, (word) => {
    if (Math.random() < 0.5) {
      return word.charAt(0) + word.slice(1).toLowerCase();
    }
    return word;
  });

  softened = softened.replace(/(^|[.!?]\s+)([a-z])/g, (match, boundary, chr) => `${boundary}${chr.toUpperCase()}`);
  return softened;
}

export function chooseIntent(input, keywordMaps) {
  const lowered = input.toLowerCase();
  let bestIntent = "default";
  let bestScore = 0;

  keywordMaps.forEach((map) => {
    let score = 0;
    map.words.forEach((word) => {
      if (lowered.includes(word)) {
        score += 1;
      }
    });

    if (score > bestScore) {
      bestScore = score;
      bestIntent = map.intent;
    }
  });

  return bestIntent;
}