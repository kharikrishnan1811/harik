function toggleContent() {
  const text = document.getElementById("about-text");
  const button = document.getElementById("toggle-btn");

  if (text.classList.contains("hidden")) {
    text.classList.remove("hidden");
    button.textContent = "Read Less";
  } else {
    text.classList.add("hidden");
    button.textContent = "Read More";
  }
}
