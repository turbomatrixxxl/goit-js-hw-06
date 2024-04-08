const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients');

for (let i = 0; i < ingredients.length; i++) {
  const element = ingredients[i];
  // console.log(element);
  const elementHtml = document.createElement('li');
  elementHtml.className = 'item ';
  elementHtml.textContent = element;

  // console.log(elementHtml);

  ingredientsList.prepend(elementHtml);
  console.log(ingredientsList);
}
