// function calculateTriangleArea(){
//     const baseField = document.getElementById('triangle-base');
//     const baseValueText = baseField.value;
//     const base = parseFloat(baseValueText);
//     console.log(base);


//     const heightField = document.getElementById('triangle-height');
//     const heightValueText = heightField.value;
//     const height = parseFloat(heightValueText);
//     console.log(height);

//     const area = 0.5 * base * height;
//     console.log(area);

//     const areaField = document.getElementById('triangle-area');
//     areaField.innerText = area;
// }

function calculateTriangleArea(){
    const base = getInputValue('triangle-base');

    const height = getInputValue('triangle-height');

    const area = 0.5 * base * height;

    setElementInnerText('triangle-area', area);
}


function calculateRectangleArea(){
    const width = getInputValue('rectangle-width');

    const length = getInputValue('rectangle-length');

    const area = width * length;

    setElementInnerText('rectangle-area', area);
}


function calculateParallelogramArea(){
    const base = getInputValue('parallelogram-base');
    const height = getInputValue('parallelogram-height');

    const area = base * height;

    setElementInnerText('parallelogram-area', area);
}

function calculateEllipseArea(){
    const majorRadius = getInputValue('ellipse-major-radius');
    const minorRadius = getInputValue('ellipse-minor-radius');

    const area = 3.14 * majorRadius * minorRadius;

    setElementInnerText('ellipse-area', area);
}


function getInputValue(fieldId){
    const inputField = document.getElementById(fieldId);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    return value;
}

function setElementInnerText(elementId, area){
    const element = document.getElementById(elementId)
    element.innerText = area;
}
