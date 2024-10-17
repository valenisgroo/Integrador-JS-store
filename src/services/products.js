import { productoActivo } from '../../main';
import { handleGetProductLocalStorage } from '../persistence/localstorage';
import { handleRenderList } from '../views/store';
import { setInLocalStorage } from '../persistence/localstorage';
import { handleGetProductsToStore } from '../views/store';
import '../../style.css';
import { closeModal } from '../views/modal';
import Swal from 'sweetalert2';

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

  Swal.fire({
    title: "¡Correcto!",
    text: "Producto agregado!",
    icon: "success"
  });
 
  

  setInLocalStorage(object); // Guardar en LocalStorage
  handleGetProductsToStore();
  closeModal(); // Cerrar el modal
};

export const handleDeleteProduct = () => {

  Swal.fire({
    title: "¿Desea eliminar elemento?",
    text: "De forma permanente!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "¡Si, eliminar!"
  }).then((result) => {
    if (result.isConfirmed) {
      const products = handleGetProductLocalStorage();
      const result = products.filter((el) => el.id !== productoActivo.id);
      
      // setear el nuevo array
      localStorage.setItem("products", JSON.stringify(result));
      
      const newProducts = handleGetProductLocalStorage();
      handleRenderList(newProducts);
      closeModal();
    } else{
      closeModal();
    }
  });

};