document.addEventListener('DOMContentLoaded', () => {
    const agregarProductoForm = document.getElementById('agregarProducto');
    const nombre = document.getElementById('nombre');
    const codigo = document.getElementById('codigo');
    const imgProducto = document.getElementById('imgProducto');
    const precioProducto = document.getElementById('precioProducto');
    const descripcionProducto = document.getElementById('descripcionProducto');
    const productosAgregados = document.getElementById('productosAgregados');
    const eliminarProducto = document.getElementById('eliminarProducto');

    agregarProductoForm.addEventListener('submit', (event) => {
        event.preventDefault();

        // Capturar los valores de los campos del formulario
        const nombreValue = nombre.value.trim();
        const codigoValue = codigo.value.trim();
        const precioProductoValue = precioProducto.value.trim();
        const descripcionProductoValue = descripcionProducto.value.trim();

        // Verificar si se ha seleccionado un archivo de imagen
        if (imgProducto.files && imgProducto.files[0]) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const imgProductoValue = e.target.result; // URL de la imagen cargada
                
                // Crear un objeto producto
                const producto = {
                    nombre: nombreValue,
                    codigo: codigoValue,
                    imgProducto: imgProductoValue,
                    precioProducto: precioProductoValue,
                    descripcionProducto: descripcionProductoValue,
                };

                // Crear un elemento de la lista para mostrar el producto
                const mostrarProducto = document.createElement('li');
                mostrarProducto.innerHTML = `
                    <img src="${producto.imgProducto}" alt="Imagen de ${producto.nombre}" width="100">
                    <hr>
                    <h2>${producto.nombre}</h2>
                    <p>(${producto.codigo})</p>
                    <p>$${producto.precioProducto}</p>
                    <p>${producto.descripcionProducto}</p>
                `;
                
                productosAgregados.appendChild(mostrarProducto);

                // Limpiar el formulario después de la previsualización
                agregarProductoForm.reset();
            };
            reader.readAsDataURL(imgProducto.files[0]); 
        } else {
            alert('Por favor, seleccione una imagen para el producto.');
        }
    });

    eliminarProducto.addEventListener('submit', () => {
        const tareasCompletadas = productosAgregados.querySelectorAll('li.completada');
        tareasCompletadas.forEach((producto) => {
            producto.remove();
        });
    });

    productosAgregados.addEventListener('click', (e) => {
        if (e.target.tagName === "LI") {
            e.target.classList.toggle('completada');
            e.target.style.textDecoration = 'line-through';
        }
    });
});
