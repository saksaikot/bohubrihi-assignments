const productContainer = document.querySelector("#product-container");
const cartContainer = document.querySelector("#cart-container");
class Product {
  constructor(products) {
    this.cart = {};
    this.products = products;
    this.renderProducts();
    this.cartTotal = 0;
  }
  renderProducts() {
    this.products.forEach((product) => {
      productContainer.appendChild(this.productNode(product));
    });
  }
  productNode(product) {
    const div = document.createElement("div");
    div.innerHTML = this.productHtml(product);
    div.querySelector("a").addEventListener("click", (e) => {
      e.preventDefault();
      this.addToCart(product);
    });
    return div;
  }
  addToCart(product) {
    if (!this.cart[product.id]) {
      this.cartTotal += product.price;
      this.cart[product.id] = product;
      this.renderProductCart(product);
    }
  }
  renderProductCart(product) {
    cartContainer.appendChild(this.cartNode(product));
    this.renderTotalCart();
  }
  cartNode(product) {
    const div = document.createElement("div");
    div.innerHTML = this.cartHtml(product);
    div
      .querySelector("button")
      .addEventListener("click", (e) => this.removeFromCart(e, product));
    return div;
  }
  renderTotalCart() {
    document.querySelector("#cart-total").innerHTML = `
    <h3 class="flex-grow-1 ms-2 ">Total</h3>
    <p class="mx-2">${this.cartTotal} BDT</p>
    <p style="width:5.4rem"></p>`;
  }
  removeFromCart(e, product) {
    this.cartTotal -= product.price;
    e.target.parentNode.remove();
    delete this.cart[product.id];
    this.renderTotalCart();
    if (Object.keys(this.cart).length === 0) {
      document.querySelector("#cart-total").innerHTML = "";
    }
  }
  cartHtml({ name, price }) {
    return `          <div class="card d-flex flex-row w-100 justify-content-center align-items-center">
    <img style="width: 4rem;" src="https://dummyimage.com/200x150/000/fff.jpg&text=${name}"
      alt="Card image cap" />
    <p class="flex-grow-1 ms-2 ">${name}</p>
    <p class="mx-2">${price} BDT</p>
    <button class="btn btn-danger me-2"> remove</button>
  </div>`;
  }
  productHtml({ name, description, price }) {
    return `<div class="card" style="width: 10rem;">
  <img class="card-img-top" src="https://dummyimage.com/200x150/000/fff.jpg&text=${name}"
    alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">${name}</h5>
  
    <p class="card-text" style="height:6rem">${description}</p>
    <p class="card-text">Price: ${price} BDT</p>
    <a href="#" class="btn btn-primary">Add to cart</a>
  
  </div>
  
  </div>`;
  }
}

export default Product;
