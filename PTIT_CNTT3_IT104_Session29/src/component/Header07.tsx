import { Button } from "antd";
import React from "react";

export const Header07 = () => {
  return (
    <div
      style={{
        background: "#435d7d",
        height: "50px",
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <h1 style={{ margin: "0" }}>Quản lý sinh viên</h1>
      <Button style={{ background: "green", color: "white" }}>
        Thêm mới sinh viên
      </Button>
    </div>
  );
};
