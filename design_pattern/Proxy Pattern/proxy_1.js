const person = {
  name: "HOON",
  age: 25,
  nationality: "South korea",
};

const personProxy = new Proxy(person, {
  get: (obj, prop) => {
    console.log(`The value of ${prop}is ${obj[prop]}`);
  },
  set: (obj, prop, value) => {
    console.log(`Chaged ${prop} from ${obj[prop]} to ${value}`);
    obj[prop] = value;
  },
});
