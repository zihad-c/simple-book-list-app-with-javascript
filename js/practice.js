// UI class to handle UI tasks

class UI {
    function displayBooks() {
        const storedBooks = [
            {
                title: 'Book One',
                author: 'John Doe',
                year: 2018
            },
            {
                title: 'Book Two',
                author: 'Johnny Dui',
                year: 2019
            },
            {
                title: 'Book Three',
                author: 'Jhunny Deen',
                year: 2020
            },
        ];

        const books = storedBooks;

        books.forEach(book => UI.addBookToList(book));

    }
}

function addBookToList(book) {
    const list = document.getElementById('book-list');

    const row = document.createElement('tr');

    row.innerHTML = ``
} 