"use strict";

const billingPeriod = document.querySelector(".billing-period");
const pageCount = document.querySelector(".pageviews-count");
const priceRange = document.querySelector("#price-range");
const switchToggle = document.querySelector("#toggle");
const priceAmount = document.querySelector(".price-amount");
const trialButton = document.querySelector(".trial-button");

const pageViewValue = ["10K", " 50K", "100K", "500K", "1M"];
const monthlyPrices = [8, 12, 16, 24, 36];
const yearlyPrices = monthlyPrices.map((value) => {
  return Math.abs(value * 12 * 0.25 - value * 12);
});

let activePrices = monthlyPrices;
let activeBillingPeriod = "/ month";
let isYearly = false;

function updateUI(index) {
  priceAmount.textContent = activePrices[index];
  billingPeriod.textContent = activeBillingPeriod;
  pageCount.textContent = pageViewValue[index];
}

priceRange.addEventListener("input", function (e) {
  const sliderValue = e.target.value;
  const progress = (sliderValue / this.max) * 100;
  this.style.background = `linear-gradient(to right, #A5F3EB ${progress}%, #EAEEFB ${progress}%)`;
  updateUI(sliderValue);
});

switchToggle.addEventListener("change", function () {
  isYearly = !isYearly;
  activePrices = isYearly ? yearlyPrices : monthlyPrices;
  activeBillingPeriod = isYearly ? "/ year" : "/ month";

  const index = priceRange.value;

  updateUI(index);
});
