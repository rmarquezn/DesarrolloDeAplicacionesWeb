//1 Obtener las referencias de los elementos a interactuar

let post = $("#ButtonPost");
let clear = $("#ButtonClear");
let mark = $("#ButtonMark");
let del = $("#ButtonDelete");

// Registrar el Evento

post.on("click", TodoPost);
clear.on("click", TodoClear);
mark.on("click", TodoMark);
del.on("click", TodoDel);

function TodoPost(e) {
  e.preventDefault();

  let todo = $("#todoText").val();
  let list = $("#todoList");

  let div = $("<div>");
  let input = $("<input>");
  let label = $("<label>");

  input.attr("type", "checkbox");
  input.attr("name", "todo");

  label.text(todo);

  div.append(input);
  div.append(label);

  list.append(div);
  $("#todoText").val("");
}

function TodoClear() {
  let todos = $("#todoList").children();
  for (let i = 0; i < todos.length; i++) {
    let todo = $(todos[i]);
    todo.children("input").prop("checked", false);
  }
}

function TodoMark() {
  let todos = $("#todoList").children();
  for (let i = 0; i < todos.length; i++) {
    let todo = $(todos[i]);
    todo.children("input").prop("checked", true);
  }
}

function TodoDel() {
  let todos = $("#todoList").children();

  for (let i = 0; i < todos.length; i++) {
    let todo = $(todos[i]);
    if (todo.children("input").prop("checked")) {
      todo.remove();
    }
  }
}
