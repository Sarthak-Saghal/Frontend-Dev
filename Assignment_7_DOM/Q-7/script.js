document.addEventListener("DOMContentLoaded", () => {
  const trackingBox = document.getElementById("tracking-box");
  const coordsDisplay = document.getElementById("coords-display");

  const updateCoordinates = (e) => {
    const clientX = e.clientX;
    const clientY = e.clientY;
    coordsDisplay.textContent = `Client X: ${clientX}, Client Y: ${clientY}`;
  };

  const dropDot = (e) => {
    const dot = document.createElement("div");
    dot.classList.add("dot");

    const boxRect = trackingBox.getBoundingClientRect();

    const xPos = e.clientX - boxRect.left;
    const yPos = e.clientY - boxRect.top;

    dot.style.left = `${xPos}px`;
    dot.style.top = `${yPos}px`;

    trackingBox.appendChild(dot);
  };

  trackingBox.addEventListener("mousemove", updateCoordinates);

  trackingBox.addEventListener("dblclick", dropDot);

  trackingBox.addEventListener("mouseleave", () => {
    coordsDisplay.textContent = "Move your mouse inside the box...";
  });
});
