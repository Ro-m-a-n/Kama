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
      <div className="navigation_button a" onClick={() => setPortionNumber(1)}>❮❮</div>
      <div className="navigation_button a" onClick={portionNumber>1 ? (() => setPortionNumber(portionNumber - 1)): undefined}>❮</div>
      {pages
        .filter((p) => p >= leftPortionBorder && p <= rightPortionBorder)
        .map((p) => {
          return (
            <span
              key={p}
              className={currentPage === p ? "selectedPage a" : "pageNumber a"}
              onClick={() => {
                onPageChanged(p);
              }}
            >
              {p}
            </span>
          );
        })}
       
        <div className="navigation_button a" onClick={portionQuantity>portionNumber ? (() => setPortionNumber(portionNumber + 1)):undefined}>
        ❯
        </div>
        <div className="navigation_button a" onClick={() => setPortionNumber(portionQuantity)}>❯❯</div>
      
    </div>
  );
};
export default Pagination;
