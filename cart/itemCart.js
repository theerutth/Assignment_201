import { products } from "../products.js";
import { showAllProduct, filterProduct } from "../script.js";

//ของในรถเข็น
export class ProductInCart {
    constructor(product) {
        this._product = product;
        this._qty = 1;
    }

    addMore() {
        this._qty++;
    }

    get qty() {
        return this._qty;
    }
    get product() {
        return this._product;
    }
}

//ของในรถเข็นทั้งหมด
export const cart = [];

export function addButton() {
    const productList = document.querySelectorAll('.product');
    productList.forEach((val) => {
        const button = document.createElement('button') //<button></button>
        button.textContent = `Add to cart`
        button.addEventListener('click', addProduct);
        val.appendChild(button);

    })
}

function addProduct(event) {
    let findProduct = products.find((items) => {
        return items.productId == event.target.parentElement.querySelectorAll('.productId')[0].textContent;
    });
    console.log(findProduct);
    findProduct.decreaseAmount();
    alert(`${findProduct.productId} Added to your Cart`);
    if (cart.some((prod) => {
            return findProduct.productId == prod.product.productId
        })) {
        cart.find((prod) => {
            return findProduct.productId == prod.product.productId
        }).addMore();
    } else {
        cart.push(new ProductInCart(findProduct));
    }
    console.log(cart);
    const searchBar = document.getElementById('search-bar');
    const keyword = searchBar.value.toLowerCase();

    showAllProduct(filterProduct(keyword));

    document.querySelectorAll('.badge')[0].textContent = cart.length;
}