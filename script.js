var units = {
    length: { cm: "Centimeter", m: "Meter", km: "Kilometer" },
    area: { sq_cm: "Square Centimeter", sq_m: "Square Meter", sq_km: "Square Kilometer" },
    temperature: { c: "Celsius", f: "Fahrenheit", k: "Kelvin" }
  };
  
  var conversionTypeSelect = document.getElementById("conversionTypeSelect");
  var fromUnitSelect = document.getElementById("fromUnitSelect");
  var toUnitSelect = document.getElementById("toUnitSelect");
  
  function populateUnits() {
    var selectedType = conversionTypeSelect.value;
    var unitsOptions = units[selectedType];
    fromUnitSelect.innerHTML = "";
    toUnitSelect.innerHTML = "";
    for (var unit in unitsOptions) {
      fromUnitSelect.innerHTML += '<option value="' + unit + '">' + unitsOptions[unit] + '</option>';
      toUnitSelect.innerHTML += '<option value="' + unit + '">' + unitsOptions[unit] + '</option>';
    }
  }
  
  conversionTypeSelect.addEventListener("change", populateUnits);
  
  function convert() {
    var inputValue = parseFloat(document.getElementById("inputValue").value);
    var selectedType = conversionTypeSelect.value;
    var fromUnitValue = document.getElementById("fromUnitSelect").value;
    var toUnitValue = document.getElementById("toUnitSelect").value;
    var result = 0;
  
    if (selectedType === "length") {
      if (fromUnitValue === "cm" && toUnitValue === "m") {
        result = inputValue / 100;
      } else if (fromUnitValue === "cm" && toUnitValue === "km") {
        result = inputValue / 100000;
      } else if (fromUnitValue === "m" && toUnitValue === "cm") {
        result = inputValue * 100;
      } else if (fromUnitValue === "m" && toUnitValue === "km") {
        result = inputValue / 1000;
      } else if (fromUnitValue === "km" && toUnitValue === "cm") {
        result = inputValue * 100000;
      } else if (fromUnitValue === "km" && toUnitValue === "m") {
        result = inputValue * 1000;
      } else {
        result = inputValue;
      }
    } else if (selectedType === "area") {
      if (fromUnitValue === "sq_cm" && toUnitValue === "sq_m") {
        result = inputValue / 10000;
      } else if (fromUnitValue === "sq_cm" && toUnitValue === "sq_km") {
        result = inputValue / 10000000000;
      } else if (fromUnitValue === "sq_m" && toUnitValue === "sq_cm") {
        result = inputValue * 10000;
      } else if (fromUnitValue === "sq_m" && toUnitValue === "sq_km") {
        result = inputValue / 1000000;
      } else if (fromUnitValue === "sq_km" && toUnitValue === "sq_cm") {
        result = inputValue * 10000000000;
      } else if (fromUnitValue === "sq_km" && toUnitValue === "sq_m") {
        result = inputValue * 1000000;
      } else {
        result = inputValue;
      }
    } else if (selectedType === "temperature") {
      if (fromUnitValue === "c" && toUnitValue === "f") {
        result = (inputValue * 9/5) + 32;
      } else if (fromUnitValue === "c" && toUnitValue === "k") {
        result = inputValue + 273.15;
      } else if (fromUnitValue === "f" && toUnitValue === "c") {
        result = (inputValue - 32) * 5/9;
      } else if (fromUnitValue === "f" && toUnitValue === "k") {
        result = (inputValue + 459.67) * 5/9;
      } else if (fromUnitValue === "k" && toUnitValue === "c") {
        result = inputValue - 273.15;
      } else if (fromUnitValue === "k" && toUnitValue === "f") {
        result = (inputValue * 9/5) - 459.67;
      } else {
        result = inputValue;
      }
    }
  
  document.getElementById("result").innerHTML =
  result.toFixed(2) + ' ' + units[selectedType][toUnitValue];
  }
  
  populateUnits();