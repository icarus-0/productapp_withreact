import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Card from "../Components/Card";
import { getProducts } from "../Services/Homeservice";
function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts(setProducts);
  }, [setProducts]);
  return (
    <div>
      <Navbar />

      <div className="container">
        <div className="row">
          {products.map((product) => {
            return (
              <div className="col-3 m-2">
                <Card
                  title={product.title}
                  description={product.desc}
                  image={product.image}
                  price={product.price}
                  slug={product.slug}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
