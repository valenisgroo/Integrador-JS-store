// Render de la vista categorias

export const renderCategories = () => {

    //Tomamos elementos de la lista
    const ulList = document.getElementById("listFilter");

    //Creamos esos elementos dentro de la lista
    ulList.innerHTML = `
    <li id="Todo"> Todos los productos </li>
    <li id="Hamburguesas">Hamburguesas</li>
    <li id="Papas">Papas</li>
    <li id="Gaseosas">Gaseosas</li>
    <li id="mayorPrecio">MayorPrecio</li>
    <li id="menorPrecio">MenorPrecio</li>
    `;

    //Añadimos dinamicamnete el evento click
    const liElements = ulList.querySelectorAll("li");
    liElements.forEach((liElement) => {
        liElement.addEventListener("click", () =>{
            handleClick(liElement);
        });

    });


    //Verificamos y maneamos el estilo del elemnto activo
    const handleClick = (elemeto) => {
    liElements.forEach((el) => {
        if (el.classList.contains("liActive")){
            el.classList.remove("liActive");
        } else{
            if (elemeto === el){
                el.classList.add("liActive");
            }
        }
    });

    };
};