const buttons = document.querySelectorAll(".grid-item");
const powerButton = document.getElementById("powerBtn");
let volumeSlider = document.getElementById("myRange");
//volumeSlider.value = 50;
powerButton.value = "off";
powerButton.addEventListener("click", function () {
  let currentValue = document.getElementById("powerBtn").value;
  if (currentValue === "off") {
    document.getElementById("powerBtn").value = "on";
    console.log(currentValue);
  } else {
    document.getElementById("powerBtn").value = "off";
  }
});
playDrum();

function playDrum() {
  buttons.forEach((element) => {
    element.addEventListener("mousedown", function () {
      let button = element.dataset.id;
      if (document.getElementById("powerBtn").value === "on") {
        sound(button);
        getInfo(button);
      }
    });
  });

  document.addEventListener("keydown", function () {
    let button = event.key.toLowerCase();
    if (document.getElementById("powerBtn").value === "on") {
      sound(button);
      getInfo(button);
    }
  });
}

function sound(btn) {
  const key = document.getElementById(btn);
  key.volume = volumeSlider.value;
  key.pause();
  key.currentTime = 0;
  key.play();
}

function getInfo(btn) {
  const textPlace = document.querySelector(".text-place");
  textPlace.innerHTML = btn;
}
