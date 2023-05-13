function updateTime() {
  // Los Angeles
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  losAngelesTime = moment().tz("America/Los_Angeles");

  losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
  losAngelesTimeElement.innerHTML = losAngelesTime.format(
    "h:mm:ss:SSS [<small>]A[</small>]"
  );

  // Kenya
  let khartoumElement = document.querySelector("#khartoum");
  let khartoumDateElement = khartoumElement.querySelector(".date");
  let khartoumTimeElement = khartoumElement.querySelector(".time");
  khartoumTime = moment().tz("Africa/Khartoum");

  khartoumDateElement.innerHTML = khartoumTime.format("MMMM Do YYYY");
  khartoumTimeElement.innerHTML = khartoumTime.format(
    "h:mm:ss:SSS [<small>]A[</small>]"
  );
}
updateTime();
setInterval(updateTime, 1);