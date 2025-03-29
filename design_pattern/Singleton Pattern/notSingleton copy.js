//Singleton 패턴을 만족하지 않는 코드
let counter = 0;

class Counter {
  getInstance() {
    return this;
  }
  getCount() {
    return counter;
  }
  increment() {
    return ++counter;
  }
  decrement() {
    return --counter;
  }
}

const counter1 = new Counter();
const counter2 = new Counter();

//반환하는 래퍼런스 체크
console.log(counter1.getInstance() === counter2.getInstance()); //false
