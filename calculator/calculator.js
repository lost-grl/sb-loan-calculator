window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

const amountInput = document.querySelector('#loan-amount');
const yearsInput = document.querySelector('#loan-years');
const rateInput = document.querySelector('#loan-rate');
const calcResult = document.querySelector('#monthly-payment');

function getCurrentUIValues() {
  return {
    amount: +(amountInput.value),
    years: +(yearsInput.value),
    rate: +(rateInput.value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const defaultValues = {
    amount: 300000,
    years: 30,
    rate: 7.6,
  }
  amountInput.value = defaultValues.amount;
  yearsInput.value = defaultValues.years;
  rateInput.value = defaultValues.rate;
  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  let inputObj = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(inputObj));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  const p = values.amount;
  const i = (values.rate / 100) / 12;
  const n = values.years * 12;
  const calculation = (p * i) / (1 - Math.pow((1 + i), -n));
  return calculation.toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  calcResult.innerText = '$' + monthly;
}
