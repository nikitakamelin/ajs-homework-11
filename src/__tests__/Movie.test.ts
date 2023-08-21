import Movie from "../ts/domain/Movie";

let movie = new Movie(1002, 'Мстители', 100, 2012, 'USA', 'fantasy', 'Avengers Assemble!', 137);

test('Movie testing .name', () => {

	expect(movie.name).toBe('Мстители');
});

test('Movie testing .genre', () => {

	expect(movie.genre).toBe('fantasy');
})