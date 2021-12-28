function createPassword(length, num, max, spec, specialChar, rep) {
  let number = "0123456789";
  let special = specialChar;
  let upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let chars = "abcdefghijklmnopqrstuvwxyz";
  let password = "";
  if (num) chars += number;
  if (max) chars += upperChar;
  if (spec) chars += special;
  try {
    for (let i = 0; i <= length - 1; i++) {
      let randomNumber = Math.floor(Math.random() * chars.length);
      let char = chars.substring(randomNumber, randomNumber + 1);

      if (password.includes(char) && rep == false) {
        i -= 1;
      } else {
        password += char;
      }
    }
  } catch (error) {
    console.log(error);
  }
  return password;
}

const length = document.querySelector("#length");
const number = document.querySelector("#number");
const upper = document.querySelector("#upper");
const special = document.querySelector("#special");
const repeat = document.querySelector("#repeat");
const specialCheck = document.querySelector("#specialCheck");
const btn = document.querySelector("button");
const password = document.querySelector("#password");
let num,
  max,
  spec,
  rep = false;

btn.addEventListener("click", (event) => {
  event.preventDefault();
  if (number.checked) {
    num = true;
  } else num = false;
  if (upper.checked) {
    max = true;
  } else max = false;
  if (repeat.checked) {
    rep = true;
  } else rep = false;
  if (specialCheck.checked) {
    spec = true;
  } else spec = false;
  let specialChar = special.value;
  let lung = length.value;
  password.value = createPassword(lung, num, max, spec, specialChar, rep);
});

// repeat.addEventListener("change", (event) => {
//   if (repeat.checked) specialCheck.checked = false;
// });
// specialCheck.addEventListener("change", (event) => {
//   if (specialCheck.checked) repeat.checked = false;
// });
