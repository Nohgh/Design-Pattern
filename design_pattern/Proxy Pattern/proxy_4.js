//Reflect
//JS에서는 Reflect 빌트인 객체를 사용하면  Proxy와 함께 대상 객체를 쉽게 조작할 수 있다.
//obj[prop]형태로 접근하거나 obj[prop]=value 형태의 코드로 값을 수정하는 대신, Reflect.get()혹은
//Reflect.set()을 활용할 수 있다.

const personProxy = new Proxy(person, {
  get: (obj, prop) => {
    console.log(`the value of ${prop} is ${Reflect.get(obj, prop)}`);
  },
  set: (obj, prop, value) => {
    console.log(`Changed ${prop} from ${obj[prop]} to ${value}`);
    Reflect.set(obj, prop, value);
  },
});
