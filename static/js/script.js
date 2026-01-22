document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("themeToggle");
  const links = document.getElementsByClassName("link");
  const copies = document.getElementsByClassName("copy");

  if (!toggleBtn) return;

  // Load saved mode
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    toggleBtn.textContent = "☀️";
    for (let l of links) l.style.color = "white";
    for (let c of copies) c.style.color = "white";
  }

  toggleBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
      localStorage.setItem("theme", "dark");
      toggleBtn.textContent = "☀️";
       for (let l of links) l.style.color = "white";
      for (let c of copies) c.style.color = "white";
    }
    else {
      localStorage.setItem("theme", "light");
      toggleBtn.textContent = "🌙";
       for (let l of links) l.style.color = "white";
      for (let c of copies) c.style.color = "white";
  
    }
  });
});
