import express from "express";
import nunjucks from "nunjucks";

const app = express();

nunjucks.configure("views", {
  autoescape: true,
  express: app,
});

app.set("view engine", "njk");

app.get("/", (request, response) => {
  response.render("homepage");
});

app.get("/product", (request, response) => {
  const product = {
    name: "My Awesome Product",
    price: 2000,
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    image: "https://my-ecommerce/product.png",
  };
  response.render("product", { product });
});
