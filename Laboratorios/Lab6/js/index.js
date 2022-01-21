let lista = $(".Lista");

$(".agregar").on("click", function () {
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

$(".checar").on("click", function (e) {
  e.preventDefault();
  $(this).parent().toggleClass("chec");
});

$(".del").on("click", function (e) {
  e.preventDefault();
  $(this).parent().remove();
});
