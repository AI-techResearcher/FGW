import React from "react";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";

const PaymentForm = () => {
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
    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: `${window.location.origin}/completion`,
      },
    });

    if (error.type === "card_error" || error.type === "validation_error") {
      console.log(error.message);
    } else {
      console.log("An unexpected error occured.");
    }
    console.log("done")
  };
  return (
    <form onSubmit={handleSubmit} className="card">
      <PaymentElement
      className="card"
      />
      <button disabled={!stripe}>Submit</button>
    </form>
  );
};

export default PaymentForm;
