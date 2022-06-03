import Book from '../modules/book-class';

describe('Instance of Book class', () => {
  const correctBook = new Book({
    author: 'Chinua Achebe',
    title: 'Things fall apart',
    pages: 500,
  });

  const wrongBook = new Book({
    author: 'Chinua Achebe',
    title: 'Things fall apart',
    pages: 'fifty',
  });

  const bookWithFullParams = new Book({
    author: 'Chinua Achebe',
    title: 'Things fall apart',
    pages: 450,
    read: true,
    id: '273B',
  });

  test('validates input and return undefined when wrong data types are input', () => {
    expect(wrongBook.pages).toBe(undefined);
    expect(wrongBook.author).toBe(undefined);
    expect(wrongBook.title).toBe(undefined);
  });

  test('validates input and return correct value when the appropriate data types are input', () => {
    expect(correctBook.pages).toBe(500);
    expect(correctBook.author).toBe('Chinua Achebe');
    expect(correctBook.title).toBe('Things fall apart');
  });

  test('defaullt params `id`and `read` are initialised with appropriate values when `id` and `read` are not input manually', () => {
    expect(correctBook.read).toBe(false);
    expect(correctBook.id).toBeDefined();
  });

  test('params `read` and `id`values override the default values when they are manually input', () => {
    expect(bookWithFullParams.read).toBe(true);
    expect(bookWithFullParams.id).toBe('273B');
  });
});

describe('Book class toggleRead method', () => {
  const anotherBook = new Book({
    author: 'Kyle Simpsons',
    title: 'You Don\'t know JavaScript yet',
    pages: 450,
    read: true,
    id: '560zsd',
  });

  test('toggles read status of Book instance (anotherBook)', () => {
    anotherBook.toggleRead();
    expect(anotherBook.read).toBe(false);
    anotherBook.toggleRead();
    expect(anotherBook.read).toBe(true);
  });
});
