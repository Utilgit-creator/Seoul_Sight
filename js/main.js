(function () {
  const root = document.documentElement;
  const KEY = "seoul-sight-theme";

  function apply(theme) {
    if (theme === "dark") {
      root.setAttribute("data-theme", "dark");
    } else {
      root.removeAttribute("data-theme");
    }
    try {
      localStorage.setItem(KEY, theme === "dark" ? "dark" : "light");
    } catch (_) {
      /* ignore */
    }
  }

  try {
    const saved = localStorage.getItem(KEY);
    if (saved === "dark" || saved === "light") {
      apply(saved);
    }
  } catch (_) {
    /* ignore */
  }

  const toggle = document.querySelector(".theme-toggle");
  if (toggle) {
    toggle.addEventListener("click", function () {
      const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      apply(next);
    });
  }
})();
