let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

function actualizarCarrito() {
    const carritoBody = document.getElementById('carrito-body');
    carritoBody.innerHTML = '';

    let total = 0;

    carrito.forEach((elemento) => {
        const divProductoCarrito = document.createElement('div');
        const subtotal = elemento.precio * elemento.cantidad;
        total += subtotal;

        divProductoCarrito.innerHTML = `
        <div>
            <h4>${elemento.nombreProducto}</h4>
            <p>Cantidad: ${elemento.cantidad} - ${subtotal.toFixed(2)}€</p>
            <button onclick="eliminarDelCarrito(${elemento.id})">Eliminar</button>
        </div>
        `;
        carritoBody.appendChild(divProductoCarrito);
    });

    const divTotal = document.createElement('div');
    divTotal.innerHTML = `
    <h4>Total: ${total.toFixed(2)}€</h4>
    `;
    carritoBody.appendChild(divTotal);
}

function eliminarDelCarrito(productoId) {
    // Buscar el índice del producto en el array carrito usando el id
    const productoIndex = carrito.findIndex((elemento) => elemento.id === productoId);

    // Si el producto existe, eliminarlo del array
    if (productoIndex !== -1) {
        carrito.splice(productoIndex, 1);
        
        // Actualizar el carrito en localStorage
        localStorage.setItem('carrito', JSON.stringify(carrito));

        // Actualizar la vista del carrito
        actualizarCarrito();
    }
}