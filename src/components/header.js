import React from "react";

export default function Header() {
  return (
    <div>
      {" "}
      <div
        className="display-6"
        style={{ fontFamily: "Georgia", fontSize: "2.8rem" }}
      >
        The New York Times Best Sellers
      </div>
      <p
        className="text-body-secondary"
        style={{
          fontFamily: "Georgia",
          fontSize: "1.03rem",
        }}
      >
        Authoritatively ranked lists of books sold in the United States, sorted
        by format and genre.
      </p>
    </div>
  );
}
