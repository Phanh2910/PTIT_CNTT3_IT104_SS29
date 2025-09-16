import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ListUser } from "./component/ListUser";
import { GetAllProduct } from "./component/GetAllProduct";
import { GetAllStudent } from "./component/GetAllStudent";
import { Header07 } from "./component/Header07";
import Table07 from "./component/Table07";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <ListUser></ListUser>
    <GetAllProduct></GetAllProduct>
    <GetAllStudent></GetAllStudent> */}
{/*     <Header07></Header07>
    <Table07></Table07> */}
  </StrictMode>
);
