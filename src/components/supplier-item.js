import * as React from "react";
import { uniq } from "ramda";
import { connect } from "react-redux";
import * as Ezmoney from "ezmoney";

import Tag from "./library/tag";
import { openSupplier } from "../actions/suppliers";

const SupplierItem = ({
  dispatch,
  supplier,
  supplierName,
  locale,
  currency
}) => {
  const onOpenSupplier = () => dispatch(openSupplier(supplierName));

  /**
   * Format raw amount value to clean value with symbol
   */
  const formatAmount = amount => {
    const value = Ezmoney.fromNumber(parseFloat(amount), currency, 2);
    return Ezmoney.format(value, locale, { currencyDisplay: "symbol" });
  };

  return (
    <li onClick={onOpenSupplier} className="list-item" key={supplier.id}>
      <img
        className="list-item__img"
        src={supplier.logo_url}
        alt={supplier.name}
      />
      <div>
        <h2>{supplier.name}</h2>
        {supplier.categories &&
          uniq(supplier.categories).map(category => (
            <Tag key={category} name={category} />
          ))}
      </div>
      <div className="list-item__rank">
        <div>{formatAmount(supplier.average_transaction_amount)}</div>
        <div className="list-item__rank__highlight">{`#${supplier.rank}`}</div>
      </div>
    </li>
  );
};

export default connect(({ config }) => config)(SupplierItem);
