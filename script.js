const containerVideos = document.querySelector(".videos__container");

// ASYNC mostra que o codigo a seguir é assincrono
//AWAIT ele vai aguardar que um processo para que ele possa ser rodado
async function buscarEMostrarVideos(){
    //TRY ele tenta fazer o código e se aparecer erros o CATCH pega o erro
    try{
        const busca = await fetch("http://localhost:3000/videos")
        const videos = await busca.json()

            videos.forEach((video)=> {
                if(video.categoria == ""){
                    throw new Error('Vídeo não tem categoria')
                }

                containerVideos.innerHTML += `
                <li class="videos__item">
                    <iframe src="${video.url}" title="${video.titulo}" frameborder="0" allowfullscreen></iframe>
                    <div class="descricao-video">
                        <img class="img-canal" src="${video.imagem} alt="Logo do Canal">
                        <h3 class="titulo-video">${video.titulo}</h3>
                        <p class="titulo-canal">${video.descricao}</p>
                        <p class="categoria" hidden>${video.categoria}</p>
                    </div>
                </li>
                `;
            })
    }catch(error){
        containerVideos.innerHTML = `<p>Houve um erro ao carregar os vídeos: ${error}</p>`
   
    }
}

buscarEMostrarVideos()

//Código omitido

//Código omitido

const barraDePesquisa = document.querySelector(".pesquisar__input");

barraDePesquisa.addEventListener("input", filtrarPesquisa);

function filtrarPesquisa(){
    const videos = document.querySelectorAll(".videos__item");

    if(barraDePesquisa.value != ""){
        for(let video of videos){
            let titulo = video.querySelector(".titulo-video").textContent.toLowerCase();
            let valorFiltro = barraDePesquisa.value.toLowerCase();

            if(!titulo.includes(valorFiltro)){
                video.style.display = "none";
            } else {
                video.style.display = "block";
            }

        }
    }else{
        video.style.display = "block"
    }
}
const botaoCategoria = document.querySelectorAll('.superior__item')
botaoCategoria.forEach((botao) => {
    let nomeCategoria = botao.getAttribute("name")
    botao.addEventListener("click", () => filtrarCategoria(nomeCategoria))
})  

function filtrarCategoria(filtro){
    const videos = document.querySelectorAll('.videos__item')
    for(let video of videos){
        let categoria = video.querySelector('.categoria').textContent.toLowerCase()
        let valorFiltro = filtro.toLowerCase()

        if(!categoria.includes(valorFiltro) && valorFiltro != 'tudo'){
            video.style.display = "none"
        }else{  
            video.style.display = "block"
        }
    }
}

    //.THEN
    // .then(res => res.json())
    // .then((videos) =>

    //Depois de executar o try catch o FINALLY roda independente de qualquer erro
    // }finally{
    //     alert('Isso sempre acontece')
    // }

   // Callback é uma função que é passada como argumento para outra função e é executada após a conclusão de uma operação assíncrona ou evento específico
   // são amplamente utilizados para lidar com tarefas assíncronas, como chamadas de API, leitura de arquivos, eventos de usuário e muito mais.

   // O "Callback Hell" é um termo usado para descrever a situação em que múltiplas chamadas de função com callbacks são aninhadas profundamente dentro de outras chamadas de função. Isso cria um código que se assemelha a uma pirâmide, tornando-o difícil de ler, manter e depurar.
   // Embora os callbacks sejam úteis para controlar fluxos de execução assíncronos, é importante evitar o "Callback Hell" sempre que possível. Alternativas, como o uso de Async-Await, tornam o código mais legível e manutenível