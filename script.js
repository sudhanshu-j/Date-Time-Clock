// Importing the Data

import { week, months } from "/data.js";

function zeroPadding(num) {
  return num < 10 ? "0" + num : num;
}

function showtime() {
  let date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  let session = "AM";

  if (h > 12) {
    h = h - 12;
    session = "PM";
  }
  h = zeroPadding(h);
  m = zeroPadding(m);
  s = zeroPadding(s);

  let time = h + ":" + m + ":" + s + " " + session;
  let dateS =
    week[date.getDay()] +
    ", " +
    months[date.getMonth()] +
    " " +
    zeroPadding(date.getDate());

  document.querySelector(".time").innerHTML = time;
  document.querySelector(".date").innerHTML = dateS;
}
let interval = setInterval(showtime, 1000);
