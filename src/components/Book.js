const Book = ({ book, index }) => {
  return (
    <div className="col">
      <div class="card h-100" style={{ border: "none" }}>
        <img
          src={book.book_image}
          classNAme="card-img-top"
          alt="book image"
          style={{
            height: 185,
            width: 115,
            margin: "auto",
            marginTop: 20,
            borderRadius: 0,
          }}
        />
        <div class="card-body">
          <p className="card-text mb-0 mt-0">
            <small
              className="text-body mt-0"
              style={{ fontSize: "0.65rem", fontWeight: "medium" }}
            >
              {book.weeks_on_list} weeks on the list
            </small>
          </p>
          <h3
            class="card-title"
            style={{ fontSize: "0.95rem", fontWeight: "bold" }}
          >
            {book.title}
          </h3>
          <p class="card-text" style={{ fontSize: "0.90rem" }}>
            {book.description}
          </p>
          <p class="card-text">
            <small class="text-body-secondary">Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Book;

//   return (
//     <div className="card mb-3" style={{ maxWidth: "475px" }}>
//       <div className="row g-0">
//         <div className="col-md-4">
//           <img
//             src={book.book_image}
//             className="img-fluid rounded-start"
//             alt="..."
//           />
//         </div>
//         <div className="col-md-8">
//           <div className="card-body">
//             <p className="card-text mb-0 mt-0">
//               {" "}
//               <small
//                 className="text-body mt-0"
//                 style={{ fontSize: "0.65rem", fontWeight: "medium" }}
//               >
//                 {book.weeks_on_list} weeks on the list
//               </small>
//             </p>
//             <h5 className="card-title mb-0">{book.title}</h5>
//             <small className="text-body-secondary">by {book.author}</small>

//             <hr className="mt-0 mb-0" />
//             <p className="card-text mt-2" style={{ fontSize: "0.90rem" }}>
//               {book.description}
//             </p>
//             <p className="card-text">
//               <small className="text-body-secondary">{book.updated_date}</small>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
