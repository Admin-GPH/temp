var stripe = Stripe(
  "pk_live_51HFZcGF48xi6aQtzPhgX6qRHq4XuNk26n11T8VvIsmSIzi4MyVFKgI1TtCHljrLf5yMeqR9ezFe4A78J40fwyxk800QpWRsrGx"
);

var checkoutButton = document.getElementById("checkout-button");
const checkbox = document.getElementById("checkbb");
const country = document.querySelector(".con");

let price = "price_1HGOryF48xi6aQtzPrMrCYGV";

checkoutButton.addEventListener("click", async function (e) {
  e.preventDefault();

  if (country.value.toLowerCase() === "india" && checkbox.checked) {
    price = "price_1HGOryF48xi6aQtzOp1nvimU";
  } else if (country.value.toLowerCase() !== "india" && checkbox.checked) {
    price = "price_1HGOryF48xi6aQtzgQqPA89S";
  } else if (country.value.toLowerCase() === "india" && !checkbox.checked) {
    price = "price_1HGOryF48xi6aQtzG3GGny7Y";
  } else if (country.value.toLowerCase() !== "india" && !checkbox.checked) {
    price = "price_1HGOryF48xi6aQtzPrMrCYGV";
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
    successUrl: `https://${window.location.hostname}/success.html?session_id={CHECKOUT_SESSION_ID}`,
    cancelUrl: `https://${window.location.hostname}/single-product.html`,
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
