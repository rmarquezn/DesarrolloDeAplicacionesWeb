$(document).ready(function () {
  // Start your code from here
  createButtons(animales);
});

// arreglo de animales
let animales = ["dog", "cat", "bird", "cow", "tiger", "lion", "fox"];

// funcion para crear botones iniciales
function createButtons(aList) {
  aList.forEach((animal) => {
    let btn = $(`<button class="a-button">`);
    btn.text(animal);
    $("#animal-buttons").append(btn);
  });
}

// agregar boton de animal con el formulario
$(document).on("click", "#add-animal", function (e) {
  e.preventDefault();
  let btn = $(`<button class="a-button">`);
  btn.text($("#animal-input").val());
  $("#animal-buttons").append(btn);
});

// click en boton de animal
$(document).on("click", ".a-button", function (e) {
  e.preventDefault();
  getGifs($(this).text());
});

function getGifs(aString) {
  console.log(aString);
  let peticion = {
    url:
      "https://api.giphy.com/v1/gifs/search?api_key=BF9ojDjo4vFsK2C4OmsdmjMbi3jeWb8O&q=" +
      aString +
      "&limit=10&offset=0&lang=en",
    success: function (res) {
      console.log(res.data);
      $("#animals").empty();
      res.data.forEach((gif) => {
        item = $(`<div class ="animal-item">`);
        rating = $(`<p>Rating: ${gif.rating}</p>`);
        image = $("<img>");
        image.attr("src", gif.images.fixed_height.url);
        item.append(rating);
        item.append(image);
        $("#animals").append(item);
        console.log(gif.rating);
      });
    },
    error: function () {
      console.log("Hubo un error");
    },
  };
  $.ajax(peticion);
}

// API Key: BF9ojDjo4vFsK2C4OmsdmjMbi3jeWb8O
// concatenar animal al url
