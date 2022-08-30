const campsTypes = [
  (Aiais = {
    value: "Ai-Ais",
    name: "Ai Ais - Fish River Canyon",
    accommodation: [
      "Camping - Max 8 people",
      "Mountain view - Double room - 2 Beds",
      "River view - Double room - 2 Beds",
      "Bush family chalet - 4 beds - Min 2 people",
    ],
  }),
  (Boplaas = {
    value: "Boplaas",
    name: "Boplaas",
    accommodation: ["Camping - Max 8 people"],
  }),
  (daanViljoen = {
    value: "Daan Viljoen",
    name: "Daan Viljoen",
    accommodation: ["Camping", "Adult room - 2 Beds", "Child room - 2 Beds"],
  }),
  (deadValleyLodge = {
    value: "Dead Valley Lodge",
    name: "Dead Valley Lodge",
    accommodation: ["Luxury Tented Chalet - 2 Beds"],
  }),
  (dolomite = {
    value: "Dolomite",
    name: "Dolomite - Etosha",
    accommodation: ["Bush chalet - 2 Beds", "Delux chalet - 2 Beds"],
  }),
  (duwisib = {
    value: "Duwisib",
    name: "Duwisib Castle - Closed",
    accommodation: [
      "Camp site - Max 8 people",
      "Double room - 2 Beds",
      "Baron's room - 2 Beds",
    ],
  }),
  (grossBarmen = {
    value: "Gross Barmen",
    name: "Gross Barmen - Okahandja",
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
    value: "Halali",
    name: "Halali - Etosha",
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
    value: "Hardap Resort",
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
    value: "Hobas",
    name: "Hobas Camp - Fish River",
    accommodation: ["Camp site - max 8 people", "Bush chalet - 2 Beds"],
  }),
  (jakkulsputz = {
    value: "Jakkulsputz",
    name: "Jakkulsputz",
    accommodation: ["Camp site - max 8 people"],
  }),
  (khorixas = {
    value: "Khorixas",
    name: "Khorixas Rest camp",
    accommodation: [
      "Camp site - max 8 people",
      "Bush chalet - A - 2 Beds",
      "Bush chalet - B - 2 Beds",
      "Family chalet - 4 beds - min 2 people",
    ],
  }),
  (mile14 = {
    value: "Mile 14",
    name: "Mile 14",
    accommodation: [
      "Camp site - Beach front",
      "Camp site - middle row",
      "Camp site - back row",
    ],
  }),
  (mile72 = {
    value: "Mile 72",
    name: "Mile 72",
    accommodation: [
      "Camp site - max 8 people",
      "Self-contained camp site - max 8 people",
      "Fisherman chalet - max 2 people",
    ],
  }),
  (mile108 = {
    value: "Mile 108",
    name: "Mile 108",
    accommodation: [
      "Camp site - max 8 people",
      "Self-contained camp site - max 8 people",
      "Fisherman chalet - max 2 people",
    ],
  }),
  (naukluft = {
    value: "Naukluft",
    name: "Naukluft Camp",
    accommodation: ["Camp site - max 5 people", "Bush chalet - 2 Beds"],
  }),
  (namutoni = {
    value: "Namutoni",
    name: "Namutoni - Etosha",
    accommodation: [
      "Camp site - max 8 people",
      "Double room - 2 beds",
      "Bush chalet - 2 beds",
    ],
  }),
  (okaukuejo = {
    value: "Okaukuejo",
    name: "Okaukuejo - Etosha",
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
    value: "Olifantsrus",
    name: "Olifantsrus Campsite - Etosha",
    accommodation: ["Camp site - max 8 people"],
  }),
  (onkoshi = {
    value: "Onkoshi",
    name: "Onkoshi - Etosha",
    accommodation: [
      "Onkoshi chalet - 2 beds",
      "Onkoshi honeymoon chalet - king-size bed - max 2 people",
    ],
  }),
  (popaFalls = {
    value: "Popa Falls",
    name: "Popa Falls Camp",
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
    value: "Shark Island",
    name: "Shark Island - Luderitz",
    accommodation: ["Camp site - max 8 people", "Light house - min 2 people"],
  }),
  (sesriem = {
    value: "Sesriem",
    name: "Sesriem - Namib Desert",
    accommodation: ["Camp site - max 8 people"],
  }),
  (sesriemOshana = {
    value: "Sesriem Oshana",
    name: "Sesriem Oshana",
    accommodation: ["Camp site - max 8 people"],
  }),
  (sossusDune = {
    value: "Sossus Dune",
    name: "Sossus Dune Lodge - Namib Desert",
    accommodation: ["Dune chalet - 2 beds", "Honeymoon chalet - double bed"],
  }),
  (terraceBay = {
    value: "Terrace Bay",
    name: "Terrace Bay - Skeleton Coast",
    accommodation: [
      "Double room - 2 beds",
      "Beach chalet - 8 beds - min 4 people",
      "Beach chalet - 10 beds - min 5 people",
    ],
  }),
  (torraBay = {
    value: "Torra Bay",
    name: "Torra Bay - Skeleton Coast",
    accommodation: ["Camp site - max 8 people"],
  }),
  (waterberg = {
    value: "Waterberg",
    name: "Waterberg Camp",
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
    value: "Windpomp 14",
    name: "Windpomp 14",
    accommodation: [
      "Camp site - Beach front",
      "Camp site - middle row",
      "Camp site - back row",
    ],
  }),
];

let accType = [];

function displayAccommodationTypes(para1, para2) {

  if (accType.length > 0) {
    accType.length = 0;
    document.getElementById("accomtype1").innerHTML = null;
  }

  let campName = document.getElementById("resort1").value;

  for (i = 0; i < campsTypes.length; i++) {
    if (campsTypes[i].value === campName) {
      accType.push(campsTypes[i].accommodation);
    }
  }

  const selectAccType = accType.map((data) => {
    return data
  });

  const option = document.getElementById("accomtype1");
  selectAccType[0].forEach(function (data) {
    const element = document.createElement("option");
    option.appendChild(element);
    element.textContent = data;
  });
}