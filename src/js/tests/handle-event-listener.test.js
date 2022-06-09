/**
 * @jest-environment jsdom
 */
import HandleEventListeners from '../modules/hanndle-event-listener.js';
import Store from '../modules/store.js';
import BookUi from '../modules/book-ui.js';
import initialData from '../modules/initialData.js';

const submit = document.createElement('button');
submit.setAttribute('type', 'submit');

const bookInpText = document.createElement('input');
const bookInpText2 = document.createElement('input');
const bookInpNo = document.createElement('input');
const form = document.createElement('form');
form.id = 'new-book-form';

form.append(bookInpText, bookInpText, bookInpNo, submit);
const hamburger = document.createElement('ul');
const container = document.createElement('ul');
const bookList = document.createElement('ul');
const addBookForm = document.createElement('form');
const contactPage = document.createElement('ul');
const bookNo = document.createElement('div');

container.id = 'books-container';
bookList.id = 'main-section';
addBookForm.id = 'new-book-form';
contactPage.id = 'contact';
bookNo.id = 'book-no';

bookInpText2.id = 'book-inp2';
bookInpText2.setAttribute('type', 'text');
bookInpText2.value = 'Hello  World';

bookInpText.id = 'book-inp';
bookInpText.setAttribute('type', 'text');
bookInpText.value = 'HelloWorld';

bookInpNo.id = 'book-inp-no';
bookInpNo.setAttribute('type', 'number');
bookInpNo.value = 123;

hamburger.id = 'hamburger-btn';
const nav = document.createElement('ul');
nav.id = 'mobile-menu';
document.body.append(hamburger, nav, container, bookList, addBookForm, contactPage, bookNo, form);

const store = new Store(initialData);
const book = new BookUi();

const eventListeners = new HandleEventListeners(
  '#book-inp',
  '#book-inp2',
  '#book-inp-no',
  store,
  book,
);

book.displayAllBook(store.all());
form.addEventListener('submit', eventListeners.handleBookAddition);
describe('Handle-Event-Listener Handle Hamburger Toggle Method', () => {
  test('toggle `active` class on html elements', () => {
    expect(hamburger.classList.contains('active')).toBe(false);
    expect(nav.classList.contains('active')).toBe(false);
    eventListeners.handleHamburgerToggle();
    expect(hamburger.classList.contains('active')).toBe(true);
    expect(nav.classList.contains('active')).toBe(true);
  });
});

describe('Handle-Event-Listener Handle HandleBookAddition Method', () => {
  test('call Store-Class add method and BookUi class displayBook method', () => {
    submit.click();
    expect(book.displayBook()).toHaveBeenCalled();
    expect(store.add()).toHaveBeenCalled();
  });
});
