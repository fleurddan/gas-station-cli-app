// Gas Station Application (USD)

/*
    Fuel prices (per liter):
    1- Diesel: $1.24
    2- Gasoline: $1.20
    3- LPG: $0.66

    User inputs:
    1- Fuel type
    2- Fuel amount (liters)
    3- Current balance
*/

let diesel = 1.24;
let gasoline = 1.20;
let lpg = 0.66;

const newLine = "\r\n";

const fuelMenu =
    "1- Diesel" + newLine +
    "2- Gasoline" + newLine +
    "3- LPG" + newLine +
    "Select your fuel type:";

let fuelChoice;
let unitPrice;

while (true) {
    fuelChoice = Number(prompt(fuelMenu));

    if (fuelChoice === 1) {
        unitPrice = diesel;
        break;
    } else if (fuelChoice === 2) {
        unitPrice = gasoline;
        break;
    } else if (fuelChoice === 3) {
        unitPrice = lpg;
        break;
    } else {
        alert("Please enter a valid option (1, 2, or 3).");
    }
}

let fuelLiters = Number(prompt("Enter fuel amount (liters):"));
let balance = Number(prompt("Enter your balance ($):"));

let totalCost = unitPrice * fuelLiters;

if (totalCost > balance) {
    alert(
        "Insufficient balance." + newLine +
        "Missing amount: $" + (totalCost - balance).toFixed(2)
    );
} else {
    balance -= totalCost;
    alert(
        "Purchase successful." + newLine +
        "Total paid: $" + totalCost.toFixed(2) + newLine +
        "Remaining balance: $" + balance.toFixed(2)
    );
}
