document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const themeButtons = document.querySelector(".theme-buttons");

  const setTheme = (themeName) => {
    body.setAttribute("data-theme", themeName);
  };

  themeButtons.addEventListener("click", (e) => {
    const target = e.target;
    if (target.tagName === "BUTTON" && target.hasAttribute("data-theme-name")) {
      const newTheme = target.getAttribute("data-theme-name");
      setTheme(newTheme);
    }
  });

  setTheme("light");
});
