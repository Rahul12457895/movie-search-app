
async function getMovieData(){
    try{
            let input = document.querySelector('input').value; 
    let res = await fetch(`https://www.omdbapi.com/?t=${input}&apikey=92ec5578`);
    
    let data = await res.json();
     if(data.Response == "False"){
         main.innerHTML = "";
         console.log("error found");
         const err = document.createElement("div");
          err.innerHTML = `<img src="https://memegenerator.net/img/instances/29102746.jpg"alt="not found" />`
          main.appendChild(err);
     }else{
         showMovies(data);
     }
    search.value = "";
    }catch(err){
     console.log("err has :",err );
    }
 }


function showMovies(movies) {
    
    main.innerHTML = "";

    
        const { Year, Poster, Title, imdbRating, Plot,Language } = movies;

        const movieEl = document.createElement("div");
        movieEl.classList.add("movie");

        movieEl.innerHTML = `
            <img
                src="${Poster}"
                alt="${Title}"
            />
            <div class="movie-info">
                <h3>${Title}</h3>
                <h5 style="color: white; margin-top:10px ">(${Year})</h5>
                
                <div class="${getClassByRate(imdbRating)}"><span class="${getClassByIRate(imdbRating)}"></span>${imdbRating}</div>
                
            </div>
            <div class="movie-lan">${Language}</div>
            <div class="overview">
                <h3>Overview:</h3>
                ${Plot}
            </div>
        `;

        main.appendChild(movieEl);
    
}

function getClassByRate(vote) {
    if (vote >= 8) {
        return "green";
    } else if (vote >= 5) {
        return "orange";
    } else {
        return "red";
    }
}
function getClassByIRate(imdbRating){
    if (imdbRating >= 8.5) {
        return "greenR";
    } 
}
     
    