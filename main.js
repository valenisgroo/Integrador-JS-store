import { setInLocalStorage, handleGetProductLocalStorage } from './src/persistence/localstorage';
import { renderCategories } from './src/services/categories';
import { handleGetProductsToStore } from './src/views/store';
import './style.css';

handleGetProductsToStore();
renderCategories();

// PRODUCTS
const buttonAdd = document.getElementById("buttonAdd");
buttonAdd.addEventListener("click", () => {
  openModal();
});

/*POPUP*/
const cancelButton = document.getElementById("cancelButton");
cancelButton.addEventListener("click", () => {
  handleCancelButton();
});

const handleCancelButton = () => {
  closeModal();
};

// Funciones para abrir y cerrar el modal
const openModal = () => {
  const modal = document.getElementById("modalPopUp");
  modal.style.display = "flex";
};

const closeModal = () => {
  const modal = document.getElementById("modalPopUp");
  modal.style.display = "none";
};

// Guardar o modificar productos
const acceptButton = document.getElementById("acceptButton");
acceptButton.addEventListener("click", () => {
  handleSaveOrModifyElements();
});

const handleSaveOrModifyElements = () => {
  const nombre = document.getElementById("nombre").value,
    imagen = document.getElementById("img").value,
    precio = document.getElementById("precio").value,
    categories = document.getElementById("categoria").value;

  // Validación de los campos
  if (!nombre || !imagen || !precio || !categories) {
    alert("Por favor completa todos los campos antes de guardar.");
    return;
  }

 
  let object = {
    id: new Date().toISOString(), 
    nombre,
    imagen,
    precio,
    categories,
  };

  setInLocalStorage(object); // Guardar en LocalStorage
  closeModal(); // Cerrar el modal
};
