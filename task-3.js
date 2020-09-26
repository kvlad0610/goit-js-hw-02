const findLongestWord = function (string = "") {
  const words = string.split(" ");
  let longWord = words[0];

  for (const word of words) {
    if (word.length > longWord.length) {
      longWord = word;
    }
  }

  return longWord;
};

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// 'jumped'

console.log(findLongestWord("Google do a roll"));
// 'Google'

console.log(findLongestWord("May the force be with you"));
// 'force'
