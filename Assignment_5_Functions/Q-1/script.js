function showEndMessage() {
  document.getElementById("output").innerHTML += "<br>Welcome to the course!";
}

function greetUser(name, callback) {
  document.getElementById("output").innerHTML = `Hello ${name}`;
  callback(); 
}

function startGreeting() {
  const name = document.getElementById("username").value;

  if (name.trim() === "") {
    alert("Please enter your name!");
    return;
  }

  greetUser(name, showEndMessage);
}
