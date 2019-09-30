const APIpopular = 'https://api.themoviedb.org/3/tv/popular?api_key=b60f6f3bc0144a49cfbb287ea1f5e215&language=en-US&page=';
const APItopRate = 'https://api.themoviedb.org/3/tv/top_rated?api_key=b60f6f3bc0144a49cfbb287ea1f5e215&language=en-US&page='
const posterURL = 'http://image.tmdb.org/t/p/w185'
let shows = [];
let flag = 1;
let pageNumber = 1;
const container = document.querySelector('.shows');

function getTopRateTVshows() {
  return fetch(APItopRate + pageNumber).then(res => res.json())
    .catch(err => {
      console.log('Cant get TVshows', err);
    });
}

function getPopularTVshows() {
  return fetch(APIpopular + pageNumber).then(res => res.json())
    .catch(err => {
      console.log('Cant get TVshows', err);
    });
}

function renderShows() {
  container.innerHTML = '';
  shows.results.forEach((show) => {
    const div = document.createElement('div')
    div.className = 'show';
    div.innerHTML = `
      <h4> ${show.name}</h4>
      <img src=${posterURL + show.poster_path} alt='pic'>
      <h5> Overview: ${show.overview}</h5>
    `
    container.append(div);
  })
}


getPopularTVshows().then(data => {
  shows = data;
  renderShows();
  document.querySelector('#popular').focus();
});


document.querySelector('#popular').onclick = function() {
  pageNumber = 1;
  getPopularTVshows().then(data => {
    shows = data;
    renderShows();
    flag = 1;
  });
}


document.querySelector('#topRate').onclick = function() {
  pageNumber = 1;
  getTopRateTVshows().then(data => {
    shows = data;
    renderShows();
    flag = 0;
  });
}

document.querySelector('#next').onclick = function() {
  pageNumber += 1;
  if (flag === 1)
    getPopularTVshows().then(data => {
      shows = data;
      renderShows();
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    });
  if (flag === 0)
    getTopRateTVshows().then(data => {
      shows = data;
      renderShows();
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    });
}

document.querySelector('#prev').onclick = function() {
  if (pageNumber === 1) {
    let btn = document.querySelector("prev");
    btn.disabled = false;
  }
  pageNumber -= 1;
  if (flag === 1)
    getPopularTVshows().then(data => {
      shows = data;
      renderShows();
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    });
  if (flag === 0)
    getTopRateTVshows().then(data => {
      shows = data;
      renderShows();
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    });


}
