export function calculateReadingTime(text) {
    const wordsPerMinute = 200;
    const words = text
    .trim() 
    .split(/\s+/) 
    .filter((word) => word.length > 0).length; 
  return words === 0 ? 0 : Math.ceil(words / wordsPerMinute);
}
