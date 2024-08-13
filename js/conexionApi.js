document.addEventListener('DOMContentLoaded', function() {
    const productosContainer = document.getElementById('productosApi');

    function obtenerProductos() {
        fetch('https://fakestoreapi.com/products?limit=12')
            .then(res => res.json())
            .then(data => {
                data.forEach(producto => {  
                    const productoContainer = document.createElement('div');
                    productoContainer.classList.add('producto-container');
                    productoContainer.innerHTML = `
                        <img src="${producto.image}" alt="${producto.title}">
                        <h3>${producto.title}</h3>
                        <p>${producto.description}</p>
                        <button> consultar </button>
                    `;
                    productosContainer.appendChild(productoContainer);
                });
            })
            .catch(error => {
                console.error('Error al obtener los productos:', error);
            });
    }

    obtenerProductos();
});
