let carrito = obtenerCarritoLocalStorage();

// Obtener los productos
async function obtenerProductos() {
    try {
        const response = await fetch('../json/productos.json');
        if (!response.ok) {
            throw new Error(`Error al obtener los productos. Error: ${response.status}`);
        }
        const productos = await response.json();
        console.log(productos);
        renderizarProductos(productos.productos);
        configurarFiltros(productos.productos);
    } catch (error) {
        console.error(`Hubo un error: ${error.message}`);
    }
}

// Renderizar productos
function renderizarProductos(productos) {
    const contenedorPerfumes = document.getElementById('perfumes');
    contenedorPerfumes.innerHTML = '';
    productos.forEach(elemento => {
        const divProducto = document.createElement('div');
        divProducto.innerHTML = `
            <img src="${elemento.img}" alt="${elemento.alt}">
            <h3>${elemento.nombreProducto}</h3>
            <p>${elemento.descripcion}</p>
            <p>Desde ${elemento.precio} €</p>
            <p>Tamaño disponible: ${elemento.capacidad} ml</p>
            <button type="button" class="btn btn-outline-success" onclick="agregarAlCarrito('${elemento.nombreProducto}', ${elemento.precio})">
                Agregar al carrito
            </button>
        `;
        contenedorPerfumes.appendChild(divProducto);
    });
}

// Filtros
function configurarFiltros(productos) {
    const perfumesFemeninos = productos.filter(producto => producto.descripcion.includes("mujer"));
    const perfumesMasculinos = productos.filter(producto => producto.descripcion.includes("hombre"));
    document.getElementById("filtroTodos").onclick = () => renderizarProductos(productos);
    document.getElementById("filtroMujer").onclick = () => renderizarProductos(perfumesFemeninos);
    document.getElementById("filtroHombre").onclick = () => renderizarProductos(perfumesMasculinos);
}

// Agregar al carrito
function agregarAlCarrito(nombreProducto, precio) {
    const productoEnCarrito = carrito.find(item => item.nombreProducto === nombreProducto);
    if (productoEnCarrito) {
        productoEnCarrito.cantidad++;
    } else {
        carrito.push({ nombreProducto, precio, cantidad: 1 });
    }
    guardarCarritoLocalStorage();
    actualizarCarrito();
    Swal.fire({
        icon: "success",
        title: "Producto agregado al carrito",
        showConfirmButton: false,
        timer: 1000
    });
}

// Carrito
function guardarCarritoLocalStorage() {
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

function obtenerCarritoLocalStorage() {
    const carritoGuardado = localStorage.getItem('carrito');
    return carritoGuardado ? JSON.parse(carritoGuardado) : [];
}

function actualizarCarrito() {
    const carritoBody = document.getElementById('carrito-body');
    carritoBody.innerHTML = '';
    let total = 0;
    carrito.forEach(elemento => {
        const divProductoCarrito = document.createElement('div');
        const subtotal = elemento.precio * elemento.cantidad;
        total += subtotal;
        divProductoCarrito.innerHTML = `
            <h4>${elemento.nombreProducto}</h4>
            <p>Cantidad: ${elemento.cantidad} - (${subtotal.toFixed(2)}€)</p>
            <button onclick="eliminarDelCarrito('${elemento.nombreProducto}')" class="btn btn-outline-danger">Eliminar</button>
        `;
        carritoBody.appendChild(divProductoCarrito);
    });

    const divTotal = document.createElement('div');
    divTotal.innerHTML = `<h4>Total: ${total.toFixed(2)}€</h4>`;
    carritoBody.appendChild(divTotal);
}

function eliminarDelCarrito(nombreProducto) {
    const productoIndex = carrito.findIndex(item => item.nombreProducto === nombreProducto);
    if (productoIndex !== -1) {
        carrito.splice(productoIndex, 1);
        guardarCarritoLocalStorage();
        actualizarCarrito();
    }
}

// Vaciar el carrito
document.getElementById("vaciarCarrito").onclick = () => {
    carrito = [];
    localStorage.clear();
    actualizarCarrito();
};

// Finalizar compra
document.getElementById('finalizarCompra').addEventListener('click', function () {
    const formularioContainer = document.getElementById('formularioContainer');
    formularioContainer.innerHTML = '';

    const form = crearFormularioCompra();
    formularioContainer.appendChild(form);

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        carrito = [];
        actualizarCarrito();
        formularioContainer.innerHTML = '<p>¡Gracias por tu compra! Te enviamos toda la información a tu correo electrónico</p>';
    });
});

// Formulario de compra
function crearFormularioCompra() {
    const form = document.createElement('form');
    form.id = 'formCompra';

    const nombreLabel = crearInputLabel('Nombre', 'nombre', 'text');
    const telefonoLabel = crearInputLabel('Teléfono', 'telefono', 'tel', '[0-9]{9,12}', 'Ingrese un teléfono válido (9-12 dígitos)');
    const correoLabel = crearInputLabel('Correo electrónico', 'correo', 'email');

    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Enviar';
    submitButton.classList.add('btn', 'btn-outline-success');

    form.appendChild(nombreLabel);
    form.appendChild(telefonoLabel);
    form.appendChild(correoLabel);
    form.appendChild(document.createElement('br'));
    form.appendChild(submitButton);

    return form;
}

// Inputs y labels
function crearInputLabel(labelText, inputName, inputType, pattern = '', placeholder = '') {
    const label = document.createElement('label');
    label.textContent = `${labelText}: `;
    
    const input = document.createElement('input');
    input.type = inputType;
    input.name = inputName;
    input.required = true;
    
    if (pattern) input.pattern = pattern;
    if (placeholder) input.placeholder = placeholder;

    label.appendChild(input);
    return label;
}

carrito = obtenerCarritoLocalStorage();
actualizarCarrito();
obtenerProductos();
