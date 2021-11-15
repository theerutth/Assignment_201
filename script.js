import { products } from "./products.js";
import { addButton } from "./cart/itemCart.js";

const productList = document.getElementById('productList');
const searchBar = document.getElementById('search-bar');

searchBar.addEventListener('input', () => {
    const keyword = searchBar.value.toLowerCase();
    const filterProducts = filterProduct(keyword);
    showAllProduct(filterProducts);
});

export function filterProduct(keyword) {
    return products.filter(product => {
        return product.productId.toLowerCase().includes(keyword) ||
            product.productName.toLowerCase().includes(keyword)
    });
}


showAllProduct(products);

export function showAllProduct(productToShow) {
    const productList = document.getElementById('productList');
    while (productList.firstChild) {
        productList.removeChild(productList.lastChild);
    }

    productToShow.forEach((value) => {
        const product = document.createElement('div');
        product.setAttribute('class', 'product col-4 shadow p-3 card bg-dark text-white m-5 p-2');

        const image = document.createElement('img');
        const productId = document.createElement('p');
        const idString = document.createElement('span');
        const idId = document.createElement('span');
        const productName = document.createElement('p');
        const price = document.createElement('p');
        const remainingAmount = document.createElement('p');
        const addButton = document.createElement('button');

        image.setAttribute('src', value.image);
        idId.classList.add('productId');
        idString.textContent = `ID: `;
        idId.textContent = `${value.productId}`;
        productName.textContent = `Name: ${value.productName}`;
        price.textContent = `Price: ${value.price} Baht`;
        remainingAmount.textContent = `Stock: ${value.remainingAmount}`;

        productId.appendChild(idString);
        productId.appendChild(idId);

        product.appendChild(image);
        product.appendChild(productId);
        product.appendChild(productName);
        product.appendChild(price);
        product.appendChild(remainingAmount);

        productList.appendChild(product);
    });
    addButton();
}

function myFunction() {

    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');

    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

function hidesearch() {
    const searchbar = document.getElementById('search');
    if (searchbar.style.display === "flex") {
        searchbar.style.display = "none";
    } else {
        searchbar.style.display = "flex";
    }
}

const hide = document.getElementById('hidebutton');
hide.addEventListener("click", () => {
    hidesearch()
});

//เปลี่ยนเป็นdarkmode
const themeSwitch = document.querySelector('input');
themeSwitch.addEventListener('change', () => {

    document.body.classList.toggle('dark-theme');
    setCookie("darkmode");
});

//ก้อปโค้ดมา
function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}
function eraseCookie(name) {
    document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}