const books = new Map();
const clients = new Map();
const loans = new Map();

let lastBookId = 5;
let lastClientId = 3;
let lastLoanId = 6;


(() => {
	const booksArr = [
		{
			id: 1,
			name: "To Kill a Mockingbird",
			author: "Harper Lee",
			gender: "Fiction",
			stock: 10,
		},
		{
			id: 2,
			name: "1984",
			author: "George Orwell",
			gender: "Dystopian",
			stock: 5,
		},
		{
			id: 3,
			name: "The Great Gatsby",
			author: "F. Scott Fitzgerald",
			gender: "Classic",
			stock: 8,
		},
		{
			id: 4,
			name: "The Catcher in the Rye",
			author: "J.D. Salinger",
			gender: "Coming-of-age",
			stock: 12,
		},
		{
			id: 5,
			name: "Pride and Prejudice",
			author: "Jane Austen",
			gender: "Romance",
			stock: 7,
		},
	];

	const clientsArr = [
		{
			id: 1,
			name: "John",
			phone: "123-456-7890",
			email: "john@example.com",
		},
		{
			id: 2,
			name: "Marie",
			phone: "987-654-3210",
			email: "marie@example.com",
		},
		{
			id: 3,
			name: "Scot",
			phone: "987-654-3210",
			email: "scot@example.com",
		},
	];

	const loansArr = [
		{
			id: 1,
			bookId: 1,
			clientId: 1,
			loanDate: "2024-02-10",
		},
		{
			id: 2,
			bookId: 2,
			clientId: 1,
			loanDate: "2024-02-10",
		},
		{
			id: 3,
			bookId: 3,
			clientId: 1,
			loanDate: "2024-02-10",
		},
		{
			id: 4,
			bookId: 1,
			clientId: 2,
			loanDate: "2024-02-12",
		},
		{
			id: 5,
			bookId: 2,
			clientId: 2,
			loanDate: "2024-02-12",
		},
		{
			id: 6,
			bookId: 1,
			clientId: 3,
			loanDate: "2024-02-10",
			returnDate: "2024-03-10",
		},
	];

	clientsArr.forEach(c => clients.set(c.id, { ...c }));
	booksArr.forEach(b => books.set(b.id, { ...b }));
	loansArr.forEach(l => loans.set(l.id, { ...l }));
})();
