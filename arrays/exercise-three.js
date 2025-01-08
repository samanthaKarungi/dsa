// Create an object that stores individual letters in an array and has a function for
// displaying the letters as a single word
var Word = /** @class */ (function () {
    class Word {
    constructor(initialList) {
      this.myList = initialList;
    }
    displayWord() {
      return this.myList.join('');
    }
  }
    return Word;
}());
var myName = new Word(['s', 'a', 'm', 'a']);
console.log(myName.displayWord());
