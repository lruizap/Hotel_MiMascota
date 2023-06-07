const categoriesUL = document.querySelectorAll(".categorie_ul");
const tagsUL = document.querySelectorAll(".tags_ul");

// Forms

function CreateNewProduct(evento) {
  // evita que el formulario se envíe automáticamente
  evento.preventDefault();

  // obtén los valores de los campos del formulario
  const name = document.querySelector(".input_ProductName");
  const description = document.querySelector(".input_ProductDescription");
  const price = document.querySelector(".input_ProductPrice");

  // valida que los campos no estén vacíos
  if (name.value.trim() === "") {
    name.parentElement.querySelector(".validText").classList.remove("hidden");
    return false;
  } else {
    name.parentElement.querySelector(".validText").classList.add("hidden");
  }

  if (description.value.trim() === "") {
    description.parentElement
      .querySelector(".validText")
      .classList.remove("hidden");
    return false;
  } else {
    description.parentElement
      .querySelector(".validText")
      .classList.add("hidden");
  }

  if (price.value.trim() === "" || price.value === null) {
    price.parentElement.querySelector(".validText").classList.remove("hidden");
    return false;
  } else {
    description.parentElement
      .querySelector(".validText")
      .classList.add("hidden");
  }
  
  // crea un objeto con los datos del formulario
  const formData = {
    name: name.value,
    description: description.value,
    short_description: description.value,
    price: price.value.toString().replace(",", "."),
    regular_price: price.value.toString().replace(",", "."),
    categories: data(categoriesUL),
    tags: data(tagsUL),
  };

  // convierte el objeto en formato JSON
  const jsonData = JSON.stringify(formData);
  
  const miPadre = document.querySelector(".miPadre");
  miPadre.value = jsonData;

  // si todo está bien, muestra un mensaje de éxito
  CreateProduct();

  form2.submit();
  return true;
}

// obtén el formulario y agrega un evento de escucha para cuando se envíe
const form2 = document.getElementById("form_createProduct");
form2.addEventListener("submit", CreateNewProduct);

function productImages() {
  const productImages = document.querySelectorAll(".input_ProductNewImage");
  const arraySRCs = [];

  productImages.forEach((image) => {
    arraySRCs.push(decodeURI(encodeURI(image.src)));
  });

  return arraySRCs;
}

function data(UL) {
  const arrayInputsData = [];
  const arrayNamesData = [];
  const arrayData = [];

  UL.forEach((ul) => {
    ul.childNodes.forEach((element) => {
      if (element.nodeType === Node.ELEMENT_NODE) {
        if (element.classList.contains("dataForm")) {
          arrayInputsData.push(element);
        } else {
          arrayNamesData.push(element.innerHTML);
        }
      }
    });
  });

  for (let index = 0; index < arrayInputsData.length; index++) {
    const input = arrayInputsData[index];
    let idData = "";

    if (input.id.includes("categorie")) {
      idData = input.id.replace("categorie", "");
    } else if (input.id.includes("tag")) {
      idData = input.id.replace("tag", "");
    }

    if (input.checked) {
      let Data = {
        id: idData,
        name: arrayNamesData[index],
        slug: arrayNamesData[index].toString().toLowerCase(),
      };
      arrayData.push(Data);
    }
  }

  return arrayData;
}

function CreateProduct() {
  let timerInterval;
  Swal.fire({
    icon: "success",
    title: "Creando el Producto",
    html: "Gracias por su paciencia.",
    timer: 11000,
    timerProgressBar: true,
    allowOutsideClick: false,
    allowEscapeKey: false,
    allowEnterKey: false,
    didOpen: () => {
      Swal.showLoading();
      const b = Swal.getHtmlContainer().querySelector("b");
      timerInterval = setInterval(() => {
        b.textContent = Swal.getTimerLeft();
      }, 100);
    },
    willClose: () => {
      clearInterval(timerInterval);
    },
  });
}