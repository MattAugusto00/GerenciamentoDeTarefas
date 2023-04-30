const formulario = document.getElementById("formulario");
formulario.addEventListener("submit", adicionarTarefa);

function adicionarTarefa(evento) {
  evento.preventDefault();

  const nomeTarefa = document.getElementById("nome-tarefa").value;
  const dataTarefa = document.getElementById("prazo-tarefa").value;

  const listaTarefas = document.getElementById("lista-tarefas");
  const novaTarefa = document.createElement("li");
  novaTarefa.innerHTML = nomeTarefa + " Prazo de entrega: " + dataTarefa;

  listaTarefas.appendChild(novaTarefa);
}