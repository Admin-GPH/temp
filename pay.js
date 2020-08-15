var stripe = Stripe(process.env.STRIPE_API);

var checkoutButton = document.getElementById("checkout-button");
const checkbox = document.getElementById("checkbb");
const country = document.querySelector(".con");

let price = "price_1HGMzKF48xi6aQtzbLsZsqFT";

checkoutButton.addEventListener("click", async function (e) {
  e.preventDefault();

  if (country.value.toLowerCase() === "india" && checkbox.checked) {
    price = "price_1HGN0TF48xi6aQtz2NphCLzJ";
  } else if (country.value.toLowerCase() !== "india" && checkbox.checked) {
    price = "price_1HGMzdF48xi6aQtz4b6dldBR";
  } else if (country.value.toLowerCase() === "india" && !checkbox.checked) {
    price = "price_1HGN0AF48xi6aQtz1iWdu5c3";
  } else if (country.value.toLowerCase() !== "india" && !checkbox.checked) {
    price = "price_1HGMzKF48xi6aQtzbLsZsqFT";
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
