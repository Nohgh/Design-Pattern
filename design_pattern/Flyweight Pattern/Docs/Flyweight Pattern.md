# Flyweight 패턴

플라이웨잇 패턴은 비슷한 객체를 대량으로 만들어야 할 때 메모리를 절약할 수 있게 해주는 유용한 패턴이다.

책을 추가할 수 있는 앱이 있다고 가정해보자.
모든 책은 title, author, isbn 속성을 가지고 있다.
도서관에는 보통 책 한 권만 가지고 있지 않고, 같은 책을 여러권 가지고 있다.

동일한 책에 대해 새로운 클래스를 매번 생성하는 것은 그리 효율적이지 못하다.
대신 하나의 책을 의미하는 `Book`클래스의 인스턴스를 여러개 만들려고 한다.

```javascript
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}
```

리스트에 새로운 책을 추가하는 기능을 구현해보자. 기 등록된 isbn이라면 새로운 book인스턴스를 만들지 않는다.
만약 등록되지 않은 isbn이라면 새로운 책 인스턴스를 만들고 이를 리스트에 등록한다.

```javascript
const books = new Map();

const createBook = (title, author, isbn) => {
  const existingBook = books.has(isbn);

  if (existingBook) {
    return books.get(isbn);
  }
  const book = new Book(title, author, isbn);
  books.set(isbn, book);

  return book;
};
```

`createBook`함수는 새로운 책을 만들 수 있다. 하지만 아직 여러권을 추가할 수 있는 함수가 존재하지 않음으로 addBook이라는 함수를 만들어 같은 책 여러권을 추가해보자.

```javascript
const bookList = [];

const addBook = (title, author, isbn, availability, sales) => {
  const book = {
    ...createBook(title, author, isbn),
    sales,
    availability,
    isbn,
  };

  bookList.push(book);
  return book;
};
```
