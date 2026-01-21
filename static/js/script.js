document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("themeToggle");
  const link = document.getElementsByClassName("link");

  if (!toggleBtn) return;

  // Load saved mode
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    toggleBtn.textContent = "☀️";
  }

  toggleBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
      localStorage.setItem("theme", "dark");
      toggleBtn.textContent = "☀️";
      link.style.color = "white";
    } else {
      localStorage.setItem("theme", "light");
      toggleBtn.textContent = "🌙";
    }
  });
});
