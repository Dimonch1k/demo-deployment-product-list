import "../../../styles/components/productList/Sorting/Sorting.scss";

const Sorting = ({ setCurrentSort, currentSort, sortingMap }) => {
  const sortingNames = Object.keys(sortingMap);

  const handleSetCurrentSort = (sortingName) => {
    setCurrentSort(sortingName);
  };

  return (
    <div className="sorting">
      <select className="sorting__content">
        <option selected hidden>
          Sort by
        </option>
        {sortingNames.map((sortingName) => (
          <option
            key={sortingName}
            className={currentSort && "active"}
            onClick={() => handleSetCurrentSort(sortingName)}
          >
            {sortingName}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Sorting;
