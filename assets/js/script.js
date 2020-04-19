let noticias = [];

axios.get('https://newsapi.org/v2/top-headlines?country=br&q=covid&apiKey=b248f08756994a519d30dfc65885ecfd')
    .then(response => {
        noticias.push(response.data.articles);
        console.log(noticias[0]);
        for(let index = 0; index < 3; index++)
        {
            const noticiaCard = 
            `   
                <div class="card">
                    <img src="${noticias[0][index].urlToImage}" alt="Imagem da chamada da notícia" />
                    <h3>${noticias[0][index].title}</h3>
                    <a href="${noticias[0][index].url}">Leia a matéria completa</a>
                </div>
            `;

            document.querySelector(".container").innerHTML += noticiaCard;
        }
    })
    .catch(err => {
        console.log(err);
    })