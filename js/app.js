const productos = [
    {id: 0, nombreProducto: "Carolina Herrera 212 Men", descripcion: "Perfume para hombre", precio: 37.94, capacidad: [50, 100, 200], img: "./assets/Carolina Herrera 212 Men.webp", alt:"Carolina Herrera 212 Men"},
    {id: 1, nombreProducto: "Dolce & Gabbana Light Blue", descripcion: "Perfume para mujer", precio: 31.94, capacidad: [25, 50, 100, 200], img: "./assets/Dolce & Gabbana Light Blue.webp", alt: "Dolce & Gabbana Light Blue"},
    {id: 2, nombreProducto: "Hugo Boss In Motion Original", descripcion: "Perfume para hombre", precio: 29.93, capacidad: [100], img: "./assets/Hugo Boss In Motion Original.webp", alt:"Hugo Boss In Motion Original"},
    {id: 3, nombreProducto: "Lancôme La Vie Est Belle", descripcion: "Perfume para mujer", precio: 39.90, capacidad: [30, 50, 75, 100], img: "./assets/Lancôme La Vie Est Belle.webp", alt:"Lancôme La Vie Est Belle"},
    {id: 4, nombreProducto: "Yves Saint Laurent Y Eau de Parfum", descripcion: "Perfume para hombre", precio: 48.90, capacidad: [60, 100], img: "./assets/Yves Saint Laurent Y Eau de Parfum.webp", alt:"Yves Saint Laurent Y Eau de Parfum"},
    {id: 5, nombreProducto: "CALVIN KLEIN Ck One", descripcion: "Perfume para hombre y mujer", precio: 24.95, capacidad: [100, 200, 300], img: "./assets/CALVIN KLEIN Ck One.webp", alt:"CALVIN KLEIN Ck One"},
    {id: 6, nombreProducto: "CACHAREL Amor Amor Eau de Toilette", descripcion: "Perfume para mujer", precio: 19.93, capacidad: [30, 50, 100], img: "./assets/CACHAREL Amor Amor Eau de Toilette.webp", alt:"CACHAREL Amor Amor Eau de Toilette"},
    {id: 7, nombreProducto: "CAROLINA HERRERA Good Girl", descripcion: "Perfume para mujer", precio: 51.95, capacidad: [30, 50, 80, 100, 150], img: "./assets/CAROLINA HERRERA Good Girl.webp", alt:"CAROLINA HERRERA Good Girl"},
    {id: 8, nombreProducto: "Davidoff Cool Water", descripcion: "Perfume para hombre", precio: 18.94, capacidad: [75, 125], img: "./assets/Davidoff Cool Water.webp", alt:"Davidoff Cool Water"},
    {id: 9, nombreProducto: "Lancôme Idôle Eau de Parfum", descripcion: "Perfume para mujer", precio: 35.67, capacidad: [20, 50, 100], img: "./assets/Lancôme Idôle Eau de Parfum.webp", alt:"Lancôme Idôle Eau de Parfum"},
    {id: 10, nombreProducto: "ARMANI Acqua di Gio", descripcion: "Perfume para hombre", precio: 42.94, capacidad: [50, 100, 200], img: "./assets/ARMANI Acqua di Gio.webp", alt:"ARMANI Acqua di Gio"},
]

const perfumesFemeninos = productos.filter ((elemento) => elemento.descripcion.includes ("mujer"));
const perfumesMasculinos = productos.filter ((elemento) => elemento.descripcion.includes ("hombre"));

function renderProducto (productos){
    let perfumes = document.getElementById ('perfumes');
    let content = '';
    productos.forEach (elemento => {
        content +=`
        <div>
        <img src="${elemento.img}" alt= "${elemento.alt}">
        <h3>${elemento.nombreProducto} </h3>
        <p>${elemento.descripcion} </p>
        <p>Desde ${elemento.precio} € </p>
        <p>Tamaños disponibles: ${elemento.capacidad} ml</p> 
        <button class="btnCarrito"> Agregar al carrito </button>
        </div>
        `;
    });
        perfumes.innerHTML = content;
}

let botonFiltroTodos = document.getElementById ("filtroTodos");
    botonFiltroTodos.onclick = () => {
        renderProducto (productos);
    }

let botonFiltroMujer = document.getElementById ("filtroMujer");
    botonFiltroMujer.onclick = () => {
        renderProducto (perfumesFemeninos);
    }

let botonFiltroHombre = document.getElementById ("filtroHombre");
    botonFiltroHombre.onclick = () => {
        renderProducto (perfumesMasculinos);
    }

renderProducto (productos);

let formSaludo = document.getElementById ("formSaludo");
let nombreUsuario = document.getElementById ("nombreUsuario");
let parrafoSaludo = document.getElementById ("parrafoSaludo");

window.addEventListener("DOMContentLoaded", function() {
    let nombreGuardado = localStorage.getItem("nombreUsuario");
    if (nombreGuardado) {
        saludar(nombreGuardado); 
    }
});

formSaludo.addEventListener ("submit", function (event) {
    event.preventDefault();
    localStorage.setItem ("nombreUsuario", nombreUsuario.value);
    saludar (nombreUsuario.value);
});

function saludar (nombreUsuario){
    let content =`
        <p>Hola, ${nombreUsuario}. Ya puedes comenzar tu compra.</p>
        <button id="clearStorage">Limpiar</button>
        `;
    parrafoSaludo.innerHTML = content;
    let botonLimpiar = document.getElementById ("clearStorage");
    botonLimpiar.onclick = () => {
        localStorage.clear ("nombreUsuario");
        parrafoSaludo.innerHTML = '';
    }
}





