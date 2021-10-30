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

    image.setAttribute('src', value.image);
    productId.textContent = `id:${value.productId}`;
    productName.textContent = `name:${value.productName}`;
    price.textContent = `price:${value.price}`;
    remainingAmount.textContent = `stock:${value.remainingAmount}`;

    product.appendChild(image);
    product.appendChild(productId);
    product.appendChild(productName);
    product.appendChild(price);
    product.appendChild(remainingAmount);

    productList.appendChild(product);
});