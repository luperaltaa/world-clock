function updateUshuaiaTime() {
  let ushuaiaElement = document.querySelector(".city");
  let ushuaiaDateElement = ushuaiaElement.querySelector(".date");
  let ushuaiaTimeElement = ushuaiaElement.querySelector(".time");
  let dateTime = moment().tz("America/Buenos_Aires");

  ushuaiaDateElement.innerHTML = dateTime.format("MMMM Do YYYY");
  ushuaiaTimeElement.innerHTML = dateTime.format("h:mm:ss[ <small>AM</small>]");
}
updateUshuaiaTime();
setInterval(updateUshuaiaTime, 1000);
