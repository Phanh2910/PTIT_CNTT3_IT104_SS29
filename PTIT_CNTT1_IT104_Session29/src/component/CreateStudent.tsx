import React, { useEffect, useState } from "react";
import type { Student } from "./GetAllStudent";
import axios from "axios";

export const CreateStudent = () => {
  const [student, setStudent] = useState<Student>({
    id: 5,
    student_name: "Hoàng Văn E",
    email: "vane@example.com",
    address: "Cần Thơ",
    phone: "0945678901",
    status: false,
    created_at: "2025-09-05",
  });

  const fetchData = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/students",
        student
      );
      console.log("Reponse: ", response.data);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  return <div>CreateStudent</div>;
};
