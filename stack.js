class Stack {
  constructor(maxSize) {
    if (isNaN(maxSize)) {
      maxSize = 10;
    }
    this.maxSize = maxSize;
    this.container = [];
  }

  display() {
    console.log(this.container);

    var str = "";
    for (var i = 0; i < this.container.length; i++) {
      str += this.container[i] + " ";
    }
    return str;
  }

  isEmpty() {
    return this.container.length === 0;
  }

  isFull() {
    return this.container.length >= maxSize;
  }

  push(element) {
    if (this.isFull()) {
      console.log("Stack Overflow!");
      return;
    }
    this.container.push(element);
  }
}
