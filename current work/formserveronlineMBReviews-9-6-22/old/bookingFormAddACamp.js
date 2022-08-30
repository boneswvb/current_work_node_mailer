var campInfo = [
  { value: "Not Selected", name: "---Select Accommodation Type---" },
  {
    value: "Ai ais",
    name: "Ai Ais - Fish River Canyon",
    accommodation: [
      "Camping - Max 8 people",
      "Mountain view - Double room - 2 Beds",
      "River view - Double room - 2 Beds",
      "Bush family chalet - 4 beds - Min 2 people",
    ],
  },
  {
    value: "Boplaas",
    name: "Boplaas",
    accommodation: ["Camping - Max 8 people"],
  },
  {
    value: "Daan Viljoen",
    name: "Daan Viljoen",
    accommodation: ["Camping", "Adult room - 2 Beds", "Child room - 2 Beds"],
  },
  {
    value: "Dead Valley Lodge",
    name: "Dead Valley Lodge",
    accommodation: ["Luxury Tented Chalet - 2 Beds"],
  },
  {
    value: "Dolomite",
    name: "Dolomite - Etosha",
    accommodation: ["Bush chalet - 2 Beds", "Delux chalet - 2 Beds"],
  },
  {
    value: "Duwisib",
    name: "Duwisib Castle",
    accommodation: [
      "Camp site - Max 8 people",
      "Double room - 2 Beds",
      "Baron's room - 2 Beds",
    ],
  },
  {
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
  },
  {
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
  },
  {
    value: "Hardap Resort",
    name: "Hardap Resort",
    accommodation: [
      "Camp site - max 8 people",
      "VIP chalet - 4 beds - min 2 people",
      "Family chalet - 4 beds - min 2 people",
      "Bush chalet - 2 beds",
      "Dormitory - 10 beds - min 5 people",
    ],
  },
  {
    value: "Hobas",
    name: "Hobas Camping - Fish River",
    accommodation: ["Camp site - max 8 people", "Bush chalet - 2 Beds"],
  },
  {
    value: "Jakkulsputz",
    name: "Jakkulsputz",
    accommodation: ["Camp site - max 8 people"],
  },
  {
    value: "Khorixas",
    name: "Khorixas Rest camp",
    accommodation: [
      "Camp site - max 8 people",
      "Bush chalet - A - 2 Beds",
      "Bush chalet - B - 2 Beds",
      "Family chalet - 4 beds - min 2 people",
    ],
  },
  {
    value: "Mile 14",
    name: "Mile 14",
    accommodation: [
      "Camp site - Beach front",
      "Camp site - middle row",
      "Camp site - back row",
    ],
  },
  {
    value: "Mile 72",
    name: "Mile 72",
    accommodation: [
      "Camp site - max 8 people",
      "Self-contained camp site - max 8 people",
      "Fisherman chalet - max 2 people",
    ],
  },
  {
    value: "Mile 108",
    name: "Mile 108",
    accommodation: [
      "Camp site - max 8 people",
      "Self-contained camp site - max 8 people",
      "Fisherman chalet - max 2 people",
    ],
  },
  {
    value: "Naukluft Campsite",
    name: "Naukluft Campsite",
    accommodation: ["Camp site - max 5 people", "Bush chalet - 2 Beds"],
  },
  {
    value: "Namutoni",
    name: "Namutoni - Etosha",
    accommodation: [
      "Camp site - max 8 people",
      "Double room - 2 beds",
      "Bush chalet - 2 beds",
    ],
  },
  {
    value: "Okuakuejo",
    name: "Okuakuejo - Etosha",
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
  },
  {
    value: "olifantsrus Campsite",
    name: "olifantsrus Campsite - Etosha",
    accommodation: ["Camp site - max 8 people"],
  },
  {
    value: "Onkoshi",
    name: "Onkoshi - Etosha",
    accommodation: [
      "Onkoshi chalet - 2 beds",
      "Onkoshi honeymoon chalet - king-size bed - max 2 people",
    ],
  },
  {
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
  },
  {
    value: "Shark Island",
    name: "Shark Island - Luderitz",
    accommodation: ["Camp site - max 8 people", "Light house - min 2 people"],
  },
  {
    value: "Sesriem",
    name: "Sesriem - Namib Desert",
    accommodation: ["Camp site - max 8 people"],
  },
  {
    value: "Sesriem Oshana",
    name: "Sesriem Oshana",
    accommodation: ["Camp site - max 8 people"],
  },
  {
    value: "Sossus Dune",
    name: "Sossus Dune Lodge - Namib Desert",
    accommodation: ["Dune chalet - 2 beds", "Honeymoon chalet - double bed"],
  },
  {
    value: "Terrace Bay",
    name: "Terrace Bay - Skeleton Coast",
    accommodation: [
      "Double room - 2 beds",
      "Beach chalet - 8 beds - min 4 people",
      "Beach chalet - 10 beds - min 5 people",
    ],
  },
  {
    value: "Torra Bay",
    name: "Torra Bay - Skeleton Coast",
    accommodation: ["Camp site - mac 8 people"],
  },
  {
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
  },
  {
    value: "Windpomp 14",
    name: "Windpomp 14",
    accommodation: [
      "Camp site - Beach front",
      "Camp site - middle row",
      "Camp site - back row",
    ],
  },
];

let counter = 1;
let resortId = "";

let resort_id = 0;
let campById = [];
let accomm_id = 0;

function reply_click(clicked_id) {
  resort_id = clicked_id;
  accomm_id = "accomtype" + clicked_id.slice(-1);
  getResortIDs(resort_id, accomm_id);
  campById = [];
}

function addToCounter() {
  counter = counter + 1;
  resortId = `resort${counter}`;
}

//Add a table
var getForm = document.getElementById("add_extra_camp");

// Create a break line element
var br = document.createElement("br");

function addACamp() {
  var div = document.createElement("div");
  div.setAttribute("id", `thisCamp${counter}`);
  var tbody = document.createElement("tbody");
  div.appendChild(tbody);
  var createTR = document.createElement("tr");
  tbody.appendChild(createTR);

  var createTD = document.createElement("td");
  createTR.appendChild(createTD);
  var createP = document.createElement("p");
  createTD.appendChild(createP);
  var createLabel = document.createElement("label");
  createP.appendChild(createLabel);
  createLabel.setAttribute("for", `thisCamp${counter}`);
  var createStrong = document.createElement("strong");
  createLabel.appendChild(createStrong);
  createStrong.textContent = `Booking ${counter}: Which Resort Would you like to travel to?`;

  div.appendChild(br.cloneNode());

  var select = document.createElement("select");
  select.name = `resort${counter}`;
  select.id = `resort${counter}`;
  select.setAttribute("value", "");
  select.setAttribute("onClick", "reply_click(this.id)");
  createP.appendChild(select);

  for (const val of campInfo) {
    var option = document.createElement("option");
    option.value = val.value;
    option.text = val.name;
    select.add(option);
  }

  var createTD = document.createElement("td");
  createTR.appendChild(createTD);

  var createLabel = document.createElement("label");
  createTR.style.backgroundColor = "rgba(144, 144, 144, 0.075)";
  createTD.appendChild(createLabel);
  createTD.style.padding = "36px";
  createLabel.setAttribute("for", `accomtype${counter}`);
  var createStrong = document.createElement("strong");
  createLabel.appendChild(createStrong);
  createStrong.textContent = "What Type of Accommodation do you require?";

  var selectAccomm = document.createElement("select");
  selectAccomm.name = `accomtype${counter}`;
  selectAccomm.id = `accomtype${counter}`;
  createTD.appendChild(selectAccomm);
  var createTR = document.createElement("tr");
  tbody.appendChild(createTR);

  var createTD = document.createElement("td");
  createTR.appendChild(createTD);
  var createLabel = document.createElement("label");
  createTD.appendChild(createLabel);
  createLabel.setAttribute("for", `arriveday${counter}`);
  createLabel.textContent = "Arrival Date:";
  createTD.appendChild(br.cloneNode());

  var createInputDate1 = document.createElement("input");
  createInputDate1.name = `arriveday${counter}`;
  createInputDate1.id = `arriveday${counter}`;
  createInputDate1.type = "date";
  createTR.appendChild(createTD);
  createTD.appendChild(createInputDate1);

  var createTD = document.createElement("td");
  createTR.appendChild(createTD);
  createTD.style.padding = "36px";
  var createLabel = document.createElement("label");
  createTD.appendChild(createLabel);
  createLabel.setAttribute("for", `departday${counter}`);
  createLabel.textContent = "Departure Date:";
  createTD.appendChild(br.cloneNode());

  var createInputDate2 = document.createElement("input");
  createInputDate2.name = `departday${counter}`;
  createInputDate2.id = `departday${counter}`;
  createInputDate2.type = "date";
  createTR.appendChild(createTD);
  createTD.appendChild(createInputDate2);

  var createButton = document.createElement("button");
  createButton.textContent = "Delete This Camp";
  createButton.setAttribute("id", "deleteCamp");
  createButton.setAttribute("type", "button");
  createButton.setAttribute("class", "btn btn-danger");
  div.appendChild(createButton);
  createButton.setAttribute("onClick", "remove(this)");

  getForm.appendChild(div);
}

function remove(elem) {
  elem.parentNode.remove(elem);
}

function getResortIDs() {
  const selectElement = document.getElementById(resort_id);
  const removeOldAccommTypes = document.getElementById(accomm_id);

  selectElement.addEventListener("change", () => {
    function deleteChild() {
      var child = removeOldAccommTypes.lastElementChild;
      while (child) {
        removeOldAccommTypes.removeChild(child);
        child = removeOldAccommTypes.lastElementChild;
      }
    }
    deleteChild();

    accommType = [];
    for (i = 0; i < campInfo.length; i++) {
      if (selectElement.value == campInfo[i].value) {
        accommType.push(campInfo[i].accommodation);
      }
    }

    let availOPtions = document.getElementById(accomm_id);
    accommType[0].forEach((element) => {
      var optionAccomm = document.createElement("option");
      optionAccomm.value = element;
      optionAccomm.text = element;
      availOPtions.appendChild(optionAccomm);
    });
  });
}
