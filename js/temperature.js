document.addEventListener('DOMContentLoaded', () => {

  const celsiusInput = document.querySelector('#celsiusInput');
  const farenheitInput = document.querySelector('#farenheitInput');
  const kelvinInput = document.querySelector('#kelvinInput');

  c = 0;
  f = 0;
  k = 0;

  updateFromCelsius();

  const buttons = document.querySelectorAll('.upDownButton');

  for (i=0; i<buttons.length; i++) {
    const thisButton = buttons[i];
    thisButton.addEventListener('click', () => {
      const scale = thisButton.id.slice(0, -1);
      if (thisButton.id[thisButton.id.length - 1] == 'u') { updateValue(scale[0], 1); }
      if (thisButton.id[thisButton.id.length - 1] == 'd') { updateValue(scale[0], -1); }
      updateFrom(scale);
    })
  }

  const optionButtons = document.querySelectorAll('.optionButton');

  for (i=0; i<optionButtons.length; i++) {
    const thisButton = optionButtons[i];
    thisButton.addEventListener('click', () => {
      const scale = thisButton.id[0];
      const to = parseFloat(thisButton.id.slice(1));
      updateValueTo(scale, to);
      updateFrom(scale);
    })
  }

  function updateValueTo(scale, to) {
    if (scale == 'c') {
      c = to;
      celsiusInput.value = c.toFixed(1);
    }
    if (scale == 'f') {
      f = to;
      farenheitInput.value = f.toFixed(1);
    }
    if (scale == 'k') {
      k = to;
      kelvinInput.value = k.toFixed(1);
    }
  }

  function updateValue(scale, by) {
    if (scale == 'c') {
      c = c + by;
      celsiusInput.value = c.toFixed(1);
    }
    if (scale == 'f') {
      f = f + by;
      farenheitInput.value = f.toFixed(1);
    }
    if (scale == 'k') {
      k = k + by;
      kelvinInput.value = k.toFixed(1);
    }
  }

  function updateFrom(scale) {
    if (scale == 'celsius' || scale == 'c') { updateFromCelsius(); }
    if (scale == 'farenheit' || scale == 'f') { updateFromFarenheit(); }
    if (scale == 'kelvin' || scale == 'k') { updateFromKelvin(); }
  }

  celsiusInput.addEventListener('input', () => {
    c = parseFloat(celsiusInput.value);
    updateFromCelsius();
  })

  farenheitInput.addEventListener('input', () => {
    f = parseFloat(farenheitInput.value);
    updateFromFarenheit();
  })

  kelvinInput.addEventListener('input', () => {
    k = parseFloat(kelvinInput.value);
    updateFromKelvin();
  })

  function updateFromCelsius() {
    f = (c * 1.8) + 32;
    farenheitInput.value = f.toFixed(1);
    k = c + 273.15;
    kelvinInput.value = k.toFixed(1);
    makeNoColderThanAbsoluteZero();
  }

  function updateFromFarenheit() {
    c = (f - 32) * 5/9;
    celsiusInput.value = c.toFixed(1);
    k = (f - 32) * 5/9 + 273.15;
    kelvinInput.value = k.toFixed(1);
    makeNoColderThanAbsoluteZero();
  }

  function updateFromKelvin() {
    c = k - 273.15;
    celsiusInput.value = c.toFixed(1);
    f = (k - 273.15) * 1.8 + 32;
    farenheitInput.value = f.toFixed(1);
    makeNoColderThanAbsoluteZero();
  }

  function makeNoColderThanAbsoluteZero() {
    if (k < 0) {
      k = 0;
      kelvinInput.value = k.toFixed(1);
      updateFromKelvin();
    }
  }

})
