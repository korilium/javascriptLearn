const myLibarray = [] 

function Book(title, author, year, pages, read) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.pages = pages;  
    this.read = read;
}


// Add event listener ONCE, not inside a function
document.getElementById("bookForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const year = document.getElementById("year").value; 
    const pages = document.getElementById("pages").value;
    const read = document.getElementById("read").checked;

    const book = new Book(title, author,year, pages, read);
    myLibarray.push(book);
    displayBooks();
});

// Display books in the library
function displayBooks() {
    let libraryDiv = document.getElementById("library");
    if (!libraryDiv) {
        libraryDiv = document.createElement("div");
        libraryDiv.id = "library";
        document.body.appendChild(libraryDiv);
    }
    libraryDiv.innerHTML = "";
    myLibarray.forEach((book, index) => {
        const bookDiv = document.createElement("div");
        bookDiv.classList.add("book");
        bookDiv.innerHTML = `
            <strong>Title:</strong> ${book.title} <br>
            <strong>Author:</strong> ${book.author} <br>
            <strong>Year:</strong> ${book.pages} <br>
            <label> <strong> Read: </strong> 
                <input type="checkbox" class = "read-checkbox" data-index = "${index}" ${book.read ? "checked" : ""}> 
            </label> 
            <button class="remove-btn" data-index="${index}">Remove</button>
            <hr>
        `;
        libraryDiv.appendChild(bookDiv);
    });
        const checkboxes = libraryDiv.querySelectorAll('.read-checkbox');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const idx = this.getAttribute('data-index');
            myLibarray[idx].read = this.checked;
            // Optionally re-render to reflect changes
            // displayBooks();
        });
    });

        const removeButtons = libraryDiv.querySelectorAll('.remove-btn');
    removeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const idx = this.getAttribute('data-index');
            myLibarray.splice(idx, 1); // Remove the book from the array
            displayBooks(); // Re-render the library
        });
    });
} 