// Задачи на работу с объектами
// 	1.	Напишите функцию getTotalPrice(products), которая принимает объект,
//  где ключи — названия продуктов, а значения — их цены.
// Функция должна возвращать сумму всех цен.
// function getTotalPrice(products) {
//   let totalPrices = 0;
//   for (const value of Object.values(products)) {
//     totalPrices += value;
//   }
//   return totalPrices;
// }
// console.log(getTotalPrice({ apple: 1, banana: 2, orange: 3 })); // 6
// console.log(getTotalPrice({ coffee: 10, tea: 7 })); // 17

// Создайте функцию filterByPrice(products, priceLimit), которая принимает
//  объект продуктов с ценами и порог цены. Она возвращает новый объект,
//  включающий только те продукты, которые стоят меньше заданного порога.

// function filterByPrice(products, priceLimit) {
//   let newObject = {};
//   for (const key in products) {
//     if (products[key] < priceLimit) {
//       newObject[key] = products[key];
//     }
//   }
//   return newObject;
// }

// console.log(filterByPrice({ apple: 1, banana: 2, orange: 3 }, 2)); // { apple: 1 }
// console.log(filterByPrice({ coffee: 10, tea: 7 }, 8)); // { tea: 7 }

// 3.	Напишите функцию countItems(products), которая принимает объект, где ключи — это продукты,
//  а значения — их количество, и возвращает общее количество всех продуктов.

// function countItems(products) {
//   let totalProductObject = 0;
//   for (const key in products) {
//     totalProductObject += products[key];
//   }
//   return totalProductObject;
// }
// console.log(countItems({ apples: 2, bananas: 4, oranges: 3 })); // 9
// console.log(countItems({ shirts: 5, pants: 3, hats: 2 })); // 10
