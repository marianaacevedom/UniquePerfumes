
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


// AGREGAR AL CARRITO ???



const productosCarrito = [];

[...document.getElementsByClassName("btnCarrito")].forEach((btn, index) => {
    btn.onclick = () => {
        productosCarrito.push(productos[index]);
    };
});

function mostrarCarrito (productosCarrito) {
    let carrito = document.getElementById ("carrito");
    let content = '';
    productosCarrito.forEach (elemento => {
        content += `
        <div>
        <h3> ${elemento.nombreProducto} </h3>
        <p> ${elemento.precio} </p>
        <button id="eliminarProducto"> Eliminar producto </button>
        </div>
        `;
    });
    carrito.innerHTML = content;
}
mostrarCarrito (productosCarrito) 



