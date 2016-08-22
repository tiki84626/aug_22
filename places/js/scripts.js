// Back End Logic
function Place(location, country, language, population, timeOfYear, landmarks) {
  this.location = location;
  this.country = country;
  this.language = language;
  this.population = population;
  this.timeOfYear = timeOfYear;
  this.landmarks = landmarks;
}

var belize = new Place("Belize", "Belize", "English", "368,310", "Winter", "Mayan Civilizations");
var paris = new Place("Paris", "France", "French", "66,736,000", "Summer", "Louve");
var bali = new Place("Bali", "Indonesia", "Indonesian", "4,225,000", "Spring", "Monkey Forest");
var dublin = new Place("Dublin", "Ireland", "English", "527,610", "Winter", "Pubs");
var newzealand = new Place("New Zealand", "Australia", "English", "4,708,000", "Summer", "Prancing Pony");

var placeArray = [belize, paris, bali, dublin, newzealand];
var valueArray = ["location", "country", "language", "population", "timeOfYear", "landmarks"];

function resetFields() {
    $("input#new-place").val("");
    $("input#new-country").val("");
    $("input#new-language").val("");
    $("input#new-population").val("");
    $("input#new-timeOfYear").val("");
    $("input#new-landmarks").val("");
}

function addPlace(place) {
    var div = document.createElement('div');
    div.className = 'favplace btn-group';
    div.innerHTML = '<button class="placeSelect btn btn-success btn-inline"' + 'id="' + (place.replace(/\s+/g, '')).toLowerCase() + '">' + place + '</button>';

    document.getElementById('placeButtons').appendChild(div);
}

// Front End Logic
$(document).ready(function() {
  $('form').submit(function(event) {
    event.preventDefault();

    var userPlace = $("input#new-place").val();
    var userCountry = $('input#new-country').val();
    var userLanguage = $('input#new-language').val();
    var userPopulation = $('input#new-population').val();
    var userTimeOfYear = $('input#new-timeOfYear').val();
    var userLandmarks = $('input#new-landmarks').val();
    var newPlace = new Place(userPlace, userCountry, userLanguage, userPopulation, userTimeOfYear, userLandmarks);

    $("#placeButtons").append(addPlace(newPlace.location));

      $(".placeSelect").last().click(function() {
        $("#placeInfo").empty();
        for (var i = 0; i < valueArray.length; i++) {
          $("ul#placeInfo").append("<li>" + newPlace[valueArray[i]] + "</li>");
        }
        $(".information").show();
      });

    placeArray.push(newPlace);
    resetFields();
  });

  for (var i = 0; i < placeArray.length; i++) {
    $("#placeButtons").append(addPlace(placeArray[i].location));
  }

  $(".placeSelect").click(function() {
    $("#placeInfo").empty();
    for (var i = 0; i < valueArray.length; i++) {
      $("ul#placeInfo").append("<li>" + eval($(this).attr('id'))[valueArray[i]] + "</li>");
    }
    $(".information").show();
  });
});
