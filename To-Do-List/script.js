/*função inserir */

function inserir(){
    /*Pega o elemento digitado */
    var elemento= document.getElementById("valor-tarefas").value;
    if(elemento!==""){
        /*Cria uma TAG em HTML e preenche com o valor do elemento*/
        var tarefa= document.createElement("div");
        tarefa.className= "tarefas-a-fazer";
        /*Cria as divs filhas */
        var checkbox= document.createElement("div");
        checkbox.className="check-box";

        /*icone de check */
        var circle= document.createElement("i");
        circle.className= "fa-regular fa-circle";

        var conteudo= document.createElement("div");
        conteudo.className="conteudo-tarefa";

        var editar=document.createElement("div");
        editar.className="editar";

        var botao_delet= document.createElement("div");
        botao_delet.className="deletar";

        /*Ícone editar */
        var pencil= document.createElement("i");
        pencil.className="fa-solid fa-pen-to-square";

        /*icone de deletar*/
        var trash= document.createElement("i");
        trash.className= "fa-solid fa-trash";

        /*Preenche com o conteudo */
        conteudo.textContent= elemento;
        /*Inserir no #container-lista*/
        var container= document.getElementById("container-lista");
        tarefa.appendChild(checkbox);
        checkbox.appendChild(circle);
        tarefa.appendChild(conteudo);
        tarefa.appendChild(editar);
        editar.appendChild(pencil);
        tarefa.appendChild(botao_delet);
        botao_delet.appendChild(trash);
        container.appendChild(tarefa);
        
        /*Limpa o campo após adicionar */
        document.getElementById("valor-tarefas").value="";

        /*Função de deletar */
        var botao_deletar= trash;
        var container= document.getElementById("container-lista");
        botao_deletar.addEventListener("click", (event)=>{
            container.removeChild(event.target.parentNode.parentNode);
        });

        /*Função check e descheck*/
        circle.addEventListener("click", ()=>{
            if(circle.className==="fa-regular fa-circle"){
                circle.className= "fa-solid fa-circle-check";
                tarefa.className="tarefa-marcada";
            } else{
                circle.className="fa-regular fa-circle";
                tarefa.className="tarefas-a-fazer";
            }
        });

    }
}

/*Chamar função ao clicar no botão */
var botao= document.getElementById("btn-add");
botao.addEventListener("click", inserir);