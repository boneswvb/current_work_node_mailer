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

//Add a form
var getForm = document.getElementById("add_extra_camp");

// Create a break line element
var br = document.createElement("br");

// CE = create element
const CE = (att) => {
  return document.createElement(att)
};

//Create Input fields and tags
const AD = CE("ADel");
const IN = CE("input");
const STRONG = CE("strong");

//Create symantics
const BR = CE("br");

function addACamp() {
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


  // Get the holder container for the add a camp form.
  const getFormElement = document.getElementById('add_extra_camp');
  // add a container <section> to add id this camp for delete this camp
  SECTIONTHISCAMP = CE('section')
  SECTIONTHISCAMP.setAttribute("id", `thisCamp${counter}`);
  getFormElement.appendChild(SECTIONTHISCAMP)

  //START OF TABLE TO SELECT CAMPS AND DATES

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // Heading for select camps and accommodation types
  const PRESORT = CE("h3");
  SECTIONTHISCAMP.appendChild(PRESORT);
  PRESORT.textContent = `Please select which of the NWR resort(s) or rest camp(s) you would like to travel to and your preferred arrival and departure dates:`;


  var FORMCAMP = CE("TABLE"); // should be <> linked to SECTIONTHISCAMP
  FORMCAMP.setAttribute("id", `thisCamp${counter}`); // should be linked to the new form element that is created
  SECTIONTHISCAMP.appendChild(FORMCAMP);

  var TRCAMP = CE("tR");
  FORMCAMP.appendChild(TRCAMP);

  var TDCAMP = CE("td");
  TRCAMP.appendChild(TDCAMP);


  // Create select camp lable
  var PSELECTCAMP = CE("p");
  TDCAMP.appendChild(PSELECTCAMP);

  var LABLECAMP = CE("label");
  PSELECTCAMP.appendChild(LABLECAMP);
  LABLECAMP.setAttribute("for", `thisCamp${counter}`);

  var STRONGCAMP = CE("strong");
  LABLECAMP.appendChild(STRONGCAMP);
  STRONGCAMP.textContent = `Booking ${counter}: Which Resort Would you like to travel to?`;

  // Create select camp select
  var SELECTCAMP = CE("select");
  SELECTCAMP.name = `resort${counter}`;
  SELECTCAMP.id = `resort${counter}`;
  SELECTCAMP.setAttribute("value", "");
  SELECTCAMP.setAttribute("onClick", "reply_click(this.id)");
  PSELECTCAMP.appendChild(SELECTCAMP);

  // Insert camp selection dinamicaly
  for (const val of campInfo) {
    var option = CE("option");
    option.value = val.value;
    option.text = val.name;
    SELECTCAMP.add(option);
  }

  // Create select accommodation select

  var TDACCOMM = CE("td");
  TRCAMP.appendChild(TDACCOMM);

  var LABLEACCOMM = CE("label");
  TDACCOMM.appendChild(LABLEACCOMM);
  LABLEACCOMM.setAttribute("for", `accomtype${counter}`);
  var STRONGACCOMM = CE("strong");
  LABLEACCOMM.appendChild(STRONGACCOMM);
  STRONGACCOMM.textContent = "What Type of Accommodation do you require?";


  // Insert accommodation selection dinamicaly from below function - getResortIDs()
  var SELECTACCOMM = CE("select");
  SELECTACCOMM.name = `accomtype${counter}`;
  SELECTACCOMM.id = `accomtype${counter}`;
  TDACCOMM.appendChild(SELECTACCOMM);

  //START OF TABLE TO SELECT NUMBER OF TRAVELLERS
  //Add fields to indicate the number of people that will be travelling
  const P = CE("p");
  SECTIONTHISCAMP.appendChild(P);
  P.textContent = "Please enter the number of people travelling if different from above:";

  // Create a table for the travellers numbers
  const TABLE = CE("table");
  // TABLE.setAttribute("id", `thisCamp${counter}`);
  SECTIONTHISCAMP.appendChild(TABLE);
  const TR = CE("tr");
  TABLE.appendChild(TR);
  const TDAD = CE("td"); // TD for adults travelling
  TR.appendChild(TDAD)

  //Create Input fields and tags
  const LABAD = CE("label");
  const INAD = CE("input");
  const STRONGAD = CE("strong");

  // Lael for number of adults travelling = LABAD
  TDAD.appendChild(LABAD)
  LABAD.setAttribute("for", `adults${counter}`); // `adults${counter}`
  LABAD.appendChild(STRONGAD);
  STRONGAD.textContent = "Number of Adults Travelling:"

  //Add a break
  TDAD.appendChild(BR.cloneNode());

  // Input for number of adults travelling = INAD
  TDAD.appendChild(INAD);
  INAD.setAttribute("type", "text");
  INAD.setAttribute("id", `adults${counter}`);
  INAD.setAttribute("name", `adults${counter}`); // `adults${counter}`

  // Create lable for child childnopay
  const TDCN = CE("td");
  const LABCN = CE("label");
  const STRONGCN = CE("strong");
  const INCN = CE("input");

  // Add field to table childnopay
  TR.appendChild(TDCN)

  //  Label for number of childnopay travelling
  TDCN.appendChild(LABCN)
  LABCN.setAttribute("for", `childnopay${counter}`); // `childnopay${counter}`
  LABCN.appendChild(STRONGCN);
  STRONGCN.textContent = "Number of Children aged 0 to 5:"

  //Add a break
  TDCN.appendChild(BR.cloneNode());

  // Input for number of childnopay travelling
  TDCN.appendChild(INCN);
  INCN.setAttribute("type", "text");
  INCN.setAttribute("id", `childnopay${counter}`);
  INCN.setAttribute("name", `childnopay${counter}`); // `adults${counter}`

  // Create label for childhalfprice
  const TDCH = CE("td");
  const LABCH = CE("label");
  const STRONGCH = CE("strong");
  const INCH = CE("input");

  // Add field to table childhalfprice
  TR.appendChild(TDCH)

  //  Label for number of childhalfprice travelling
  TDCH.appendChild(LABCH)
  LABCH.setAttribute("for", `childhalfprice${counter}`); // `childhalfprice${counter}`
  LABCH.appendChild(STRONGCH);
  STRONGCH.textContent = "Number of Children aged 6 to 12:"

  //Add a break
  TDCH.appendChild(BR.cloneNode());

  // Input for number of childhalfprice travelling
  TDCH.appendChild(INCH);
  INCH.setAttribute("type", "text");
  INCH.setAttribute("id", `childhalfprice${counter}`);
  INCH.setAttribute("name", `childhalfprice${counter}`); // `childhalfprice${counter}`

  //END OF TABLE TO SELECT NUMBER OF TRAVELLERS

  // Create date selection

  var DATETABLE = CE("table");
  SECTIONTHISCAMP.appendChild(DATETABLE);

  var TRDATE = document.createElement("tr");
  DATETABLE.appendChild(TRDATE);

  var TDDATE = CE("td");
  TRDATE.appendChild(TDDATE);

  // Create label for arrival date
  var LABLEARRDATE = CE("label");
  LABLEARRDATE.setAttribute("for", `arriveday${counter}`);
  LABLEARRDATE.textContent = "Arrival Date:";
  TDDATE.appendChild(LABLEARRDATE);

  TDDATE.appendChild(BR.cloneNode());

  // Create selection of arrival date input
  var INPUTARRDATE = CE("input");
  INPUTARRDATE.name = `arriveday${counter}`;
  INPUTARRDATE.id = `arriveday${counter}`;
  INPUTARRDATE.type = "date";
  TDDATE.appendChild(INPUTARRDATE);

  // create lable for departure date
  var TDDEPDATE = CE("td");
  TRDATE.appendChild(TDDEPDATE);
  // createTD.style.padding = "36px";

  var LABELDEPDATE = CE("label");
  LABELDEPDATE.setAttribute("for", `departday${counter}`);
  LABELDEPDATE.textContent = "Departure Date:";
  TDDEPDATE.appendChild(LABELDEPDATE);

  TDDEPDATE.appendChild(BR.cloneNode());

  // Create selection of departure date input
  var INPUTDEPDATE = CE("input");
  INPUTDEPDATE.name = `departday${counter}`;
  INPUTDEPDATE.id = `departday${counter}`;
  INPUTDEPDATE.type = "date";
  TDDEPDATE.appendChild(INPUTDEPDATE);

  //Create a button to delete the selected camp
  var BUTTONDELETE = document.createElement("button");
  BUTTONDELETE.textContent = "Delete This Camp";
  BUTTONDELETE.setAttribute("id", "deleteCamp");
  BUTTONDELETE.setAttribute("type", "button");
  BUTTONDELETE.setAttribute("class", "btn btn-danger");
  BUTTONDELETE.setAttribute("onClick", "remove(this)");
  SECTIONTHISCAMP.appendChild(BUTTONDELETE);

  // getForm.appendChild(div);
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
