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
  $("#animal-input").val("");
});

// click en boton de animal
$(document).on("click", ".a-button", function (e) {
  e.preventDefault();
  getGifs($(this).text());
});

function getGifs(aString) {
  let peticion = {
    url:
      "https://api.giphy.com/v1/gifs/search?api_key=BF9ojDjo4vFsK2C4OmsdmjMbi3jeWb8O&q=" +
      aString +
      "&limit=10&offset=0&lang=en",
    success: function (res) {
      $("#animals").empty();
      res.data.forEach((gif) => {
        item = $(`<div class ="animal-item">`);
        rating = $(`<p>Rating: ${gif.rating}</p>`);
        image = $(`<img class="animal-image">`);
        image.attr("data-still", gif.images.fixed_height_still.url);
        image.attr("data-animate", gif.images.fixed_height.url);
        image.attr("data-state", "still");
        image.attr("src", image.attr("data-still"));
        item.append(rating);
        item.append(image);
        $("#animals").append(item);
      });
    },
    error: function () {
      console.log("Hubo un error");
    },
  };
  $.ajax(peticion);
}

// click en imagen
$(document).on("click", ".animal-image", function (e) {
  e.preventDefault();
  if ($(this).attr("data-state") == "still") {
    $(this).attr("data-state", "animate");
    $(this).attr("src", $(this).attr("data-animate"));
  } else {
    $(this).attr("data-state", "still");
    $(this).attr("src", $(this).attr("data-still"));
  }
});
