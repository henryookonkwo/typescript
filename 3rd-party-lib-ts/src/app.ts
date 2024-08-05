import "reflect-metadata";
import { plainToInstance } from "class-transformer";
import { Product } from "./product.model";
// import _ from "lodash";

// declare var GLOBAL: any;

// console.log(_.shuffle([1, 2, 3, 4, 5]));
// console.log(GLOBAL);

const products = [
  { title: "A Carpet", price: 29.99 },
  { title: "A Book", price: 10.99 },
];

// const p1 = new Product('A Book', 12.99);

// const loadedProducts = products.map(prod => {
//   return new Product(prod.title, prod.price);
// });

const loadedProducts = plainToInstance(Product, products);

for (const prod of loadedProducts) {
  console.log(prod.getInformation());
}
