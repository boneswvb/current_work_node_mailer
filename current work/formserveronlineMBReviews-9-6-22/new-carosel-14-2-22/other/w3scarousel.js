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

const buttons = document.querySelectorAll("[data-carousel-button]");
const firstImage = document.querySelector("[data-active]").childNodes[1].src;

function displayFirstImgOnLoad() {
  var expandImg = document.getElementById("expandedImg");
  var imgText = document.getElementById("imgtext");
  expandImg.src = document.querySelector("[data-active]").childNodes[1].src;
  expandImg.setAttribute("alt", `${document.querySelector("[data-active]").childNodes[1].alt}`);
  imgText.innerHTML = document.querySelector("[data-active]").childNodes[1].alt;
}
displayFirstImgOnLoad();

let mapPicLrgi = 0;

function myFunction(imgs) {
  clearInterval(myInterval);
  const currImage = imgs.src.split("/").slice(-3).join("/");
  console.log("imgs", imgs)
  console.log("currImage", currImage)

  const mapPicThum = picThum.map((data, i) => {
    const result = currImage.includes(data);
    if (result) {
      console.log("i", data)
      mapPicLrgi = i;
    }
  });

  const mapPicLrg = picLrg.map((data, i) => {
    if (mapPicLrgi === i) {
      // console.log("data", data)
      var expandImg = document.getElementById("expandedImg");
      var imgText = document.getElementById("imgtext");
      expandImg.src = data;
      imgText.innerHTML = imgs.alt;
    }
  });
};

buttons.forEach(button => {
  button.addEventListener("click", () => {
    clearInterval(myInterval);
    const offset = button.dataset.carouselButton === "next" ? 1 : -1;
    const slides = button.closest("[data-carousel]").querySelector("[data-slides]");

    const activeSlide = slides.querySelector("[data-active]");
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;
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

let counter = 0;

myInterval = setInterval(function () {
  counter += 1;
  const offset = true ? 1 : -1;
  const slides = document.querySelector("[data-carousel]").querySelector("[data-slides]");
  const activeSlide = slides.querySelector("[data-active]");
  let newIndex = [...slides.children].indexOf(activeSlide) + offset;
  if (newIndex < 0) newIndex = slides.children.length - 1;
  if (newIndex >= slides.children.length) newIndex = 0;

  slides.children[newIndex].dataset.active = true;
  delete activeSlide.dataset.active;

  var expandImg = document.getElementById("expandedImg");
  var imgText = document.getElementById("imgtext");
  expandImg.src = document.querySelector("[data-active]").childNodes[1].src
  imgText.innerHTML = document.querySelector("[data-active]").childNodes[1].alt
}, 2000);