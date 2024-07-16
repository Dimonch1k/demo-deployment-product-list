import { Rows3, Grid3X3 } from "lucide-react";
import classNames from "classnames";

import "../../../styles/components/productList/List-Grid/List-Grid.scss";

const ListGrid = ({ gridRows, setGridRows }) => {
  const handleSetGridRows = (trueOrFalse) => {
    setGridRows(trueOrFalse);
  };

  return (
    <div className="list-grid">
      <div
        className={classNames("list-grid__item", "list-grid__rows", {
          selected: gridRows,
        })}
      >
        <Rows3 onClick={() => handleSetGridRows(true)} />
      </div>
      <hr />
      <div
        className={classNames("list-grid__item", "list-grid__rows", {
          selected: !gridRows,
        })}
      >
        <Grid3X3 onClick={() => handleSetGridRows(false)} />
      </div>
    </div>
  );
};

export default ListGrid;
