const formulario = document.getElementById("formulario");
formulario.addEventListener("submit", adicionarTarefa);

//Array para armazernar as tarefas
const tarefas = [];
const tarefasFinalizadas = [];

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
    const indiceTarefa = tarefas.indexOf(tarefa);
    const idCheckbox = "checkbox-" + indiceTarefa; 

    const novaTarefa = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = idCheckbox;
    novaTarefa.appendChild(checkbox);

    const label = document.createElement("label");
    label.htmlFor = idCheckbox;
    label.textContent = tarefa.nome + " Prazo de entrega: " + tarefa.data;
    novaTarefa.appendChild(label);

    checkbox.addEventListener( "change", () =>{
      if(checkbox.checked){
        tarefasFinalizadas.push(tarefa);
        tarefas.splice(indiceTarefa, 1);
        renderizarListaTarefas();
        renderizarListaTarefasFinalizadas();
      }
    });

    listaTarefasParaFazer.appendChild(novaTarefa);
  });
}

function renderizarListaTarefasFinalizadas(){
  const listaTarefasFinalizadas = document.getElementById("tarefas-finalizadas");
  listaTarefasFinalizadas.innerHTML = " ";

  tarefasFinalizadas.forEach((tarefa) =>{
    const novaTarefa = document.createElement("li");
    novaTarefa.textContent = tarefa.nome;
    listaTarefasFinalizadas.appendChild(novaTarefa);
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