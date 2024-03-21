const containerVideos = document.querySelector(".videos__container");

// ASYNC mostra que o codigo a seguir é assincrono
//AWAIT ele vai aguardar que um processo para que ele possa ser rodado
async function buscarEMostrarVideos(){
    const busca = await fetch("http://localhost:3000/videos")
    const videos = await busca.json()
    //.THEN
    // .then(res => res.json())
    // .then((videos) =>
        videos.forEach((video)=> {
            containerVideos.innerHTML += `
            <li class="videos__item">
                <iframe src="${video.url}" title="${video.titulo}" frameborder="0" allowfullscreen></iframe>
                <div class="descricao-video">
                    <img class="img-canal" src="${video.imagem} alt="Logo do Canal">
                    <h3 class="titulo-video">${video.titulo}</h3>
                    <p class="titulo-canal">${video.descricao}</p>
                </div>
            </li>
            `;
        })
    
    // .catch((error) => {
    //     containerVideos.innerHTML = `<p> Houve um erro ao carregar os vídeos: ${error} </p>`;
    // }
}

buscarEMostrarVideos()