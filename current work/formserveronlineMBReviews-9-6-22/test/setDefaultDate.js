let arrDateValue = ''
let depDateValue = ''

//Set the value of the arrival date selector to todays date.
const arrDateHtml = document.getElementById(`arriveday${counter}`);

const today = new Date();
function arrdate() {
  if (today.getDate() <= 9 && today.getMonth() <= 9) {
    arrDateValue = today.getFullYear() + "-" + 0 + Number(today.getMonth() + 1) + "-" + 0 + today.getDate();
  } else if (today.getDate() <= 9 && today.getMonth() >= 9) {
    arrDateValue = today.getFullYear() + "-" + Number(today.getMonth() + 1) + "-" + 0 + today.getDate();
  } else if (today.getDate() >= 9 && today.getMonth() <= 9) {
    arrDateValue = today.getFullYear() + "-" + 0 + Number(today.getMonth() + 1) + "-" + today.getDate();
  } else {
    arrDateValue = today.getFullYear() + "-" + Number(today.getMonth() + 1) + "-" + today.getDate();
  }
  arrDateHtml.setAttribute("value", arrDateValue);
}
arrdate();

// Event listener to change the value of date selecter to the selected date 

function changeArrDate() {
  // Change arriveDate

  arrDateValue = document.getElementById(`arriveday${counter}`).value
  arrDateHtml.setAttribute("value", document.getElementById(`arriveday${counter}`).value)

  // set depdate === arrdate

  depDateValue = document.getElementById(`arriveday${counter}`).value
  depDateHtml.setAttribute("value", depDateValue)
};

document.getElementById(`arriveday${counter}`).addEventListener("change", changeArrDate);

// Event listener to change the value of date selecter to the selected date
// for depdate

const depDateHtml = document.getElementById(`departday${counter}`);
function depDate() {
  depDateValue = document.getElementById(`departday${counter}`).value
  depDateHtml.setAttribute("value", depDateValue)
}

// Event listener to change the value of date selecter to the selected date
document.getElementById(`departday${counter}`).addEventListener("change", depDate);