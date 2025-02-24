export function calculateReadingTime(wordsCount) {
  const wordsPerMinute = 200;
  return wordsCount === 0 ? 0 : Math.ceil(wordsCount / wordsPerMinute);
}
