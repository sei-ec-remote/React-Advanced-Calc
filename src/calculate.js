

//////////////////////////////////////////////////////////////////////
/// operate takes number1 and number and performs the operation
//    on them.    Then returns number.
///
/////////////////////////////////////////////////////////////////////
function handleOperator(num1, num2, operation) {

    switch (operation) {
        case "+":   
            return parseFloat(num1) + parseFloat(num2);
        case "-":   
            return parseFloat(num1) - parseFloat(num2);
        case "x":   
            return parseFloat(num1) * parseFloat(num2);
        case "/":
            if (num2 === "0") {
                return "0";
            } else {
                return parseFloat(num1) / parseFloat(num2)
            }
        default: return {};
    }
  }

//////////////////////////////////////////////////////////////////////
// checkIfNumber will check to see if the number is made up of the
//    digits 0-9 using regular expression and test method.
//////////////////////////////////////////////////////////////////////
function checkIfNumber (number) {
    return /[0-9]+/.test(number)
}

//////////////////////////////////////////////////////////////////////
///  This is the heart of a calculators calculating ability
//   
//   Required:  Button Name to determine what the calculator is doing.
//   Required:  The current state object of the Calculator.  This includes
//    knowing the total, next and operation to be performed.
//    total is a string of the running total.
//    next is the next number to be to be used with the operation.
//    operation is the +, -, *, /
//
//   Returns a state object so on every button click a new State can
//    be set based off the button that is clicked on the calculator.
///////////////////////////////////////////////////////////////////////
export default function calculate(stateObj, buttonName) {

  
  console.log("IN Calculate state:", stateObj);
  console.log("    for Button Pressed:", buttonName);

  //   If the buttonName is to Clear - the state object is reset and returned.
  if (buttonName === "AC") {
    return {
      total: null,
      next: null,
      operation: null,
    };
  }

  /////////////////////////////////////////////////
  //  Check if the button is a Number
  //    There are a few states to handle after a Number is clicked.
  //    1)  You must always see if a 0 and 0 are being clicked.
  //    2)  If this is the first digit you set next to the button and return.
  //    3)  If you are accumulating digits from repeatedly clicking digits
  //          you need to accumulate them in next and keep adding the digits.
  //    4)  If you have a number AFTER you have a operation in state
  //          you are accumulating numbers in your second operand which is
  //          stored in next.   If next has nothing in it this is the first digit
  //          of your second operand.
  if (checkIfNumber(buttonName)) {

        console.log("Processing Number:", buttonName)

        //  If you have 0 and another click of 0 - display stays 0
        if (buttonName === "0" && stateObj.next === "0") {
            console.log("Pressing 0 over and over")
            return {};
        }

        // If there is an operation, this is where we start accumulating digits
        //    for the second operand.   
        if (stateObj.operation) {
            console.log("We have a digit operation!")
            // if you already have a digit - add on another
            if (stateObj.next) {
                console.log("Next is: ", stateObj.name + buttonName)
                return { next: stateObj.next + buttonName };
            }
            // First digit to save
            console.log("Next is:", buttonName)
            return { next: buttonName };
        }
        
        // Accumulating Digits state:
        // We are accumulating digits here for the first operand.
        //   The first time we save the buttonName into next.
        //   and for each time after that we accumulate by adding the 
        //   buttonName to next
        if (stateObj.next) {
            console.log("We are accumulating digits")
            const next = 
                stateObj.next === "0" ? buttonName : stateObj.next + buttonName;
            return { next, total: null, };
        }

        // There is no operatior,  there is no next. State is all null.
        // First time setup the next field with button pressed.
        return { next: buttonName, total: null, };
  }

  //----------------------------------------------------------
  //  Percentage will take the digits accumulated in next and
  //    then create a percentage.
  if (buttonName === "%") {
        if (stateObj.operation && stateObj.next) {
            const result = handleOperator(stateObj.total, stateObj.next, stateObj.operation);
            return {
                total: parseFloat(result) / 100,
                next: null,
                operation: null,
            };
        }
        if (stateObj.next) {
           return {
             next: parseFloat(stateObj.next) / 100
           };
         }
         return {};
  }

  //------------------------------------------------------------
  //  Decimals.
  //     Starting with a decimail your display starts with 0.
  //     If it happens during accumulating digits just add the . to next
  //     If it happens during accumulating digits just ignore multiples.
  if (buttonName === ".") {
        if (stateObj.next) {
             // ignore a . if the next number already has one
            if (stateObj.next.includes(".")) {
                console.log("Ignoring more . ")
                return {};
            }
            return { next: stateObj.next + "." };
        }
        return { next: "0." };
  }

  //---------------------------------------------------------
  //  An equals button was clicked.   If we have an operation to
  //    perform and we have the second operand in the next we
  //    can call operate to perform the operation.  Operate
  //    will do the calculation and return the total so we can
  //    save this in our state for total.
  if (buttonName === "=") {
        // Have an operation and a second operand so a operation
        //   can be performed.
        if (stateObj.next && stateObj.operation) {
            return {
                total: handleOperator(stateObj.total, stateObj.next, 
                               stateObj.operation),
                next: null,
                operation: null,
            };
        } else {
            // Pressing = with no operand and no operation is a No-op.
            return {};
        }
  }

  //--------------------------------------------------
  //   Negating a value must set the next and total values.
  if (buttonName === "+/-") {
        if (stateObj.next) {
            return { next: (-1 * parseFloat(stateObj.next)) };
        }
        if (stateObj.total) {
            return { total: (-1 * parseFloat(stateObj.total)) };
        }
        return {};
  }

  //------------------------------------------------
  // Button must be an operation
  // User pressed an operation button and there is an existing operation
  //  for example:  9 x 9 x 
  if (stateObj.operation) {
        console.log("For button: ", buttonName)
        console.log("calling operate and setting total state")
        console.log("stateObj = ", stateObj)
        return {
            total: handleOperator(stateObj.total, stateObj.next, stateObj.operation),
            next: null,
            operation: buttonName,
        };
  }

  //--------------------------------------------------
  // The user hasn't typed a number yet, just save the operation
  if (!stateObj.next) {
        console.log("Saving the operation: ", buttonName)
        return { operation: buttonName };
  }

  //--------------------------------------------------
  // save the operation and shift 'next' into 'total'
  console.log("Saving the operation - shifting next to total")
  return {
        total: stateObj.next,
        next: null,
        operation: buttonName,
  };
}
