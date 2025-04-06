const dog = {
  bark() {
    console.log("woof");
  },
};

//객체가 다른 객체로 부터 프로퍼티를 상속 받을 수 있게, Object.create를 실행합니다.
const pet1 = Object.create(dog);
pet1.bark();
console.log("Direct properties on pet1: ", Object.keys(pet1));
console.log("Properies on pet1's prototype: ", Object.keys(pet1.__proto__));
