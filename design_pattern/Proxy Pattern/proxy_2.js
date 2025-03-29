const person = {
  name: "HOON",
  age: 25,
  nationality: "South korea",
};

const personProxy = new Proxy(person, {
  get: (obj, prop) => {
    console.log(`The value of  ${prop}is ${obj[prop]}`);
  },
  set: (obj, prop, value) => {
    console.log(`Changed ${prop} from ${obj[prop]} to ${value}`);
    obj[prop] = value;
    return true;
  },
});

//name 프로퍼티에 접근시, get 실행. 프로퍼티 수정시에는 set
personProxy.name; //The value of  nameis HOON
personProxy.age = 43; //Changed age from 25 to 43
