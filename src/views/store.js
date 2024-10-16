//STORE

import { handleGetProductLocalStorage } from '../persistence/localstorage';

//Funcion para obtener los productos y renderizarlos
export const handleGetProductsToStore = () => {
  const products = handleGetProductLocalStorage();
  console.log(products); // Verificar los productos obtenidos
  handleRenderList(products);
}

export const handleRenderList = (productosIn) => {
  const burgers = productosIn.filter((el) => el.categories === 'Hamburguesas' );
  const papas = productosIn.filter((el) => el.categories === 'Papas');
  const gaseosas = productosIn.filter((el) => el.categories === 'Gaseosas');

  const renderProductGroup = (productos, title) => {
    console.log(productos);
    if (productos.length > 0) {
      const productosHTML = productos.map((producto, index) => {
        return `<div>
                    <div>
                    <img src="${producto.imagen}">
                    <div>
                    <h2>${producto.nombre}</h2>
                    </div>
                    <div>
                    <p><b>Precio: </b> $ ${producto.precio}</p>
                    <p><b>Categoria: </b> $ ${producto.categories}</p>
                    </div>
                    </div>
                </div>`;
      });
      return `
             <section>
                <h3>${title}</h3>
                <div>
                ${productosHTML.join('')}
                </div>
            </section>
            `;
    } else {
      return '';
    }
  };

  const appContainer = document.getElementById('storeContainer')
  appContainer.innerHTML = `
        ${renderProductGroup(burgers, 'Hamburguesas')}
        ${renderProductGroup(papas, 'Papas')}
        ${renderProductGroup(gaseosas, 'Gaseosas')}
        `
};

