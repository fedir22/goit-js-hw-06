const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsRef = document.querySelector(`#ingredients`);

const nameIngredients = ingredients => {
  return ingredients.map(ingredient => {
    const itemRef = document.createElement("li");
    itemRef.textContent = ingredient;
    itemRef.classList.add(`item`);
  return itemRef;
  });
};

const elements = nameIngredients(ingredients);

ingredientsRef.append(...elements);

console.log(ingredientsRef);