var stripe = Stripe(
  "pk_live_51HFZcGF48xi6aQtzPhgX6qRHq4XuNk26n11T8VvIsmSIzi4MyVFKgI1TtCHljrLf5yMeqR9ezFe4A78J40fwyxk800QpWRsrGx"
);

var checkoutButton = document.getElementById("checkout-button1");
const checkbox = document.getElementById("checkbb");
const country = document.querySelector(".con");

let price = "price_1HU3qtF48xi6aQtz4tvGod2P";

checkoutButton.addEventListener("click", async function (e) {
  e.preventDefault();

  if (country.value.toLowerCase() === "india" && checkbox.checked) {
    price = "price_1HU3r7F48xi6aQtzRgdsTuPW";
  } else if (country.value.toLowerCase() !== "india" && checkbox.checked) {
    price = "price_1HTmRJF48xi6aQtzxbYu7Kxe";
  } else if (country.value.toLowerCase() === "india" && !checkbox.checked) {
    price = "price_1HU3qtF48xi6aQtz4tvGod2P";
  } else if (country.value.toLowerCase() !== "india" && !checkbox.checked) {
    price = "price_1HTmRJF48xi6aQtzoWhsIEZI";
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
    cancelUrl: `https://${window.location.hostname}/single-product1.html`,
  });

  if (error) {
    alert("Brocked");
  }
});

const handlePotli2 = () => {
  var img = document.getElementById("img_p");
  const potli = document.querySelector("#potli");
  const gst = document.querySelector(".gst");
  const total = document.querySelector(".total");
  const country = document.querySelector(".con");

  if (img.style.display === "none") {
    potli.style.display = "flex";
    gst.innerText = "Rs. 4,740";
    if (country.value.toLowerCase() !== "india") {
      total.innerText = "Rs. 45,240.00";
    } else {
      total.innerText = "Rs. 44,240.00";
    }
    img.style.display = "block";
  } else {
    potli.style.display = "none";
    gst.innerText = "Rs. 3,540";
    if (country.value.toLowerCase() !== "india") {
      total.innerText = "Rs. 33,540.00";
    } else {
      total.innerText = "Rs. 34,540.00";
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
