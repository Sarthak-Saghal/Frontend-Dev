function showArrowResult() {
  const user = {
    name: "Nitin",
    showName: () => {
      document.getElementById("output").innerHTML = "Arrow Function: " + this.name;
    }
  };

  user.showName();
}

function showNormalResult() {
  const user = {
    name: "Nitin",
    showName() {
      document.getElementById("output").innerHTML = "Normal Function: " + this.name;
    }
  };

  user.showName();
}
