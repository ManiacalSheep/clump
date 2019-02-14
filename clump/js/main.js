var cardArray = [];

function CardObject (cardObjectId, image, title, description, url, source, loveValue, hateValue){
    this.cardObjectId = cardObjectId;
    this.image = image;
    this.title = title;
    this.description = description;
    this.url = url;
    this.source = source;
    this.loveValue = loveValue;
    this.hateValue = hateValue;
}





$.ajax({

    url:'https://newsapi.org/v2/top-headlines?country=us&pageSize=36&apiKey=48ffb7597ebd4173945c6ad0a0bc90a3',
    dataType: 'json',
    type: 'get',
    cache: false,
    success: function(data) {

        var cardObjectId = 0;

        $(data.articles).each(function(index, value) {
            cardArray.push(new CardObject(cardObjectId, value.urlToImage, value.title, value.description, value.url, value.source.name, 0, 0)); 
            cardObjectId++;
        });

        console.log(cardArray);

    

    },
});



var loveCounter = 0;
var hateCounter = 0;

function incrementLove() {
    loveCounter += 1;
    return "Love " + loveCounter;
}

function incrementHate() {
    hateCounter += 1;
    return hateCounter + " Hate";
}

function docWriteTest() {

    return;
}

function cardWriteTest() {

    return '<div class="card"> <img src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" class="card-img-top" alt="..."> <div class="card-body"> <h5 class="card-title">Really looong card title test!</h5> Lorem ipsum dolor sit amet, consectetur adipiscing eluna aliqua. olor <div class="divider"></div> <button type="button" class="btn btn-outline-success btn-block">Source</button> <button onclick="this.innerHTML = incrementLove()" type="button" class="btn btn-outline-primary">Love 0</button> <button onclick="this.innerHTML = incrementHate()" type="button" class="btn btn-outline-danger">0 Hate</button> </div> </div>';
}

