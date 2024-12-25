import React from "react";
import "./Payment.scss";

const PaymentDone = () => {
  return (
    <div className="payment-container">
      <div className="payment-message">
        <h1>Payment Successful!</h1>
        <p>Your transaction has been completed.</p>
      </div>
      <div className="checkmark">
        <div className="checkmark-circle"></div>
        <div className="checkmark-stem"></div>
        <div className="checkmark-kick"></div>
      </div>
    </div>
  );
};

export default PaymentDone;
