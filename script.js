import { products } from "./products.js";

const productList = document.getElementById('productList');

products.forEach((value) => {
    const product = document.createElement('div');
    product.setAttribute('class', 'product col-4 shadow p-3 card bg-dark text-white m-5 p-2');

    const image = document.createElement('img');
    const productId = document.createElement('p');
    const productName = document.createElement('p');
    const price = document.createElement('p');
    const remainingAmount = document.createElement('p');

    image.setAttribute('src', value.image);
    productId.textContent = `ID: ${value.productId}`;
    productName.textContent = `Name: ${value.productName}`;
    price.textContent = `Price: ${value.price} Baht`;
    remainingAmount.textContent = `Stock: ${value.remainingAmount}`;

    product.appendChild(image);
    product.appendChild(productId);
    product.appendChild(productName);
    product.appendChild(price);
    product.appendChild(remainingAmount);

    productList.appendChild(product);
});