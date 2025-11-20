document.addEventListener("DOMContentLoaded", () => {
  const productList = document.getElementById("product-list");
  const addProductForm = document.getElementById("add-product-form");
  const productInput = document.getElementById("product-input");

  let productIdCounter = 3;

  const createProductElement = (name, id) => {
    const li = document.createElement("li");
    li.setAttribute("data-id", id);

    li.innerHTML = `
            <span class="product-name">${name}</span>
            <div class="action-buttons">
                <button class="edit-btn">Edit</button>
                <button class="delete-btn">Delete</button>
            </div>
        `;
    return li;
  };

  const addProduct = (name) => {
    const newProduct = createProductElement(name, productIdCounter++);
    productList.appendChild(newProduct);
  };

  addProductForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const productName = productInput.value.trim();
    if (productName) {
      addProduct(productName);
      productInput.value = "";
    }
  });

  const finishEditing = (productNameSpan) => {
    const newName = productNameSpan.textContent.trim();
    if (newName) {
      productNameSpan.contentEditable = "false";
      productNameSpan.classList.remove("editing");
      const listItem = productNameSpan.closest("li");
      const editButton = listItem.querySelector(".edit-btn");
      if (editButton) {
        editButton.textContent = "Edit";
      }
    } else {
      productNameSpan.textContent =
        productNameSpan.getAttribute("data-original-text");
      finishEditing(productNameSpan);
    }
  };

  const startEditing = (productNameSpan) => {
    productNameSpan.setAttribute(
      "data-original-text",
      productNameSpan.textContent.trim()
    );
    productNameSpan.contentEditable = "true";
    productNameSpan.classList.add("editing");
    productNameSpan.focus();

    const listItem = productNameSpan.closest("li");
    const editButton = listItem.querySelector(".edit-btn");
    if (editButton) {
      editButton.textContent = "Save";
    }
  };

  productList.addEventListener("click", (e) => {
    const target = e.target;
    const listItem = target.closest("li");

    if (!listItem) return;

    if (target.classList.contains("delete-btn")) {
      productList.removeChild(listItem);
    } else if (target.classList.contains("edit-btn")) {
      const productNameSpan = listItem.querySelector(".product-name");
      const isEditing = productNameSpan.classList.contains("editing");

      if (isEditing) {
        finishEditing(productNameSpan);
      } else {
        startEditing(productNameSpan);
      }
    }
  });

  document.addEventListener("mousedown", (e) => {
    const currentlyEditing = productList.querySelector(".product-name.editing");
    if (
      currentlyEditing &&
      !currentlyEditing.contains(e.target) &&
      !e.target.classList.contains("edit-btn")
    ) {
      finishEditing(currentlyEditing);
    }
  });
});
