let films = [];

document.addEventListener("DOMContentLoaded", function() {
  axios
    .get("https://ghibliapi.herokuapp.com/films")
    .then(function(response) {
      films = response.data;
      appendPokemon();
      window.addEventListener("scroll", moveCamera);
      setSceneHeight();
    })
    .catch(function(error) {
      console.log(error);
    });
});

function moveCamera() {
  console.log('move camera');
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

  /* how the depth of the scene is determined (as in, how much can we scroll the z-axis) */
  const height = true ? 3600 : 
    window.innerHeight +                  // base, to see the viewport
    scenePerspective * cameraSpeed +      // to be able to zoom in the entire perspective defined, the faster the camera, the less is needed
    itemZ * cameraSpeed * numberOfItems;

  // Update --viewportHeight value
  document.documentElement.style.setProperty("--viewportHeight", height);
}

function createFilmItem(film) {
  console.log('creating film item');
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

function createPhotoItem(fileIndex) {
  return `<img src="imgs/${fileIndex}.png">`
}

function appendPokemon() {
  const sceneEl = document.querySelector(".viewport .scene3D");
  let photoNodes = [];

  for (let i = 1; i <= 4; i++) {
    photoNodes.push(createPhotoItem(i));
  }

  sceneEl.innerHTML = photoNodes.join(" ");
}