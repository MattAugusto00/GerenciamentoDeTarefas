const formulario = document.getElementById("formulario");
formulario.addEventListener("submit", adicionarTarefa);

//Array para armazernar as tarefas
const tarefas = [];

//Adiciona a tarefa ao array em ordem crescente de data
function adicionarTarefaAoArray(tarefa){
  tarefas.push(tarefa);
  tarefas.sort((a, b) => new Date(a.data) - new Date(b.data));
}

//Renderiza a lista de tarefas em ordem usando o array de tarefas
function renderizarListaTarefas(){
  const listaTarefasParaFazer = document.getElementById("lista-tarefas-para-fazer");
  listaTarefasParaFazer.innerHTML = " ";

  tarefas.forEach((tarefa) =>{
    const novaTarefa = document.createElement("li");
    novaTarefa.innerHTML = tarefa.nome + " Prazo de entrega: " + tarefa.data;
    listaTarefasParaFazer.appendChild(novaTarefa);
  });
}

function adicionarTarefa(evento) {
  evento.preventDefault();

  const nomeTarefa = document.getElementById("nome-tarefa").value;
  const dataTarefa = document.getElementById("prazo-tarefa").value;

  const tarefa = {
    nome: nomeTarefa,
    data: dataTarefa,
  };

  //Adiciona a tarefa ao array e renderiza a lista de tarefas
  adicionarTarefaAoArray(tarefa);
  renderizarListaTarefas();
}