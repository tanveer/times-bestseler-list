import React from "react";
import Fiction from "./FictionDropdown";
import Nonfiction from "./NonfictionDropdown";
import Childrens from "./Childrens";
import MonthlyList from "./MonthlyListDropdown";

export default function Navbar() {
  return (
    <div>
      <ul className="nav nav-tabs mb-5">
        <Fiction />
        <Nonfiction />
        <Childrens />
        <MonthlyList />
      </ul>
    </div>
  );
}
