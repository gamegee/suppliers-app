import * as React from "react";
import { connect } from "react-redux";
import SupplierItem from "./supplier-item";

const SupplierList = ({ suppliers }) => {
  const sortByRank = (a, b) => {
    return suppliers[a].rank - suppliers[b].rank;
  };

  return (
    <ul className="list-container">
      {Object.keys(suppliers)
        .sort(sortByRank)
        .map(name => (
          <SupplierItem
            supplierName={name}
            supplier={suppliers[name]}
            key={name}
          />
        ))}
    </ul>
  );
};

export default connect(({ suppliers }) => ({ suppliers: suppliers.list }))(
  SupplierList
);
