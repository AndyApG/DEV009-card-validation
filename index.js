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
let numberWritingValue;

numberWriting.addEventListener('keyup',()=>{
    numberWritingValue = numberWriting.value;
    numberWrited.textContent=validator.maskify(numberWritingValue);
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

document.getElementById('validar').addEventListener('click',() =>{

    if(numberWritingValue !=='0000000000000000' && numberWritingValue !== ''){

        if(validator.isValid(numberWritingValue)){
            let card = {
                type : tipoWrited.value,
                name : nameWrited.value,
                number : numberWritingValue,
                cvv : cvvWrited.value,
                date: validWrited.value,
                info: function(){
                    const text = ['Tipo: '+ this.type,' Titular:'+ this.name,'Número: '+
                    this.number,' cvv:'+this.cvv,'Válida hasta: '+this.date];
                    return text;
                }
            };

            if(confirm("El número de tarjeta es valido.\n ¿Deseas Guardarlo?")){

                let writedList = document.getElementById('writedList');
                let tarjeta = document.createElement('div');
                tarjeta.setAttribute('class','dataList');
                writedList.appendChild(tarjeta);
                                
                for (const i of card.info()){

                    let msg =document.createElement('p');
                    msg.textContent = i;
                   
                    tarjeta.appendChild(msg);
                    
                }

                let deleteBtn = document.createElement('button');
                deleteBtn.textContent='Eliminar'; 
                tarjeta.appendChild(deleteBtn);

                deleteBtn.onclick = ()=>{tarjeta.parentElement.removeChild(tarjeta)};

                
            }

        }else alert("Número de tarjeta invalido");

    }else alert("No hay datos que guardar");
});

document.getElementById('limpiar').addEventListener('click',() =>{
   nameWrited.textContent='Titular';
   tipoWrited.textContent='Tipo';
   numberWrited.textContent='0000000000000000';
   cvvWrited.textContent='cvv';
   validWrited.textContent='Válida hasta';
});