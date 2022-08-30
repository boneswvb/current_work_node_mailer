const campsTypes = [
  (Aiais = {
    name: "Ai Ais",
    accommodation: [
      "Camping - Max 8 people",
      "Mountain view - Double room - 2 Beds",
      "River view - Double room - 2 Beds",
      "Bush family chalet - 4 beds - Min 2 people",
    ],
  }),
  (Aiais = {
    name: "Ai-ais",
    accommodation: [
      "Camping - Max 8 people",
      "Mountain view - Double room - 2 Beds",
      "River view - Double room - 2 Beds",
      "Bush family chalet - 4 beds - Min 2 people",
    ],
  }),
  (Boplaas = {
    name: "Boplaas",
    accommodation: ["Camping - Max 8 people"],
  }),
  (daanViljoen = {
    name: "Daan Viljoen",
    accommodation: ["Camping", "Adult room - 2 Beds", "Child room - 2 Beds"],
  }),
  (deadValleyLodge = {
    name: "Dead Valley Lodge",
    accommodation: ["Luxury Tented Chalet - 2 Beds"],
  }),
  (dolomite = {
    name: "Dolomite",
    accommodation: ["Bush chalet - 2 Beds", "Delux chalet - 2 Beds"],
  }),
  (duwisib = {
    name: "Duwisib",
    accommodation: [
      "Camp site - Max 8 people",
      "Double room - 2 Beds",
      "Baron's room - 2 Beds",
    ],
  }),
  (grossBarmen = {
    name: "Gross Barmen",
    accommodation: [
      "Camp site - Max 8 people",
      "Premier chalet - 2 Beds",
      "Bush chalet - 2 Beds",
      "Family chalet - 4 beds - min 2 people",
      "Premier chalet - 4 beds - min 2 people",
      "Self-catering bush chalet - 4 beds - min 2 people",
      "Self-catering bush chalet - 6 beds - min 3 people",
    ],
  }),
  (halali = {
    name: "Halali",
    accommodation: [
      "Camp site - max 8 people",
      "Double room - 2 beds",
      "Bush chalet - 2 beds",
      "Bush chalet - 2 beds - Disabled access",
      "Bush chalet - 4 beds - min 3 people",
      "Family chalet - 4 beds - min 3 people",
      "Honeymoon suite - double bed",
    ],
  }),
  (hardap = {
    name: "Hardap Resort",
    accommodation: [
      "Camp site - max 8 people",
      "VIP chalet - 4 beds - min 2 people",
      "Family chalet - 4 beds - min 2 people",
      "Bush chalet - 2 beds",
      "Dormitory - 10 beds - min 5 people",
    ],
  }),
  (hobas = {
    name: "Hobas",
    accommodation: ["Camp site - max 8 people", "Bush chalet - 2 Beds"],
  }),
  (jakkulsputz = {
    name: "Jakkulsputz",
    accommodation: ["Camp site - max 8 people"],
  }),
  (khorixas = {
    name: "Khorixas",
    accommodation: [
      "Camp site - max 8 people",
      "Bush chalet - A - 2 Beds",
      "Bush chalet - B - 2 Beds",
      "Family chalet - 4 beds - min 2 people",
    ],
  }),
  (mile14 = {
    name: "Mile 14",
    accommodation: [
      "Camp site - Beach front",
      "Camp site - middle row",
      "Camp site - back row",
    ],
  }),
  (mile72 = {
    name: "Mile 72",
    accommodation: [
      "Camp site - max 8 people",
      "Self-contained camp site - max 8 people",
      "Fisherman chalet - max 2 people",
    ],
  }),
  (mile108 = {
    name: "Mile 108",
    accommodation: [
      "Camp site - max 8 people",
      "Self-contained camp site - max 8 people",
      "Fisherman chalet - max 2 people",
    ],
  }),
  (naukluft = {
    name: "Naukluft Campsite",
    accommodation: ["Camp site - max 5 people", "Bush chalet - 2 Beds"],
  }),
  (namutoni = {
    name: "Namutoni",
    accommodation: [
      "Camp site - max 8 people",
      "Double room - 2 beds",
      "Bush chalet - 2 beds",
    ],
  }),
  (okaukuejo = {
    name: "Okaukuejo",
    accommodation: [
      "Camp site - max 8 people",
      "Double room - A - 2 Beds",
      "Double room - B - 2 Beds",
      "Bush chalet - 2 beds",
      "Bush chalet - 2 beds - Disabled access",
      "Family chalet - 4 beds - min 3 people",
      "Waterhole chalet - 2 beds",
      "Premier waterhole chalet - 4 beds - Min 2 people",
    ],
  }),
  (Olifantsrus = {
    name: "Olifantsrus",
    accommodation: ["Camp site - max 8 people"],
  }),
  (onkoshi = {
    name: "Onkoshi",
    accommodation: [
      "Onkoshi chalet - 2 beds",
      "Onkoshi honeymoon chalet - king-size bed - max 2 people",
    ],
  }),
  (popaFalls = {
    name: "Popa Falls",
    accommodation: [
      "Camp site - max 8 people",
      "Self-contained camp site - max 8 people",
      "River cabin - 2 beds",
      "River chalet - 2 beds",
      "Luxury river cabin - 2 beds",
      "Family house - 6 beds - min 3 people",
    ],
  }),
  (sharkIsland = {
    name: "Shark Island",
    accommodation: ["Camp site - max 8 people", "Light house - min 2 people"],
  }),
  (sesriem = {
    name: "Sesriem",
    accommodation: ["Camp site - max 8 people"],
  }),
  (sesriemOshana = {
    name: "Sesriem Oshana",
    accommodation: ["Camp site - max 8 people"],
  }),
  (sossusDune = {
    name: "Sossus Dune",
    accommodation: ["Dune chalet - 2 beds", "Honeymoon chalet - double bed"],
  }),
  (terraceBay = {
    name: "Terrace Bay",
    accommodation: [
      "Double room - 2 beds",
      "Beach chalet - 8 beds - min 4 people",
      "Beach chalet - 10 beds - min 5 people",
    ],
  }),
  (torraBay = {
    name: "Torra Bay",
    accommodation: ["Camp site - mac 8 people"],
  }),
  (waterberg = {
    name: "Waterberg",
    accommodation: [
      "Camp site - max 8 people",
      "Double room - 2 Beds",
      "Bush chalet - 2 beds",
      "Bush chalet - 4 beds - min 2 people",
      "Family chalet - 4 beds - min 2 people",
      "Premier bush chalet - 2 beds",
    ],
  }),
  (windpomp14 = {
    name: "Windpomp 14",
    accommodation: [
      "Camp site - Beach front",
      "Camp site - middle row",
      "Camp site - back row",
    ],
  }),
];
let accType = [];

function displayAccommodationTypes() {
  if (accType.length > 0) {
    accType.length = 0;
    document.getElementById("accomtype1").innerHTML = null;
  }

  let campName = document.getElementById("resort1").value;

  for (i = 0; i < campsTypes.length; i++) {
    if (campsTypes[i].name === campName) {
      accType.push(campsTypes[i].accommodation);
    }
  }
  const selectAccType = accType[0].map((data) => {
    return data;
  });

  const option = document.getElementById("accomtype1");
  selectAccType.forEach(function (data) {
    const element = document.createElement("option");
    option.appendChild(element);
    element.textContent = data;
  });
}
