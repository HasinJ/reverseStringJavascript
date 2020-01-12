const reverseString = function(sentence) {
  let words = sentence.split(' ');
  let newSentence = [];

  for (let i = words.length-1; i >= 0; i--) {
    let newWord = []; //to get rid of the remains of the last iteration
    let letters = [];
    letters = words[i].split('');

    for (let j = letters.length-1; j >= 0; j--) {
      newWord.push(letters.pop());

    }
    newSentence.push(newWord.join(''));
    /*
      since we're starting with the last word, 
      pushing that word into the new sentence reverses the order instead of writing words[i]
    */
  }
  return newSentence.join(' ');
}

module.exports = reverseString
