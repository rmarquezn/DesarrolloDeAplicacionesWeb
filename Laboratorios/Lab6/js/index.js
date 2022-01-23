let lista = $(".Lista");

$(".agregar").on("click", function (e) {
  e.preventDefault();
  let caja = $('<li class="lis">');
  let item = $("<p>");
  let text = $("#newText").val();
  item.text(text);
  caja.append(item);
  caja.append('<button class="checar">check</button>');
  caja.append('<button class="del">delete</button>');
  lista.prepend(caja);
  $("#newText").val("");
});

$(document).on("click", ".checar", function (e) {
  e.preventDefault();
  console.log("hola");
  $(this).parent().toggleClass("chec");
});

$(document).on("click", ".del", function (e) {
  e.preventDefault();
  $(this).parent().remove();
});
