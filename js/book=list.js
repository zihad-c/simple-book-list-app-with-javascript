// Book class to represent a book 
class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
}

// UI  to handle UI tasks

const title = document.getElementById('title');
const author = document.getElementById('author');
const year = document.getElementById('year');
const btn = document.getElementById('add-book');
const bookList = document.getElementById('book-list');

// Store class to handle storage 


// Event to display books 
btn.addEventListener('click', function(e){
    e.preventDefault();

    if(title.value == '' || author.value == '' || year.value == '') {
        alert('please type something');
    }

    /* else if(year.value !== number){
        alert('please input a year');
    } */

    else {
        const newRow = document.createElement('tr');
    
    const newTitle = document.createElement('th');
    newTitle.innerHTML = title.value;
    title.value = '';
    newRow.appendChild(newTitle);

    const newAuthor = document.createElement('th');
    newAuthor.innerHTML = author.value;
    author.value = '';
    newRow.appendChild(newAuthor);

    const newYear = document.createElement('th');
    newYear.innerHTML = year.value;
    year.value = '';
    newRow.appendChild(newYear);

    /* const del = document.createElement('th');
    del.innerHTML = `X`;
    newRow.appendChile(del);
    del.innerHTML.addEventListener('click', function(e) {
        del(e.target);
    }) */

    bookList.appendChild(newRow);
    }
})

// Event to add a book 


// Event to remove a book 



