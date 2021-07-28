const defaultResult = 0;
let currentResult = defaultResult;
let logEntries =[];

// Gets input from input field
function getUserNumberInput() {
  return parseInt(usrInput.value);
}

// Generates and writes calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription); // from vendor file
}

function writeToLog(operationIdentifier, prevResult, operationNumber, newResult) {
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult,
  };
  logEntries.push(logEntry);
  
  console.log(logEntries);
}

function calculateResult(calculationType) {
 const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  if (calculationType === "ADD") {
    currentResult += enteredNumber;
    mathOpetator = "+";
  } else {
    currentResult -= enteredNumber;
      mathOpetator = "-";

  }

  createAndWriteOutput(mathOpetator, initialResult, enteredNumber);
  writeToLog(calculationType, initialResult,enteredNumber,currentResult);
}
function add() {
  calculateResult("ADD");
}

function subtract() {
  calculateResult("STBSTRACT");
 
}

function multiply() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult *= enteredNumber;
  createAndWriteOutput('*', initialResult, enteredNumber);
  writeToLog('MULTIPLY', initialResult,enteredNumber,currentResult);
}

function divide() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult  /= enteredNumber;
  createAndWriteOutput('/', initialResult, enteredNumber);
  writeToLog('DIVIDE', initialResult,enteredNumber,currentResult);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);