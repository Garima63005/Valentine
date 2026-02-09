let step = 0;

const gifs = ["step1.gif", "step2.gif", "step3.gif", "step4.gif"];
const titles = [
  "Do you love me? 🥺",
  "Please think again! 🙄",
  "Ek aur baar soch lo! 😣",
  "Baby maan jao na! Kitna bhav khaoge 😭"
];
const subtitles = [
  "— from Garima, with love 💖",
  "Itni jaldi mana nahi karte 🥹",
  "Aisa kyun kar rahe ho 😔",
  "Bahut gandi baat hai yaar 😭"
];

const gif = document.getElementById("gif");
const title = document.getElementById("title");
const subtitle = document.getElementById("subtitle");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const response = document.getElementById("response");

yesBtn.addEventListener("click", () => {
  response.innerHTML = "Yayyy! Mohit 💖 Ab to officially mera Valentine ho gaya 😘💌";
});

noBtn.addEventListener("click", () => {
  step++;

  if (step < gifs.length) {
    gif.src = gifs[step];
    title.innerText = titles[step];
    subtitle.innerText = subtitles[step];
  }

  // Last step pe No bhagne lage 😈
  if (step === gifs.length - 1) {
    noBtn.addEventListener("mouseover", () => {
      const x = Math.random() * 300 - 150;
      const y = Math.random() * 200 - 100;
      noBtn.style.transform = `translate(${x}px, ${y}px)`;
    });
  }
});
