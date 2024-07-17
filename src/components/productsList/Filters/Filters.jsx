import "../../../styles/components/productList/Filters/Filters.scss";

const Filters = ({ setCurrentFilter, currentFilter, filterMap }) => {
  const filterNames = Object.keys(filterMap);
  const handleSetCurrentFilter = (filterName) => {
    setCurrentFilter(filterName);
  };

  return (
    <div className="filters">
      <select
        className="filters__content"
        onChange={(e) => handleSetCurrentFilter(e.target.value)}
      >
        <option disabled selected hidden >
          Filter by
        </option>
        {filterNames.map((filterName) => (
          <option key={filterName} className={currentFilter && "active"}>
            {filterName}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filters;
