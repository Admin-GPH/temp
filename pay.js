var stripe = Stripe(
  "pk_test_51HFZcGF48xi6aQtzNv0STTcvFyHgvJg8pFS0u6CjT2u50Rwtp5OdetwaIsLJG0mSiStU0v94XhBL4haxGdhXZqPv00PUrlwRj5"
);

var checkoutButton = document.getElementById("checkout-button");

const price = "price_1HFcbNF48xi6aQtzxEo6LLUf";

checkoutButton.addEventListener("click", async function (e) {
  e.preventDefault();

  const { error } = await stripe.redirectToCheckout({
    mode: "payment",
    lineItems: [
      {
        price,
        quantity: 1,
      },
    ],
    billingAddressCollection: "required",
    successUrl:
      "http://127.0.0.1:5500/success.html?session_id={CHECKOUT_SESSION_ID}",
    cancelUrl: "http://127.0.0.1:5500/canceled.html",
  });

  if (error) {
    alert("Brocked");
  }
});
