const secondsPointer = document.querySelector(".seconds");
const minutesPointer = document.querySelector(".minutes");
const hoursPointer = document.querySelector(".hours");

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();
  const secondsDegree = seconds / 60 * 360;
  const minutesDegree = minutes / 60 * 360;
  const hoursDegree = minutes / 12 * 360;
  secondsPointer.style.transform = `rotate(${secondsDegree}deg)`;
  minutesPointer.style.transform = `rotate(${minutesDegree}deg)`;
  hoursPointer.style.transform = `rotate(${hoursDegree}deg)`;
  console.log(hours);
}

setInterval(setDate, 1000);
