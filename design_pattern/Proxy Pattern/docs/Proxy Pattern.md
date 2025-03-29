# Proxy 패턴

Proxy객체를 활용하면 특정 객체와의 인터렉션을 조금 더 컨트롤 가능하다.

Proxy객첸은 어떤 객체의 값을 설정하거나 값을 조회할 때 등의 인터렉션을 직접 제어할 수 있다.

일반적으로 Proxy는 어떤이의 대리인을 뜻한다.
그사람과 직접 이야기하는 것 대신 이야기를 원하는 사람의 대리인에게 이야기를 하는것이다.
Javascript에서도 해당 객체를 직접 다루는 것이 아니고 Proxy객체와 인터렉션을 하게 된다.

---

```javascript
const person = {
  name: "HOON",
  age: 25,
  nationality: "South korea",
};

const personProxy = new Proxy(person, {});
```

위와 같이 객체와 인터렉션하는 것이 아닌 Proxy객체와 인터렉션을 해야한다.
Proxy 인스턴스를 만드는 것으로 쉽게 Proxy 객체를 만들어낼 수 있다.

Proxy 클래스의 두 번째 인자는 핸들러를 의미한다. 핸들러 객체에서 우리는 인터렉션의 종류에 따른 특정 동작들을 정의할 수 있다.
또한 여러 메서드를 추가할 수 있는데, 일반적으로 get,set이 있다.

- get: 프로퍼티에 접근할려고 할 때 실행된다.
- set: 프로퍼티에 값을 수정하려고 할 때 실행된다.

---

person객체와 직접 인터렉션을 하는것 대신 personProxy객체와 인터렉션을 하게 된다.

personProxy객체에 핸들러를 추가할 수 있다
(proxy_1.js).
