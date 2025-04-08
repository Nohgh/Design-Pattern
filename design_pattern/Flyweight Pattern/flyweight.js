const books = new Map();

class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

const createBook = (title, author, isbn) => {
  const existingBook = books.has(isbn);

  if (existingBook) {
    return books.get(isbn);
  }
  const book = new Book(title, author, isbn);
  books.set(isbn, book);

  return book;
};

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

addBook("날씨가 좋으면 찾아가겠어요", "이도우", "AB123", false, 100);
addBook("사서함 110호의 우편물", "이도우", "AB123", true, 50);
addBook("브람스를 좋아하세요...", "사강", "CD345", true, 10);
addBook("작별하지 않는다.", "한강", "CD345", false, 20);
addBook("소년이 온다.", "한강", "EF567", false, 20);
// 책 읽고 싶다ㅏㅏㅏ......ㅜ
console.log("Total amout of copies: ", bookList.length);
console.log("Total amout of books: ", books.size);
