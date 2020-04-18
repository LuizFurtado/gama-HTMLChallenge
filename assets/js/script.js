let noticias = [];
let videos = [];

axios.get('https://newsapi.org/v2/top-headlines?country=br&q=covid&apiKey=b248f08756994a519d30dfc65885ecfd')
    .then(response => {
        noticias.push(response.data.articles);
        console.log(noticias);
    })
    .catch(err => {
        console.log(err);
    })