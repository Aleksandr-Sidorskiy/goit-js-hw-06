// =========завдання №1=========

const navEl = document.querySelectorAll('.item');
console.log('Number of categories:', navEl.length);

const navElAnimal = document.querySelector('.animals');
const navElAnimalLength = navElAnimal.children.length;
console.log(`Category: Animals
Elements:${navElAnimalLength}`);

const navElProducts = document.querySelector('.products');
const navElProductsLength = navElProducts.children.length;
console.log(`Category: Products
Elements:${navElProductsLength}`);

const navElTechnologies = document.querySelector('.technologies');
const navElTechnologiesLength = navElTechnologies.children.length;
console.log(`Category: Technologies
Elements:${navElTechnologiesLength}`);







