import "./Pagination.css";
import { useState } from "react";
const Pagination = ({
  itemsQuantity,
  pageSize,
  currentPage,
  onPageChanged,
  portionSize,
}) => {
  let pageQuantity = Math.ceil(itemsQuantity / pageSize);
  let pages = [];
  for (let i = 1; i <= pageQuantity; i++) {
    pages.push(i);
  }
  let portionQuantity = Math.ceil(pageQuantity / portionSize);
  let [portionNumber, setPortionNumber] = useState(1);
  let leftPortionBorder = (portionNumber - 1) * portionSize + 1;
  let rightPortionBorder = portionNumber * portionSize;

  return (
    <div className="pagination">
      <button className="button" onClick={() => setPortionNumber(1)}>Return to start</button>
      <button className="button" onClick={portionNumber>1 && (() => setPortionNumber(portionNumber - 1))}>Prev</button>
      {pages
        .filter((p) => p >= leftPortionBorder && p <= rightPortionBorder)
        .map((p) => {
          return (
            <span
              key={p}
              className={currentPage === p ? "selectedPage" : "pageNumber"}
              onClick={() => {
                onPageChanged(p);
              }}
            >
              {p}
            </span>
          );
        })}
       
        <button className="button" onClick={portionQuantity>portionNumber && (() => setPortionNumber(portionNumber + 1))}>
          Next
        </button>
        <button className="button" onClick={() => setPortionNumber(portionQuantity)}>Go to end</button>
      
    </div>
  );
};
export default Pagination;
