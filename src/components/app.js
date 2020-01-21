import React from "react";
import { connect } from "react-redux";

import SupplierList from "./suppliers-list";
import SupplierDetails from "./supplier-details";
import Notifications from "react-notification-system-redux";

const App = ({ suppliers, openedSupplierName, notifications }) => {
  return (
    <div>
      <SupplierList />
      {!!openedSupplierName && (
        <SupplierDetails
          supplier={suppliers[openedSupplierName]}
          name={openedSupplierName}
        />
      )}
      <Notifications notifications={notifications} />
    </div>
  );
};

export default connect(({ suppliers, notifications }) => ({
  openedSupplierName: suppliers.openedName,
  suppliers: suppliers.list,
  notifications
}))(App);
