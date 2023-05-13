function updateTime() {
  // Los Angeles
  let losAngelesElement = document.querySelector("#los-angeles");
  if (losAngelesElement) {
    let losAngelesDateElement = losAngelesElement.querySelector(".date");
    let losAngelesTimeElement = losAngelesElement.querySelector(".time");
    losAngelesTime = moment().tz("America/Los_Angeles");

    losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
    losAngelesTimeElement.innerHTML = losAngelesTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  // Khartoum
  let khartoumElement = document.querySelector("#khartoum");
  if (khartoumElement) {
    let khartoumDateElement = khartoumElement.querySelector(".date");
    let khartoumTimeElement = khartoumElement.querySelector(".time");
    khartoumTime = moment().tz("Africa/Khartoum");

    khartoumDateElement.innerHTML = khartoumTime.format("MMMM Do YYYY");
    khartoumTimeElement.innerHTML = khartoumTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  // Dubai
  let dubaiElement = document.querySelector("#dubai");
  if (dubaiElement) {
    let dubaiDateElement = dubaiElement.querySelector(".date");
    let dubaiTimeElement = dubaiElement.querySelector(".time");
    dubaiTime = moment().tz("Asia/Dubai");

    dubaiDateElement.innerHTML = dubaiTime.format("MMMM Do YYYY");
    dubaiTimeElement.innerHTML = dubaiTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

function updateCity (event) {
let cityTimeZone = event.target.value;
if (cityTimeZone === "current") {
   cityTimeZone = moment.tz.guess();
}
let cityName = cityTimeZone.replace("_", " ").split("/")[1];
let cityTime = moment().tz(cityTimeZone);

let citiesElement = document.querySelector("#cities");
citiesElement.innerHTML = ` 
<div class="city">
        <div>
        <h2>${cityName}</h2>
       <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
       </div>
         <div class="time">${cityTime.format(
           "h:mm:ss"
         )} <small>${cityTime.format("A")}</small></div> 
       </div>
       <a href="/">Back to main page..</a>
`;
}



updateTime();
setInterval(updateTime, 1000);


let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change",updateCity);