


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
    return '<h1 class="text-center title text-light">hey fucker</h1>';
}


function cardWriteTest() {
    return '<div class="card"> <img src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" class="card-img-top" alt="..."> <div class="card-body"> <h5 class="card-title">Really looong card title test!</h5> Lorem ipsum dolor sit amet, consectetur adipiscing eluna aliqua. olor <div class="divider"></div> <button type="button" class="btn btn-outline-success btn-block">Source</button> <button onclick="this.innerHTML = incrementLove()" type="button" class="btn btn-outline-primary">Love 0</button> <button onclick="this.innerHTML = incrementHate()" type="button" class="btn btn-outline-danger">0 Hate</button> </div> </div>';
}

var url = 'https://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=48ffb7597ebd4173945c6ad0a0bc90a3';
var req = new Request(url);
fetch(req)
    .then(function(response) {
        console.log(response.json());
    })

