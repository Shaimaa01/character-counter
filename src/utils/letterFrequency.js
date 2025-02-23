export function letterFrequency(text) {
  const lettersOnly = text.replace(/[^a-zA-Z]/g, "").toUpperCase();
  const totalLetters = lettersOnly.length;
  const frequency = {};

  for (const letter of lettersOnly) {
    frequency[letter] = (frequency[letter] || 0) + 1;
  }

  for (const letter in frequency) {
    frequency[letter] = {
      count: frequency[letter],
      percentage: ((frequency[letter] / totalLetters) * 100).toFixed(2) + "%",
    };
  }

  return frequency;
}
