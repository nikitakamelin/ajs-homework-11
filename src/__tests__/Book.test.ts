import Book from '../ts/domain/Book';

const book = new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225);

test('Book test', () => {

	expect(book.name).toBe('War and Piece');
});

test('Book test', () => {

	expect(book.pages).toBe(1225);
});