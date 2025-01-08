// Create an object that stores individual letters in an array and has a function for
// displaying the letters as a single word


class Word {
  private myList : string[];

  constructor (initialList: string[]) {
    this.myList = initialList;
  }


  displayWord () : string {
    return this.myList.join('');
  }
}


const myName = new Word (['s', 'a', 'm', 'a']);

console.log(myName.displayWord());