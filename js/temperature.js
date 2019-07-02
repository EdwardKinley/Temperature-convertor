document.addEventListener('DOMContentLoaded', () => {

  // const celsiusSpace = document.querySelector('.celsius');
  // const farenheitSpace = document.querySelector('.farenheit');
  // const kelvinSpace = document.querySelector('.kelvin');
  //
  // const spaces = [celsiusSpace, farenheitSpace, kelvinSpace];

  const celsiusInput = document.querySelector('#celsiusInput');
  const farenheitInput = document.querySelector('#farenheitInput');
  const kelvinInput = document.querySelector('#kelvinInput');

  c = 0;
  f = 0;
  k = 0;

  console.log('c', c, typeof c);
  console.log('civ', celsiusInput.value, typeof celsiusInput.value);

  updateFromCelsius();

  const buttons = document.querySelectorAll('.upDownButton');

  for (i=0; i<buttons.length; i++) {
    const thisButton = buttons[i];
    thisButton.addEventListener('click', () => {
      console.log('button id', thisButton.id);
      const scale = thisButton.id.slice(0, -1);
      console.log('scale', scale, typeof scale);
      if (thisButton.id[thisButton.id.length - 1] == 'u') { updateValue(scale[0], 1); }
      if (thisButton.id[thisButton.id.length - 1] == 'd') { updateValue(scale[0], -1); }
      // makeOneDecimalPlace(document.querySelector(`#${scale}Input`));
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

  // for (i=0; i<spaces.length; i++) {
  //   console.log(spaces);
  //   console.log(spaces[i]);
  // }

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
    // celsiusInput.value = c.toFixed(1);
    updateFromCelsius();
  })
  //
  // celsiusInput.onfocusout = now();
  //
  // function now() {
  //   console.log('now');
  //   celsiusInput.value = c.toFixed(1);
  // }

  farenheitInput.addEventListener('input', () => {
    f = parseFloat(farenheitInput.value);
    // farenheitInput.value = f.toFixed(1);
    updateFromFarenheit();
  })

  kelvinInput.addEventListener('input', () => {
    k = parseFloat(kelvinInput.value);
    // kelvinInput.value = k.toFixed(1);
    updateFromKelvin();
  })

  // celsiusInput.onchange = keepAtOneDecimalPlace;
  // farenheitInput.onchange = keepAtOneDecimalPlace;
  // kelvinInput.onchange = keepAtOneDecimalPlace;

  function updateFromCelsius() {
    f = (c * 1.8) + 32;
    console.log('f', f, typeof f);
    farenheitInput.value = f.toFixed(1);
    console.log('fiv', farenheitInput.value, typeof farenheitInput.value);
    // if (farenheitInput.value == -0.0) { farenheitInput.value = "0.0"; }
    k = c + 273.15;
    console.log('k', k, typeof k);
    kelvinInput.value = k.toFixed(1);
    console.log('kiv', kelvinInput.value, typeof kelvinInput.value);
    // if (kelvinInput.value == "-0.0") { kelvinInput.value = "0.0"; }
    makeNoColderThanAbsoluteZero();
  }

  function updateFromFarenheit() {
    c = (f - 32) * 5/9;
    console.log('c', c, typeof c);
    celsiusInput.value = c.toFixed(1);
    console.log('civ', celsiusInput.value, typeof celsiusInput.value);
    // if (celsiusInput.value == "-0.0") { celsiusInput.value = "0.0"; }
    k = (f - 32) * 5/9 + 273.15;
    console.log('k', k, typeof k);
    kelvinInput.value = k.toFixed(1);
    console.log('kiv', kelvinInput.value, typeof kelvinInput.value);
    // if (kelvinInput.value == "-0.0") { kelvinInput.value = "0.0"; }
    makeNoColderThanAbsoluteZero();
  }

  function updateFromKelvin() {
    c = k - 273.15;
    console.log('c', c, typeof c);
    celsiusInput.value = c.toFixed(1);
    console.log('civ', celsiusInput.value, typeof celsiusInput.value);
    // if (celsiusInput.value == "-0.0") { celsiusInput.value = "0.0"; }
    f = (k - 273.15) * 1.8 + 32;
    console.log('f', f, typeof f);
    farenheitInput.value = f.toFixed(1);
    console.log('fiv', farenheitInput.value, typeof farenheitInput.value);
    // if (farenheitInput.value == "-0.0") { farenheitInput.value = "0.0"; }
    makeNoColderThanAbsoluteZero();
  }

  function makeNoColderThanAbsoluteZero() {
    if (k < 0) {
      k = 0;
      kelvinInput.value = k.toFixed(1);
      updateFromKelvin();
    }
  }

  // function keepAtOneDecimalPlace(event) {
  //   this.value = parseFloat(this.value).toFixed(1);
  // }
  //
  // function makeOneDecimalPlace(input) {
  //   input.value = parseFloat(input.value).toFixed(1);
  // }

})
