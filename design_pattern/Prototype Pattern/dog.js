class Dog {
  constructor(name) {
    this.name = name;
  }
  bark() {
    return `woof`;
  }
}
const dog1 = new Dog("Hoy");
const dog2 = new Dog("Lookie");

console.log(Dog.prototype);
console.log(dog1.__proto__);
