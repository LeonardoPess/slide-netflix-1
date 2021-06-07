const sliders = document.querySelector(".carouselbox");
const videos = document.querySelectorAll(".carouselbox [data-video]");

// Hover Functionality
function handleHover() {
  const carouselVideo = sliders.querySelectorAll(".slide-item .iframe");

  carouselVideo.forEach((video, index) => {
    video.addEventListener('mouseover', () => {
      video.play();
    });
    video.addEventListener('mouseout', (e) => {
      video.pause();
      video.currentTime = 0;
    });
  })
}

handleHover();

// Scroll Functionality
let scrollAmount = 0;
let scrollPerClick = videos[0].clientWidth + 20;

function sliderScrollLeft() {
  sliders.scrollTo({
    top: 0,
    left: (scrollAmount -= scrollPerClick),
    behavior: "smooth",
  });

  if (scrollAmount < 0) {
    scrollAmount = 0;
  }
}

function sliderScrollRight() {
  if (scrollAmount <= sliders.scrollWidth - sliders.clientWidth) {
    sliders.scrollTo({
      top: 0,
      left: (scrollAmount += scrollPerClick),
      behavior: "smooth",
    });
  }
}
