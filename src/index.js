import validator from './validator.js';

let nameWriting= document.querySelector('#name');
let nameWrited=document.getElementById('name1');

nameWriting.addEventListener('keyup',()=>{
    nameWrited.textContent=nameWriting.value;
});

let tipoSelected1=document.getElementById('credito');
let tipoWrited=document.getElementById('tipo1');

tipoSelected1.addEventListener('click',()=>{
    tipoWrited.textContent=tipoSelected1.value;
});

let tipoSelected2=document.getElementById('debito');

tipoSelected2.addEventListener('click',()=>{
    tipoWrited.textContent=tipoSelected2.value;
});

let numberWriting= document.querySelector('#number');
let numberWrited=document.getElementById('number1');

numberWriting.addEventListener('keyup',()=>{
    
    numberWrited.textContent=validator.maskify(numberWriting.value);
});

let cvvWriting= document.querySelector('#cvv');
let cvvWrited=document.getElementById('cvv1');

cvvWriting.addEventListener('keyup',()=>{
    cvvWrited.textContent=cvvWriting.value;

});

let validWriting= document.getElementById('valid');
let validWrited=document.getElementById('mes');

validWriting.addEventListener('input',()=>{
    validWrited.textContent=validWriting.value;
});

document.getElementById('validar').addEventListener('click',(numberWrited) =>{
    if(numberWrited.value !=='0000000000000000' && numberWriting.value !== ''){
        const creditCardNumber = document.getElementById("number").value;
        if(validator.isValid(creditCardNumber)){
            if(confirm("El número de tarjeta es valido.\n ¿Deseas Guardarlo?")){
                let tipo =document.getElementById('tipo1').value;
                let listOfCards = {
                    type : tipoWrited.value,
                    name : nameWrited.value,
                    number : creditCardNumber,
                    cvv : cvvWrited.value,
                    date: validWrited.value,
                };
                alert('tipo de tarjeta: '+ listOfCards.type+'\n titular:'+ listOfCards.name+'\n numero de tarjeta: '+
                listOfCards.number+'\n cvv:'+listOfCards.cvv+'\n valida hasta: '+listOfCards.date);
            }
            
        }else alert("Número de tarjeta invalido");
    }else alert("No hay datos que guardar");
});