document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("search-input");
  const tableBody = document.getElementById("table-body");
  const rows = tableBody.querySelectorAll("tr:not(#no-results)");
  const noResultsRow = document.getElementById("no-results");

  const filterTable = () => {
    const filterText = searchInput.value.toLowerCase().trim();
    let resultsFound = false;

    rows.forEach((row) => {
      let rowText = "";

      const cells = row.getElementsByTagName("td");
      if (cells.length > 1) {
        rowText += cells[0].textContent.toLowerCase() + " ";
        rowText += cells[1].textContent.toLowerCase();
      }

      if (rowText.includes(filterText)) {
        row.classList.remove("hidden");
        resultsFound = true;
      } else {
        row.classList.add("hidden");
      }
    });

    if (resultsFound) {
      noResultsRow.classList.add("hidden");
    } else {
      noResultsRow.classList.remove("hidden");
    }
  };

  searchInput.addEventListener("input", filterTable);
});
