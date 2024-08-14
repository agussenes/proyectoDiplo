
document.addEventListener('DOMContentLoaded', () => {

    const agregarProducto = document.getElementById('agregarProducto');
    const nombre = document.getElementById('nombre');
    const codigo = document.getElementById('codigo');
    const imgProducto = document.getElementById('imgProducto');
    const precioProducto = document.getElementById('precioProducto');
    const descripcionProducto = document.getElementById('descripcionProducto');
    const productosAgregados = document.getElementById('productosAgregados');
    const eliminarProducto = document.getElementById('eliminarProducto');


    agregarProducto.addEventListener('click', () => {
        const nombre = document.querySelector('#nombre').value;
        const codigo = document.querySelector('#codigo').value;
        const imgProducto = document.querySelector('#imgProducto').value;
        const precioProducto = document.querySelector('#precioProducto').value;
        const descripcionProducto = document.querySelector('#descripcionProducto').value;
        const producto = {
            nombre: nombre,
            codigo: codigo,
            precioProducto: precioProducto,
            descripcionProducto: descripcionProducto,
        }

        const mostrarProducto = document.createElement('li');
        mostrarProducto.textContent = producto.descripcionProducto;
        productosAgregados.appendChild(mostrarProducto);
    })




    productosAgregados.addEventListener('click', (e) => {
        if (e.target.tagName === "LI") {
            e.target.classList.toggle('completada');
            e.target.style.textDecoration = 'line-through';
        }

    })


    eliminarProducto.addEventListener('click', (e) => {
        const tareasCompletadas = productosAgregados.querySelectorAll('li.completada');
        tareasCompletadas.forEach((nombre) => {
            nombre.remove();
        })
    }

    )

})