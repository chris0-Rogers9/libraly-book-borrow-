const books = [
    { title: "The Great Gatsby", available: true },
    { title: "1984", available: true },
    { title: "To Kill a Mockingbird", available: true },
    { title: "Moby Dick", available: true }
];

function renderBooks() {
    const bookList = document.getElementById("book-list");
    bookList.innerHTML = "";
    books.forEach((book, index) => {
        const bookDiv = document.createElement("div");
        bookDiv.classList.add("book");
        bookDiv.innerHTML = `
            <span>${book.title}</span>
            <button class="${book.available ? 'borrow' : 'return'}" onclick="toggleBorrow(${index})">
                ${book.available ? 'Borrow' : 'Return'}
            </button>
        `;
        bookList.appendChild(bookDiv);
    });
}

function toggleBorrow(index) {
    books[index].available = !books[index].available;
    renderBooks();
}

document.addEventListener("DOMContentLoaded", renderBooks);
