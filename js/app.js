const productos = [
    {id: 0, nombreProducto: "Carolina Herrera 212 Men", descripcion: "Perfume para hombre", precio: 37.94, capacidad: [50, 100, 200]},
    {id: 1, nombreProducto: "ARMANI Acqua di Gio", descripcion: "Perfume para hombre", precio: 42.94, capacidad: [50, 100, 200]},
    {id: 2, nombreProducto: "Hugo Boss In Motion Original", descripcion: "Perfume para hombre", precio: 29.93, capacidad: [100]},
    {id: 3, nombreProducto: "Davidoff Cool Water", descripcion: "Perfume para hombre", precio: 18.94, capacidad: [75, 125]},
    {id: 4, nombreProducto: "Yves Saint Laurent Y Eau de Parfum", descripcion: "Perfume para hombre", precio: 48.90, capacidad: [60, 100]},
    {id: 5, nombreProducto: "CALVIN KLEIN Ck One", descripcion: "Perfume para hombre y mujer", precio: 24.95, capacidad: [100, 200, 300]},
    {id: 6, nombreProducto: "CACHAREL Amor Amor Eau de Toilette", descripcion: "Perfume para mujer", precio: 19.93, capacidad: [30, 50, 100]},
    {id: 7, nombreProducto: "CAROLINA HERRERA Good Girl", descripcion: "Perfume para mujer", precio: 51.95, capacidad: [30, 50, 80, 100, 150]},
    {id: 8, nombreProducto: "Lancôme La Vie Est Belle", descripcion: "Perfume para mujer", precio: 39.90, capacidad: [30, 50, 75, 100]},
    {id: 9, nombreProducto: "Lancôme Idôle Eau de Parfum", descripcion: "Perfume para mujer", precio: 35.67, capacidad: [20, 50, 100]},
    {id: 10, nombreProducto: "Dolce & Gabbana Light Blue", descripcion: "Perfume para mujer", precio: 31.94, capacidad: [25, 50, 100, 200]},
]

const perfumesFemeninos = productos.filter ((elemento) => elemento.descripcion.includes ("mujer"));
const perfumesMasculinos = productos.filter ((elemento) => elemento.descripcion.includes ("hombre"));

function renderProducto (productos){
    let perfumes = document.getElementById ('perfumes');
    let content = '';
    productos.forEach (elemento => {
        content +=`
        <div>
        <h3>${elemento.nombreProducto} </h3>
        <p>${elemento.descripcion} </p>
        <p>Desde ${elemento.precio} € </p>
        <p>Tamaños disponibles: ${elemento.capacidad} ml</p> 
        </div>
        `;
    });
        perfumes.innerHTML = content;
}
renderProducto (productos);
debugger
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
    console.log (perfumesFemeninos);
} else if (tipoPerfume === 2){
    console.log (perfumesMasculinos);
}
else {
    console.log ("El producto ingresado no existe");
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

