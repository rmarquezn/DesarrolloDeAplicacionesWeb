$(document).ready(function () {
  // Start your code from here
  createButtons(animales);
});

let animales = ["dog", "cat", "bird", "cow", "tiger", "lion", "fox"];

function createButtons(aList) {
  aList.forEach((animal) => {
    let btn = $(`<button class="a-button">`);
    btn.text(animal);
    $("#animal-buttons").append(btn);
  });
}

$(document).on("click", ".a-button", function (e) {
  e.preventDefault();
  console.log($(this).text());
});

$(document).on("click", "#add-animal", function (e) {
  e.preventDefault();
  let btn = $(`<button class="a-button">`);
  btn.text($("#animal-input").val());
  $("#animal-buttons").append(btn);
});
