import { setInLocalStorage, handleGetProductLocalStorage } from './src/persistence/localstorage';
import { renderCategories } from './src/services/categories';
import { handleGetProductsToStore } from './src/views/store';
import './style.css';

export let categoriaActiva = null;
export const setCategoriaActiva = (categoriaIn) => {
  categoriaActiva = categoriaIn;
};



export let productoActivo = null;
export const setproductoActivo = (productoIn) => {
productoActivo = productoIn;
};


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
export const openModal = () => {
  const modal = document.getElementById("modalPopUp");
  modal.style.display = "flex";
  
  if (productoActivo) {
    const nombre = document.getElementById("nombre"),
      imagen = document.getElementById("img"),
      precio = document.getElementById("precio"),
      categories = document.getElementById("categoria");
      nombre.value = productoActivo.nombre;
      imagen.value = productoActivo.imagen;
      precio.value = productoActivo.precio;
      categories.value = productoActivo.categories;
  }
};


export const closeModal = () => {
  const modal = document.getElementById("modalPopUp");
  modal.style.display = "none";
  setproductoActivo(null);
  resetModal();
};

const resetModal = () => {
  const nombre = document.getElementById("nombre"),
    imagen = document.getElementById("img"),
    precio = document.getElementById("precio"),
    categories = document.getElementById("categoria");
    nombre.value = "";
    imagen.value = "";
    precio.value = 0;
    categories.value = "Seleccione una categoria";
}



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

  let object = null;

  if (productoActivo){

    object = {
      ...productoActivo,
      nombre,
      imagen,
      precio,
      categories,
    }

  } else{
      object = {
      id: new Date().toISOString(), 
      nombre,
      imagen,
      precio,
      categories,
    };
  }
 
  

  setInLocalStorage(object); // Guardar en LocalStorage
  handleGetProductsToStore();
  closeModal(); // Cerrar el modal
};
