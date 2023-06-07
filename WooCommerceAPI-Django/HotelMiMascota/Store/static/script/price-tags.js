const price = document.querySelectorAll("#price");

for (let index = 0; index < price.length; index++) {
  price[index].innerText = price[index].innerText
    .replaceAll("&nbsp", "")
    .replaceAll("&euro", "€")
    .replaceAll("&ndash", "")
    .replaceAll(";", "")
    .replaceAll("  ", " ")
    .replace("Impuestos Incluidos", "");

  const arrayPrice = price[index].innerText.split(" ");
  if (arrayPrice.length > 1) {
    const newSpan = document.createElement("span");
    newSpan.classList.add(
      "inline-block",
      "bg-gray-200",
      "rounded-full",
      "px-3",
      "py-1",
      "text-sm",
      "font-semibold",
      "text-gray-700",
      "mr-2",
      "mb-2"
    );

    price[index].innerHTML = arrayPrice[0];
    newSpan.textContent = arrayPrice[1];
    price[index].parentElement.appendChild(newSpan);
  }
}
