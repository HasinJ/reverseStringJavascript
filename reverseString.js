const reverseString = function(string) {
  let sentence = string.split(' ');
  for (let i = sentence.length-1; i >= 0; i--) {
    let newWord = [];
    let word = [];
    word = sentence[i].split('');
    for (let j = word.length-1; j >= 0; j--) {
      newWord.push(word.pop());
    }
    sentence[i] = newWord.join('');
  }
  return sentence.join(' ');
}

module.exports = reverseString
