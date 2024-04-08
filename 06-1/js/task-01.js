const categories = document.querySelector('#categories');
// console.log(categories);

const categorie = document.querySelectorAll('.item');
// console.log(categorie);

categorie.forEach(element => {
  const category = element.querySelector('h2').textContent;
  //   console.log(category);
  const subCategory = element.querySelector('ul').querySelectorAll('li').length;
  //   console.log(subCategory);

  //   const obj = {
  //     Category: category,
  //     Elements: subCategory,
  //   };

  //   console.log(obj);
  console.log(`Category: ${category}`);
  console.log(`Elements: ${subCategory}`);
});

// Exercitiul 1
console.log(`-Exercitiul 1-`);
console.log(`Number of categories: ${categorie.length}`);
