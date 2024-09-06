const container = document.querySelector(".container");
const container2 = document.querySelector(".container2");
let mouseDown = false;

for (let i = 0; i < 400; i++) {
  const divs = document.createElement("div");
  divs.classList.add("divGrid");
  container.appendChild(divs);
  container2.append(divs);

  divs.addEventListener("mousedown", () => {
    mouseDown = true;
  });
  divs.addEventListener("mouseup", () => {
    mouseDown = false;
  });
  divs.addEventListener("mousemove", function (e) {
    mouseDown
      ? (e.target.style.backgroundColor = "blue")
      : (e.target.backgroundColor = "red");
  });
}
