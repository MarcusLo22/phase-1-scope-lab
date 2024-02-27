// Write your solution in this file!
var customerName = 'bob';
function upperCaseCustomerName() {
    // Access the global variable customerName
    customerName = customerName.toUpperCase();
  }

function setBestCustomer() {
  // Declare the variable in the global scope
  window.bestCustomer = 'not bob';
}
let bestCustomer = "bob";
console.log(bestCustomer); // Output: bob

bestCustomer = "maybe bob";
console.log(bestCustomer);

setBestCustomer();
console.log(bestCustomer); // 'not bob'

function overwriteBestCustomer() {
    let bestCustomer = 'maybe bob = not bob';
    return bestCustomer;
  }

overwriteBestCustomer();
console.log(bestCustomer);

const leastFavoriteCustomer = 'John';

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'Jane'; // This will throw an error
}

changeLeastFavoriteCustomer(); // This will throw an error
console.log(leastFavoriteCustomer);