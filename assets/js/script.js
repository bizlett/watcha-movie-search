// Global variables
const API_KEY = 'f0eb98b7c925ef27dc4b795263d8bfe8';
const baseUrl = 'https://api.themoviedb.org/3/';
const personUrl = `search/person?api_key=${API_KEY}&language=en-US`;
const popularUrl = `movie/popular?api_key=${API_KEY}&language=en-US`;
const trendingUrl = `trending/all/day?api_key=${API_KEY}`;
const posterImagePath = 'https://image.tmdb.org/t/p/w185/';
const searchInput = document.querySelector('#search-input');
const searchButton = document.querySelector('#search-button');
const watchList = document.querySelector('#watch-list');
const popularList = document.querySelector('#popular-list');
const trendingList = document.querySelector('#trending-list');
const morePopularMoviesButton = document.querySelector('#more-popular');
const moreTrendingMoviesButton = document.querySelector('#more-trending');

// Event Listeners
searchButton.addEventListener('click', searchPerson);

window.addEventListener('load', (e) => {
    getPopularMovies();
    getTrendingMovies();
});

morePopularMoviesButton.addEventListener('click', getMorePopularMovies);

moreTrendingMoviesButton.addEventListener('click', getMoreTrendingMovies);

// Functions 

// Search movie/series function based on person
function searchPerson(e) {
    e.preventDefault();

    let search = searchInput.value;

    if (search != "") {
        let searchInputUrl = baseUrl + personUrl + '&query=' + search;
        // calls to api url to get person based on user search
        fetch(searchInputUrl)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                switch (data.results[0].known_for_department) {
                    case 'Acting':
                        getResults(data.results[0].id, true);
                        break;
                    case 'Writing':
                        getResults(data.results[0].id, false);
                        break;
                    case 'Directing':
                        getResults(data.results[0].id, false);                        
                        break;
                    default:
                        bootbox.alert("Sorry no results here! Try searching for an actor, writer or director.");
                        break;
                }
            })
            .catch((error) => {
                console.log(error);
            });

        // clear search input
        searchInput.value = '';
    }
}

// function to get results from person search
function getResults(person_id, actor) {
    //second api call to return movie credits using person id         
    fetch(baseUrl + `person/${person_id}/movie_credits?api_key=${API_KEY}&language=en-US`)
    .then((res) => res.json())
    .then((data) => {
        if (actor) {
            createWatchList(data.cast);
        } else {
            createWatchList(data.crew);
        }
    })
}

// function to get popular movies
function getPopularMovies(e) {
    fetch(baseUrl + popularUrl)
        .then((res) => res.json())
        .then((data) => {  
            createPopularList(data.results);
        })
        .catch((error) => {
            console.log(error);
        });
}

// function to get top rated movies
function getTrendingMovies(e) {
    fetch(baseUrl + trendingUrl)
        .then((res) => res.json())
        .then((data) => {
            createTrendingList(data.results);
        })
        .catch((error) => {
            console.log(error);
        });
}

// function to display movies from search 
function createWatchList(data) {
    watchList.innerHTML = '';
    document.getElementById('search-results-header').style.display = "block";
    data.forEach(movie => {
        let {
            poster_path,
            title,
            vote_average,
        } = movie;

        if (poster_path !== null) {
            let listingContainer = document.createElement('div');
            listingContainer.classList.add('listing', 'zoom');
            listingContainer.innerHTML = `
            <img src="${posterImagePath + poster_path}" alt="${title} poster" data-movie-id=${movie.id}>
            <div class="listing-info">
            <h4>${title}</h4>
            <span>Rating ${vote_average}</span>
            </div>
            `;
            watchList.appendChild(listingContainer);
        }
    });
};


// function to display popular movies  
function createPopularList(data) {
    // clear current results before adding new results
    popularList.innerHTML = '';
    data.forEach(movie => {
        let {
            poster_path,
            title,
            vote_average,
        } = movie;

        if (poster_path !== null) {
            let listingContainer = document.createElement('div');
            listingContainer.classList.add('listing', 'zoom');
            listingContainer.innerHTML = `
            <img src="${posterImagePath + poster_path}" alt="${title} poster" data-movie-id=${movie.id}>
            <div class="listing-info">
            <h4>${title}</h4>
            <span>Rating ${vote_average}</span>
            </div>
            `;
            popularList.appendChild(listingContainer);
        }
    });
};


// function to display top rated movies  
function createTrendingList(data) {
    trendingList.innerHTML = '';
    data.forEach(movie => {
        let {
            poster_path,
            title,
            vote_average,
        } = movie;

        if (poster_path !== null) {
            let listingContainer = document.createElement('div');
            listingContainer.classList.add('listing', 'zoom');
            listingContainer.innerHTML = `
            <img src="${posterImagePath + poster_path}" alt="${title} poster" data-movie-id=${movie.id}>
            <div class="listing-info">
            <h4>${title}</h4>
            <span>Rating ${vote_average}</span>
            </div>
            `;
            trendingList.appendChild(listingContainer);
        }
    });
};


// function to display new page of popular movie results when 'search more' button is clicked
function getMorePopularMovies(e) {
    let page = Math.floor(Math.random() * 500) + 1;

    fetch(baseUrl + popularUrl + '&page=' + `${page}`) //url is constructed with randomly generated page number
        .then((res) => res.json())
        .then((data) => {
            createPopularList(data.results);
        })
        .catch((error) => {
            console.log(error);
        });
}

// function to display new page of Trending movie results when 'search more' button is clicked
function getMoreTrendingMovies(e) {
    let page = Math.floor(Math.random() * 500) + 1;
    fetch(baseUrl + trendingUrl + '&page=' + `${page}`) //url is constructed with randomly generated page number
        .then((res) => res.json())
        .then((data) => {
            createTrendingList(data.results);
        })
        .catch((error) => {
            console.log(error);
        });
}

// function to open movie listing
window.addEventListener('click', function (e) {
    if (e.target.tagName.toLowerCase() == 'img') {
        let target = e.target;
        let movieId = target.dataset.movieId;
        let movieDetailsUrl = `movie/${movieId}?api_key=${API_KEY}&language=en-US`;

        fetch(baseUrl + movieDetailsUrl)
            .then((res) => res.json())
            .then((data) => {
                let filters = ["title", "release_date", "genres", "runtime", "tagline", "overview"];
                let movieInfo = Object.fromEntries(Object.entries(data).filter(([k, v]) => filters.includes(k)));

                console.log(movieInfo);

                //let movieModalRef = new bootstrap.Modal(document.getElementById('movie-modal'))

                let movieModalRef = document.querySelector("#movie-modal");
                let movieModal = new bootstrap.Modal(movieModalRef, {
                    backdrop: true
                });

                movieModalRef.innerHTML = `
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="movieModalTitle"><strong>${movieInfo.title} </h5> <span> (${movieInfo.release_date.slice(0,4)})</span></strong>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="container-fluid">
                            <div class="row">
                                <div>                
                                    <span>${movieInfo.genres}</span>
                                    <span>${movieInfo.runtime} minutes</span>
                                </div>
                                <div>
                                    <h6><em>${movieInfo.tagline}</em></h6>
                                    <p>${movieInfo.overview}</p>
                                </div>
                            </div>
                        </div>
                    </div>         
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Back to movies</button>
                    </div>
                </div>
                    `;

                    movieModal.show();
            })
            // if error - logs error to console 
            .catch((error) => {
                console.log(error);

            }); 
    };
});