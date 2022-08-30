// window.onload = function () {
//   if (!window.location.hash) {
//     window.location = window.location + '#loaded';
//     window.location.reload();
//   }
// }

//Get info of the referring page to display correct data on the form

var queryString = location.search.substring(1);
var a = queryString.split("|");
var para1 = a[0];
var para2 = a[1];

const form = document.getElementById("contact-form");
const formSucc = document.getElementById("contact-form");
const formBook = document.getElementById("contact-form");
const formSup = document.getElementById("contact-form");
const formraw = document.getElementById("contact-form");
const inputElement = document.getElementById("input");

let fileList = [];

function addReferredFromUrl(par2) {
  document.getElementById("pageReferrer").value = par2;
}
addReferredFromUrl(para2)

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
        "https://mad-email-server.herokuapp.com/api/sendEmailCustomer/customer",//
        // "https://mad-email-server.herokuapp.com/api/sendEmailSupplier/supplier",
        // "http://localhost:5000/api/sendEmailCustomer/customer",
        // "http://localhost:5000/api/sendEmailCustomerRaw/raw",
        // "http://localhost:5000/api/sendEmailSupplier/supplier"
        // // to be used later "https://mad-email-server.herokuapp.com/api/sendEmailCustomeSuccessQuote/formsuccessQuote",
      ])
      : (arr = [ //2
        "https://mad-email-server.herokuapp.com/api/sendEmailCustomer/customer",//
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

function GetUrl(par1) {
  const firstOPtion = document.getElementById("firstCamp");
  const camps = [
    { "Ai-Ais": "Ai Ais - Fish River Canyon" },
    { "Boplaas": "Boplaas" },
    { "Daan Viljoen": "Daan Viljoen" },
    { "Dead Valley Lodge": "Dead Valley Lodge" },
    { "Dolomite": "Dolomite - Etosha" },
    { "Duwisib": "Duwisib Castle - Closed" },
    { "Gross Barmen": "Gross Barmen - Okahandja" },
    { "Halali": "Halali - Etosha" },
    { "Hardap Resort": "Hardap Resort" },
    { "Hobas": "Hobas Camping - Fish River" },
    { "Jakkulsputz": "Jakkulsputz" },
    { "Khorixas": "Khorixas Rest camp" },
    { "Mile 14": "Mile 14" },
    { "Mile 72": "Mile 72" },
    { "Mile 108": "Mile 108" },
    { "Naukluft": "Naukluft Campsite" },
    { "Namutoni": "Namutoni - Etosha" },
    { "Okaukuejo": "Okaukuejo - Etosha" },
    { "Olifantsrus": "Olifantsrus Campsite - Etosha" },
    { "Onkoshi": "Onkoshi - Etosha" },
    { "Popa Falls": "Popa Falls Camp" },
    { "Shark Island": "Shark Island - Luderitz" },
    { "Sesriem": "Sesriem - Namib Desert" },
    { "Sesriem Oshana": "Sesriem Oshana" },
    { "Sossus Dune": "Sossus Dune Lodge - Namib Desert" },
    { "Terrace Bay": "Terrace Bay - Skeleton Coast" },
    { "Torra Bay": "Torra Bay - Skeleton Coast" },
    { "Waterberg": "Waterberg Camp" },
    { "Windpomp 14": "Windpomp 14" },
  ];

  for (strName in camps) {
    strValue = camps[strName];
    for (strNameOne in strValue) {
      strValueOne = strValue[strNameOne];
    }
    if (strNameOne === par1) {
      firstOPtion.textContent = `${strValueOne}`;
      firstOPtion.setAttribute("value", `${strNameOne}`)
    };
  }
}
GetUrl(para1)
