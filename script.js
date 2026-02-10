const discoBtn = document.getElementById("discoBtn");
let discoInterval = null;

discoBtn.addEventListener("click", () => {
  document.body.classList.toggle("disco");

  if (discoInterval === null) {
    discoBtn.textContent = "Stop Partying";
    //picks random color and flashes it every 200 ms
    discoInterval = setInterval(() => {
      const randomColor = `hsl(${Math.random() * 360}, 100%, 45%)`;
      document.body.style.setProperty("--discoColor", randomColor);
    }, 200);

  } else {
    discoBtn.textContent = "Mysterious Button";
    clearInterval(discoInterval);
    discoInterval = null;
    document.body.style.removeProperty("--discoColor");
  }
});
