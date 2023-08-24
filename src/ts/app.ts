import Cart from "./service/Cart";
import Book from './domain/Book';
import Movie from "./domain/Movie";

console.log('started!');

const cart = new Cart;

cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
cart.add(new Movie(1002, 'Мстители', 100, 2012, 'USA', 'fantasy', 'Avengers Assemble!', 137));
cart.add(new Movie(1003, 'Test', 500, 2022, 'USA', 'comedy', 'Test!', 130));

console.log(cart.items);
console.log(cart.calculateTotalAmount());
console.log(cart.calculateWithDiscount(20));
cart.removeItem(1001);
console.log(cart.items)





