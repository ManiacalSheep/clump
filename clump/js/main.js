var cardArray = [];
var numberOfRows = 0;
var cardCounter = 0;

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

        numberOfRows = cardArray.length / 6;

        populateContainer(numberOfRows);

        renderRows(numberOfRows);

        //displayResults();
        
    

    },

});

//console.log(cardArray[0].image);


/*
function displayResults() {

    var myDiv = document.getElementById("test");

    for (i = 0; i < cardArray.length; i++) {
        console.log(cardArray[i].image)

        var node = document.createElement("LI");
        var textNode = document.createTextNode(cardArray[i].image);

        node.appendChild(textNode);

        myDiv.appendChild(node);
    }

    //myDiv.appendChild()

    
}
*/

function populateContainer(numberOfRows) {

    var rowContainer = document.getElementById("container");

    for (i = 0; i < numberOfRows; i++) {
        var newRow = document.createElement("DIV");
        newRow.className = "row";
        newRow.id = "row" + i;

        rowContainer.appendChild(newRow);
    }
}

function renderRows(numberOfRows) {

    for (i = 0; i < numberOfRows; i++) {

        for (j = 0; j < 6; j++) {

            renderCard(i, cardCounter);

            cardCounter += 1;

        }

        cardCounter += 1;

    }
}

function renderCard(i, cardCounter) {

    var currentRow = document.getElementById("row" + i);

    var newCol = document.createElement("DIV");
    newCol.className = "col";

    var newCard = document.createElement("DIV");
    newCard.className = "card";
    newCol.appendChild(newCard);

    var newImage = document.createElement("IMG");
    newImage.className = "card-img-top";
    newImage.src = cardArray[cardCounter].image;
    newCard.appendChild(newImage);

    var newTitle = document.createElement("H5");
    newTitle.className = "card-title";
    newTitle.innerHTML = cardArray[cardCounter].title;

    var newDescription = document.createElement("P");
    newDescription.innerHTML = cardArray[cardCounter].description;

    var newCardBody = document.createElement("DIV");
    newCardBody.className = "card-body";
    newCardBody.appendChild(newTitle);
    newCardBody.appendChild(newDescription);
    newCard.appendChild(newCardBody);

    var newDivider = document.createElement("DIV");
    newDivider.className = "divider";
    newCardBody.appendChild(newDivider);

    var newSourceButton = document.createElement("BUTTON");
    newSourceButton.type = "button";
    newSourceButton.className = "btn btn-outline-success btn-block";
    newSourceButton.innerHTML = "Source";
    newCardBody.appendChild(newSourceButton);

    var newLoveButton = document.createElement("BUTTON");
    newLoveButton.type = "button";
    newLoveButton.className = "btn btn-outline-primary";
    newLoveButton.innerHTML = "Love 0";
    newCardBody.appendChild(newLoveButton);

    var newHateButton = document.createElement("BUTTON");
    newHateButton.type = "button";
    newHateButton.className = "btn btn-outline-danger";
    newHateButton.innerHTML = "0 Hate";
    newCardBody.appendChild(newHateButton);

    currentRow.appendChild(newCol);

}





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

function cardWriteTest() {

    return '<div class="card"> <img src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" class="card-img-top" alt="..."> <div class="card-body"> <h5 class="card-title">Really looong card title test!</h5> Lorem ipsum dolor sit amet, consectetur adipiscing eluna aliqua. olor <div class="divider"></div> <button type="button" class="btn btn-outline-success btn-block">Source</button> <button onclick="this.innerHTML = incrementLove()" type="button" class="btn btn-outline-primary">Love 0</button> <button onclick="this.innerHTML = incrementHate()" type="button" class="btn btn-outline-danger">0 Hate</button> </div> </div>';
}

