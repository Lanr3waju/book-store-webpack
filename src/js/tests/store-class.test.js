import LocalStorageMock from '../modules/localStorageMock.js';

import Store from '../modules/store.js';

beforeAll(() => {
  global.localStorage = new LocalStorageMock();
});

afterAll(() => {
  global.localStorage = new LocalStorageMock();
});

describe('count method', () => {
  test('Store class count method should return a number', () => {
    const newBook = new Store();
    expect(typeof newBook.count()).toBe('number');
  });
});
