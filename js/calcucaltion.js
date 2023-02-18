// function for getting input from input field.
function getInputFieldById(input){
    const inputValue = document.getElementById(input);
    const inputValueString = inputValue.value;
    const inputValueNumber = parseFloat(inputValueString);
    //inputValue.value = '';
    return inputValueNumber;
}

// function for Triangle Area. 
document.getElementById('triangle-btn').addEventListener('click',function(){
    const triangleBase = getInputFieldById('triangle-b');
    const triangleHeight = getInputFieldById('triangle-h');

    const triangleArea = 0.5 * triangleBase * triangleHeight;
    console.log(triangleArea);
})