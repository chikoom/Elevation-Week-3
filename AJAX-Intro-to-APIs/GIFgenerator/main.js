const giphyAPIKey = 'DKiA3kL5riYRm73jOgdluRNehaCQlaex'


const findAGif = query => {

  $.ajax({
    method: "GET",
    url: `http://api.giphy.com/v1/gifs/search?api_key=${giphyAPIKey}&q=${query}&limit=5`,
    success: function (data) {

      $('#results-container').empty()
      const embedeUrls = data.data.map(gifElement => gifElement.embed_url)
      embedeUrls.forEach( emUrl => 
        $('#results-container').append(`
          <div class="result-frame">
            <iframe data-src="${emUrl}" class="giframe" src="${emUrl}"></iframe>
            <button class="addToFavorite">Save</button>
          </div>
        `)
      )

      $('#query').val('')
        
    },
    error: function (xhr, text, error) {
        console.log(text);
    }
  }); 

}

$('#btnSearch').on('click', function(){
  findAGif($('#query').val())
})

$('#results-container').on('click','.addToFavorite', function(){

  const gifSrc = $(this).closest('.result-frame').find('.giframe').data().src
  $('#favourites-container').append(`
    <div class="result-frame">
      <iframe data-src="${gifSrc}" class="giframe" src="${gifSrc}"></iframe>
      <button class="removeFromFavorite">Remove</button>
    </div>
  `)

  $(this).closest('.result-frame').remove()

})

$('#favourites-container').on('click','.removeFromFavorite', function(){

  $(this).closest('.result-frame').remove()

})