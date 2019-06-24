import clock from "clock";
import document from "document";

let digit1 = document.getElementById("digit1");
let digit2 = document.getElementById("digit2");
let digit3 = document.getElementById("digit3");
let digit4 = document.getElementById("digit4");

clock.granularity = "minutes";

clock.ontick = (evt) => {
  let hours = ("0" + evt.date.getHours()).slice(-2);
  let mins = ("0" + evt.date.getMinutes()).slice(-2);
  
  digit1.href = hours.slice(0, 1) + ".png";
  digit2.href = hours.slice(1, 2) + ".png";
  digit3.href = mins.slice(0, 1) + ".png";
  digit4.href = mins.slice(1, 2) + ".png";
};
