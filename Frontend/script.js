document.addEventListener("DOMContentLoaded", function () {
    const bookContainer = document.getElementById("book-container");

    const books = [
        { title: "Atomic Habits", author: "James Clear" },
        { title: "Deep Work", author: "Cal Newport" },
        { title: "The Alchemist", author: "Paulo Coelho" }
    ];

    books.forEach(book => {
        let bookDiv = document.createElement("div");
        bookDiv.classList.add("book");
        bookDiv.innerHTML = `<h3>${book.title}</h3><p>${book.author}</p>`;
        bookContainer.appendChild(bookDiv);
    });
});

function searchBooks() {
    alert("Search functionality will be added soon!");
}
