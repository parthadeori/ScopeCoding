function toggleBtn() {
  let x = document.getElementById("nav-links");
  if (x.style.display === "none") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  }
}