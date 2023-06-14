import validator from './validator.js';

function saveCards(){

    const tipo=document.getElementsByName("tipo").values();
    const name= document.getElementById("name").value;
    const creditCardNumber = document.getElementById("number").value;
    const valid=document.getElementById("valid").value;
    const cvv= document.getElementById("cvv").value;

    if (validator.isValid(creditCardNumber) & creditCardNumber != null){

        const cardElement = {
            type: tipo,
            titular: name,
            cardNumber: creditCardNumber,
            fecha: valid,
            cvv: cvv       
        };
        alert("Tarjeta Guardada")
        

    }else alert("La tarjeta con el numero "+validator.maskify(creditCardNumber)+" es invalida.");
    
}

let nameWriting= document.querySelector('#name');
let nameWrited=document.getElementById('name1');

nameWriting.addEventListener('keyup',()=>{
    nameWrited.innerHTML=nameWriting.value;
});

let tipoSelected1=document.getElementById('credito');
let tipoWrite=document.getElementById('tipo1');

tipoSelected1.addEventListener('click',()=>{
    tipoWrite.innerHTML=tipoSelected1.value;
});

let tipoSelected2=document.getElementById('debito');

tipoSelected2.addEventListener('click',()=>{
    tipoWrite.innerHTML=tipoSelected2.value;
});

let numberWriting= document.querySelector('#number');
let numberWrited=document.getElementById('number1');

numberWriting.addEventListener('keyup',()=>{
    
    numberWrited.innerHTML=validator.maskify(numberWriting.value);
});

let cvvWriting= document.querySelector('#cvv');
let cvvWrited=document.getElementById('cvv1');

cvvWriting.addEventListener('keyup',()=>{
    cvvWrited.innerHTML=cvvWriting.value;

});

let validWriting= document.getElementById('valid');
let validWrited=document.getElementById('mes');

validWriting.addEventListener('input',()=>{
    validWrited.innerHTML=validWriting.value;
});

