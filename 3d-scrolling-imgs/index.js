let films = [];

document.addEventListener("DOMContentLoaded", function() {
  axios
    .get("https://ghibliapi.herokuapp.com/films")
    .then(function(response) {
      films = response.data;
      appendFilms(films);
      window.addEventListener("scroll", moveCamera);
      setSceneHeight();
    })
    .catch(function(error) {
      console.log(error);
    });
});

function moveCamera() {
  document.documentElement.style.setProperty("--cameraZ", window.pageYOffset);
}

function setSceneHeight() {
  const numberOfItems = films.length; // Or number of items you have in `.scene3D`
  const itemZ = parseFloat(
    getComputedStyle(document.documentElement).getPropertyValue("--itemZ")
  );
  const scenePerspective = parseFloat(
    getComputedStyle(document.documentElement).getPropertyValue(
      "--scenePerspective"
    )
  );
  const cameraSpeed = parseFloat(
    getComputedStyle(document.documentElement).getPropertyValue("--cameraSpeed")
  );

  const height =
    window.innerHeight +
    scenePerspective * cameraSpeed +
    itemZ * cameraSpeed * numberOfItems;

  // Update --viewportHeight value
  document.documentElement.style.setProperty("--viewportHeight", height);
}

function createFilmItem(film) {
  return `<div>
    <h2>${film.title}</h2>
    <p>Year: ${film.release_date}</p>
    <p>Director: ${film.director}</p>
    <p>${film.description}</p>
  </div>`;
}

function appendFilms(films) {
  const filmsEl = document.querySelector(".viewport .scene3D");
  let filmsNodes = [];

  for (film of films) {
    filmsNodes.push(createFilmItem(film));
  }

  filmsEl.innerHTML = filmsNodes.join(" ");
}