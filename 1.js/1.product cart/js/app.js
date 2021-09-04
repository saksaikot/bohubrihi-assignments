import Product from "./Product.js";
const PRODUCTS = [
  {
    id: 1,
    name: "Nutella",
    description: `Nutella ® is an inspiring tale of love and passion`,
    price: 499,
  },
  {
    id: 2,
    name: "Oil",
    description:
      "Fresh Fortified Soyabean Oil follows 3 steps of refining process",
    price: 712,
  },
  {
    id: 3,
    name: "Pineapple",
    description: "Cherry Pineapple",
    price: 19,
  },
  {
    id: 4,
    name: "Malta",
    description:
      "Malta, a variety of orange, is a popular citrus fruit cultivated in hot climate.",
    price: 239,
  },
  {
    id: 5,
    name: "Yogurt",
    description: "Brac Dairy & Food Project, Aarong Dairy Sour Yogurt",
    price: 90,
  },
];
const product = new Product(PRODUCTS);
