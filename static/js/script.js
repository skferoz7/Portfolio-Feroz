// static/js/script.js
document.addEventListener('DOMContentLoaded', function () {
  const toggleBtn = document.getElementById('themeToggle');
  if (!toggleBtn) return;

  // Apply theme to <html> (higher-level than body)
  function applyTheme(theme) {
    const root = document.documentElement; // <html>
    if (theme === 'dark') root.classList.add('dark-mode');
    else root.classList.remove('dark-mode');

    toggleBtn.textContent = theme === 'dark' ? '☀️' : '🌙';
  }

  // load saved theme
  const saved = localStorage.getItem('theme');
  if (saved) applyTheme(saved);
  else {
    // default to OS preference
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyTheme(prefersDark ? 'dark' : 'light');
  }

  toggleBtn.addEventListener('click', () => {
    const root = document.documentElement;
    const isDark = root.classList.toggle('dark-mode');
    const theme = isDark ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
    toggleBtn.textContent = isDark ? '☀️' : '🌙';
  });
});
