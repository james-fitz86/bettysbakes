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
            {title: "Wheat Bread Recipe",
                ingredients: [
                    "360 grams whole wheat flour",
                    "7 grams active dry yeast",
                    "295 milliliters warm water",
                    "30 milliliters honey or sugar",
                    "5 grams salt",
                    "30 milliliters olive oil or melted butter"
                ],
                instructions: [
                    "In a bowl, dissolve yeast in warm water with honey. Let it sit for 5-10 minutes until foamy.",
                    "Add salt, oil, and half of the flour. Mix until combined.",
                    "Gradually add the remaining flour and knead for about 8-10 minutes until smooth.",
                    "Place dough in a greased bowl, cover, and let it rise for about 1 hour or until doubled.",
                    "Punch down the dough, shape it into a loaf, and place it in a greased loaf pan.",
                    "Cover and let it rise again for about 30-45 minutes.",
                    "Preheat oven to 190°C and bake for 30-35 minutes until golden brown.",
                    "Let the bread cool before slicing. Enjoy!"
                ]
            },
            {title: "Brown Bread Recipe",
                ingredients: [
                    "400 grams whole wheat flour",
                    "100 grams all-purpose flour",
                    "7 grams active dry yeast",
                    "350 milliliters warm water",
                    "20 grams molasses or brown sugar",
                    "6 grams salt",
                    "30 milliliters vegetable oil or melted butter"
                ],
                instructions: [
                    "Dissolve yeast in warm water with molasses. Let it sit for 5-10 minutes until foamy.",
                    "Add salt, oil, and half of the flour. Mix until combined.",
                    "Gradually add the remaining flour and knead for about 8-10 minutes until smooth.",
                    "Place dough in a greased bowl, cover, and let it rise for about 1 hour or until doubled.",
                    "Punch down the dough, shape it into a loaf, and place it in a greased loaf pan.",
                    "Cover and let it rise again for about 30-45 minutes.",
                    "Preheat oven to 190°C and bake for 30-35 minutes until golden brown.",
                    "Let the bread cool before slicing. Enjoy!"
                ]
            },
            {title: "Rye Bread Recipe",
                ingredients: [
                    "250 grams rye flour",
                    "250 grams bread flour",
                    "7 grams active dry yeast",
                    "325 milliliters warm water",
                    "10 grams caraway seeds (optional)",
                    "8 grams salt",
                    "20 milliliters honey or sugar",
                    "20 milliliters vegetable oil or melted butter"
                ],
                instructions: [
                    "Dissolve yeast in warm water with honey. Let it sit for 5-10 minutes until foamy.",
                    "Add salt, oil, caraway seeds, and half of the flour. Mix until combined.",
                    "Gradually add the remaining flour and knead for about 8-10 minutes until smooth.",
                    "Place dough in a greased bowl, cover, and let it rise for about 1 hour or until doubled.",
                    "Punch down the dough, shape it into a loaf, and place it in a greased loaf pan.",
                    "Cover and let it rise again for about 30-45 minutes.",
                    "Preheat oven to 190°C and bake for 30-35 minutes until golden brown.",
                    "Let the bread cool before slicing. Enjoy!"
                ]
            },
        ];

        const recipe = recipes[index];

        return `
            <div>
                <h2>${recipe.title}</h2>
                <h3>Ingredients:</h3>
                <ul>
                ${recipe.ingredients.map(function(item){
                    return `<li>${item}</li>`;
                }).join('')}
                </ul>
                <h3>Instructions:</h3>
                <ol>
                ${recipe.instructions.map(function(step){
                    return `<li>${step}</li>`;
                }).join('')}
                </ol>
            </div>
        `;

    }
    
    
});