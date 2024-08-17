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
    let perfumeElegidoMujer = parseInt (prompt ("Elige entre los siguientes perfumes disponibles:\n"+"Escribe 1: para comprar CACHAREL Amor Amor Eau de Toilette.\n"+"Escribe 2: para comprar CAROLINA HERRERA Good Girl"));
    if (perfumeElegidoMujer === 1) {
        alert ("Elegiste CACHAREL Amor Amor Eau de Toilette.\n"+"Precio final: 19,93€");
    }
    else if (perfumeElegidoMujer === 2) {
        alert ("CAROLINA HERRERA Good Girl.\n"+"Precio final: 51,95€");
    }
    else {
        alert ("El producto ingresado no existe");
    }
    
} else if (tipoPerfume === 2){
    let perfumeElegidoHombre = parseInt (prompt ("Elige entre los siguientes perfumes disponibles:\n"+"Escribe 1: para comprar CALVIN KLEIN Ck One.\n"+"Escribe 2: para comprar ARMANI Acqua di Gio."));
    if (perfumeElegidoHombre === 1) {
        alert ("Elegiste CALVIN KLEIN Ck One.\n"+"Precio final: 24,95€");
    }
    else if (perfumeElegidoHombre === 2) {
        alert ("ARMANI Acqua di Gio.\n"+"Precio final: 42,94€");
    }
    else {
        alert ("El producto ingresado no existe");
    }
}
else {
    alert ("El número ingresado no existe");
}
}
solicitarTipoPerfume()

function consultarEnvio (){
    const zonaEnvio = parseInt (prompt ("Indica alguna de las siguientes opciones de envío a domicilio:\n"+"Escribe 1: Madrid Centro\n"+"Escribe 2: Comunidad de Madrid\n"+"Escribe 3: Otras Comunidades Autónomas"));
    let costoEnvio;
    switch (zonaEnvio) {
        case 1:
            costoEnvio = alert ("El envío dentro de Madrid Centro es gratis");
            break;
        case 2:
            costoEnvio = alert ("El costo del envío dentro de la Comunidad de Madrid es de 5€");
            break;
        case 3:
            costoEnvio = alert ("El costo de envío a otras Comunidades Autónomas es de 10€");
            break;
        default:
            costoEnvio = alert ("No realizamos envíos fuera de España");
            break;
    }
}
consultarEnvio ()