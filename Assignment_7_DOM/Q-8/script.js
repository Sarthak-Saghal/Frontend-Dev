document.addEventListener("DOMContentLoaded", () => {
  const dropdownButton = document.getElementById("dropdown-button");
  const dropdownMenu = document.getElementById("dropdown-options");
  const dropdownWrapper = document.querySelector(".dropdown-wrapper");

  const toggleDropdown = () => {
    const isOpen = dropdownMenu.classList.toggle("open");
    dropdownButton.setAttribute("aria-expanded", isOpen);
  };

  const closeDropdown = () => {
    dropdownMenu.classList.remove("open");
    dropdownButton.setAttribute("aria-expanded", "false");
  };

  const updateButtonText = (text) => {
    dropdownButton.childNodes[0].nodeValue = text;
    closeDropdown();
  };

  dropdownButton.addEventListener("click", toggleDropdown);

  dropdownMenu.addEventListener("click", (e) => {
    const target = e.target;
    if (target.tagName === "LI" && target.hasAttribute("data-value")) {
      updateButtonText(target.textContent.trim());
    }
  });

  const handleOutsideClick = (e) => {
    const isDropdownOpen = dropdownMenu.classList.contains("open");

    if (isDropdownOpen && !dropdownWrapper.contains(e.target)) {
      closeDropdown();
    }
  };

  document.addEventListener("click", handleOutsideClick, true);
});
