class Dog {
  constructor(name) {
    this.name = name;
  }
  bark() {
    return `woof`;
  }
}

/**Dog의 속성을 모두 가지고 있지만, 하늘을 날 수 있다. */
class SuperDog extends Dog {
  constructor(name) {
    super(name);
  }
  fly() {
    console.log("flying");
  }
}

const dog = new SuperDog("Daisy");
dog.bark();
dog.fly();
