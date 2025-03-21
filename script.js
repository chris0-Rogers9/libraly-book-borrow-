const books = [
    { title: "The Great Gatsby", available: true },
    { title: "1984", available: true },
    { title: "To Kill a Mockingbird", available: true },
    { title: "Moby Dick", available: true }
];
const borrowedBooks = [];

document.addEventListener("DOMContentLoaded", () => {
    renderBooks();
});

function renderBooks() {
    const bookList = document.getElementById("book-list");
    bookList.innerHTML = "";
    books.forEach((book, index) => {
        if (book.available) {
            const bookDiv = document.createElement("div");
            bookDiv.classList.add("book");
            bookDiv.innerHTML = `
                <span>${book.title}</span>
                <button class="borrow" onclick="borrowBook(${index})">Borrow</button>
            `;
            bookList.appendChild(bookDiv);
        }
    });
    renderBorrowedBooks();
}

function renderBorrowedBooks() {
    const borrowedList = document.getElementById("borrowed-list");
    borrowedList.innerHTML = "";
    borrowedBooks.forEach((book, index) => {
        const bookDiv = document.createElement("div");
        bookDiv.classList.add("borrowed-book");
        bookDiv.innerHTML = `
            <span>${book.title}</span>
            <button class="return" onclick="returnBook(${index})">Return</button>
        `;
        borrowedList.appendChild(bookDiv);
    });
}

function borrowBook(index) {
    borrowedBooks.push(books[index]);
    books[index].available = false;
    renderBooks();
}

function returnBook(index) {
    const bookTitle = borrowedBooks[index].title;
    const bookIndex = books.findIndex(book => book.title === bookTitle);
    books[bookIndex].available = true;
    borrowedBooks.splice(index, 1);
    renderBooks();
}

