import { products } from "./products.js";

const productList = document.getElementById('productList');

products.forEach((value) => {
    const product = document.createElement('div');
    product.setAttribute('class', 'product');

    const image = document.createElement('img');
    const productId = document.createElement('p');
    const productName = document.createElement('p');
    const price = document.createElement('p');
    const remainingAmount = document.createElement('p');

});
