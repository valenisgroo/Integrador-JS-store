import { closeModal } from '../../main';
import { setInLocalStorage } from './src/persistence/localstorage';
import { handleGetProductsToStore } from './src/views/store';
import './style.css';

// PRODUCTS

//Guardar
const acceptButton = document.getElementById("acceptButton");
acceptButton.addEventListener("click", () => {
  handleSaveOrModifyElements();
});

//FuncionGuardar
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
