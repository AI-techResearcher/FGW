import React, { useState } from "react";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";

const PaymentForm = ({ chatType }) => {
  const [isProcessing, setIsProcessing] = useState(false);

  const stripe = useStripe();
  const elements = useElements();
  const handleSubmit = async (event) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }
    setIsProcessing(true);
    const { error, ...rest } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: `${window.location.href}`,
      },
    });

    if (error.type === "card_error" || error.type === "validation_error") {
      console.log(error.message);
    } else {
      console.log("An unexpected error occured.", error.type, rest);
    }
    localStorage.setItem("subscription", chatType);
    setIsProcessing(false);
  };
  return (
    <div className="payment-form fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 bg-slate-200">
      <form onSubmit={handleSubmit} id="payment-form">
        <PaymentElement />
        <button
          disabled={isProcessing || !stripe || !elements}
          id="submit"
          className="mt-5 bg-blue-500 px-3 py-2 rounded-md"
        >
          <span id="button-text">
            {isProcessing ? "Processing ... " : "Pay now"}
          </span>
        </button>
      </form>
    </div>
  );
};

export default PaymentForm;
