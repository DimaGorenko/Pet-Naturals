// Clock (time remaining)

function getTimeRemaining(endtime) {
  const t = Date.parse(endtime) - Date.parse(new Date());
  const seconds = Math.floor((t / 1000) % 60);
  const minutes = Math.floor((t / 1000 / 60) % 60);
  const hours = Math.floor((t / (1000 * 60 * 60)) % 4);
  return {
    total: t,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  };
}

function initializeClock(id, endtime) {
  const clock = document.getElementById(id);
  const hoursSpan = clock.querySelector(".hours");
  const minutesSpan = clock.querySelector(".minutes");
  const secondsSpan = clock.querySelector(".seconds");

  function updateClock() {
    const t = getTimeRemaining(endtime);

    hoursSpan.innerHTML = ("" + t.hours).slice(-2);
    minutesSpan.innerHTML = ("0" + t.minutes).slice(-2);
    secondsSpan.innerHTML = ("0" + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  const timeinterval = setInterval(updateClock, 1000);
}

const deadline = new Date(Date.parse(new Date()) + 15 * 2 * 60 * 60 * 1000);
initializeClock("countdown", deadline);

// Date (now)

function getDate() {
  const orderDate = document.getElementById("date");
  let currentDate = new Date();
  let day = currentDate.getDate();
  let month = currentDate.getMonth() + 1;
  let year = currentDate.getFullYear();
  if (month < 10) {
    orderDate.innerHTML = `Order date: ${day}.0${month}.${year}`;
  } else {
    orderDate.innerHTML = `Order date: ${day}.${month}.${year}`;
  }

  return orderDate;
}

getDate();

// Mobile menu

const menuBtn = document.querySelector(".burger-menu");
const menu = document.querySelector("nav");
const links = document.querySelectorAll(".nav-link");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  menu.classList.toggle("active");
});

links.forEach((item) =>
  item.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    menu.classList.toggle("active");
  })
);

// Phone Mask

$(function () {
  $(".input-tel").mask("+38(000)000-00-00");
});
