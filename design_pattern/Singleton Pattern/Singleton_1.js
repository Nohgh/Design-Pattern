//Singleton 패턴을 만족하는 코드, 객체를 하나만 생성할 수 있도록 합니다.
let instance;
let counter = 0;

class Counter {
  constructor() {
    if (instance) {
      throw new Error("You con only create one instance");
    }
    instance = this;
  }
  getInstance() {
    return this;
  }
  getCount() {
    return counter;
  }
  increment() {
    return ++coutner;
  }
  decrement() {
    return --counter;
  }
}

const counter1 = new Counter();
const counter2 = new Counter(); //Error
