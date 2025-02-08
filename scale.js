let button = document.querySelector("#scale-button");
button.addEventListener('click', scaleRecipe);

function scaleRecipe(){
    let originalArea = 264;
    const width = document.querySelector("#width-input");
    let typedWidth = width.value;
    const length = document.querySelector("#length-input");
    let typedLength = length.value;
    let newArea = length.value * width.value;
    let spans = document.querySelectorAll('span.amount');
    for(span of spans){
    let spanAmount = span.textContent;
    span.innerText = Math.round((newArea / originalArea) * spanAmount);
    }
}