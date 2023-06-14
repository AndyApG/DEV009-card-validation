const validator = {
  maskify: function (creditCardNumber) {
    if (creditCardNumber.length>4){
      const lastFourDigits = creditCardNumber.slice(-4);
      const maskedDigits = "#".repeat(creditCardNumber.length - 4);
      return maskedDigits + lastFourDigits;

    }else return creditCardNumber;
    
  },
  
  isValid: function (creditCardNumber) {
    let sum = 0;
    for (let i = creditCardNumber.length -1; i >= 0; i--) {
      let digit = parseInt(creditCardNumber.charAt(i));
      if (creditCardNumber.length % 2 === 0){
        if ( i % 2 === 0)  {
          digit *= 2;
        } 
        if (digit > 9) digit -= 9;
      }
      if (creditCardNumber.length % 2 !== 0){
        if ( i % 2 !== 0)  {
          digit *= 2;
          if (digit > 9) {
            digit -= 9;
          }
        }
      }
      sum += digit;
    }
    return sum % 10 === 0;
  }
};export default validator;
