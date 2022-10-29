
let sliders = document.querySelectorAll("input[type='range']");
let numbers = document.querySelectorAll("input[type='number']");

  
let investvalue = document.getElementById('investvalue');
let estreturn = document.getElementById('estreturn');
let totalv = document.getElementById('totalv');


function selectedfun(){

  
sliders.forEach(function (slider) {
  slider.addEventListener("input",sliderfun)

});
numbers.forEach(function (number) {
  number.addEventListener("input",sliderfun2)

});

  function sliderfun(){
    let investments = sliders[0].value;
    let returnrate = sliders[1].value;
    let times = sliders[2].value;
    numbers[0].value = sliders[0].value;
    numbers[1].value = sliders[1].value;
    numbers[2].value = sliders[2].value;
  
    var monthlyRate = returnrate / 12 / 100;
    var months = times * 12;
    var futureValue = 0;
    var wealth = 0;
    var total = (investments * times * 12);
    let mplush = 1 + monthlyRate;
    let mathpow = Math.pow(mplush, months);
  
    futureValue = (investments * ((mathpow - 1) * mplush)) / monthlyRate;
  
    wealth = Math.round(futureValue - total);
    let totalinvestvalue =Math.round(total);
    let totalvalues =Math.round(futureValue);
  
    investvalue.innerText = totalinvestvalue;
    totalv.innerHTML = totalvalues;
    estreturn.innerHTML = wealth;

  };

function sliderfun2(){

  if (this.max) this.value = Math.min(parseInt(this.max), parseInt(this.value) || 0);
  if (this.min) this.value = Math.max(parseInt(this.min), parseInt(this.value) || 0);

  sliders[0].value = numbers[0].value;
sliders[1].value = numbers[1].value;
sliders[2].value = numbers[2].value;

let investments = numbers[0].value;
    let returnrate = numbers[1].value;
    let times = numbers[2].value;
  
    var monthlyRate = returnrate / 12 / 100;
    var months = times * 12;
    var futureValue = 0;
    var wealth = 0;
    var total = (investments * times * 12);
    let mplush = 1 + monthlyRate;
    let mathpow = Math.pow(mplush, months);
  
    futureValue = (investments * ((mathpow - 1) * mplush)) / monthlyRate;
  
  
    wealth = Math.round(futureValue - total);
    let totalinvestvalue =Math.round(total);
    let totalvalues =Math.round(futureValue);

    investvalue.innerText = totalinvestvalue;
    totalv.innerHTML = totalvalues;
    estreturn.innerHTML = wealth;
}

sliderfun();


};
selectedfun();