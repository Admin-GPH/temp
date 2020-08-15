const color = () => {
  const color = document.querySelector(".color");
  if (color.style.display === "flex") {
    color.style.display = "none";
  } else {
    color.style.display = "flex";
  }
};
