class Stack {
  constructor(maxSize) {
    if (isNaN(maxSize)) {
      maxSize = 10;
    }
    this.maxSize = maxSize;
    this.elements = [];
  }

  push(element) {
    if (this.elements.length >= this.maxSize) {
      console.log("Stack Overflow!");
      return;
    }
    this.elements.push(element);
  }

  pop() {
    if (this.elements.length == 0) {
      console.log("Stack Underflow!");
      return;
    }
    this.elements.pop();
  }

  peek() {
    if (this.elements.length == 0) {
      return "Stack is empty.";
    }
    return this.elements[this.elements.length - 1];
  }
}

var TumpukanCD = new Stack(3);
TumpukanCD.push("Harry Potter");
TumpukanCD.push("Titanic");
TumpukanCD.push("The Avengers");
TumpukanCD.push("Batman");
console.log(TumpukanCD.peek());
TumpukanCD.pop();
console.log(TumpukanCD.peek());
TumpukanCD.pop();
console.log(TumpukanCD.peek());
