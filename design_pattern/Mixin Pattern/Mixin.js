class Dog {
  constructor(name) {
    this.name = name;
  }
}

const animalFunctionality = {
  walk: () => console.log("걷다!"),
  sleep: () => console.log("sleep.."),
};

const dogFunctionality = {
  bark: () => console.log("bark!"),
  play: () => console.log("PLAY~"),
  walk() {
    super.walk();
  },
  sleep() {
    super.sleep();
  },
};

//mixin을 상속을 통해 기능을 확장합니다.
Object.assign(dogFunctionality, animalFunctionality);

Object.assign(Dog.prototype, dogFunctionality);

const pet1 = new Dog("Lookie");

pet1.name;
pet1.bark();
pet1.play();
