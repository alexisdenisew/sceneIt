function sendApiRequest() {
    
    
    var input = document.getElementById("input").value
    
    var giphyApiKey = "b88520c728184ddea08074d5cfaefa2d"
    
    var giphyApiUrl = `https://api.giphy.com/v1/gifs/search?q=${input}&api_key=${giphyApiKey}`


    fetch(giphyApiUrl)
    .then(function(data) {
        return data.json()
    })
    .then(function(json) {
        // here we'll code out what we want to do with the data
        console.log(json.data["0"].images.fixed_height.url)
        var imgPath = json.data["0"].images.fixed_height.url
        var img = document.createElement("img")
        img.setAttribute("src", imgPath)
        document.body.appendChild(img)
    })
}