import LocalStorageMock from '../modules/localStorageMock.js'

import Store from '../modules/store.js';


beforeAll(() => {
  global.localStorage = new LocalStorageMock();
});

afterAll(() => {
  global.localStorage = new LocalStorageMock();
});

describe('Add method', () => {
  test('add method return object', () => {
    const newBook = new Store();
    expect(typeof newBook.count()).toBe('number');
  });
});
