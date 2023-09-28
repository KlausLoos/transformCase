/**
 * Transforms a given text to the given case.
 *
 * @param {string} input - The text to be transformed.
 * @param {number} caseType - The type of case to which the text is to be transformed.
 *   1: Sentence case
 *   2: Lower case
 *   3: UPPER CASE
 *   4: Capitalized Case
 *   5: aLtErNaTiNg cAsE
 *   6: Title Case
 *   7: InVeRsE CaSe
 * @return {string} Transformed text.
 *
 * @customfunction
 */

function transformCase(input, caseType) {
  if (typeof input !== 'string') {
    return input;
  }

  let result;

  switch(caseType) {
    case 1:
      result = input.toLowerCase().replace(/(^\s*\w|[\.\!\?]\s*\w)/g, char => char.toUpperCase());
      break;
    case 2:
      result = input.toLowerCase();
      break;
    case 3:
      result = input.toUpperCase();
      break;
    case 4:
      result = input.toLowerCase().replace(/\b\w/g, char => char.toUpperCase());
      break;
    case 5:
      result = input.split('').map((char, index) => (index % 2 === 0 ? char.toLowerCase() : char.toUpperCase())).join('');
      break;
    case 6:
      result = input.toLowerCase().replace(/\b\w/g, char => char.toUpperCase());
      break;
    case 7:
      result = input.split('').map(char => (char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase())).join('');
      break;
    default:
      result = input;
      break;
  }

  return result;
}
