document.addEventListener("DOMContentLoaded", () => {
  const gallery = document.getElementById("image-gallery");
  const modal = document.getElementById("image-modal");
  const modalImage = document.getElementById("modal-image");
  const modalContentWrapper = document.getElementById("modal-content-wrapper");

  const openModal = (imageSrc) => {
    modalImage.src = imageSrc;
    modal.classList.add("open");
  };

  const closeModal = () => {
    modal.classList.remove("open");
    modalImage.src = "";
  };

  gallery.addEventListener("click", (e) => {
    const target = e.target;
    if (target.tagName === "IMG" && target.closest(".gallery-item")) {
      const fullSrc = target.getAttribute("data-full-src");
      if (fullSrc) {
        openModal(fullSrc);
      }
    }
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  modalContentWrapper.addEventListener("click", (e) => {
    e.stopPropagation();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("open")) {
      closeModal();
    }
  });
});
