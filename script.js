// Mudando a cor de fundo

const container = document.querySelector('.container');

function padrao(){

    container.style.background = 'linear-gradient(135deg, #153677, #08465f)';

}

function vermelho(){

    container.style.background = 'linear-gradient(135deg, #771c15, #5f1708)';

}

function roxo(){

    container.style.background = 'linear-gradient(135deg, #3b1577, purple)';

}

function amarelo(){

    container.style.background = 'linear-gradient(135deg, #776f1567, yellow)';

}

function verde(){

    container.style.background = 'linear-gradient(135deg, #4b7715, green)';

}

// Pegando os elementos necessários

// Input text

const inputBox = document.getElementById('inputBox');

// Lista ul

const listContainer = document.getElementById('listContainer');

// Função no momento do clique do botão

function addTask(){

    if (inputBox.value === ''){

        alert("Você precisa inserir alguma tarefa!")

    } else {

        // Agregando uma nova li a cada clique

        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        
        // Inserindo o botão (x) para poder excluir a li

        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);

    }

    // Limpando a caixa de texto

    inputBox.value = '';

    saveData();

}

// Ao clicar na li (tarefa) ou no span (x), fazer algo

listContainer.addEventListener("click", function (e){

    if (e.target.tagName === "LI"){

        e.target.classList.toggle('checked');

        saveData();

        //  Ao clicar na LI, vai sublinhar a tarefa

    } else if (e.target.tagName === "SPAN"){

        e.target.parentElement.remove();

        saveData();

        // Ao clicar no SPAN, exclui o elemento pai, ou seja, a LI

    }

});

// Função para salvar as tarefas dos usuários

function saveData(){

    // Armazenando os dados do usuário no localStorage

    localStorage.setItem('data', listContainer.innerHTML);

}

// Função para mostrar as tarefas dos usuários pelo localStorage

function showTask(){

    listContainer.innerHTML = localStorage.getItem('data');

}

// Executando a função de mostrar as tarefas

showTask();