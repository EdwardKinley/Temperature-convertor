document.addEventListener('DOMContentLoaded', () => {

  // const celsiusSpace = document.querySelector('.celsius');
  // const farenheitSpace = document.querySelector('.farenheit');
  // const kelvinSpace = document.querySelector('.kelvin');
  //
  // const spaces = [celsiusSpace, farenheitSpace, kelvinSpace];

  const celsiusInput = document.querySelector('#celsiusInput');
  const farenheitInput = document.querySelector('#farenheitInput');
  const kelvinInput = document.querySelector('#kelvinInput');

  updateFromCelsius();

  const buttons = document.querySelectorAll('button');

  for (i=0; i<buttons.length; i++) {
    const thisButton = buttons[i];
    thisButton.addEventListener('click', () => {
      const scale = thisButton.id.slice(0, -1);
      console.log(scale);
      if (thisButton.id[thisButton.id.length - 1] == 'u') { document.querySelector(`#${scale}Input`).value ++; }
      if (thisButton.id[thisButton.id.length - 1] == 'd') { document.querySelector(`#${scale}Input`).value --; }
      makeOneDecimalPlace(document.querySelector(`#${scale}Input`));
      updateFrom(scale);
    })
  }

  // for (i=0; i<spaces.length; i++) {
  //   console.log(spaces);
  //   console.log(spaces[i]);
  // }

  function updateFrom(scale) {
    if (scale == 'celsius') { updateFromCelsius(); }
    if (scale == 'farenheit') { updateFromFarenheit(); }
    if (scale == 'kelvin') { updateFromKelvin(); }
  }

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

  function makeOneDecimalPlace(input) {
    input.value = parseFloat(input.value).toFixed(1);
  }

})
