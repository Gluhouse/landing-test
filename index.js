const app = () => {
  const input__phone = document.querySelector(".input__phone");
  const input__name = document.querySelector(".input__name");

  input__phone.addEventListener("keyup", () => putDashes(input__phone));
  input__name.addEventListener("keyup", () => checkName(input__name));

  let endTime = new Date("2021-04-30");

  const timer = setInterval(function () {
    let currentTime = new Date();
    let timeLeft = endTime - currentTime;
    let hours = Math.floor(timeLeft / 3600000);
    let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    let cdHours = document.querySelector(".cd__hours");
    let cdMinutes = document.querySelector(".cd__minutes");
    let cdSeconds = document.querySelector(".cd__seconds");

    cdHours.innerHTML = hours + " Ч";
    cdMinutes.innerHTML = minutes + " М";
    cdSeconds.innerHTML = seconds + " С";
    if (timeLeft < 0) {
      clearInterval(timer);
      cdHours.innerHTML = "РАС";
      cdMinutes.innerHTML = "ПРО";
      cdSeconds.innerHTML = "ДАЖА";
      document
        .querySelectorAll(".cd")
        .forEach((elem) => (elem.style.color = "red"));
    }
  }, 1000);
};

const putDashes = (input) => {
  const regEx = /(\D+)/g;
  const regionNum = "375";
  let operatorNum = "";
  let firstThree = "";
  let lastFour = "";
  input.value = input.value.replace(regEx, "");

  operatorNum = input.value.substr(3, 2);
  firstThree = input.value.substr(5, 3);
  lastFour = input.value.substr(8, 4);
  input.value = `${regionNum}-${operatorNum}-${firstThree}-${lastFour}`;
};

const checkName = (input) => {
  const regEx = /^([а-яё]+|[a-z]+)$/iu;
  if (!input.value.match(regEx)) {
    input.value = input.value.slice(0, -1);
  }
};

app();
