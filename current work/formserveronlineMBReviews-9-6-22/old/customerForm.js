window.onload = function () {
  if (!window.location.hash) {
    window.location = window.location + '#loaded';
    window.location.reload();
  }
}

const form = document.getElementById("contact-form");
const formSucc = document.getElementById("contact-form");
const formBook = document.getElementById("contact-form");
const formSup = document.getElementById("contact-form");
const formraw = document.getElementById("contact-form");
const inputElement = document.getElementById("input");
const url = new URL(document.referrer);
const previousPageForm = (document.getElementById("pageReferrer").value =
  url.href);
let fileList = [];

function validateForm() {
  let x = document.forms["contact-form"]["email"].value;
  let y = document.forms["contact-form"]["emailcheck"].value;
  if (x !== y) {
    alert("Please recheck your email adressess");
    return false;
  }
}

function checkEmail() {
  let emailcheck = document.forms["contact-form"]["email"].value;
  if (emailcheck !== "") {
    document.getElementById("displayButton").style.display = "block";
  }
}

let recaptcha_response = "";

function verifyCaptcha(token) {
  recaptcha_response = token;
  document.getElementById("g-recaptcha-error").innerHTML = "";
}

let arr = [];
var cq = document.getElementById("book");

const formEvent = form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (recaptcha_response.length == 0) {
    document.getElementById("g-recaptcha-error").innerHTML =
      '<span style="color:red;">This field is required.</span>';
    return false;
  } else {
    event.preventDefault();
    cq.checked
      ? (arr = [ //3
        "https://mad-email-server.herokuapp.com/api/sendEmailCustomerRaw/raw",//
        "https://mad-email-server.herokuapp.com/api/sendEmailCustomer/customer",
        // "https://mad-email-server.herokuapp.com/api/sendEmailSupplier/supplier",
        // "http://localhost:5000/api/sendEmailCustomer/customer",
        // "http://localhost:5000/api/sendEmailCustomerRaw/raw",
        // "http://localhost:5000/api/sendEmailSupplier/supplier"
        // // to be used later "https://mad-email-server.herokuapp.com/api/sendEmailCustomeSuccessQuote/formsuccessQuote",
      ])
      : (arr = [ //2
        "https://mad-email-server.herokuapp.com/api/sendEmailCustomer/customer",
        "https://mad-email-server.herokuapp.com/api/sendEmailCustomerRaw/raw",//
        // "https://mad-email-server.herokuapp.com/api/sendEmailSupplier/supplier"
        // "http://localhost:5000/api/sendEmailCustomer/customer",
        // "http://localhost:5000/api/sendEmailCustomerRaw/raw",
        // "http://localhost:5000/api/sendEmailSupplier/supplier"
        // // to be used later "https://mad-email-server.herokuapp.com/api/sendEmailCustomeSuccessBook/formsuccessBook",
      ]);
    let mail = new FormData(form);
    let formsuccessQuote = new FormData(formSucc);
    let formsuccessBook = new FormData(formBook);
    let supplier = new FormData(formSup);
    let raw = new FormData(formraw);
    sendMail(mail, formsuccessQuote, formsuccessBook, supplier, fileList, raw);
  }
  return true;
});

const sendMail = (mail, formsuccessQuote, formsuccessBook, supplier, raw) => {

  document.getElementById("loader").style.display = "block";

  let requests = arr.map((urls) => {
    fetch(urls, {
      method: "post",
      body: mail,
      formsuccessQuote,
      formsuccessBook,
      supplier,
      raw,
    }).then((response) => {
      if (response.status === 200) {
        cq.checked
          ? (window.location = "./formsuccessbook.html")
          : (window.location = "./formsuccessquote.html");
      }
      return response.json();
    });
  });
  return requests;
};

function GetUrl() {
  const url = new URL(document.referrer);
  const previousPage = url.href;
  const firstOPtion = document.getElementById("firstCamp");
  const camps = [
    { aiaisresort: "Ai Ais" },
    { "ai-ais": "Ai Ais" },
    { boplaas: "Boplaas" },
    { "daan-viljoen": "Daan Viljoen" },
    { "dead-valley-lodge": "Dead Valley Lodge" },
    { dolomite: "Dolomite - Etosha" },
    { duwisib: "Duwisib Castle" },
    { "gross-barmen": "Gross Barmen - Okahandja" },
    { halali: "Halali - Etosha" },
    { hardap: "Hardap Resort" },
    { hobas: "Hobas Camping - Fish River" },
    { jakkulsputz: "Jakkulsputz" },
    { khorixas: "Khorixas Rest camp" },
    { "mile-14": "Mile 14" },
    { "mile-72": "Mile 72" },
    { "mile-108": "Mile 108" },
    { naukluft: "Naukluft Campsite" },
    { namutoni: "Namutoni - Etosha" },
    { okaukuejo: "Okaukuejo - Etosha" },
    { olifantsrus: "Olifantsrus Campsite - Etosha" },
    { onkoshi: "Onkoshi - Etosha" },
    { "popa-falls": "Popa Falls Camp" },
    { "shark-island": "Shark Island - Luderitz" },
    { sesriem: "Sesriem - Namib Desert" },
    { "sesriem-oshana": "Sesriem Oshana" },
    { sossusdunelodge: "Sossus Dune Lodge - Namib Desert" },
    { "sossus-dune": "Sossus Dune Lodge - Namib Desert" },
    { "terrace-bay": "Terrace Bay - Skeleton Coast" },
    { "torra-bay": "Torra Bay - Skeleton Coast" },
    { waterberg: "Waterberg Camp" },
    { "windpomp-14": "Windpomp 14" },
  ];

  let camp = [previousPage.split("/")];
  let newCamp = "";

  for (i = 0; i < camp.length; i++) {
    newCamp = camp[i].slice(-2, -1).toString();
  }
  for (strName in camps) {
    strValue = camps[strName];
    for (strNameOne in strValue) {
      strValueOne = strValue[strNameOne];
      newCampOne = strNameOne.toString();
      let identifiedCamp = newCamp.includes(newCampOne);
      if (identifiedCamp) {
        firstOPtion.textContent = `${strValueOne.slice(0, 1).toUpperCase()}${strValueOne.slice(1)}`;
        firstOPtion.setAttribute("value", `${strValueOne.slice(0, 1).toUpperCase()}${strValueOne.slice(1)}`
        );
      }
    }
  }
}

