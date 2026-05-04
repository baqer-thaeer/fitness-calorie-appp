function calculateCalories() {
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let age = document.getElementById("age").value;

  let calories = (10 * weight) + (6.25 * height) - (5 * age) + 5;

  document.getElementById("result").innerText =
    "Your Calories: " + Math.round(calories);
}
let goal = document.getElementById("goal").value;

if (goal === "bulk") {
  calories += 300;
} else {
  calories -= 300;
}