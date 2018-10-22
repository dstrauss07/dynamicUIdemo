"use strict";

(function(){
    var output = document.getElementById("book-list-data"),
    sortButton = document.getElementById("sort-by-Author"),
    clearButton = document.getElementById("clear-button"),
    addButton= document.getElementById("add-button"),
    titleText= document.getElementById("title"),
    authorFirst= document.getElementById("author-first-name"),
    authorLast= document.getElementById("author-last-name"),
    publishYear=  document.getElementById("publish-year"),
    books= [];

var Book = function Book(titleText,authorFirst,authorLast,publishYear){
    this.title= titleText;
    this.AuthorFirstName = authorFirst;
    this.AuthorLastName = authorLast;
    this.Year  = publishYear;
    this.construct = "<p>" + this.title + " by " + this.AuthorFirstName + " " + this.AuthorLastName + " published in " + this.Year + "</p>";
};

    var renderList = function renderList(){
        //TODO loop over list of book and write them.
        output.innerHTML = " ";
        books.forEach(function(book,idx,arr){
           // output.innerHTML += book.construct;
            var newDiv = document.createElement("div"),
                newHeading = document.createElement("h2"),
                newPara = document.createElement("p");

            newHeading.innerText = book.title;
            newPara.innerHTML = "<em>By</em> " + book.AuthorFirstName + " " + book.AuthorLastName + " Published in " + book.Year;
            newDiv.appendChild(newHeading);
            newDiv.appendChild(newPara);
            output.appendChild(newDiv);
        });
        
        // for(var i=0; i<books.length;i++){
        //     output.innerHTML += books[i].construct;
        // }
    };

    addButton.addEventListener("click",function(){
        //output.innerHTML = "";
        var newBook = new Book(titleText.value, authorFirst.value, authorLast.value, publishYear.value);
        books.push(newBook);
        renderList();
    
    });

    clearButton.addEventListener("click",function(){
        titleText.value = "";
        authorFirst.value ="";
        authorLast.value="";
        publishYear.value="";
    });

    sortButton.addEventListener("click",function(){
        books = books.sort(function(a,b){
            var nameA = a.AuthorLastName.toUpperCase();
            var nameB = b.AuthorLastName.toUpperCase();
            if(nameA < nameB){
                return -1;
            }
            if(nameA > nameB){
                return 1;
            }
            return 0;
        });

        renderList();

    });


})();