
function checkAge() {
  let age = document.getElementById("ageInput").value;
  let result = document.getElementById("ageResult");

  if (age >= 18) {
    result.textContent = "You are an adult ✅";
  } else {
    result.textContent = "You are underage ❌";
  }
}


// Function 1: Greeting
function showGreeting(name) {
  let message = "Hello, " + name + "! Welcome to JavaScript.";
  document.getElementById("greeting").textContent = message;
}

// Function 2: Calculate total (example reusable function)
function calculateTotal(price, quantity) {
  return price * quantity;
}
console.log("Total (10 x 3):", calculateTotal(10, 3)); // logs 30

// For loop example
function showNumbers() {
  let list = document.getElementById("numberList");
  list.innerHTML = ""; // clear previous list
  for (let i = 1; i <= 5; i++) {
    let li = document.createElement("li");
    li.textContent = "Number " + i;
    list.appendChild(li);
  }
}

// While loop example
let countdown = 3;
while (countdown > 0) {
  console.log("Countdown:", countdown);
  countdown--;
}

let toggleBtn = document.getElementById("toggleBtn");
let toggleText = document.getElementById("toggleText");

toggleBtn.addEventListener("click", function () {
  toggleText.classList.toggle("highlight");
});

// Create element dynamically
let newPara = document.createElement("p");
newPara.textContent = "This paragraph was created with JavaScript!";
document.body.appendChild(newPara);
