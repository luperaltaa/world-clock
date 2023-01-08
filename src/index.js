function updateUshuaiaTime() {
  let ushuaiaElement = document.querySelector("#ushuaia");
  let ushuaiaDateElement = ushuaiaElement.querySelector(".date");
  let ushuaiaTimeElement = ushuaiaElement.querySelector(".time");
  let dateTime = moment().tz("America/Buenos_Aires");

  ushuaiaDateElement.innerHTML = dateTime.format("MMMM Do YYYY");
  ushuaiaTimeElement.innerHTML = dateTime.format("h:mm:ss[ <small>AM</small>]");
}
function updateMalagaTime() {
  let malagaElement = document.querySelector("#malaga");
  let malagaDateElement = malagaElement.querySelector(".date");
  let malagaTimeElement = malagaElement.querySelector(".time");
  let dateTime = moment().tz("Europe/Madrid");

  malagaDateElement.innerHTML = dateTime.format("MMMM Do YYYY");
  malagaTimeElement.innerHTML = dateTime.format("h:mm:ss[ <small>AM</small>]");
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");

  citiesElement.innerHTML = `<div class="city">
        <div>
          <h2>${cityName}</h2>
          <div class="date">${cityTime.format("MMMM Do yyyy")}</div>
        </div>
        <div class="time">${cityTime.format(
          "h:mm:ss"
        )}<small> ${cityTime.format("A")}</small></div>
      </div>
      <a id="home" href="">Home</a>
      `;
  let home = citiesElement.querySelector("#home");
  home.addEventListener("click", returnHome);
}
function returnHome() {
  let citiesElement = document.querySelector("#cities");
  citiesElement = `<div class="city" id="ushuaia">
          <div>
            <h2>Ushuaia🇦🇷</h2>
            <div class="date">December 23rdf 2022</div>
          </div>
          <div class="time">20:41 <small> pm</small></div>
        </div>
        <div class="city" id="malaga">
          <div>
            <h2>Malaga🇪🇸</h2>
            <div class="date">December 23rdf 2022</div>
          </div>
          <div class="time">20:41 <small> pm</small></div>
        </div>`;
}

updateUshuaiaTime();
setInterval(updateUshuaiaTime, 1000);

updateMalagaTime();
setInterval(updateMalagaTime, 1000);

let citiesSelect = document.querySelector("#city");

citiesSelect.addEventListener("change", updateCity);
