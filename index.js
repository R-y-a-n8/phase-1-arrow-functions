function divide(a, b) {
    if (b === 0) {
      return "Cannot divide by zero";
    }
    return a / b;
  }
  
  const square = (x) => x * x;

  const add = (a, b) => a + b;

  function divide(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number' || b === 0) {
      return "Invalid input or division by zero";
    }
    return a / b;
  }
  

function divide(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number' || b === 0) {
      return "Invalid input or division by zero";
    }
    return a / b;
  }
  
  const result = divide(2000, 100);
  

  console.log(result); 
  
  
  