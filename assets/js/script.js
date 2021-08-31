// Global variables
const API_KEY = 'f0eb98b7c925ef27dc4b795263d8bfe8';
const url = `https://api.themoviedb.org/3/search/person?api_key=${API_KEY}&language=en-US`;

const popularUrl = `https://api.themoviedb.org/3/movie/popular?api_key=f0eb98b7c925ef27dc4b795263d8bfe8&language=en-US&page=`;
const topRatedUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=f0eb98b7c925ef27dc4b795263d8bfe8&language=en-US&page=1`;

const posterImagePath = 'https://image.tmdb.org/t/p/w185/';

const searchInput = document.querySelector('#search-input');
const searchButton = document.querySelector('#search-button');

const watchList = document.querySelector('#watch-list');
const popularList = document.querySelector('#popular-list');
const topRatedList = document.querySelector('#top-rated-list');

const morePopularMoviesButton = document.querySelector('#more-popular');
const moreTopRatedMoviesButton = document.querySelector('#more-top-rated');

// Event Listeners
searchButton.addEventListener('click', getWatch);

window.addEventListener('load', (event) => {
    getPopularMovies();
    getTopRatedMovies();
});

morePopularMoviesButton.addEventListener('click', getMorePopularMovies);

moreTopRatedMoviesButton.addEventListener('click', getMoreTopRatedMovies);

// Functions 

// Search movie/series function
function getWatch(e) {
    // prevent form from sumitting
    e.preventDefault();

    // grab value from form input
    let search = searchInput.value;

    // check if there is text to submit, then run function
    if (search != "") {

        // define parameters 
        let mySearchUrl = url + '&query=' + search;

        // calls to api url to get person based on user search
        fetch(mySearchUrl)
            // responds and returns response as json
            .then((res) => res.json())
            // get person id from previous api call
            .then((data) => {
                let person_id = data.results[0].id;
                // second api call to return movie credits using person id
                fetch(`
                https://api.themoviedb.org/3/person/${person_id}/movie_credits?api_key=${API_KEY}&language=en-US`)
                    .then((res) => res.json())
                    // trigger createWatchList function to display movie credit results
                    .then((data) => {
                        createWatchList(data.cast);
                    })
            })

            // if error - logs error to console 
            .catch((error) => {
                console.log(error);
            });

        // clear search input
        searchInput.value = '';

    } else {
        // Alert message when search box is empty
        bootbox.alert("Give us a hint! Search an actor or director for inspiration!");
    }
};


// function to get popular movies
function getPopularMovies(e) {
    // calls to api url to get information
    fetch(popularUrl)
        // responds and returns response as json
        .then((res) => res.json())
        // logs data from api to console 
        .then((data) => {
            // console.log(data);
            createPopularList(data.results);
        })
        // if error - logs error to console 
        .catch((error) => {
            console.log(error);
        });
}


// function to get top rated movies
function getTopRatedMovies(e) {
    // calls to api url to get information
    fetch(topRatedUrl)
        // responds and returns response as json
        .then((res) => res.json())
        // logs data from api to console 
        .then((data) => {
            console.log(data);
            createTopRatedList(data.results);
        })
        // if error - logs error to console 
        .catch((error) => {
            console.log(error);
        });
}


// function to display movies from search 
function createWatchList(data) {
    // clear current results before adding new results
    watchList.innerHTML = '';

    // show results header
    document.getElementById('search-results-header').style.display = "block";

    // iterate over results and create listing container to hold it within
    data.forEach(movie => {
        let {
            poster_path,
            title,
            vote_average,
            overview
        } = movie;
        // removes any results that don't have a poster image
        if (poster_path !== null) {

            // create container to hold search results
            let listingContainer = document.createElement('div');
            listingContainer.classList.add('listing', 'zoom');

            // write content to listing container - poster image, title, rating
            listingContainer.innerHTML = `
       <img src="${posterImagePath + poster_path}" alt="${title} poster"/>
       <div class="listing-info">
       <h4>${title}</h4>
       <span>Rating ${vote_average}</span>
       </div>
       <div class="overview">
       ${overview}  
       </div>
       `;

            // append results container into watch list section
            watchList.appendChild(listingContainer);
        }
    });
};


// function to display popular movies  
function createPopularList(data) {
    // clear current results before adding new results
    popularList.innerHTML = '';

    // iterate over results and create listing container to hold it within
    data.forEach(movie => {
        let {
            poster_path,
            title,
            vote_average,
            overview
        } = movie;

        // removes any results that don't have a poster image
        if (poster_path !== null) {

            // create container to hold search results
            let listingContainer = document.createElement('div');
            listingContainer.classList.add('listing', 'zoom');

            // write content to listing container - poster image, title, rating
            listingContainer.innerHTML = `
       <img src="${posterImagePath + poster_path}" alt="${title} poster"/>
       <div class="listing-info">
       <h4>${title}</h4>
       <span>Rating ${vote_average}</span>
       </div>
       `;

            // append results container into watch list section
            popularList.appendChild(listingContainer);
        }
    });
};


// function to display top rated movies  
function createTopRatedList(data) {
    // clear current results before adding new results
    topRatedList.innerHTML = '';

    // iterate over results and create listing container to hold it within
    data.forEach(movie => {
        let {
            poster_path,
            title,
            vote_average,
            overview
        } = movie;

        // removes any results that don't have a poster image
        if (poster_path !== null) {

            // create container to hold search results
            let listingContainer = document.createElement('div');
            listingContainer.classList.add('listing', 'zoom');

            // write content to listing container - poster image, title, rating
            listingContainer.innerHTML = `
       <img src="${posterImagePath + poster_path}" alt="${title} poster"/>
       <div class="listing-info">
       <h4>${title}</h4>
       <span>Rating ${vote_average}</span>
       </div>
       <div class="overview">
       ${overview}  
       </div>
       `;

            // append results container into watch list section
            topRatedList.appendChild(listingContainer);
        }
    });
};

// function to show next page of popular movie results
function getMorePopularMovies(e, data) {
    // clear current results before adding new results - TMDb limits to 20 per page
    popularList.innerHTML = '';

    // for loop to iterate through page results
    // make page requests by using the page parameter (page=XX) up to 500
    // each page is another call to the api
    // can loop up to 500 times


}