const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const stripe = require("stripe");

dotenv.config();

const app = express();
const stripeInstance = stripe(process.env.STRIPE_API_KEY);

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the ANASDEV Store API!");
});

// app.post("/payment", async (req, res) => {
//   try {
//     // Step 1: Create a Product
//     const product = await stripeInstance.products.create({
//       name: "Product for the ANASDEV Store",
//     });

//     // Step 2: Create a Price for the product
//     const price = await stripeInstance.prices.create({
//       product: product.id,
//       unit_amount: 100 * 100, // Price in cents (100 USD in this case)
//       currency: "usd",
//     });

//     // Step 3: Create a Checkout Session
//     const session = await stripeInstance.checkout.sessions.create({
//       payment_method_types: ["card"],
//       line_items: [
//         {
//           price: price.id,
//           quantity: 1,
//         },
//       ],
//       mode: "payment",
//       success_url: "http://localhost:5173/payment",
//       cancel_url: "http://localhost:3000/cancel",
//       customer_email: "demo@anasdevstore.com",
//     });

//     // Step 4: Send back the session URL
//     res.json({ url: session.url });
//   } catch (error) {
//     console.error("Error creating payment:", error);
//     res.status(500).send("Payment creation failed");
//   }
// });

app.post("/payment", async (req, res) => {
  const { items, email } = req.body;

  try {
    // Step 1: Create a Product for Each Item
    const lineItems = await Promise.all(
      items.map(async (item) => {
        // Create a product for the item
        const product = await stripeInstance.products.create({
          name: item.title, // Use the product title from the request
        });

        // Create a price for the product
        const price = await stripeInstance.prices.create({
          product: product.id,
          unit_amount: item.price, // Price in cents
          currency: "usd",
        });

        // Return the line item configuration for the session
        return {
          price: price.id,
          quantity: item.quantity,
        };
      })
    );

    // Step 2: Create a Checkout Session
    const session = await stripeInstance.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: "http://localhost:5173/payment",
      cancel_url: "http://localhost:5173/",
      customer_email: "user@anasdevstore.com",
    });

    // Step 3: Send Back the Session URL
    res.json({ url: session.url });
  } catch (error) {
    console.error("Error creating payment:", error);
    res.status(500).send("Payment creation failed");
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000...");
});
