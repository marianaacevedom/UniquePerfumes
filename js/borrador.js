
function solicitarNombre (){
    let nombreUsuario = prompt ("Te damos a la bienvenida a Unique Perfumes, ¿Cuál es tu nombre?");
    while ((nombreUsuario === "")  || (nombreUsuario === undefined) || (nombreUsuario === null)) {
    nombreUsuario = prompt ("Error. Por favor, ingrese un nombre");
    }
    alert ("Hola, " + nombreUsuario);
    }
solicitarNombre()


function solicitarTipoPerfume (){
    let tipoPerfume = parseInt (prompt ("¿En qué tipo de perfume estás interesado/a?\n"+"Escribe 1: si te interesan Perfumes de mujer.\n"+"Escribe 2: si te interesan Perfumes de hombre."));
if (tipoPerfume === 1) {
    const enJson = JSON.stringify (perfumesFemeninos);
    localStorage.setItem ('perfumesFemeninos', enJson)
} else if (tipoPerfume === 2){
    console.log (perfumesMasculinos);
}
}
solicitarTipoPerfume() 


function consultarEnvio (){
    const zonaEnvio = parseInt (prompt ("Indica alguna de las siguientes opciones de envío a domicilio:\n"+"Escribe 1: Madrid Centro\n"+"Escribe 2: Comunidad de Madrid\n"+"Escribe 3: Otras Comunidades Autónomas"));
    let costoEnvio = "";
    switch (zonaEnvio) {
        case 1:
            costoEnvio = alert ("El envío dentro de Madrid Centro es gratis");
            const precioEnvioGratis = productos.map ((elemento) => {
                return {
                    nombre: elemento.nombreProducto,
                    precio: elemento.precio
                }
            })
            console.log (precioEnvioGratis)
            break;
        case 2:
            costoEnvio = alert ("El costo del envío dentro de la Comunidad de Madrid es de 5€");
            const precioEnvio5 = productos.map ((elemento) => {
                return {
                    nombre: elemento.nombreProducto,
                    precio: elemento.precio + 5
                }
            })
            console.log (precioEnvio5)
            break;
        case 3:
            costoEnvio = alert ("El costo de envío a otras Comunidades Autónomas es de 10€");
            const precioEnvio10 = productos.map ((elemento) => {
                return {
                    nombre: elemento.nombreProducto,
                    precio: elemento.precio + 10
                }
            })
            console.log (precioEnvio10)
            break;
        default:
            costoEnvio = alert ("No realizamos envíos fuera de España");
            break;
    }
}
consultarEnvio ()


// 3ra preentrega


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


// entrega final

async function obtenerProductos() {
    try {
        const response = await fetch ('../json/productos.json');

        if (!response.ok) {
            throw new Error (`Error al obtener los productos. Error: ${response.status}`);
        }

        const productos = await response.json ();
        console.log (productos);

        renderizarProductos (productos.productos);

        configurarFiltros(productos.productos);

    }catch (error){
        console.error (`Hubo un error: ${error.message}`);
    }
}

let carrito = [];

function renderizarProductos (productos){
    let contenedorPerfumes = document.getElementById ('perfumes');

    contenedorPerfumes.innerHTML = '';
    
    productos.forEach (elemento => {
        const divProducto = document.createElement ('div');
        divProducto.innerHTML = `
        <img src="${elemento.img}" alt= "${elemento.alt}">
        <h3>${elemento.nombreProducto} </h3>
        <p>${elemento.descripcion} </p>
        <p>Desde ${elemento.precio} € </p>
        <p>Tamaño disponible: ${elemento.capacidad} ml</p> 
        <button type="button" class="btn btn-outline-success" onclick="agregarAlCarrito('${elemento.nombreProducto}', ${elemento.precio})">Agregar al carrito</button>
        `;
        contenedorPerfumes.appendChild(divProducto);
    });
}
    // filtros

    function configurarFiltros (productos) {
        const perfumesFemeninos = productos.filter ((elemento) => elemento.descripcion.includes ("mujer"));
        const perfumesMasculinos = productos.filter ((elemento) => elemento.descripcion.includes ("hombre"));
    // Filtro todos
    let botonFiltroTodos = document.getElementById("filtroTodos");
    botonFiltroTodos.onclick = () => {
        renderizarProductos(productos);
    };

    // Filtro mujer
    let botonFiltroMujer = document.getElementById("filtroMujer");
    botonFiltroMujer.onclick = () => {
        renderizarProductos(perfumesFemeninos);
    };

    // Filtro hombre
    let botonFiltroHombre = document.getElementById("filtroHombre");
    botonFiltroHombre.onclick = () => {
        renderizarProductos(perfumesMasculinos);
    };
}

function agregarAlCarrito(nombreProducto, precio) {
    const productoEnCarrito = carrito.find(elemento => elemento.nombreProducto === nombreProducto);
    Swal.fire({
        icon: "success",
        title: "Producto agregado al carrito",
        showConfirmButton: false,
        timer: 1000
    });
    if (productoEnCarrito) {
        productoEnCarrito.cantidad++;
    } else {
        carrito.push({ nombreProducto, precio, cantidad: 1 });
    }

    guardarCarritoLocalStorage();
    actualizarCarrito();
}

function guardarCarritoLocalStorage() {
    localStorage.setItem ('carrito', JSON.stringify (carrito));
}

function obtenerCarritoLocalStorage() {
    let carritoGuardado = localStorage.getItem('carrito');
    return carritoGuardado ? JSON.parse(carritoGuardado) : [];
}

obtenerProductos();


function actualizarCarrito (){
    const carritoBody = document.getElementById('carrito-body');
    carritoBody.innerHTML = '';

    let total = 0;

    carrito.forEach (elemento => {
    const divProductoCarrito = document.createElement ('div');
    const subtotal =elemento.precio * elemento.cantidad;
    total += subtotal;

    divProductoCarrito.innerHTML = `
    <h4>${elemento.nombreProducto}</h4>
    <p>Cantidad: ${elemento.cantidad} - (${subtotal.toFixed (2)}€)</p>
    <button onclick="eliminarDelCarrito(${elemento.id})" class="btn btn-outline-danger">Eliminar</button>
    `;
    carritoBody.appendChild (divProductoCarrito);
    });

    const divTotal = document.createElement('div');
    divTotal.innerHTML = `
    <h4>Total: ${total.toFixed(2)}€</h4>
    `;
    carritoBody.appendChild(divTotal);
}


function eliminarDelCarrito(productoId) {
    const productoIndex = carrito.findIndex((elemento) => elemento.id === productoId);
    if (productoIndex !== -1) {
        carrito.splice(productoIndex, 1);
        localStorage.setItem('carrito', JSON.stringify(carrito));
        actualizarCarrito();
    }
}


let botonVaciarCarrito = document.getElementById ("vaciarCarrito");
    botonVaciarCarrito.onclick = () => {
        localStorage.clear();
        carrito = [];
        actualizarCarrito ();
    }

carrito = obtenerCarritoLocalStorage();
actualizarCarrito();


// Evento para finalizar compra
document.getElementById('finalizarCompra').addEventListener('click', function() {
    const formularioContainer = document.getElementById('formularioContainer');

    // Limpiar el contenedor por si ya existe un formulario
    formularioContainer.innerHTML = '';

    // Crear el formulario
    const form = document.createElement('form');
    form.id = 'formCompra';

    // Crear los campos del formulario
    const nombreLabel = document.createElement('label');
    nombreLabel.textContent = 'Nombre: ';
    const nombreInput = document.createElement('input');
    nombreInput.type = 'text';
    nombreInput.name = 'nombre';
    nombreInput.required = true;

    const telefonoLabel = document.createElement('label');
    telefonoLabel.textContent = 'Teléfono: ';
    const telefonoInput = document.createElement('input');
    telefonoInput.type = 'tel';
    telefonoInput.name = 'telefono';
    telefonoInput.required = true;
    telefonoInput.pattern = '[0-9]{9,12}';
    telefonoInput.placeholder = 'Ingrese un teléfono válido (9-12 dígitos)';

    const correoLabel = document.createElement('label');
    correoLabel.textContent = 'Correo electrónico: ';
    const correoInput = document.createElement('input');
    correoInput.type = 'email';
    correoInput.name = 'correo';
    correoInput.required = true;

    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Enviar';

    // Agregar los elementos al formulario
    form.appendChild(nombreLabel);
    form.appendChild(nombreInput);
    form.appendChild(document.createElement('br')); // salto de línea
    form.appendChild(telefonoLabel);
    form.appendChild(telefonoInput);
    form.appendChild(document.createElement('br')); // salto de línea
    form.appendChild(correoLabel);
    form.appendChild(correoInput);
    form.appendChild(document.createElement('br')); // salto de línea
    form.appendChild(submitButton);

    formularioContainer.appendChild(form);

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        carrito = [];

        actualizarCarrito();

        formularioContainer.innerHTML = '<p>¡Gracias por tu compra! Te enviamos toda la información a tu correo electrónico</p>';
    });
});
