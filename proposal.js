window.onload = function () {
  const yesBtn = document.getElementById("yesBtn2");
  const noBtn = document.getElementById("noBtn2");
  const thanks = document.getElementById("thanks");

  // No button bhaagna
  noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * 300 - 150;
    const y = Math.random() * 200 - 100;
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
  });

  // Yes click → thank you message
  yesBtn.addEventListener("click", () => {
    thanks.classList.remove("hidden");
  });
};
