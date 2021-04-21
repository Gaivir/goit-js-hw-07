const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];


const allElements = ingredients.map(ingredient => {
    const newElement = document.createElement("li");
    newElement.textContent = ingredient;
    return newElement;
})


const ingredientsEl = document.querySelector("#ingredients")
   ingredientsEl.append(...allElements);