const PRODUCTS = [
  {
    name: "Nutella",
    description: `Nutella ® is an inspiring tale of love and passion`,
    price: 499,
  },
  {
    name: "Oil",
    description:
      "Fresh Fortified Soyabean Oil follows 3 steps of refining process",
    price: 712,
  },
  {
    name: "Pineapple",
    description: "Cherry Pineapple",
    price: 19,
  },
  {
    name: "Malta",
    description:
      "Malta, a variety of orange, is a popular citrus fruit cultivated in hot climate.",
    price: 239,
  },
  {
    name: "Yogurt",
    description: "Brac Dairy & Food Project, Aarong Dairy Sour Yogurt",
    price: 90,
  },
];

const productContainer = document.querySelector("#product-container");
class Product {
  constructor() {
    this.cart = {};
    //document.querySelector(".product").appendChild(this.productNode());
    console.log("ok");
    this.products = PRODUCTS;
    this.renderProducts();
  }

  _insertAfter(newNode, existingNode) {
    existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
  }
  renderProducts() {
    console.log(this.products);
    this.products.forEach((product) => {
      productContainer.appendChild(this.productNode(product));
    });
  }
  productNode(product) {
    const div = document.createElement("div");
    div.innerHTML = this.productHtml(product);
    div
      .querySelector("a")
      .addEventListener("click", () => console.log("clicked"));
    return div;
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
