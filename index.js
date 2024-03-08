// JavaScript code with a theme of matcha

// Define an object representing a matcha beverage
const matcha = {
  name: "Matcha Latte",
  ingredients: ["matcha powder", "milk", "honey"],
  steps: [
    "Heat milk in a saucepan over medium heat until hot, but not boiling.",
    "Add matcha powder to a cup.",
    "Pour a small amount of hot milk into the cup and whisk until matcha is dissolved and no clumps remain.",
    "Fill the cup with the remaining hot milk.",
    "Sweeten with honey to taste.",
    "Stir well and enjoy!"
  ],
  serve: function() {
    console.log(`Serving a delicious ${this.name}!`);
  }
};

// Serve the matcha beverage
matcha.serve();
