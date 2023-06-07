function LoadProducts() {
  let timerInterval;
  Swal.fire({
    title: "Cargando <b></b> Productos",
    html: "Gracias por su paciencia.",
    timer: 8500,
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

function LoadProductData() {
  let timerInterval;
  Swal.fire({
    title: "Cargando <b></b> Datos",
    html: "Gracias por su paciencia.",
    timer: 8500,
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

function DeleteProduct() {
  let timerInterval;
  Swal.fire({
    title: "Eliminando el producto",
    html: "Gracias por su paciencia.",
    timer: 11500,
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

function UpdateProduct() {
  let timerInterval;
  Swal.fire({
    icon: "success",
    title: "Actualizando el Producto",
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
