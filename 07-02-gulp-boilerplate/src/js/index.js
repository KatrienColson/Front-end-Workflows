"use strict";
let geselecteerdepromotie;
let promotieTxt;

let dagTxt;
let maandTxt;
let jaartalTxt;

let geselecteerduur;
let uurTxt;

let personenTxt;

let alleBinnenBuitenArray;
let teSelecterenBinnenBuiten;
let terras;
let buiten;

let voornaamTxt;
let achternaamTxt;
let straatnaamTxt;
let straatnummerTxt;
let postcodeTxt;
let emailTxt;
let alleWinToestelArray;
let allesCorrectIngevuld = true;

function controleerVoorwaardenVoornaam() {
  if (voornaamTxt.length < 2) {
    document.getElementById("voornaam_error").innerHTML =
      "Minstens 2 karakters lang!";
    allesCorrectIngevuld = false;
  } else {
    document.getElementById("voornaam_error").innerHTML = "";
  }
}

function controleerVoorwaardenAchternaam() {
  if (achternaamTxt.length < 2) {
    document.getElementById("achternaam_error").innerHTML =
      "Minstens 2 karakters lang!";
    allesCorrectIngevuld = false;
  } else {
    document.getElementById("achternaam_error").innerHTML = "";
  }
}

function controleerVoorwaardenStraatnaam() {
  if (straatnaamTxt.length < 2) {
    document.getElementById("straatnaam_error").innerHTML =
      "Minstens 2 karakters lang!";
    allesCorrectIngevuld = false;
  } else {
    document.getElementById("straatnaam_error").innerHTML = "";
  }
}

function controleerVoorwaardenStraatnummer() {
  if (straatnummerTxt.search(/^\d/) == -1) {
    document.getElementById("straatnummer_error").innerHTML =
      "Minstens 1 cijfer!";
    allesCorrectIngevuld = false;
  } else {
    document.getElementById("straatnummer_error").innerHTML = "";
  }
}

function controleerVoorwaardenPostcode() {
  if (postcodeTxt.search(/^[1-9]\d{3}$/) == -1) {
    document.getElementById("postcode_error").innerHTML = "Minstens 1 cijfer!";
    allesCorrectIngevuld = false;
  } else {
    document.getElementById("postcode_error").innerHTML = "";
  }
}

function controleerVoorwaardenEmail() {
  let regExp = /^[A-Za-z][\.A-Za-z0-9+_-]+@[\.A-Za-z0-9-]+\.[A-Za-z]{2,20}$/;
  if (regExp.test(emailTxt) == false) {
    document.getElementById("email_error").innerHTML = "Dit is niet correct!";
    allesCorrectIngevuld = false;
  } else {
    document.getElementById("email_error").innerHTML = "";
  }
}

function verstuur() {
  geselecteerdepromotie = document.getElementById("promotie").selectedIndex;
  promotieTxt = document.getElementById("promotie").value;

  dagTxt = document.getElementById("dag").value;
  maandTxt = document.getElementById("maand").value;
  jaartalTxt = document.getElementById("jaartal").value;

  geselecteerduur = document.getElementById("uur").selectedIndex;
  uurTxt = document.getElementById("uur").value;

  personenTxt = document.getElementById("personen").value;

  alleBinnenBuitenArray = document.getElementsByClassName("binnenbuiten");

  voornaamTxt = document.getElementById("voornaam").value;
  achternaamTxt = document.getElementById("achternaam").value;
  straatnaamTxt = document.getElementById("straatnaam").value;
  straatnummerTxt = document.getElementById("straatnummer").value;
  postcodeTxt = document.getElementById("postcode").value;
  emailTxt = document.getElementById("email").value;

  teSelecterenBinnenBuiten = 0;

  allesCorrectIngevuld = true;

  if (geselecteerdepromotie == 0) {
    document.getElementById("promotie_error").innerHTML = "Kies a.u.b.";
    allesCorrectIngevuld = false;
  } else {
    document.getElementById("promotie_error").innerHTML = "";
  }

  if (dagTxt.length == 0) {
    document.getElementById("dag_error").innerHTML = "Vul in a.u.b.";
    allesCorrectIngevuld = false;
  } else {
    document.getElementById("dag_error").innerHTML = "";
  }

  if (maandTxt.length == 0) {
    document.getElementById("maand_error").innerHTML = "Vul in a.u.b.";
    allesCorrectIngevuld = false;
  } else {
    document.getElementById("maand_error").innerHTML = "";
  }

  if (jaartalTxt.length == 0) {
    document.getElementById("jaartal_error").innerHTML = "Vul in a.u.b.";
    allesCorrectIngevuld = false;
  } else {
    document.getElementById("jaartal_error").innerHTML = "";
  }

  if (geselecteerduur == 0) {
    document.getElementById("uur_error").innerHTML = "Kies a.u.b.";
    allesCorrectIngevuld = false;
  } else {
    document.getElementById("uur_error").innerHTML = "";
  }

  if (voornaamTxt.length == 0) {
    document.getElementById("personen_error").innerHTML = "Vul in a.u.b.";
    allesCorrectIngevuld = false;
  } else {
    document.getElementById("personen_error").innerHTML = "";
  }

  let lengte = alleBinnenBuitenArray.length;
  for (let i = 0; i < lengte; i++) {
    if (alleBinnenBuitenArray[i].checked) {
      teSelecterenBinnenBuiten++;
    }
  }
  if (teSelecterenBinnenBuiten == 0) {
    document.getElementById("binnenbuiten_error").innerHTML =
      "Kies a.u.b. minstens 1";
    allesCorrectIngevuld = false;
  } else {
    document.getElementById("binnenbuiten_error").innerHTML = "";
    terras = "Terras = " + alleBinnenBuitenArray[0].checked;
    buiten = "Buiten = " + alleBinnenBuitenArray[1].checked;
  }

  if (voornaamTxt.length == 0) {
    document.getElementById("voornaam_error").innerHTML = "Vul in a.u.b.";
    allesCorrectIngevuld = false;
  } else {
    controleerVoorwaardenVoornaam();
  }

  if (achternaamTxt.length == 0) {
    document.getElementById("achternaam_error").innerHTML = "Vul in a.u.b.";
    allesCorrectIngevuld = false;
  } else {
    controleerVoorwaardenAchternaam();
  }

  if (straatnaamTxt.length == 0) {
    document.getElementById("straatnaam_error").innerHTML = "Vul in a.u.b.";
    allesCorrectIngevuld = false;
  } else {
    controleerVoorwaardenStraatnaam();
  }

  if (straatnummerTxt.length == 0) {
    document.getElementById("straatnummer_error").innerHTML = "Vul in a.u.b.";
    allesCorrectIngevuld = false;
  } else {
    controleerVoorwaardenStraatnummer();
  }

  if (postcodeTxt.length == 0) {
    document.getElementById("postcode_error").innerHTML = "Vul in a.u.b.";
    allesCorrectIngevuld = false;
  } else {
    controleerVoorwaardenPostcode();
  }

  if (emailTxt.length == 0) {
    document.getElementById("email_error").innerHTML = "Vul in a.u.b.";
    allesCorrectIngevuld = false;
  } else {
    controleerVoorwaardenEmail();
  }

  if (allesCorrectIngevuld == true) {
    let link =
      "mailto:" +
      encodeURIComponent("charlotte7middleton@gmail.com") +
      encodeURIComponent(document.getElementById("email").value) +
      "?cc=" +
      encodeURIComponent("charlottemiddleton@hotmail.com;") +
      "&subject=" +
      encodeURIComponent("Reservatie validatie") +
      "&body=" +
      "promotie:" +
      encodeURIComponent(promotieTxt) +
      encodeURIComponent("\r\n\n") +
      "dag:" +
      encodeURIComponent(dagTxt) +
      encodeURIComponent("\r\n\n") +
      "maand:" +
      encodeURIComponent(maandTxt) +
      encodeURIComponent("\r\n\n") +
      "jaartal:" +
      encodeURIComponent(jaartalTxt) +
      encodeURIComponent("\r\n\n") +
      "uur:" +
      encodeURIComponent(uurTxt) +
      encodeURIComponent("\r\n\n") +
      "personen:" +
      encodeURIComponent(personenTxt) +
      encodeURIComponent("\r\n\n") +
      "terras:" +
      encodeURIComponent(terras) +
      encodeURIComponent("\r\n\n") +
      "buiten:" +
      encodeURIComponent(buiten) +
      encodeURIComponent("\r\n\n") +
      "voornaam:" +
      encodeURIComponent(voornaamTxt) +
      encodeURIComponent("\r\n\n") +
      "achternaam:" +
      encodeURIComponent(achternaamTxt) +
      encodeURIComponent("\r\n\n") +
      "postcode:" +
      encodeURIComponent(postcodeTxt) +
      encodeURIComponent("\r\n\n") +
      "straat:" +
      encodeURIComponent(straatnaamTxt) +
      "straatnummer:" +
      encodeURIComponent(straatnummerTxt) +
      encodeURIComponent("\r\n\n") +
      "email:" +
      encodeURIComponent(emailTxt) +
      encodeURIComponent("\r\n\n");
    window.location.href = link;
  }
}
