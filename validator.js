const validator = {
  isValid(creditCardNumber){
    const arrayCreditCardNumber = creditCardNumber.split('');

    for (let i=0; i<arrayCreditCardNumber.length;i++) arrayCreditCardNumber[i]=parseInt(arrayCreditCardNumber[i]);
    
    let sum = 0;
    const reversedCreditCardNumber = arrayCreditCardNumber.reverse(); 
    
    for (let i=1; i<reversedCreditCardNumber.length;i+=2){
      reversedCreditCardNumber [i]*=2; 

      if(reversedCreditCardNumber [i]>9){
        reversedCreditCardNumber [i]-=9;
      }   

    }  

    for(const i of reversedCreditCardNumber) sum+=i;
    
    if(sum%10 ===0){
      return true;
    }else {
      return false;
    }
  },

  maskify(creditCardNumber){

    if (creditCardNumber.length<4){
      return creditCardNumber;
    }else{
      const hashtag ='#'.repeat(creditCardNumber.length-4);
      const lastFourNumbers= creditCardNumber.slice(-4);
      return hashtag+lastFourNumbers;
    }
    
  }
};export default validator;
