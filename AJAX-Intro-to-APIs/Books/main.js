
const neruoscienceComputerBooks = []

for(let i = 0; i < 3; i++) {

  $.ajax({
    method: "GET",
    url: `https://www.googleapis.com/books/v1/volumes?q=title:neuroscience&maxResults=40&startIndex=${i*40}`,
    success: function (data) {
      
      data.items.forEach(book => {

        if(book.volumeInfo.categories && book.volumeInfo.categories.length){
          for (let category of book.volumeInfo.categories) {
            if (category === "Computers"){
              neruoscienceComputerBooks.push(book.volumeInfo.title)
              $('#results').append(`<h4>${book.volumeInfo.title}</h4>`)
              break
            }
              
          }
        }
      })
      
      console.log(neruoscienceComputerBooks)
      
    },
    error: function (xhr, text, error) {
        console.log(text);
    }
  }); 

}


