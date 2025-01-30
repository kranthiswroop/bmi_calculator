function calculateBMI() {
  const height = document.getElementById('height').value;
  const weight = document.getElementById('weight').value;
  const result = document.getElementById('result');
  const error = document.getElementById('error');

  if (!height || !weight || height <= 0 || weight <= 0) {
      error.textContent = 'Please enter valid values for height and weight.';
      result.textContent = '';
      return;
  }

  error.textContent = '';
  const heightMeters = height / 100;
  const bmi = (weight / (heightMeters * heightMeters)).toFixed(2);
  result.textContent = `Your BMI is: ${bmi}`;
}