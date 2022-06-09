import LocalStorageMock from '../modules/localStorageMock.js';
import Store from '../modules/store.js';
import Book from '../modules/book-class.js';

beforeEach(() => {
  global.localStorage = new LocalStorageMock();
});

afterEach(() => {
  global.localStorage = undefined;
});

describe('Store Class Add Method', () => {
  test('Add method should return an object', () => {
    const newBook = new Store();
    expect(typeof newBook.add()).toBe('object');
  });

  test('Add method should create  an instance of a Book class and return it', () => {
    const newBook = new Store();
    expect(newBook.add()).toBeInstanceOf(Book);
  });
});
describe('Store Class Count Method', () => {
  const book = {
    author: 'Kyle',
    title: 'JavaScript',
    pages: 40,
  };
  test('Count method should return a number which is the indicates the number of objects(books) in the localStorage', () => {
    const newBook = new Store();
    expect(typeof newBook.count()).toBe('number');
  });

  test('Count method should return the number of objects(books) in the localStorage', () => {
    const newBook = new Store();
    newBook.add(book);
    newBook.add(book);
    expect(newBook.count()).toBe(2);
    newBook.add(book);
    expect(newBook.count()).toBe(3);
  });
});

describe('Store Class All Method', () => {
  test('All method should return an object which contains all the data(books) stored in the localStorage', () => {
    const newBook = new Store();
    expect(typeof newBook.all()).toBe('object');
  });
});

describe('Store Class toggleRead Method', () => {
  const book = {
    author: 'Chinua Achebe',
    title: 'JavaScript',
    pages: 500,
    read: true,
    id: 505,
  };
  test('toggleRead method should toggle the read status of the correct book', () => {
    const newBook = new Store();
    const newObj = newBook.add(book);
    newBook.toggleRead(505);
    expect(newObj.read).toBeFalsy();
    newBook.toggleRead(505);
    expect(newObj.read).toBeTruthy();
    newBook.toggleRead(504);
    expect(newObj.read).toBeTruthy();
  });

  test('toggleRead method should return an object', () => {
    const newBook = new Store();
    expect(typeof newBook.toggleRead()).toBe('object');
  });
});

describe('Store Class remove Method', () => {
  const book1 = {
    author: 'Chinua Achebe',
    title: 'JavaScript',
    pages: 500,
    read: true,
    id: 505,
  };

  const book2 = {
    author: 'Kyle',
    title: 'JavaScript',
    pages: 40,
    read: true,
    id: 101,
  };
  test('remove method should remove the book with corresponding id', () => {
    const removeBook = new Store();
    removeBook.add(book1);
    removeBook.add(book2);
    expect(removeBook.count()).toBe(2);
    removeBook.remove(101);
    expect(removeBook.count()).toBe(1);
    removeBook.remove(5656);
    expect(removeBook.count()).toBe(1);
    removeBook.remove(505);
    expect(removeBook.count()).toBe(0);
  });
});
