const hamburgerIcon = document.querySelector("#hamburger-icon");
const nav = document.querySelector("nav");
const main = document.querySelector("main");


hamburgerIcon.addEventListener("click", () => {
    nav.classList.toggle("nav-open");
    main.classList.toggle("nav-open-main");
    hamburgerIcon.classList.toggle("nav-open-icon");
});
function myFunction(x) {
    x.classList.toggle("change");
};
document.querySelectorAll(".positive-number").forEach((input, index) =>{
    input.addEventListener("input", (event) =>{
        const errorMessgae = document.querySelectorAll(".error-message")[index];
        if (event.target.value <=0){
            errorMessgae.style.display = "inline-block";
            event.target.style.borderColor = "red";
        } else{
            errorMessgae.style.display = "none";
            event.target.style.borderColor = "";
        }
    });
});

let button = document.querySelector("#scale-button");
button.addEventListener('click', scaleRecipe);

document.addEventListener("DOMContentLoaded",storeOriginalAmounts);

    function storeOriginalAmounts(){
        let spans = document.querySelectorAll('span.amount');
        let originalValues = [];

        spans.forEach((span)=>{
            originalValues.push(parseFloat(span.textContent))
        });

        localStorage.setItem("originalAmounts", JSON.stringify(originalValues));
    };


function scaleRecipe(){
    const originalLength = document.querySelector("#original-length");
    const originalWidth = document.querySelector("#original-width");
    let originalArea = originalLength.innerText * originalWidth.innerText;
    const width = document.querySelector("#width-input");
    let typedWidth = width.value;
    const length = document.querySelector("#length-input");
    let typedLength = length.value;
    let newArea = typedLength * typedWidth;
    let spans = document.querySelectorAll('span.amount');
    let originalValues = JSON.parse(localStorage.getItem("originalAmounts"));
    
    const noArea = document.querySelector("#no-area");
    if(newArea <=0){
        noArea.style.display = "block";
    } else{
        noArea.style.display = "none";
        spans.forEach((span, index)=>{
            let originalAmount = originalValues[index];
            span.innerText = Math.round((newArea / originalArea) * originalAmount);
            });
    }
};