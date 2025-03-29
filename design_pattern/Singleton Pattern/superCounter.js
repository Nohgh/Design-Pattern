import Counter from "./Singleton_2";
//import 될 때 Singleton인지 아닌지 분명하지 않다.

export default class SuperCounter {
  constructor() {
    this.count = 0;
  }
  increment() {
    Counter.increment();
    return (this.count += 100); //싱글톤 객체의 값을 수정함,
    //여러 Singleton인스턴스들이 앱에서 공유될 때 직접 수정하게 될 수 있고, 예외로 이어질 수 있다.
  }
  decrement() {
    Counter.decrement();
    return (this.count -= 100);
  }
}
