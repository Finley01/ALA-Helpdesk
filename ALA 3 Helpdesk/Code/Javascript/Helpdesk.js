//Welkom en Naam
var welcome = alert("Welkom op de website van de helpdesk");
var name = prompt("Wat is de naam van de beller?");
while (name == "") {
  var name = prompt("Ik heb hier wel iets nodig");
}

//Datum
var date = prompt("Wat is de datum vandaag?");
while (date == "") {
  var date = prompt("Ik heb hier wel iets nodig");
}

//Modem Type
var modem = prompt("Wat is het merk en type van uw modem?");
while (modem == "") {
  var modem = prompt("Ik heb hier wel iets nodig");
}

//Klacht 1
var klacht = confirm("Heeft u een klacht over ons product: Internet?");
if (klacht == true) {
  var nu = confirm("Kunt u browsen naar www.nu.nl?");
  if (nu == true) {
    var laden = confirm("Reageert de pagina snel na het indrukken van F5?");
  }
}

//Klacht 2
var klacht2 = confirm(
  "Heeft u een klacht over ons product: Internet en Bellen"
);
if (klacht2 == true) {
  var kiestoon = confirm(
    "Hoort u een kiestoon?");
  var bellen = confirm(
    "Kunt u uzelf bellen op bijvoorbeeld een mobiel nummer?");
  if (bellen == true) {
    var ookbellen = confirm(
      "Kunt u met uw mobiel het nummer bellen waar u een klacht over heeft?"
    );
  }
}
{
  //Klacht 3
  var klacht3 = confirm(
    "Heeft u een klacht over ons product: Internet, Bellen en Televisie"
  );
  if (klacht3 == true) {
    var toestellen = prompt("Aantal televisie toestellen:");
    var split = confirm("Is uw splitter goed aangesloten?");
    var settup = confirm("Is uw settopbox goed aangesloten?");
    var zenders = confirm("Worden de zenders gevonden?");
  }
}
//Er is niks mis
if (klacht == false && klacht2 == false && klacht3 == false) {
  alert("Er is niks mis met uw netwerk.");
}
if (klacht + klacht2 + klacht3 + nu + laden + kiestoon + bellen + ookbellen + split + settup + zenders == 11) {
  alert("Er is niks mis met uw netwerk.");
}

//Alle Document.writes
document.write("<h1>" + name + "</h1>");

document.write("<br/> De datum is : " + date);

document.write("<br/>Modem type: " + modem);

document.write("<fieldset> <legend>Internet </legend>");

if (klacht == true) {
  document.write("<br/>Klacht over Internet: Ja");
} else if (klacht == false) {
  document.write("<br/>Er zijn geen klachten over dit pakket");
}

if (nu == true) {
  document.write("<br/>U kunt op de pagina nu.nl komen: Ja");
} else if (nu == false) {
  document.write("<br/>U kunt op de pagina nu.nl komen: Nee");
}

if (laden == true) {
  document.write("<br/>De pagina reageert snel als u op F5 drukt: Ja");
} else if (laden == false) {
  document.write("<br/>De pagina reageert snel als u op F5 drukt: nee");
}
document.write("<br/><a href='datainternet/internetladen.html'>Oplossing voor nu.nl laden</a>");
document.write("<br/><a href='datainternet/snelheidladen.html'>Oplossing voor Snelheid laden</a>");

document.write("</fieldset>");


document.write("<fieldset><legend>Internet en Bellen</legend>")
if (klacht2 == true) {
  document.write("<br/>Klacht over Internet en Bellen: Ja");
} else if (klacht2 == false) {
  document.write("<br/>Er zijn geen klachten over dit pakket");
}
if (kiestoon == true) {
  document.write("<br/>U hoort een kiestoon: Ja");
}
else if (kiestoon == false) {
  document.write("<br/>U hoort een kiestoon: Nee");
}
if (bellen == true) {
  document.write("<br/>U kunt uzelf bellen op een mobiel nummer: Ja");
}
else if (bellen == false) {
  document.write("<br/>U kunt uzelf bellen op een mobiel nummer: Nee");
}
if (ookbellen == true) {
  document.write("<br/>U kunt met uw mobiel het nummer bellen waar u een klacht over heeft: Ja");
}
else if (ookbellen == false) {
  document.write("<br/>U kunt met uw mobiel het nummer bellen waar u een klacht over heeft: Nee");
}
document.write("<br/><a href='InternetBellen/geenkiestoon.html'>Oplossing voor Kiestoon</a>");
document.write("<br/><a href='InternetBellen/uitbellen.html'>Oplossing voor Bellen</a>");
document.write("<br/><a href='InternetBellen/gebeldworden.html'>Oplossing voor gebeld worden</a>");
document.write("</fieldset>");


document.write("<fieldset><legend>Internet, Bellen en Televisie</legend>")
if (klacht3 == true) {
  document.write("<br/>Klacht over Internet, Bellen en Televisie: Ja");
} else if (klacht3 == false) {
  document.write("<br/>Er zijn geen klachten over dit pakket");
}
if (toestellen > 0) {
  document.write("<br/>Aantal televisies: " + toestellen);
}
if (split == true) {
  document.write("<br/>Splitter is goed aangesloten: Ja");
} else if (split == false) {
  document.write("<br/>Splitter is goed aangesloten: Nee");
}
if (settup == true) {
  document.write("<br/>Settopbox is goed aangesloten: Ja");
} else if (settup == false) {
  document.write("<br/>Settopbox is goed aangesloten: Nee");
}
if (zenders == true) {
  document.write("<br/>Zenders worden gevonden: Ja");
} else if (zenders == false) {
  document.write("<br/>Zenders worden gevonden: Nee");
}
document.write("<br/><a href='InternetBellentelevisie/splitteraangesloten.html'>Oplossing voor splitter</a>");
document.write("<br/><a href='InternetBellentelevisie/settupboxaangesloten.html'>Oplossing voor settopbox</a>");
document.write("<br/><a href='InternetBellentelevisie/zendersnietgevonden.html'>Oplossing voor zenders</a>");
document.write("</fieldset>");

var klachten = klacht + klacht2 + klacht3
var alles = klacht + klacht2 + klacht3 + nu + laden + kiestoon + bellen + ookbellen + split + settup + zenders

document.write("<br/>Aantal klachten: " + klachten + " op " + date);

if (alles == 11) {
  document.write("<br/>Uw modem " + modem + " werkt goed.");
}
else {
  document.write("<br/>Uw modem " + modem + " werkt niet goed.");
}