// localstorage.js

// Función para obtener productos del LocalStorage
export const handleGetProductLocalStorage = () => {
    const products = JSON.parse(localStorage.getItem('products'));
    if (products) {
      return products;
    } else {
      return [];
    }
  };
  
  // Función para agregar o actualizar productos en LocalStorage
  export const setInLocalStorage = (productIn) => {
    let productsInLocal = handleGetProductLocalStorage(); // Obtenemos los productos guardados
    const existingIndex = productsInLocal.findIndex((productLocal) => productLocal.id === productIn.id);
  
    if (existingIndex !== -1) {
      productsInLocal[existingIndex] = productIn; // Si el producto ya existe, lo actualizamos
    } else {
      productsInLocal.push(productIn); // Si no existe, lo agregamos
    }
  
    localStorage.setItem('products', JSON.stringify(productsInLocal)); // Guardamos los productos actualizados en LocalStorage
  };
  