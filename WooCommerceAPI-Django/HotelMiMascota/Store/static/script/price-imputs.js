const hiddenPrice = document.querySelector(".hiddenPrice");
const inputPrice = document.querySelector(".input_ProductPriceVariable");

hiddenPrice.textContent = hiddenPrice.textContent
  .replaceAll("&nbsp", "")
  .replaceAll("&euro", "")
  .replaceAll("&ndash", "")
  .replaceAll(";", "")
  .replaceAll("  ", " ")
  .replace("Impuestos Incluidos", "")
  .replaceAll(",", ".")
  .trim();

const arrayPrices = hiddenPrice.textContent.split(" ");

let input = document.createElement("input");
input.classList.add(
  "input_ProductPrice",
  "border",
  "border-gray-400",
  "p-2",
  "pl-5",
  "mb-5",
  "rounded-lg",
  "w-full",
  "focus:outline-none",
  "focus:ring",
  "focus:border-blue-500"
);
input.setAttribute("placeholder", arrayPrices[0]);
input.setAttribute("type", "number");
input.setAttribute("min", 0);
input.setAttribute("max", 100);
input.setAttribute("step", 0.5);
input.value = arrayPrices[0];

inputPrice.appendChild(input);

// Description

const description = document.querySelector(".input_ProductDescription");

description.value = description.value.trim();
