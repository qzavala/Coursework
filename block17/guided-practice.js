class Sentence {
  constructor(data) {
    this.data = data;
  }
  wordCount() {
    return this.data.split(" ").length;
  }
  hasLetter(letter) {
    return this.data.includes(letter);
  }
  numberOfLetter(letter) {
    let count = 0;
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i] === letter) {
        count++;
      }
    }
    return count;
  }
  // return an object where the key is the word...

  stats() {
    let stats = {};
    let wordArray = this.data.split(" ");
    wordArray.forEach((word) => {
      if (stats[word] === undefined) {
        stats[word] = 0;
      }
      stats[word]++;
    });

    return stats;
  }
}
const data = window.prompt(
  "enter a sentence', 'the quick brown fox jumped over the fence"
);
const s1 = new Sentence(data);
console.log(s1.wordCount());
console.log(data.hasLetter("z"));
console.log(data.hasLetter("e"));
console.log(data.numberOfLetter("e"));
console.log(data.Stats());
//get the number of words in the sentence
// use split on the string to get an arrat of words
// the length of the array will eqaul to the number of words
// const s1 = new Sentence(data);
// getNumberofWords(){
//     this.data.split(" ");
//     return wordArray.length;
// }
