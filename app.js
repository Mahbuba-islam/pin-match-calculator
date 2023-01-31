
  //generate random pin
function getPin(){
    const pin = generatePin()
    const pinString = pin + ''
    if(pinString.length === 4){
        return pin
    }
    else{
        getPin()
    }
}

function generatePin(){
    const random = Math.round(Math.random()*10000);
    return random;
}



document.getElementById('generate-pin').addEventListener('click', function(){
    const pin = getPin()
    const displayPinField = document.getElementById('display-pin');
    displayPinField.value = pin
    
})



//calculator
document.getElementById('calculator').addEventListener('click', function(event){
   const charters = event.target.innerText
   const typedNumberField = document.getElementById('typed-number-field')
   const preTypedNumber = typedNumberField.value
   if(isNaN(charters)){
     if(charters === 'C'){
        typedNumberField.value = ''
     }
     else if(charters === '<'){
        const digits = preTypedNumber.split('')
        digits.pop()
        const reaminingDigits = digits.join('')
        typedNumberField.value = reaminingDigits

     }

   }
   else{
    
      
      const newTypedNumber = preTypedNumber+charters
      typedNumberField.value = newTypedNumber
   }

})

// match pin
document.getElementById('verify-pin').addEventListener('click', function(){
    const displayPinField = document.getElementById('display-pin')
    const  displayPinValue = displayPinField.value

    const typedNumberField = document.getElementById('typed-number-field')
    const typedNumberValue = typedNumberField.value

    const successMessage = document.getElementById('success')
    const failMessage = document.getElementById('fail')
    if(displayPinValue === typedNumberValue){
       successMessage.style.display = 'block'
       failMessage.style.display = 'none'
    }
    else{
        failMessage.style.display = 'block'
        successMessage.style.display = 'none'
    }
})


