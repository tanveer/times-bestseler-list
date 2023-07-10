import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const path = location.pathname;

  return (
    <div className="mt-5">
      {path !== "/" && (
        <Link
          to="/"
          style={{
            fontSize: "0.790rem",
            fontWeight: 900,
            textDecoration: "none",
            color: "black",
          }}
        >
          BEST SELLERS
        </Link>
      )}

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
