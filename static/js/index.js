const images = [
  [
    "matheus bertelli",
    "the model",
    "This drastic decrease in the production of locally made clothing in the last few decades is due to a shift in the fashion industry. This shift is known as fast fashion. Fast fashion has taken an industry that once had 2 to 4 seasons to an industry that now has 52 seasons in a year. ",
  ],
  [
    "masha raymers",
    "The boss",
    "One of the most important qualities of the best boss is leadership qualities. Don't use plagiarized sources. Get your custom essay on. He/she can lead teamwork in the right way, so he/she must organize the members of the team and divide the work among them depending on their skills.",
  ],
  [
    "john doe",
    "intern",
    "In my internship, I was able to interact with the council and board members who enabled me to know and learn a lot in various areas. This was mainly due to bountiful experience they have and their willingness to assist me to learn and know more as a young person.",
  ],
  [
    "andrea piacquadio",
    "web developer",
    "Back-end web developers create the website's structure, write code, and verify the code works. Their responsibilities also may include managing access points for others who need to manage a website's content. Front-end web developers work on the visual part of the website",
  ],
];
const imgChange = document.querySelector("img");
const nameChange = document.querySelector(".name");
const desChange = document.querySelector(".designation");
const contChange = document.querySelector(".info");
const btns = document.querySelectorAll(".fa-toggle");
const surprise = document.querySelector(".surprise");
let count = 0;

btns.forEach((btn) => {
  btn.addEventListener("click", function () {
    if (btn.classList.contains(".fa-less-than")) {
      count--;
    } else {
      count++;
    }
    if (count > 3 || count < 0) {
      if (count > 3) {
        count = 0;
      } else {
        count = 3;
      }
    }
    imgChange.src = "../static/images/" + images[count][0] + ".jpg";
    nameChange.textContent = images[count][0];
    desChange.textContent = images[count][1];
    contChange.textContent = images[count][2];
  });
});

surprise.addEventListener("click", function () {
  let randomNumber = getRandomNumber();
  imgChange.src = "../static/images/" + images[randomNumber][0] + ".jpg";
  nameChange.textContent = images[randomNumber][0];
  desChange.textContent = images[randomNumber][1];
  contChange.textContent = images[randomNumber][2];
});

function getRandomNumber() {
  return Math.floor(Math.random() * images.length);
}
