function pesquisar() {
    // Obtém a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value;
    
    if (campoPesquisa === ""){
        section.innerHTML = "<p>Nada foi encontrado</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()


    // Inicializa uma string vazia para armazenar os resultados formatados
    let resultados = "";
    let titulo = "";
    let descricao = "";

    // Itera sobre cada dado da lista de resultados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase();
        descricao = dado.Descricao.toLowerCase();
        if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)){
            // Concatena o HTML de cada resultado à string 'resultados'
            resultados += `
            <div class="item-resultado"> 
                <h2>${dado.titulo}</h2> 
                <p class="descricao-meta">${dado.Descricao}</p> 
                <a href="${dado.link}" target="_blank">Mais informações</a> </div>
        `;
        }        
    }

    if(resultados === ""){
        resultados = `
         <div class="item-resultado"> 
                <h2>Nada foi encontrada</h2> </div>                               
        `
    }
    
    // Atualiza o conteúdo HTML da seção com os resultados formatados
    section.innerHTML = resultados;
}

