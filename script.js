window.onload = function () {
  const gif = document.getElementById("gif");
  const title = document.getElementById("title");
  const subtitle = document.getElementById("subtitle");
  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");

  let step = 0;

  const gifs = ["step1.gif", "step2.gif", "step3.gif", "step4.gif"];
  const titles = [
    "Do you love me? 🥺",
    "Please think again! 🙄",
    "Ek aur baar soch lo! 😣",
    "Baby maan jao na! Kitna bhaav khaoge 😭"
  ];
  const subtitles = [
    "— From Garima, with love 💕",
    "Itni jaldi mana nahi karte 😤",
    "Aisa kyun kar rahe ho 😔",
    "Last chance hai 😭💔"
  ];

  noBtn.addEventListener("click", () => {
    if (step < gifs.length - 1) {
      step++;
      gif.src = gifs[step];
      title.innerText = titles[step];
      subtitle.innerText = subtitles[step];
    }
  });

  // Last step par No bhaagna
  noBtn.addEventListener("mouseover", () => {
    if (step === gifs.length - 1) {
      const x = Math.random() * 300 - 150;
      const y = Math.random() * 200 - 100;
      noBtn.style.transform = `translate(${x}px, ${y}px)`;
    }
  });

  // Yes click → Valentine proposal page
  yesBtn.addEventListener("click", () => {
    window.location.href = "index.html";
  });
};
