import React from "react";
import { fiction } from "../util/fiction";
import Fiction from "./FictionDropdown";
import Nonfiction from "./NonfictionDropdown";
import Childrens from "./Childrens";
import MonthlyList from "./MonthlyListDropdown";

export default function Navbar() {
  return (
    <div>
      <ul className="nav nav-tabs">
        <Fiction />
        <Nonfiction />
        <Childrens />
        <MonthlyList />
      </ul>
    </div>
  );
}
