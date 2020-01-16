// Global variable state
var master = {
  currentValue: "0",
  evalString: "0",
  decimalPoint: false,
  opLock: false,
  operator: "",
  operators: ['add', 'subtract', 'multiply', 'divide'],
  numbers: ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
};

// Initialize values when page loads for the first time
window.onload = function() {
  handleMaster('master');
}

// Master handler function
function handleMaster(id) {
  // Get ID type (number, operator etc) from the received parameter
  var id_case;
  if(master['numbers'].includes(id)) {
    id_case = "number";
  }
  else if(master['operators'].includes(id)) {
    id_case = "operator";
  }
  else {
    id_case = id;
  }
  // Call relevant function based on ID type
  switch(id_case) {
    case 'master':
      updateDisplay();
      break;
    case 'clear': 
      handleClear();
      break;
    case 'number':
      handleNumbers(document.getElementById(id).innerHTML);
      break;
    case 'operator':
     master['opLock'] = true; handleOperators(document.getElementById(id).innerHTML);
      break;
    case 'decimal':
      handleDecimal();
      break;
    case 'equals':
      handleEquals();
      break;
    case 'sign':
      toggleSign();
      break;
    default:
      document.getElementById('display').innerHTML = "Error";
  }
}
// Handle displaying current value
function updateDisplay() {
  // Update display values
  document.getElementById('display').innerHTML = master['currentValue'];
  document.getElementById('display-expr').innerHTML = master['evalString']=="0"?"":master['evalString'];
}

// Clear all values
function handleClear() {
  master['currentValue'] = "0";
  master['evalString'] = "0";
  master['decimalPoint'] = false;
  master['opLock'] = false;
  master['operator'] = "";
  updateDisplay();
}

// Handle numbers
function handleNumbers(num) {
  if(master['opLock']) {
    master['opLock'] = false;
    handleOperators(master['operator']);
  }
  // If currentvalue is 0, REPLACE it with new value; otherwise, APPEND TO IT
  master['currentValue'] = master['currentValue']=="0"?num:master['currentValue']+num;
  // If evaluation string is EMPTY, REPLACE it with new value; otherwise, APPEND TO IT depending on zero at the end
  master['evalString'] = (master['evalString']=="0")?num:(master['currentValue']== "0"&&master['evalString'].substr(-1)=="0")?master['evalString']:master['evalString']+num;
  updateDisplay();
}

// Handle operator
function handleOperators(new_operator) {
  if(master['opLock']) {
    // If another operator is already selected OR operator is pressed
    // Lock operator appending to string until number is pressed
    master['operator'] = new_operator;
    document.getElementById('display-expr').innerHTML = master['evalString']+master['operator'];
  }
  else {
    // Otherwise, append operator to string and continue selection and handling of numbers
    var oldValue = master['currentValue'];
    document.getElementById('display').innerHTML = oldValue;
    master['currentValue'] = "0";
    master['evalString'] += master['operator'];
    document.getElementById('display-expr').innerHTML = master['evalString'];
    master['decimalPoint'] = false;
  }
}
// Handle decimal value
function handleDecimal() {
  if(!master['decimalPoint']) {
    master['currentValue'] += ".";
    master['evalString'] += master['currentValue']!="0"?".":"0.";
    master['decimalPoint'] = true;
    updateDisplay();
  }
}

// Function to handle pressing of equals button
// MAGIC FUNCTION
function handleEquals() {
  // -x- = +
  if(master['evalString'].includes("--")) {
    master['evalString'] = master['evalString'].replace("--", "+");
  }
  // MAGIC LINE
  var result = parseFloat(eval(master['evalString'])).toString();
  master['currentValue'] = result;
  master['evalString'] = result;
  document.getElementById('display').innerHTML = result;
  document.getElementById('display-expr').innerHTML = master['evalString'];
}

// Toggle between positive and negative values
function toggleSign() {
  // Get old current value, convert it into negative value, update and display
  var oldCurrentValue = master['currentValue'];
  var newCurrentValue = parseFloat(oldCurrentValue * -1).toString();
  master['currentValue'] = newCurrentValue;
  document.getElementById('display').innerHTML = master['currentValue'];
  // Get old evaluation string, convert it into new string, update and display
  var oldEvalValue = master['evalString'].substring(master['evalString'].length-oldCurrentValue.length);
  master['evalString'] = master['evalString'].replace(oldEvalValue, newCurrentValue);
  document.getElementById('display-expr').innerHTML = master['evalString']=="0"?"":master['evalString'];
}