const express = require('express');

const router = express.Router();

const multiparty = require("multiparty");
const nodemailer = require("nodemailer");
var smtpTransport = require('nodemailer-smtp-transport');

router.get('/supplier', async function (req, res) {
  res.json(`${data} or data`)
});

var transport = nodemailer.createTransport(smtpTransport({
  host: "mail.madbookings.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS,
  },
}));

// verify connection configuration
transport.verify(function (error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take our messages - Supplier");
  }
});

//Send customer booking form to MB
router.post("/supplier", (req, res) => {

  let formSup = new multiparty.Form();
  let data = {};
  formSup.parse(req, function (err, fields) {
    // console.log("fields", fields);
    Object.keys(fields).forEach(function (property) {
      data[property] = fields[property].toString();
    });
    // console.log("data", data);


    const camps = [
      {
        company: "Oryx",
        companyEmail: "products@madbookings.com",
        campsNames: [
          "Aiais",
          "Boplaas",
          "Shark Island",
          "Naukluft",
          "Olifantsrus",
          "Khorixas",
          "Hobas",
          "Terrace Bay",
          "Torra Bay",
          "Mile 108",
          "Mile 72",
          "Jakkalsputz",
          "Sesriem",
          "Ai-Ais",
          "Namutoni",
          "Okaukuejo",
          "Halali",
          "Waterberg",
          "Gross Barmen",
          "Hardap",
          "Popa Falls",
          "Sossus Dune",
          "Onkoshi",
          "Dolomite"
        ]
      },
      {
        company: "Sunkarros",
        companyEmail: "print@madbookings.com",
        campsNames: ["Dead Valley Lodge", "Sesriem Oshana", "Daan Viljoen"],
      },
      {
        company: "SunkarrosM14",
        companyEmail: "admin@madbookings.com",
        campsNames: ["Windpomp 14"],
      },
      // {
      //   company: "Gondwana",
      //   companyEmail: "admin@madbookings.com",
      //   campsNames: ["Canyon Roadhouse", "Etosha Safari Lodge", "Etosha Safari Camp"]
      // },
      // {
      //   company: "Taleni",
      //   companyEmail: "rep2@madbookings.com",
      //   campsNames: ["Canyon Lodge", "Canyon Village"],
      // },
      // {
      //   company: "Altebruck",
      //   companyEmail: "print@madbookings.com",
      //   campsNames: ["Alte Bruck"],
      // },
      // {
      //   company: "Brandberg",
      //   companyEmail: "products@madbookings1111.com",
      //   campsNames: ["Brandberg Rest Camp"],
      // }
    ];

    // Add all suppliers requested in booking to list to send emails to
    let maillist = [];

    // Counter to be used to check for different camps details
    let counter = 1

    // All camp data
    const campDetails = camps.map(data => data);

    // Storage of different suppliers info received from the form
    let oryx = [];
    let sunkarros = [];
    let sunkarrosm14 = []; // Add to switch statement
    // let gondwana = [];
    // let taleni = [];
    // let brandberg = [];
    // let altebruck = [];

    // Set all fields to variables for allocation
    let resort = "";
    let accomtype = "";
    let adults = "";
    let childNoCharge = "";
    let childPayHalf = "";
    let arrday = "";
    let depday = "";

    // Supplier details variables
    let result = false
    let company = "";
    let companyEmail = "";

    // Storing current camp name to use for checking supplier details
    currentCampName = "";

    // converting form data to created variables
    for (const tag in data) {
      info = data[tag];

      if (tag.slice(0, 6) === "resort") {
        currentCampName = info
      }

      if (tag.slice(0, 6) === "resort") {
        resort = tag.slice(0, 6) + counter
      }

      if (tag.slice(0, 6) === "accomt") {
        accomtype = tag.slice(0, 9) + counter
      }

      if (tag.slice(0, 6) === "adults") {
        adults = tag.slice(0, 6) + counter
      }

      if (tag.slice(0, 6) === "childn") {
        childNoCharge = tag.slice(0, 10) + counter
      }

      if (tag.slice(0, 6) === "childh") {
        childPayHalf = tag.slice(0, 14) + counter
      }

      if (tag.slice(0, 6) === "arrive") {
        arrday = tag.slice(0, 9) + counter
      }

      if (tag.slice(0, 6) === "depart") {
        depday = tag.slice(0, 9) + counter
        currentCampName = ""
        counter++
      }

      // Check campsDetails vs formData and adding details to the different suppliers
      for (let i = 0; i < campDetails.length; i++) {
        result = campDetails[i].campsNames.includes(currentCampName);

        if (result) {
          company = campDetails[i].company
          companyEmail = campDetails[i].companyEmail
        }
      }

      if (
        currentCampName === resort
        || tag === resort
        || tag === accomtype
        || tag === adults
        || tag === childNoCharge
        || tag === childPayHalf
        || tag === arrday
        || tag === depday
      ) {
        switch (company) {
          case "Oryx":
            oryx.push(`<p>${tag} - ${info}</p>`);
            oryx = oryx.filter((element, index) => {
              return oryx.indexOf(element) === index;
            });
            maillist.push(companyEmail)
            break;
          case "Sunkarros":
            sunkarros.push(`<p>${tag} - ${info}</p>`);
            sunkarros = sunkarros.filter((element, index) => {
              return sunkarros.indexOf(element) === index;
            });
            maillist.push(companyEmail)
            break;
          case "SunkarrosM14":
            sunkarrosm14.push(`<p>${tag} - ${info}</p>`);
            sunkarrosm14 = sunkarrosm14.filter((element, index) => {
              return sunkarrosm14.indexOf(element) === index;
            });
            maillist.push(companyEmail)
            break;
          // case "Gondwana":
          //   gondwana.push(`<p>${tag} - ${info}</p>`);
          //   gondwana = gondwana.filter((element, index) => {
          //     return gondwana.indexOf(element) === index;
          //   });
          //   maillist.push(companyEmail)
          //   break
          // case "Taleni":
          //   taleni.push(`<p>${tag} - ${info}</p>`);
          //   taleni = taleni.filter((element, index) => {
          //     return taleni.indexOf(element) === index;
          //   });
          //   maillist.push(companyEmail)
          //   break
          // case "Altebruck":
          //   altebruck.push(`<p>${tag} - ${info}</p>`);
          //   altebruck = altebruck.filter((element, index) => {
          //     return altebruck.indexOf(element) === index;
          //   });
          //   maillist.push(companyEmail)
          //   break
          // case "Brandberg":
          //   brandberg.push(`<p>${tag} - ${info}</p>`);
          //   brandberg = brandberg.filter((element, index) => {
          //     return brandberg.indexOf(element) === index;
          //   });
          //   maillist.push(companyEmail)
        }
      }
    }

    maillist = maillist.filter((element, index) => {
      return maillist.indexOf(element) === index;
    });

    console.log("maillist", maillist)

    maillist.forEach(function (to, i) {
      let emailInfo = "";

      const campEmail = campDetails.map(data => data.companyEmail)

      if (campEmail.includes(to)) {
        const campName = campDetails.map(data => {
          if (data.companyEmail === to) {
            emailInfo = data.company
          }
          return data;
        })
      }
      console.log("to", to)
      console.log("emailInfo", emailInfo)

      const changeCompanyNameToVar = (compName) => {
        return eval(compName.toLowerCase());
      }

      test = changeCompanyNameToVar(emailInfo)

      const supplier = {
        from: 'products@madbookings.com',
        replyTo: 'products@madbookings.com',
        subject: `New Booking: ${data.arriveday1} ${data.resort1} \( ${data.name} ${data.surname} \)`,
        html: `< h3 > Dear Reservation</h3 >
        <p>Please make the following provisional reservation for me: <strong style="color: red;">1 Booking</strong></p>
        <p><strong>Reservation Name:</strong> "${data.name}" "${data.surname}"</p>

        ********* Add camp data here *********
          ${changeCompanyNameToVar(emailInfo).join(" ")}
        <p>I look forward to your confirmation.</p >
        <br>
        <p>Rep 3</p>
        <p>Madbookings</p>`,
      };

      supplier.to = to; //  receiver email,

      transport.sendMail(supplier, (err) => {
        if (err) {
          res.status(500).send(err);
        } else {
          if (i === maillist.length - 1) {
            res.status(200).send("the email successfully sent to recipient!");
          }
        }
      });
      // end
    });
  });
});

module.exports = router;
//  ${a[0].data.oryx.join(" ")}