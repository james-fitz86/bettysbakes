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

    const goBackButton = document.createElement("button");
    goBackButton.id = "go-back";
    goBackButton.style.display = "none";
    goBackButton.innerText = "Go Back";
    breadContainer.after(goBackButton);

    breadRecipes.forEach((recipe, index) => {
        recipe.addEventListener("click", function(){
            const newElement = document.createElement("div"); 
            newElement.id = "recipeDetails";
            newElement.style.display = "flex";

            newElement.innerHTML = generateInnerHTML(index);
            breadContainer.after(newElement);

            for ( let i = 0;i < breadRecipes.length; i++){
                breadRecipes[i].style.display = "none";
            };
            goBackButton.style.display = "block";

            goBackButton.addEventListener("click",function(){ 
                for(let recipe of breadRecipes){
                    recipe.style.display = "block";
                };
                newElement.style.display = "none";
                goBackButton.style.display = "none";
            });
        });
    });

    function generateInnerHTML(index){

        const recipes = [
            {title: "Wheat Bread Recipe"},
            {title: "Brown Bread Recipe"},
            {title: "Rye Bread Recipe"},
        ];

        const recipe = recipes[index];

        return `
            <div>
                <p>${recipe.title}</p>
            </div>
        `;

    }
    
    
});