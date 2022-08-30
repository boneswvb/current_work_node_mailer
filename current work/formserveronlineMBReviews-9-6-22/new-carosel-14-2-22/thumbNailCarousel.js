const picLrg = [
  "photos/large/ai-ais-namibia-lrg(1).jpg",
  "photos/large/ai-ais-namibia-lrg(2).jpg",
  "photos/large/ai-ais-namibia-lrg(3).jpg",
  "photos/large/ai-ais-namibia-lrg(4).jpg",
  "photos/large/ai-ais-namibia-lrg(5).jpg",
  "photos/large/ai-ais-namibia-lrg(6).jpg"
];

const picThum = [
  "photos/thum-nails/ai-ais-namibia-thum(1).jpg",
  "photos/thum-nails/ai-ais-namibia-thum(2).jpg",
  "photos/thum-nails/ai-ais-namibia-thum(3).jpg",
  "photos/thum-nails/ai-ais-namibia-thum(4).jpg",
  "photos/thum-nails/ai-ais-namibia-thum(5).jpg",
  "photos/thum-nails/ai-ais-namibia-thum(6).jpg"
];

//Display the images as thumb-nail and if clicked display large picture
let mapPicLrgi = 0;
function myFunction(imgs) {
  clearInterval(myInterval);
  const currImage = imgs.src.split("/").slice(-3).join("/");

  const mapPicThum = picThum.map((data, i) => {
    const result = currImage.includes(data);
    if (result) {
      mapPicLrgi = i;
    }
  });

  const mapPicLrg = picLrg.map((data, i) => {
    if (mapPicLrgi === i) {
      var expandImg = document.getElementById("expandedImg");
      var imgText = document.getElementById("imgtext");
      expandImg.src = data;
      imgText.innerHTML = imgs.alt;
    }
  });
};

// Display first image on first load
const buttons = document.querySelectorAll("[data-carousel-button]");

function displayFirstImgOnLoad() {
  const currImageSrc = document.querySelector("[data-active]").childNodes[1].src.split("/").slice(-3).join("/");
  const currImageAlt = document.querySelector("[data-active]").childNodes[1].alt;

  const mapPicThum = picThum.map((data, i) => {
    const result = currImageSrc.includes(data);
    if (result) {
      mapPicLrgi = i;
    }
  });

  const mapPicLrg = picLrg.map((data, i) => {
    if (mapPicLrgi === i) {
      var expandImg = document.getElementById("expandedImg");
      var imgText = document.getElementById("imgtext");
      expandImg.src = data;
      imgText.innerHTML = currImageAlt;
    }
  });
}
displayFirstImgOnLoad();

// Automatic scroling of the carousel
// let counter = 0;
// myInterval = setInterval(() => {
//   for (let i = 0; i < picLrg.length; i++) {
//     if (counter >= picLrg.length) {
//       counter = 0;
//     };
//     if (counter === i) {
//       var expandImg = document.getElementById("expandedImg");
//       // var imgText = document.getElementById("imgtext");
//       expandImg.src = picLrg[i];
//       // imgText.innerHTML = imgs.alt;
//     }
//   };
//   console.log("counter", counter);
//   counter++;
// }, 2000);

// Functionalaty for the next and previous buttons 

buttons.forEach(button => {
  button.addEventListener("click", () => {
    // clearInterval(myInterval);
    const offset = button.dataset.carouselButton === "next" ? 1 : -1;
    const slides = button.closest("[data-carousel]").querySelector("[data-slides]");

    const activeSlide = slides.querySelector("[data-active]");
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;
    console.log("newIndex", newIndex)
    // check and display imgLrg
    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;

    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;

    var expandImg = document.getElementById("expandedImg");
    var imgText = document.getElementById("imgtext");
    expandImg.src = document.querySelector("[data-active]").childNodes[1].src
    imgText.innerHTML = document.querySelector("[data-active]").childNodes[1].alt
  })
})