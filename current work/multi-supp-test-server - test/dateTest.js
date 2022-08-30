// import { date } from 'date-and-time'

// const now = new Date();
// console.log("date test")


// const data = {
//   "arrival date": now,
//   "Departure date": now + 1
// }


// function insertInfo() {
//   for (strName in data) {
//     strValue = data[strName]
//     const pattern = date.compile('DD MMM YYYY');
//     if (strName.slice(0, 4) === "arri") {
//       const now = new Date(strValue);
//       console.log(date)
//       strValue = date.format(now, pattern);
//       console.log('now')
//     }
//     // if (strName.slice(0, 4) === "depa") {
//     //   data[strName] = pattern;
//     // }
//   }
// }
// insertInfo()


let sunkarros = ["sunkarros", "b"];
let oryx = [
  'resort1 - Ai-Ais',
  'accomtype1 - Camping - Max 8 people',
  'adults1 - 1',
  'childnopay1 - 1',
  'childhalfprice1 - 1',
  'arriveday1 - 2022-01-10',
  'departday1 - 2022-01-10'
];
let gondwana = ["gondwana", "d"];
let taleni = [];
let brandberg = ["brandberg", "b"];
let altebruck = [];

[
  sunkarros,
  oryx,
  gondwana,
  taleni,
  brandberg,
  altebruck
].forEach(element => {
  if (element.length > 0) {
    // loop through element and add content to email details for this supplier
    element.map((data) => {
      // console.log("data", data)
      // Send the emails from this function for every variable that is not empty
      switch (data) {
        case "sunkarros":
          console.log(sunkarros)
          break;
        case "Oryx":
          let oryx = oryx.filter((element, index) => {
            // console.log("element", element)
            // console.log("index", index)
            return oryx.indexOf(element) === index;
          });

          // console.log(uniqueChars);
          console.log("oryx", oryx)
          break;
        case "gondwana":
          console.log(gondwana)
          break;
        case "taleni":
          console.log(taleni)
          break;
        case "brandberg":
          console.log(brandberg)
          break;
        case "altebruck":
          console.log(altebruck)
          break;
        default:
        // console.log(`no data received for ${data}`)
      }
      return data
    })
  }
  return element;
});




// [
//   sunkarros,
//   oryx,
//   gondwana,
//   taleni,
//   brandberg
// ].map((data) => {
//   data.forEach(element => {
//     if (element !== []) {
//       // Send the emails from this function for every variable that is not empty
//       console.log("element", element);
//     }
//     return element;
//   });
//   return data;
// })


    // console.log("element[0]", element[0]);
    // console.log("element[0].e", element[0].brandberg);