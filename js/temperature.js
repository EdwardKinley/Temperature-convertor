document.addEventListener('DOMContentLoaded', () => {

  const celsiusInput = document.querySelector('#celsiusInput');
  const farenheitInput = document.querySelector('#farenheitInput');
  const kelvinInput = document.querySelector('#kelvinInput');

  celsiusInput.addEventListener('input', () => {
    updateFromCelsius();
  })

  farenheitInput.addEventListener('input', () => {
    updateFromFarenheit();
  })

  kelvinInput.addEventListener('input', () => {
    updateFromKelvin();
  })

  celsiusInput.onchange = keepAtOneDecimalPlace;
  farenheitInput.onchange = keepAtOneDecimalPlace;
  kelvinInput.onchange = keepAtOneDecimalPlace;

  function updateFromCelsius() {
    farenheitInput.value = ((celsiusInput.value * 1.8) + 32).toFixed(1);
    kelvinInput.value = ((parseInt(celsiusInput.value) + 273.15)).toFixed(1);
  }

  function updateFromFarenheit() {
    celsiusInput.value = ((farenheitInput.value - 32) * 5/9).toFixed(1);
    kelvinInput.value = ((farenheitInput.value - 32) * 5/9 + 273.15).toFixed(1);
  }

  function updateFromKelvin() {
    celsiusInput.value = (parseInt(kelvinInput.value) - 273.15).toFixed(1);
    farenheitInput.value = ((parseInt(kelvinInput.value) - 273.15) * 1.8 + 32).toFixed(1);
  }

  function keepAtOneDecimalPlace(event) {
    this.value = parseFloat(this.value).toFixed(1);
  }

})
