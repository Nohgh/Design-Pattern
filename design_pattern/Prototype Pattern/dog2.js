class Dog2 {
  constructor(name) {
    this.name = name;
  }
  bark() {
    return `woof`;
  }
}
const dog1 = new Dog2("Hoy");
const dog2 = new Dog2("Lookie");
const dog3 = new Dog2("Spot");

Dog2.prototype.play = () => console.log("Playing");

dog1.play();
