window.onload = function() {
  var dateAndTime = dateAndTime_();

  var pElement = document.body;
  // var pElement = document.getElementById("iframe");
  var upElement = document.getElementById("flexbox");

  var newElement = document.createElement("iframe"); // iframe要素作成
  newElement.setAttribute("src","github/submit.html?dateAndTime=" + dateAndTime);
  newElement.setAttribute("width","0");
  newElement.setAttribute("height","0");
  newElement.setAttribute("style","border:0;");
  newElement.setAttribute("allowfullscreen","");
  pElement.insertBefore(newElement, upElement.nextSibling);

  var newElement2 = document.createElement("iframe"); // iframe要素作成
  newElement2.setAttribute("src","github/submit_GPS.html?dateAndTime=" + dateAndTime);
  newElement2.setAttribute("width","0");
  newElement2.setAttribute("height","0");
  newElement2.setAttribute("style","border:0;");
  newElement2.setAttribute("allowfullscreen","");
  pElement.insertBefore(newElement2, newElement.nextSibling);

  // id_n
}

function toDoubleDigits (num) {
  num += "";
  if (num.length === 1) num = "0" + num;
  return num;
}

function dateAndTime_ () {
  // 16-06-2022_08-24-34_pm
  var date = new Date();
  var dateAndTime =
    date.getDate()                      + '-' +
    toDoubleDigits(date.getMonth() + 1) + '-' +
    date.getFullYear()                  + '_' +
    toDoubleDigits(date.getHours())     + '-' +
    toDoubleDigits(date.getMinutes())   + '-' +
    toDoubleDigits(date.getSeconds())   + '_' +
    ((date.getHours < 12) ? 'am' : 'pm');
  return dateAndTime;
}
