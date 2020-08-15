var stripe = Stripe(
  "pk_test_51HFZcGF48xi6aQtzNv0STTcvFyHgvJg8pFS0u6CjT2u50Rwtp5OdetwaIsLJG0mSiStU0v94XhBL4haxGdhXZqPv00PUrlwRj5"
);

var checkoutButton = document.getElementById("checkout-button");
const checkbox = document.getElementById("checkbb");

let price = "price_1HFcbNF48xi6aQtzxEo6LLUf";

checkoutButton.addEventListener("click", async function (e) {
  e.preventDefault();
  if (checkbox.checked) {
    price = "price_1HFcapF48xi6aQtzR1iipaPR";
  }

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
    cancelUrl: "http://127.0.0.1:5500/single-product.html",
  });

  if (error) {
    alert("Brocked");
  }
});

const handlePotli = () => {
  var img = document.getElementById("img_p");
  const potli = document.querySelector("#potli");
  const gst = document.querySelector(".gst");
  const total = document.querySelector(".total");
  const country = document.querySelector(".con");

  if (img.style.display === "none") {
    potli.style.display = "flex";
    gst.innerText = "Rs. 6240";
    if (country.value.toLowerCase() !== "india") {
      total.innerText = "Rs. 59740";
    } else {
      total.innerText = "Rs. 58740";
    }
    img.style.display = "block";
  } else {
    potli.style.display = "none";
    gst.innerText = "Rs. 5100";
    if (country.value.toLowerCase() !== "india") {
      total.innerText = "Rs. 49100";
    } else {
      total.innerText = "Rs. 48100";
    }

    img.style.display = "none";
  }
};

const save = (obj) => {
  localStorage.setItem(obj.name, obj.value);
  if (obj.name === "country") {
    if (obj.value.toLowerCase() !== "india") {
      document.querySelector(".price").innerText = "Rs. 1500";
    } else {
      document.querySelector(".price").innerText = "Rs. 500";
    }
  }
};
