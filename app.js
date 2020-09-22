const color = () => {
  const color = document.querySelector(".color");
  const color1 = document.querySelector(".color1");
  if (color.style.display === "flex") {
    color.style.display = "none";
    color1.style.display = "none";
  } else {
    color.style.display = "flex";
    color1.style.display = "flex";
  }
};
