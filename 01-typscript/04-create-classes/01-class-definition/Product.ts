/**
 * Create classes without using Constructor
 */

class Product {

    productName: string;
    company: string;

}

let mangojuice = new Product();

mangojuice.productName = "Mango Juice";
mangojuice.company = "Fruity Island";

console.log(`The ${mangojuice.productName} is from ${mangojuice.company}!`);