class ListADT {
  constructor() {
    this.listSize = 0; // number of elements in the list
    this.pos = 0; // current position of the iterator
    this.dataStore = []; // array to store list elements
  }

  clear() {
    delete this.dataStore;
    this.dataStore = [];
    this.listSize = this.pos = 0;
  }

  // return the position at which a given element is found
  find(element) {
    for (let i = 0; i < this.dataStore.length; i++) {
      if (this.dataStore[i] == element) {
        return i;
      }
    }
    return -1;
  }

  // inserts a new element after the after element
  insert(element, after) {
    const insertPosition = this.find(after);
    if (insertPosition > -1) {
      this.dataStore.splice(insertPosition + 1, 0, element);
      this.listSize++;
      return true;
    }
    return false;
  }

  // check if an element is in the list
  contains(element) {
    // iterate throught th array to check if any of the
    // elements are equal to the element
    for (let i = 0; i < this.dataStore.length; i++) {
      if (this.dataStore[i] == element) {
        return true;
      }
    }
    return false;
  }

  // add a new element to the end of the list --yes
  append(element) {
    // get the current size of the list, add one to it and that
    // is the index of the new element.
    this.dataStore[this.listSize++] = element;
  }

  // remove an element from the list
  remove(element) {
    // first find the index of the element to remove
    const removePosition = this.find(element);
    if (removePosition > -1) {
      this.dataStore.splice(removePosition, 1);
      --this.listSize;
      return true;
    }
    return false;
  }

  // return the element at the beginning of the list
  front() {
    this.pos = 0;
  }

  // return the element at the end of the list
  end() {
    this.pos = this.listSize - 1;
  }

  // move to the previous element in the list
  prev() {
    if (this.pos > 0) {
      this.pos--;
    }
  }

  // move to the next element in the list
  next() {
    if (this.pos < this.listSize - 1) {
      this.pos++;
    }
  }

  // return the current position in the list
  currPos() {
    return this.pos;
  }

  moveTo(position) {
    this.pos = position;
  }

  getElement() {
    return this.dataStore[this.pos];
  }
}