
function searchName() {
    resetResults();
    var searchInput = $("#pokemonID").val();
    var link = baseURL + "name=" + searchInput + "";

    $.getJSON(link, function (data) {
        $.each(data.cards, function (key, val) {
            buildResults(val);
        });
    });
}

function searchSet() {
    var link = "https://api.pokemontcg.io/v1/cards?setCode=sm7";

    $.getJSON(link, function (data) {
        $.each(data.cards, function (key, val) {
            buildResults(val);
        });
    });
}

function resetResults() {
    $('#grid').empty();
}

function buildResults(value) {
    var grid = document.getElementById("grid");
    grid.innerHTML += "<div id='card' style='float:left'>" +
        "<div id = 'text'>" +
        "<b> ID: </b>" + value.id + "</br>" +
        "<b> Name: </b>" + value.name + "</br>" +
        "<b> Pokedex Number: </b>" + value.nationalPokedexNumber + "</br>" +
        "<div id = 'image' >" +
        "<img src='" + value.imageUrlHiRes + "' height='341px' width='241px'> " +
        "</div>" +
        "</div>" +
        "</div>";
}