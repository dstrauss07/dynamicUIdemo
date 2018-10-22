"use strict";

(function(){
    var output = document.getElementById("book-list-data"),
    sortButton = documnet.getElementById("sort-by-Author"),
    clearButton = document.getElementById("clear-button"),
    addButton= document.getElementById("add-button"),
    titleText= document.getElementById("title"),
    authorFirst= document.getElementById("author-first-name"),
    authorLast= document.getElementById("author-last-name"),
    publishYear=  document.getElementById("publish-year"),
    books= [];

var Book = function Book(title,authorFirst,authorLast,publishYear){
    this.title= title;
    this.AuthorFirstName = authorFirst;
    this.AuthorLastName = authorLast;
    this.Year  = publishYear;
};

    addButton.addEventListener("click",function(){
        output.innerHTML = "";
        var newBook = Book(titleText.value, authorFirst.value, authorLast.value, publishYear.value);
        books.push(newBook);
        output.innerHTML += books;
    
    })
})();