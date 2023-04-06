document.getElementById("task-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Evita que a página seja recarregada
  
  var novaTarefa = {
    title: document.getElementById("title").value,
    description: document.getElementById("description").value,
    dueDate: document.getElementById("due-date").value,
    status: getStatus()
  };
  
  var novaTarefaLi = document.createElement("li");
  novaTarefaLi.innerHTML = '<input type="checkbox" id="' + novaTarefa.title + '" name="' + novaTarefa.title + '">' +
    '<label for="' + novaTarefa.title + '">' + novaTarefa.title + '</label>';
  document.querySelector(".taskList").appendChild(novaTarefaLi);
  
  document.getElementById("task-form").reset();
});

function getStatus() {
  if (document.getElementById("aFazer").checked) {
    return "a fazer";
  } else if (document.getElementById("emAndamento").checked) {
    return "em andamento";
  } else if (document.getElementById("finalizado").checked) {
    return "finalizado";
  } else {
    return "";
  }
}