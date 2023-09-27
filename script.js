function calculateBMI() {
  // Ambil nilai berat badan dan tinggi badan dari input
  var weight = parseFloat(document.getElementById('weight').value);
  var height = parseFloat(document.getElementById('height').value);

  // Konversi tinggi badan ke dalam meter
  var heightInMeter = height / 100;

  // Hitung BMI
  var bmi = weight / (heightInMeter * heightInMeter);

  // Tentukan kategori BMI
  var bmiCategory = '';
  if (bmi < 18.5) {
    bmiCategory = 'Underweight';
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    bmiCategory = 'Normal weight';
  } else if (bmi >= 25 && bmi <= 29.9) {
    bmiCategory = 'Overweight';
  } else {
    bmiCategory = 'Obesity';
  }

  // Tampilkan hasil
  var resultElement = document.getElementById('result');
  resultElement.innerHTML = 'Body Mass Index: ' + bmi.toFixed(2) + '<br> BMI Category: ' + bmiCategory;

  var resultElement = document.getElementById('result');
  resultElement.innerHTML = 'Body Mass Index: ' + bmi.toFixed(2) + '<br> BMI Category: ' + bmiCategory;
}

function resetInputs() {
  document.getElementById('weight').value = '';
  document.getElementById('height').value = '';
  document.getElementById('result').innerHTML = 'Body Mass Index: <span class="bmi-value">0.00</span>' + '<br> BMI Category: -';
}
