const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkLuckyButton = document.querySelector("#check-lucky");
const outputText = document.querySelector("#output-text");

function checkLuckyOrNot(){
  if(dateOfBirth.value && luckyNumber.value){
    const dob = dateOfBirth.value;
    const sum = addDigits(dob);
    checkDivisible(sum, luckyNumber.value);
  }else{
    outputText.innerText = "Please enter date of birth and lucky number."
  }

}

function checkDivisible(sum, luckyNumber){
  if(sum % luckyNumber === 0){
    outputText.innerText = "Your birthday is lucky!!:)"
  }else{
    outputText.innerText = "Your birthday is not lucky :("
  }
}

function addDigits(dob){
  dob = dob.replaceAll("-","");
  let sum = 0;
  for(let i=0; i < dob.length; i++){
    sum = sum + Number(dob.charAt(i));
  }
  return sum;
}

checkLuckyButton.addEventListener('click', checkLuckyOrNot);