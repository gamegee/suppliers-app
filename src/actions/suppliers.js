export const openSupplier = supplierName => {
  return {
    type: "SET_CURRENT_SUPPLIER",
    payload: { name: supplierName }
  };
};

export const resetSupplier = () => {
    return {
      type: "SET_CURRENT_SUPPLIER",
      payload: { name: null }
    };
  };

export const updateSupplierBanking = ({ name, iban, bic }) => {
  return {
    type: "UPDATE_SUPPLIER_BANKING",
    payload: { name, iban, bic }
  };
};
