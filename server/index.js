const express = require("express");
const app = express();
// Replace if using a different env file or config
const env = require("dotenv/config");
const PORT = process.env.PORT || 3002;
const cors = require("cors");

const stripe = require("stripe")(process.env.SECRET_KEY, {
  apiVersion: "2022-08-01",
});

app.use(cors());
app.use(express.json())

app.get("/config", (req, res) => {
    res.send({
      publishableKey: process.env.PUBLIC_KEY,
    });
  });

app.post("/create-payment-intent", async (req, res) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      currency: req.body.curr,
      amount: Math.round(req.body.amount * 10),
      description: "FGW Chatbot subscription",
      automatic_payment_methods: { enabled: true },
    });

    // Send publishable key and PaymentIntent details to client
    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (e) {
    return res.status(400).send({
      error: {
        message: e.message,
      },
    });
  }
});

app.listen(PORT, () =>
  console.log(`Node server listening at http://localhost:${PORT}`)
);