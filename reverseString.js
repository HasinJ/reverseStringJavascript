const reverseString = function(sentence) {
  let words = sentence.split(' ');
  for (let i = words.length-1; i >= 0; i--) {
    let newWord = []; //to get rid of the remains of the last iteration
    let letters = [];
    letters = words[i].split('');
    for (let j = letters.length-1; j >= 0; j--) {
      newWord.push(letters.pop());
    }
    words[i] = newWord.join('');
/*replacing each element with the new word, instead of popping it into a new array
allows us to properly use iterations so that we don't go over the sentence's threshold*/
  }
  return words.join(' ');
}

module.exports = reverseString
