$.get("https://www.googleapis.com/books/v1/volumes?q=isbn:0439023521", function(result){
    console.log(result)
})

$.get("https://www.googleapis.com/books/v1/volumes?q=title:Name of the Wind", function(result){
    console.log(result.items[0])
})


// Exercise 1
exDivider('1');

const fetchBook = (ISBN) => {
  $.ajax({
    method: "GET",
    url: `https://www.googleapis.com/books/v1/volumes?q=isbn:${ISBN}`,
    success: function (data) {
        console.log(data.items[0].volumeInfo.title);
    },
    error: function (xhr, text, error) {
        console.log(text);
    }
  }); 
}

fetchBook(9782806269171)
fetchBook(1440633908)
fetchBook(9781945048470)
fetchBook(9780307417138)


// Exercise 2
exDivider('2');

const fetchBook2 = (queryType, queryValue) => {
  $.ajax({
    method: "GET",
    url: `https://www.googleapis.com/books/v1/volumes?q=${queryType}:${queryValue}`,
    success: function (data) {
        console.log(data.items[0].volumeInfo.title);
    },
    error: function (xhr, text, error) {
        console.log(text);
    }
  }); 
}

fetchBook2('isbn',9782806269171)
fetchBook2("isbn", 9789814561778)
fetchBook2("title", "How to Win Friends and Influence People")


// Exercise 3
exDivider('3');



const fetchBook3 = (queryType, queryValue) => {
  $.ajax({
    method: "GET",
    url: `https://www.googleapis.com/books/v1/volumes?q=${queryType}:${queryValue}`,
    success: function (data) {

      data.items.forEach(element => {
        console.log(element.volumeInfo.title);
        console.log(element.volumeInfo.authors);
        console.log(element.volumeInfo.industryIdentifiers);

      });

      
    },
    error: function (xhr, text, error) {
        console.log(text);
    }
  }); 
}


fetchBook3('isbn',9782806269171)
fetchBook3("isbn", 9789814561778)
fetchBook3("title", "How to Win Friends and Influence People")

function exDivider(number) {
  console.log(" ");
  console.log(" ");
  console.log("==========================");
  console.log("Exercise " + number);
  console.log("==========================");
  console.log(" ");
}