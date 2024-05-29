function calculateTriangleArea(){
    const baseField = document.getElementById('triangle-base');
    const baseValueText = baseField.value;
    const base = parseFloat(baseValueText);
    console.log(base);


    const heightField = document.getElementById('triangle-height');
    const heightValueText = heightField.value;
    const height = parseFloat(heightValueText);
    console.log(height);

    const area = 0.5 * base * height;
    console.log(area);

    const areaField = document.getElementById('triangle-area');
    areaField.innerText = area;

    addToCalculationEntry('Triangle', area);
}



function calculateRectangleArea(){
    const width = getInputValue('rectangle-width');

    const length = getInputValue('rectangle-length');

    const area = width * length;

    setElementInnerText('rectangle-area', area);

    addToCalculationEntry('Rectangle', area);
}


function calculateParallelogramArea(){
    const base = getInputValue('parallelogram-base');
    const height = getInputValue('parallelogram-height');

    const area = base * height;

    setElementInnerText('parallelogram-area', area);
    addToCalculationEntry('Parallelogram', area)
}

function calculateEllipseArea(){
    const majorRadius = getInputValue('ellipse-major-radius');
    const minorRadius = getInputValue('ellipse-minor-radius');

    const area = 3.14 * majorRadius * minorRadius;

    setElementInnerText('ellipse-area', area);
    addToCalculationEntry('Ellipse', area)
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

function addToCalculationEntry(areaType, area){
    console.log(areaType+ ' '  + area)
    const calculationEntry = document.getElementById('calculation-entry');

    const count = calculationEntry.childElementCount;

    const p = document.createElement('p');
    p.classList.add('my-4');
    p.innerHTML = `${count + 1}. ${areaType} ${area} cm<sup>2</sup> <button class="btn btn-sm btn-success">Convert</button>`;

    calculationEntry.appendChild(p);
}
