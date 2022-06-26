const nameMovis = document.getElementById("allMovies");
let allmovies = document.getElementById("rowData");
let click = document.getElementById("click")
let header = document.getElementById("header")
let  navtab = document.getElementById("navtab")
let  Contactname = document.getElementById("num")
let  namealert  = document.getElementById("namealert")
let  Email  = document.getAnimations("Email")
let  emailalert = document.getElementById("emailalert")
let Phone  = document.getElementById("Phone")
let  phonealert  = document.getElementById("phonealert")





click.addEventListener("click" , function(e){

  header.style.marginLeft="200px"
  navtab.style.marginLeft="200px"
 
// console.log("welcom")
})


function mapToMovie(apiMovie) {
  return {
    name: apiMovie.original_title,
    description: apiMovie.overview,
    rate: apiMovie.vote_average,
    date: apiMovie.release_date,
    image: `https://image.tmdb.org/t/p/w500/${apiMovie.poster_path}`
  };
}

async function getTrendingMovies() {
  const trendingResponde = await fetch("https://api.themoviedb.org/3/trending/all/day?api_key=eba8b9a7199efdcb0ca1f96879b83c44");
  const trending = await trendingResponde.json();
  return trending.results.map((trendingMovieFromApi) => mapToMovie(trendingMovieFromApi));
}

async function getMovies(searchText) {
  const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=eba8b9a7199efdcb0ca1f96879b83c44&query=${searchText}}`);
  const movies = await response.json();

  return movies.results.map((movieFromApi) => mapToMovie(movieFromApi));
}

function renderMovies(movies) {
  allmovies.innerHTML = "";
  for (let i = 0; i < movies.length; i++) {
    allmovies.innerHTML += buildMovieTemplate(movies[i]);
  }
}

nameMovis.addEventListener("keyup", async function (event) {
  if (nameMovis.value === "") {
    main();
    return;
  }
  if (event.key === "Enter") {
    const apiResponse = await getMovies(nameMovis.value);
    renderMovies(apiResponse);    
  }
});

function buildMovieTemplate(movie) {
  return `
  <div class="col-md-6 col-lg-4 my-3 myM shadow">
    <div class="movie shadow rounded position-relative">
      <div class="post">
        <img
          src="${movie.image}"
          class="img-fluid rounded w-100"
          alt=""
        />

        <div class="layer d-flex align-items-center">
          <div class="p-0 info">
            <h2>${movie.name}</h2>
            <p>
            ${movie.description}
            </p>
            <p>rate: ${movie.rate}</p>
            <p>${movie.date}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  `;
}


async function main() {
  const trendingMovies = await getTrendingMovies();
  renderMovies(trendingMovies)
}

main();





// Contactname.addEventListener("keydown" ,   

// function validetnamealert(){

//   var regx = /^[A-Z][a-z]{3,8}$/;
  
//   if (regx.test(Contactname.value ) == true){
//     // Contactname.classList.replace('d-none' ,'d-inline-block')
  
  
//   return true ;
  
//   }
//   else{
//     namealert.style.display = 'd-inline-block'

//     // namealert.classList.add('d-none' , )
//       return false ;
  
//   }
  
  
//   }
// )













Contactname.addEventListener("keyup" ,   
function validetnamealert(){
let regex = /[A-Z][a-z]/;
if(regex.test(Contactname.value) == true)
{
return  true
}
else
{
  namealert.style.display = 'block'
}
}
) 



Email.addEventListener("keyup" ,   
function validetemailalert(){
let regex = /(yahoo|gamil).com/;
if(regex.test(Email.value) == true)
{
return  true
}
else
{
  emailalert.style.display = 'block'
}
}
) 


