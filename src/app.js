/* eslint-disable */
// import "bootstrap";
import "./style.css";

// import "./assets/img/rigo-baby.jpg";
// import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = generateExcuse();
  });
  console.log("Hello Rigo from the console ");
};

let generateExcuse = () => {
  let pronoun = ["A", "the"];
  let subject = ["police", "racoon", "dog", "driver", "comedian", "pincone"];
  let action = [
    "stopped my bus",
    "threw my",
    "yelled at my",
    "stole my",
    "bit my"
  ];
  let possetion = ["homework", "toe", "car", "shoe"];
  let where = ["on the street", "in my house", "road to work"];

  let proindex = Math.floor(Math.random() * pronoun.length);
  let subjindex = Math.floor(Math.random() * subject.length);
  let actionindex = Math.floor(Math.random() * action.length);

  let possetionindex = Math.floor(Math.random() * possetion.length);
  let whereindex = Math.floor(Math.random() * where.length);

  return (
    pronoun[proindex] +
    " " +
    subject[subjindex] +
    " " +
    action[actionindex] +
    " " +
    possetion[possetionindex] +
    " " +
    where[whereindex]
  );
};
