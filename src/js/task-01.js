// =========завдання №1=========

const categoriesEl = document.querySelectorAll('.item');
console.log('Number of categories:', categoriesEl.length);

const amountEl = document.querySelectorAll(".item > ul");
amountEl.forEach(category => {
  console.log(`Category:${category.previousElementSibling.textContent}`);
 console.log(`Elements:${category.children.length}`)
})