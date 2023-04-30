// Get elements
const billTotalTB = document.getElementById('billTotal');
const tipTB = document.getElementById('tipAmount');
const numPeople = document.getElementById('numPeople');
const plusNum = document.getElementById('plusBtn');
const minusNum = document.getElementById('minusBtn');
const totalAmount = document.getElementById('totalPrice');

// Add event listeners
billTotalTB.addEventListener('input', calculateTotalAmount);
tipTB.addEventListener('input', calculateTotalAmount);
numPeople.addEventListener('input', calculateTotalAmount);
plusNum.addEventListener('click', () => {
  numPeople.value = Number(numPeople.value) + 1;
  calculateTotalAmount();
});
minusNum.addEventListener('click', () => {
  if (numPeople.value > 1) {
    numPeople.value = Number(numPeople.value) - 1;
    calculateTotalAmount();
  }
});

// Function to calculate and update the Total Amount
function calculateTotalAmount() {
  const billTotal = Number(billTotalTB.value);
  const tipAmount = Number(tipTB.value);
  const numOfPeople = Number(numPeople.value);
  
  // Calculate the total amount per person
  let totalAmountPerPerson = (billTotal + tipAmount) / numOfPeople;
  
  // Display the total amount per person
  totalAmount.innerText = `$${totalAmountPerPerson.toFixed(2)}`;
}
