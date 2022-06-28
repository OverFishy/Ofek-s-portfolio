const sceneContainerEl = document.querySelector('.scene3D-container');
const sceneEl = document.querySelector('.scene3D');

// consider transforming to dynamic, based on how much you need to scroll the images
const SCENE_HEIGHT = 1500;

document.addEventListener("DOMContentLoaded", function() {
  appendPokemon();
  setSceneHeight();
  setScenePosition();
  
  window.addEventListener("scroll", handleScroll);
});

let isFixed = false;
let sceneContainerInitialOffset = null;

// const START_SCROLL_EARLY = getComputedStyle(document.documentElement).getPropertyValue("--scrollEarly");

function setScenePosition() {
  sceneContainerInitialOffset = sceneContainerEl.offsetTop;
  document.documentElement.style.setProperty("--sceneContainerOffsetTop", sceneContainerInitialOffset);
  sceneContainerEl.classList.add('absolute');
}

function handleScroll(e) {
  const { scrollTop } = document.documentElement;

  console.log('scroll');
  if (scrollTop > (sceneContainerInitialOffset/*  - START_SCROLL_EARLY */)) {
    console.log('passed threshold');

    if (!isFixed) {
      console.log('make it fixed');
      sceneContainerEl.classList.add('fixed');
      isFixed = true;
    }
    
    // move camera
    document.documentElement.style.setProperty("--sceneTranslateX", window.pageYOffset - sceneContainerInitialOffset/*  + START_SCROLL_EARLY */);
  } else {
    if (isFixed) {
      sceneContainerEl.classList.remove('fixed');
      isFixed = false;
    }
  }

}

function setSceneHeight() {
  document.documentElement.style.setProperty("--viewportHeight", SCENE_HEIGHT);

  // const numberOfItems = 2//films.length; // Or number of items you have in `.scene3D`
  // const itemZ = parseFloat(
  //   getComputedStyle(document.documentElement).getPropertyValue("--itemZ")
  // );
  // const scenePerspective = parseFloat(
  //   getComputedStyle(document.documentElement).getPropertyValue("--scenePerspective")
  // );
  // const cameraSpeed = parseFloat(
  //   getComputedStyle(document.documentElement).getPropertyValue("--cameraSpeed")
  // );

  /* how the depth of the scene is determined (as in, how much can we scroll the z-axis) */
  // const height = true ? 3600 : 
  //   window.innerHeight +                  // base, to see the viewport
  //   scenePerspective * cameraSpeed +      // to be able to zoom in the entire perspective defined, the faster the camera, the less is needed
  //   itemZ * cameraSpeed * numberOfItems;
  // Update --viewportHeight value
  // document.documentElement.style.setProperty("--viewportHeight", SCENE_HEIGHT);
}

function appendPokemon() {
  let photoNodes = [];

  for (let i = 1; i <= 4; i++) {
    photoNodes.push(createPhotoItem(i));
  }

  sceneEl.innerHTML = photoNodes.join(" ");
}

function createPhotoItem(fileIndex) {
  return `<img src="imgs/${fileIndex}.png">`
}