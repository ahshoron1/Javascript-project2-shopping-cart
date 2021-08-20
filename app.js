function updateproductNumber(product, price, isIncreasing) {
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;
    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    //Update case total
    productInput.value = productNumber;
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;

    //Calculate Total
    calculateTotal();
}
function getInputValue(product) {
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}
function calculateTotal() {
    const phoneTotal = getInputValue('phone') * 1219
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax

    //Update on the html
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;

}
document.getElementById('phone-plus').addEventListener('click', function () {

    updateproductNumber('phone', 1219, true);

});
document.getElementById('phone-minus').addEventListener('click', function () {
    updateproductNumber('phone', 1219, false);

});

document.getElementById('case-plus').addEventListener('click', function () {
    updateproductNumber('case', 59, true);
})
document.getElementById('case-minus').addEventListener('click', function () {
    updateproductNumber('case', 59, false);
})
