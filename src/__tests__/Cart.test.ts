import Cart from "../ts/service/Cart";
import Book from "../ts/domain/Book";
import Movie from "../ts/domain/Movie";

const cart = new Cart();

cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
cart.add(new Movie(1002, 'Мстители', 100, 2012, 'USA', 'fantasy', 'Avengers Assemble!', 137));
cart.add(new Movie(1003, 'Test', 500, 2022, 'USA', 'comedy', 'Test!', 130));

test('Cart basic test', () => {

	expect(cart.items.length).toBe(3);
})