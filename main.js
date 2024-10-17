import { renderCategories } from './src/services/categories';
import { handleSearchProductByName } from './src/services/searchBar';
import { openModal } from './src/views/modal';
import { handleGetProductsToStore } from './src/views/store';
import './style.css';


//Categoria Activa y su set
export let categoriaActiva = null;
export const setCategoriaActiva = (categoriaIn) => {
  categoriaActiva = categoriaIn;
};


//Producto activo y su set
export let productoActivo = null;
export const setproductoActivo = (productoIn) => {
productoActivo = productoIn;
};

//Traer todos los productos y mostrarlos en la store
handleGetProductsToStore();
renderCategories();

//HEADER

const buttonAdd = document.getElementById("buttonAdd");
buttonAdd.addEventListener("click", () => {
  openModal();
});

//ButtonSearch

const buttonSearch = document.getElementById("buttonSearch")
buttonSearch.addEventListener("click", () => {
  handleSearchProductByName();
});