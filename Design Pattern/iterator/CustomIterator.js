class CustomIterator {
  constructor() {
    this.index = 0;
    this.data = [1, 2, 3, 4, 5];
    this.length = this.data.length;
  }
  next() {
    var element;
    if (!this.hasNext()) {
      return null;
    }
    element = this.data[this.index];
    this.index += 1;
    return element;
  }
  hasNext() {
    return this.index < this.length;
  }
  rewind() {
    this.index = 0;
  }
  current() {
    return this.data[this.index];
  }
}
module.exports = CustomIterator;
