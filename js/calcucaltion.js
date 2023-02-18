// function for getting input from input field.
function getInputFieldById(input){
    const inputValue = document.getElementById(input);
    const inputValueString = inputValue.value;
    const inputValueNumber = parseFloat(inputValueString);
    //inputValue.value = '';
    return inputValueNumber;
}
// blog button linked to Blog.html
document.getElementById('blog-btn').addEventListener('click', function(){
    window.location.href = 'blog.html';
})


// function for Triangle Area. 
document.getElementById('triangle-btn').addEventListener('click',function(){
    const triangleBase = getInputFieldById('triangle-b');
    const triangleHeight = getInputFieldById('triangle-h');

    const triangleArea = 0.5 * triangleBase * triangleHeight;

    const displayValueTriangle = document.getElementById('list-item1');
    displayValueTriangle.innerText = triangleArea;

    //console.log(triangleArea);
})

//function for Rectangle Area.
document.getElementById('rectangle-btn').addEventListener('click', function(){
    const rectangleWidth = getInputFieldById('rectangle-w');
    const rectangleLength = getInputFieldById('rectangle-l');

    const rectangleArea = rectangleLength * rectangleWidth;
    
    const displayValueRectangle = document.getElementById('list-item2');
    displayValueRectangle.innerText = rectangleArea;
})

//function for parallelogram Area.
document.getElementById('parallelogram-btn').addEventListener('click', function(){
    const parallelogramBase = getInputFieldById('parallelogram-b');
    const parallelogramHight = getInputFieldById('parallelogram-h');

    const parallelogramArea = parallelogramBase * parallelogramHight;
    
    const displayValueParallelogram = document.getElementById('list-item3');
    displayValueParallelogram.innerText = parallelogramArea;
})

//function for rhombus Area.
document.getElementById('rhombus-btn').addEventListener('click', function(){
    const rhombusd1 = getInputFieldById('rhombus-d1');
    const rhombusd2 = getInputFieldById('rhombus-d2');

    const rhombusArea = 0.5 * rhombusd1 * rhombusd2;

    const displayValueRhombus = document.getElementById('list-item4');
    displayValueRhombus.innerText = rhombusArea;
})

//function for pentagon Area.
document.getElementById('pentagon-btn').addEventListener('click', function(){
    const pentagonParameter = getInputFieldById('pentagon-p');
    const pentagonBase = getInputFieldById('pentagon-b');

    const pentagonArea = 0.5 * pentagonParameter * pentagonBase;

    const displayValuePentagon = document.getElementById('list-item5');
    displayValuePentagon.innerText = pentagonArea;
})

//function for ellipse Area.
document.getElementById('rhombus-btn').addEventListener('click', function(){
    const ellipseA = getInputFieldById('ellipse-a');
    const ellipseB = getInputFieldById('ellipse-b');

    const ellipseArea = 3.1416 * ellipseA * ellipseB;

    const displayValueEllipse = document.getElementById('list-item6');
    displayValueEllipse.innerText = ellipseArea;
})
