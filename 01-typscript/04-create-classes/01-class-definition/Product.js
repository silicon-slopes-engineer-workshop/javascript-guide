/**
 * Create classes without using Constructor
 */
var Product = /** @class */ (function () {
    function Product() {
    }
    return Product;
}());
var mangojuice = new Product();
mangojuice.productName = "Mango Juice";
mangojuice.company = "Fruity Island";
console.log("The " + mangojuice.productName + " is from " + mangojuice.company + "!");
