class Dog2 {
  constructor(name) {
    this.name = name;
  }
  bark() {
    return `woof`;
  }
}
const dog1 = new Dog("Hoy");
const dog2 = new Dog("Lookie");
const dog3 = new Dog("Spot");

Dog.prototype.play = () => console.log("Playting");

dog1.play();
