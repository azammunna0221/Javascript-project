let serial = 0;

// function for getting input from input field & (This function called more then 2 times.)
function getInputFieldById(input) {
    const inputValue = document.getElementById(input);
    const inputValueString = inputValue.value;
    const inputValueNumber = parseFloat(inputValueString);
    inputValue.value = '';
    return inputValueNumber;
}
//function for display area output in the Area-Calculation table;

function setDataToAreaCalculation(element,area){

    const tableContainer = document.getElementById('table-container');
    const tr = document.createElement('tr');

    tr.innerHTML = `
    <td>${serial}.</td>
    <td class="px-2">${element}</td>
    <td class="px-2">${area}cm<sup>2</sup></td>
    <td class="px-2"><button class="px-1 py-2 bg-blue-300">convert to m<sup>2</sup> </button></td>
    `;
    tableContainer.appendChild(tr);
}


// blog button linked to Blog.html
document.getElementById('blog-btn').addEventListener('click', function () {
    window.location.href = 'blog.html';
})



// function for Triangle Area. 
document.getElementById('triangle-btn').addEventListener('click', function () {
    
    const triangleBase = getInputFieldById('triangle-b');
    const triangleHeight = getInputFieldById('triangle-h');
    //Validation of Inputs:-
    if (typeof triangleBase == 'number' && typeof triangleHeight == 'number' && triangleBase > 0 && triangleHeight > 0) {
        const triangleArea = 0.5 * triangleBase * triangleHeight;
        serial += 1;
        setDataToAreaCalculation('Triangle',triangleArea);
    }
    else {
        alert("Please input valid Number");
    }
})

//function for Rectangle Area.
document.getElementById('rectangle-btn').addEventListener('click', function () {
    
    const rectangleWidth = getInputFieldById('rectangle-w');
    const rectangleLength = getInputFieldById('rectangle-l');
    //validation of Inputs:-
    if (typeof rectangleWidth == 'number' && typeof rectangleLength == 'number' && rectangleWidth > 0 && rectangleLength > 0) {
        const rectangleArea = rectangleLength * rectangleWidth;
        serial += 1;
        setDataToAreaCalculation('Rectangle',rectangleArea);
        
    }
    else{
        alert("Please input valid Number");
    }
})

//function for parallelogram Area.
document.getElementById('parallelogram-btn').addEventListener('click', function () {
    serial += 1;
    const parallelogramBase = getInputFieldById('parallelogram-b');
    const parallelogramHight = getInputFieldById('parallelogram-h');

    const parallelogramArea = parallelogramBase * parallelogramHight;
    setDataToAreaCalculation('Parallelogram',parallelogramArea);
})

//function for rhombus Area.
document.getElementById('rhombus-btn').addEventListener('click', function () {
    serial += 1;
    const rhombusd1 = getInputFieldById('rhombus-d1');
    const rhombusd2 = getInputFieldById('rhombus-d2');

    const rhombusArea = 0.5 * rhombusd1 * rhombusd2;
    setDataToAreaCalculation('Rhombus',rhombusArea);
})

//function for pentagon Area.
document.getElementById('pentagon-btn').addEventListener('click', function () {
    serial += 1;
    const pentagonParameter = getInputFieldById('pentagon-p');
    const pentagonBase = getInputFieldById('pentagon-b');

    const pentagonArea = 0.5 * pentagonParameter * pentagonBase;
    setDataToAreaCalculation('Pentagon',pentagonArea);
})

//function for ellipse Area.
document.getElementById('ellipse-btn').addEventListener('click', function (){
    serial += 1;
    const ellipseA = getInputFieldById('ellipse-a');
    const ellipseB = getInputFieldById('ellipse-b');

    const ellipseArea = 3.1416 * ellipseA * ellipseB;
    setDataToAreaCalculation('Ellipse',ellipseArea);
})

