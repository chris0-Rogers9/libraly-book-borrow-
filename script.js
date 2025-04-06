document.addEventListener("DOMContentLoaded", () => {
    const libraryDiv = document.getElementById("library");
    const bookForm = document.getElementById("bookForm");
    
    let books = [
        { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925, available: true },
        { id: 2, title: "1984", author: "George Orwell", year: 1949, available: true },
        { id: 3, title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960, available: true }
    ];

    function displayBooks() {
        libraryDiv.innerHTML = ""; 

        books.forEach(book => {
            const bookDiv = document.createElement("div");
            bookDiv.classList.add("book");

            bookDiv.innerHTML = `
                <h2>${book.title}</h2>
                <p><strong>Author:</strong> ${book.author}</p>
                <p><strong>Year:</strong> ${book.year}</p>
                <p><strong>Status:</strong> ${book.available ? "Available" : "Borrowed"}</p>
                <button class="borrow" onclick="borrowBook(${book.id})" ${book.available ? "" : "disabled"}>
                    Borrow
                </button>
            `;

            libraryDiv.appendChild(bookDiv);
        });
    }

    window.borrowBook = function(bookId) {
        const book = books.find(b => b.id === bookId);
        if (book && book.available) {
            book.available = false;
            displayBooks();
        }
    };

    bookForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const title = document.getElementById("title").value;
        const author = document.getElementById("author").value;
        const year = parseInt(document.getElementById("year").value);

        if (title && author && year) {
            books.push({ id: books.length + 1, title, author, year, available: true });
            displayBooks();
            bookForm.reset();
        }
    });

    displayBooks();
});
