import axios from "axios";
import React, { useEffect, useState } from "react";

interface User {
  id?: number;
  name?: string;
  email?: string;
}

export const ListUser = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [searchValue, setSearchValue] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  // Gọi API lấy danh sách user
  useEffect(() => {
    axios
      .get(`http://localhost:3000/user?name_like=${searchValue}`)
      .then((response) => {
        //Hiển thị hiệu ứng loading
        setIsLoading(true);
        setUsers(response.data);
      })
      .catch((error) => console.log("Error: ", error))
      .finally(() => setIsLoading(false));
  }, [searchValue]);

  const handleDelete = (id: number) => {
    axios
      .delete(`http://localhost:3000/user/${id}`)
      .then((response) => console.log("Response: ", response.data))
      .catch((error) => console.log("Error: ", error))
      .finally(() => console.log("Hoàn thành"));
  };

  return (
    <div>
      <h1>Danh sach nguoi dung</h1>
      <input
        type="text"
        name=""
        id=""
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <table border={1} className="">
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Chức năng</th>
        </tr>
        {users.map((u) => {
          return (
            <>
              <tr>
                <td>{u.id}</td>
                <td>{u.name}</td>
                <td>{u.email}</td>
                <td>
                  <button>sửa</button>
                  <button onClick={() => handleDelete(Number(u.id))}>
                    xoá
                  </button>
                </td>
              </tr>
            </>
          );
        })}
      </table>
    </div>
  );
};
