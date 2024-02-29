const input1 = document.querySelector('#val1')
const input2 = document.querySelector('#val2')
const input3 = document.querySelector('#val3')
const input4 = document.querySelector('#val4')
console.dir(input1)
console.log(input1.value)
input1.value = 20

//pobierz diva
const pojeminkNaWyniki = document.querySelector('.wyniki')
pojeminkNaWyniki.textContent = input1.value


//reagowanie na kliknięcie
const przeliczBtn = document.querySelector('#przelicz')
przeliczBtn.addEventListener('click',()=>{
    console.log('user button')
    const min = Math.min(input1.value,input2.value,input3.value,input4.value)
    const max = Math.max(input1.value,input2.value,input3.value,input4.value)
    const suma = parseInt(input1.value) + parseInt(input2.value) + 
    parseInt(input3.value) + parseInt(input4.value)
    
    pojeminkNaWyniki.innerHTML = "Min: " + min + " Max: " + max + " Suma: " + suma
    const DodajPoleBtn = document.querySelector('#DodajPole')
    DodajPoleBtn.addEventListener('click',()=>{
        console.log('dziala')
    })
})
