console.clear();

const firstInput = document.querySelector('[data-js="firstValue"]');
const secondInput = document.querySelector('[data-js="secondValue"]');
const result = document.querySelector('[data-js="result"]');

function updateResult() {
  const firstValue = parseFloat(firstInput.value);
  const secondValue = parseFloat(secondInput.value);
  const resultValue = firstValue * secondValue;
  result.textContent = resultValue;
}

firstInput.addEventListener("input", updateResult);
secondInput.addEventListener("input", updateResult);
