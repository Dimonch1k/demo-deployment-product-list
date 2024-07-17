import "../../../styles/components/productList/Sorting/Sorting.scss";

const Sorting = ({ setCurrentSort, currentSort, sortingMap }) => {
  const sortingNames = Object.keys(sortingMap);

  const handleSetCurrentSort = (sortingName) => {
    setCurrentSort(sortingName);
  };

  return (
    <div className="sorting">
      <select
        className="sorting__content"
        onChange={(e) => handleSetCurrentSort(e.target.value)}
      >
        <option disabled selected hidden>
          Sort by
        </option>
        {sortingNames.map((sortingName) => (
          <option key={sortingName} className={currentSort && "active"}>
            {sortingName}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Sorting;
