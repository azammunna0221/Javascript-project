// function for triangle 
function getInputFieldById(input){
    const inputValue = document.getElementById('triangle-b');
    const inputValueString = inputValue.value;
    const inputValueNumber = parseFloat(inputValueString);
    return inputValueNumber;
}