// Imágenes de los productos

function ProductNewImages() {
  document.getElementById("NewImages").innerHTML = "";
  document.getElementById("imgDer").innerHTML = "";
  const files = document.getElementById("imgDer").files;

  for (let index = 0; index < files.length; index++) {
    let file = files[index];

    let div = document.createElement("div");
    div.classList.add("max-w-sm", "rounded-lg", "drop-shadow-xl");
    div.setAttribute("id", "div" + index);
    document.getElementById("NewImages").appendChild(div);

    const reader = new FileReader();

    reader.addEventListener("load", (event) => {
      let image = document.createElement("img");
      image.setAttribute("src", event.target.result);
      image.classList.add("input_ProductNewImage", "w-full", "rounded-lg");
      document.getElementById("div" + index).appendChild(image);
    });

    reader.readAsDataURL(file);
  }
}
