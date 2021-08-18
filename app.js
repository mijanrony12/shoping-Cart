
function updateInputField(product,total,price,isIncreasing) {
    const inputValue = document.getElementById(product);
   let inputNumber = parseInt(inputValue.value);
    if (isIncreasing == true)
    {
       inputNumber= inputNumber + 1;
    }
    else if(isIncreasing==false && inputNumber>0)
    {
        inputNumber = inputNumber - 1;
    }

    inputValue.value = inputNumber;
    const getTotal = document.getElementById(total)
    getTotal.innerText = inputNumber * price
    calculateTotal();
}

function getInputValue(inputId) {
    const productInput = document.getElementById(inputId);
    const productNumber = parseInt(productInput.value);
    return productNumber;

}
function calculateTotal() {
   const phoneTotal= getInputValue('phone-number') * 1290;
    const caseTotal = getInputValue('case-number') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = parseInt(subTotal * 10 / 100);
    const total = subTotal + tax;
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = total;
}

//add event for case
document.getElementById('case-plus').addEventListener('click', function () {
    updateInputField('case-number','case-total',59,true )
});
document.getElementById('case-minus').addEventListener('click', function () {
     updateInputField('case-number','case-total',59,false)
})


//add event for phone.
document.getElementById('phone-plus').addEventListener('click', function () {
    updateInputField('phone-number','phone-total',1290,true )
});
document.getElementById('phone-minus').addEventListener('click', function () {
    updateInputField('phone-number', 'phone-total', 1290, false);
})

