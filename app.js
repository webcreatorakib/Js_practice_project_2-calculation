//This is for triangle
const area = document.getElementById('area');
const triangle  = document.getElementById('triangle');
triangle.addEventListener('click',function(){
    const triangleHeight = parseFloat(document.getElementById('triangleHeight').value);
    const triangleWidth = parseFloat(document.getElementById('triangleWidth').value);
    const areaResult = 0.5 * triangleHeight * triangleWidth;
    area.innerText = areaResult;
});


//This for rectangle
const rectangle = document.getElementById('rectangle');
rectangle.addEventListener('click', function(){
    const rectangleW = parseFloat(document.getElementById('rectangleW').value);
    const rectangleI = parseFloat(document.getElementById('rectangleI').value);
    const areaResult = rectangleW * rectangleI;
    document.getElementById('areaRectangle').innerText = areaResult;
})


//Code reduce;
//Default parameter function
function getInputValue(paraId){
    const inputValue = parseFloat(document.getElementById(paraId).value);
    return inputValue;
}

//Parallelogram
const parallelogram = document.getElementById('parallelogram');
parallelogram.addEventListener('click',function(){
    const base = getInputValue('para-height');
    const height = getInputValue('para-base');
    const paraResult = base * height;
    document.getElementById('areaPara').innerHTML = paraResult;
});

//Rhombus
const rhombus = document.getElementById('rhombus');
rhombus.addEventListener('click', function(){
    const base = getInputValue('rhombusBase');
    const height = getInputValue('rhombusHeight');
    const paraResult = .5 * base * height;
    document.getElementById('areaRhombus').innerText = paraResult;
})

//Pentagon
const pentagon = document.getElementById('pentagon');
pentagon.addEventListener('click', function(){
    const base = getInputValue('pentagonBase');
    const height = getInputValue('pentagonHeight');
    const areaResult = .5 * base * height;
    document.getElementById('areaPentagon').innerText = areaResult;
});


//Ellipse
const ellipse = document.getElementById('ellipse');
ellipse.addEventListener('click', function(){
    const base = getInputValue('ellipseBase');
    const height = getInputValue('ellipseHeight');
    const areaResult = 3.1416 * base * height;
    document.getElementById('ellipseArea').innerText = areaResult;
});