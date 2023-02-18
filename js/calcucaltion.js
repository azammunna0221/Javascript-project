// function for getting input from input field.
function getInputFieldById(input){
    const inputValue = document.getElementById(input);
    const inputValueString = inputValue.value;
    const inputValueNumber = parseFloat(inputValueString);
    //inputValue.value = '';
    return inputValueNumber;
}
//Area [multiplication of Two Number]

// function for Triangle Area. 
document.getElementById('triangle-btn').addEventListener('click',function(){
    const triangleBase = getInputFieldById('triangle-b');
    const triangleHeight = getInputFieldById('triangle-h');

    const triangleArea = 0.5 * triangleBase * triangleHeight;
    console.log(triangleArea);
})

//function for Rectangle Area.
document.getElementById('rectangle-btn').addEventListener('click', function(){
    const rectangleWidth = getInputFieldById('rectangle-w');
    const rectangleLength = getInputFieldById('rectangle-l');

    const rectangleArea = rectangleLength * rectangleWidth;
    console.log(rectangleArea);
})

//function for parallelogram Area.
document.getElementById('parallelogram-btn').addEventListener('click', function(){
    const parallelogramBase = getInputFieldById('parallelogram-b');
    const parallelogramHight = getInputFieldById('parallelogram-h');

    const parallelogramArea = parallelogramBase * parallelogramHight;
    console.log(parallelogramArea);
})