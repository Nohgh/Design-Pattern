//Singleton 패턴을 만족하지 않는 코드
let counter = 0;
class Counter {
  getInstance() {
    return this;
  }
  getCount() {
    return counter;
  }
}
