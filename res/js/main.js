/*console.log('Hello World');
let greeting = ('Ahoj svete');
let name = ('Michal');
let age = ('17');
console.log({greeting})
console.log({Name})
console.log({Age})
let person = {name: 'Michal',age: '17'};
console.log({person})
console.log(`name: ${name}, age: ${age}`);
const x = 15;
x = 14;*/
const cookie = document.getElementById("cookie");                // test jak převést ID z html do Javascriptu
const counter = document.getElementById("counter");              // první třída je do javascriptu a ta druhá je z html
const autoclicker = document.getElementById("autoclicker");
const clickupgrade = document.getElementById("clickupgrade");

let cookies = 0;                                 // test co je to proměné - dosazení za písmeno nebo za text nějaké číslo od uživatele nebo od systému

let autoclickerPrice = 100;
let autoclickerIncrease = 0;

let clickupgradePrice = 50;                       // test označení pro proměné - let, const
let clickupgradeIncrease = 1;

cookie.onclick = () => {               // test jak se ošetřuje kliknutí
  cookies += clickupgradeIncrease;
  counter.innerHTML = cookies;
};

clickupgrade.onclick = () => {
  if (cookies >= clickupgradePrice) {
    cookies -= clickupgradePrice;
    counter.innerHTML = cookies;
    clickupgradePrice *= 3;
    clickupgrade.innerHTML = `Buy clickuprage: ${clickupgradePrice}`;
    clickupgradeIncrease *= 2;
  }
};

autoclicker.onclick = () => {
  if (cookies >= autoclickerPrice) {
    cookies -= autoclickerPrice;
    counter.innerHTML = cookies;
    autoclickerPrice *= 2;
    autoclicker.innerHTML = `Buy autoclicker ${autoclickerPrice}`;
    if (autoclickerIncrease == 0) {
      setInterval(() => {
        cookies += autoclickerIncrease;
        counter.innerHTML = cookies;
      }, 1000);
    }
    autoclickerIncrease++;
  }
};
