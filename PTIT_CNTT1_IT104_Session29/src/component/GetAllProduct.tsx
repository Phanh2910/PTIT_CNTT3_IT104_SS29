import axios from "axios";
import React, { useEffect, useState } from "react";

type ProductType = {
  id?: number;
  product_name?: string;
  image?: string;
  price?: number;
  quantity?: number;
  created_at?: string;
};

export const GetAllProduct = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const reponse = await axios.get("http://localhost:3000/products");
        setProducts(reponse.data);
      } catch (error) {
        console.log("Error: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <table border={1}>
      <thead>
        <tr>
          <td>Id</td>
          <td>Product Name</td>
          <td>Image</td>
          <td>Price</td>
          <td>Quantity</td>
          <td>Created At</td>
        </tr>
      </thead>
      <tbody>
        {products.map((e) => (
          <tr>
            <td>{e.id}</td>
            <td>{e.product_name}</td>
            <td>{e.image}</td>
            <td>{e.price}</td>
            <td>{e.quantity}</td>
            <td>{e.created_at}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
