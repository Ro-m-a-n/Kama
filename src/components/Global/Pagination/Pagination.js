const Pagination = ({
  usersQuantity,
  pageSize,
  currentPage,
  onPageChanged,
}) => {
  let pageQuantity = Math.ceil(usersQuantity / pageSize);
  let pages = [];
  for (let i = 1; i <= pageQuantity; i++) {
    pages.push(i);
  }

  return (
    <div>
      {pages.map((p) => {
        return (
          <span
            key={p}
            className={currentPage === p ? "selectedPage" : undefined}
            onClick={() => {
              onPageChanged(p);
            }}
          >
            {p}
          </span>
        );
      })}
    </div>
  );
};
export default Pagination;
