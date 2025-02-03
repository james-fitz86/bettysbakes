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
document.addEventListener("DOMContentLoaded", function(){
    const breadRecipes = document.querySelectorAll(".bread-recipe");
    const breadContainer = document.getElementById("bread-container");

    
    const newElement = document.createElement("div");
    newElement.id = "recipeDetails";
    newElement.style.display = "none";
    newElement.innerHTML = `<p>Hidden element</p>`
    breadContainer.after(newElement);

    breadRecipes.forEach(recipe => {
        recipe.addEventListener("click", function(){
            newElement.style.display = "block";
            for ( let i = 0;i < breadRecipes.length; i++){
                breadRecipes[i].style.display = "none";
            };
            goBackButton.style.display = "block";
            });
        });
    
    
    const goBackButton = document.createElement("button");
    goBackButton.id = "go-back";
    goBackButton.style.display = "none";
    goBackButton.innerText = "Go Back";
    newElement.after(goBackButton);

    goBackButton.addEventListener("click",function(){
        for(let recipe of breadRecipes){
            recipe.style.display = "block";
        };
        newElement.style.display = "none";
        goBackButton.style.display = "none";
    });
    
    
});