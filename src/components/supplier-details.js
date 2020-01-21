import * as React from "react";
import { connect } from "react-redux";
import Modal from "react-modal";

import Textfield from "./library/textfield";
import { validateIban, validateBic } from "../common/validations";
import { updateSupplierBanking, resetSupplier } from "../actions/suppliers";
import { success } from "react-notification-system-redux";

const SupplierDetails = ({ supplier, name, dispatch }) => {

  const [iban, setIbanValue] = React.useState(supplier.iban || "");
  const [bic, setBicValue] = React.useState(supplier.bic || "");
  const [errors, setErrors] = React.useState({ iban: false, bic: false });

  const onSave = () => {
    const currentErrors = {
      iban: !validateIban(iban),
      bic: !validateBic(bic)
    };

    const hasError = Object.values(currentErrors).some(item => !!item);
    if (!hasError) {
      dispatch(updateSupplierBanking({ name, iban, bic }));
      dispatch(resetSupplier());
      dispatch(
        success({
          title: `Supplier successfully updated`,
          position: "tl"
        })
      );
    } else {
      setErrors(currentErrors);
    }
  };

  return (
    <Modal
      shouldCloseOnOverlayClick
      onRequestClose={() => dispatch(resetSupplier())}
      isOpen={true}
    >
      <div className="form-container">
        <h1>{supplier.name}</h1>
        <div>
          <Textfield
            label="IBAN"
            placeholder="FR1234567891234567891234567"
            value={iban}
            onChange={setIbanValue}
            errorMessage="Invalid IBAN"
            requiredMessage="IBAN is required"
            highlightDanger={errors.iban}
          />
          <Textfield
            label="BIC/SWIFT"
            placeholder="CMCIFRPP121"
            value={bic}
            onChange={setBicValue}
            errorMessage="Invalid BIC/SWIFT"
            requiredMessage="BIC is required"
            highlightDanger={errors.bic}
          />
        </div>
        <button
          className="spx-button spx-tag--theme-midnight-purple"
          onClick={onSave}
        >
          SAVE
        </button>
      </div>
    </Modal>
  );
};

export default connect()(SupplierDetails);
