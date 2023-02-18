// function for getting input from input field.
function getInputFieldById(input){
    const inputValue = document.getElementById(input);
    const inputValueString = inputValue.value;
    const inputValueNumber = parseFloat(inputValueString);
    //inputValue.value = '';
    return inputValueNumber;
}
// Function for Set Element in the display the display
/* function setElementById(elementId, newValue){
    const newScreenValue = document.getElementById(elementId);
    newScreenValue.innerText = newValue;
} */

//Area [multiplication of Two Number]

// function for Triangle Area. 
document.getElementById('triangle-btn').addEventListener('click',function(){
    const triangleBase = getInputFieldById('triangle-b');
    const triangleHeight = getInputFieldById('triangle-h');

    const triangleArea = 0.5 * triangleBase * triangleHeight;

    const displayValue = document.getElementById('list-item1');
    displayValue.innerText = triangleArea;

    //console.log(triangleArea);
})

//function for Rectangle Area.
document.getElementById('rectangle-btn').addEventListener('click', function(){
    const rectangleWidth = getInputFieldById('rectangle-w');
    const rectangleLength = getInputFieldById('rectangle-l');

    const rectangleArea = rectangleLength * rectangleWidth;
    
    const displayValue = document.getElementById('list-item2');
    displayValue.innerText = triangleArea;
})

//function for parallelogram Area.
document.getElementById('parallelogram-btn').addEventListener('click', function(){
    const parallelogramBase = getInputFieldById('parallelogram-b');
    const parallelogramHight = getInputFieldById('parallelogram-h');

    const parallelogramArea = parallelogramBase * parallelogramHight;
    
    const displayValue = document.getElementById('list-item3');
    displayValue.innerText = triangleArea;
})

//function for rhombus Area.
document.getElementById('rhombus-btn').addEventListener('click', function(){
    const rhombusd1 = getInputFieldById('rhombus-d1');
    const rhombusd2 = getInputFieldById('rhombus-d2');

    const rhombusArea = 0.5 * rhombusd1 * rhombusd2;

    const displayValue = document.getElementById('list-item4');
    displayValue.innerText = rhombusArea;
})

//function for pentagon Area.
document.getElementById('pentagon-btn').addEventListener('click', function(){
    const pentagonParameter = getInputFieldById('pentagon-p');
    const pentagonBase = getInputFieldById('pentagon-b');

    const pentagonArea = 0.5 * pentagonParameter * pentagonBase;

    const displayValue = document.getElementById('list-item5');
    displayValue.innerText = pentagonArea;
})

//function for ellipse Area.
document.getElementById('rhombus-btn').addEventListener('click', function(){
    const ellipseA = getInputFieldById('ellipse-a');
    const ellipseB = getInputFieldById('ellipse-b');

    const ellipseArea = 3.1416 * ellipseA * ellipseB;

    const displayValue = document.getElementById('list-item6');
    displayValue.innerText = ellipseArea;
})
