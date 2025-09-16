import axios from "axios";
import React, { useEffect, useState } from "react";

export type Student = {
  id?: number;
  student_name?: string;
  email?: string;
  address?: string;
  phone?: string;
  status?: boolean;
  created_at?: string;
};

export const GetAllStudent = () => {
  const [products, setProducts] = useState<Student[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/students");
        console.log("Reponse: ", response.data);
        setProducts(response.data);
      } catch (error) {
        console.log("Error: ", error);
      }
    };

    fetchData();
  }, []);

  console.log(1);

  return <></>;
};
