import suppliersData from "../data/suppliers";

const initialState = {
  list: suppliersData,
  openedName: null
};

const suppliers = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CURRENT_SUPPLIER":
      return { ...state, openedName: action.payload.name };

    case "UPDATE_SUPPLIER_BANKING":
      return {
        ...state,
        list: {
          ...state.list,
          [action.payload.name]: {
            ...state.list[action.payload.name],
            iban: action.payload.iban,
            bic: action.payload.bic
          }
        }
      };
    default:
      return state;
  }
};

export default suppliers;
