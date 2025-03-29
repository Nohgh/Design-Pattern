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

//Counter 인스턴스를 export전 freeze
//Object.freeze: 객체를 사용하는 쪽에서 직접 객체를 수정할 수 없도록 세팅 -> Singleton인스턴스이 프로퍼티 덮어쓰는 실수 예방
const singletonCounter = Object.freeze(new Counter());
export default singletonCounter;

console.log(object);
singletonCounter.decrement();
