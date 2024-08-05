import "reflect-metadata";
import { plainToInstance } from "class-transformer";
import { Product } from "./product.model";
import { validate } from "class-validator";
// import _ from "lodash";

// declare var GLOBAL: any;

// console.log(_.shuffle([1, 2, 3, 4, 5]));
// console.log(GLOBAL);

const products = [
  { title: "A Carpet", price: 29.99 },
  { title: "A Book", price: 10.99 },
];

const newProd = new Product("", -5.99);
validate(newProd).then((errors) => {
  if (errors.length > 0) {
    console.log("VALIDATION ERRORS!");
    console.log(errors);
  } else {
    console.log(newProd.getInformation());
  }
});

// const p1 = new Product('A Book', 12.99);

// const loadedProducts = products.map(prod => {
//   return new Product(prod.title, prod.price);
// });

const loadedProducts = plainToInstance(Product, products);

for (const prod of loadedProducts) {
  console.log(prod.getInformation());
}
