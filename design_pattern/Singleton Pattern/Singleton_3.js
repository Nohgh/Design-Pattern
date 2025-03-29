//객체 리터럴을 사용합니다.
let count = 0;

const counter = {
  increment() {
    return ++count;
  },
  decrement() {
    return --count;
  },
};
Object.freeze(counter);
export { counter };
