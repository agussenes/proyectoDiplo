// /* document.getElementById('productForm').addEventListener('submit', function(event) {
//     event.preventDefault(); // Evita el envío del formulario

//     // Obtener los valores de los campos del formulario
//     const productName = document.getElementById('productName').value;
//     const productPrice = document.getElementById('productPrice').value;
//     const productDescription = document.getElementById('productDescription').value;

//     // Crear un objeto de producto
//     const product = {
//         name: productName,
//         price: productPrice,
//         description: productDescription
//     };

//     // Añadir el producto a la lista de productos
//     addProductToList(product);

//     // Limpiar el formulario
//     document.getElementById('productForm').reset();
// });

// function addProductToList(product) {
//     const productList = document.getElementById('productList');

//     // Crear un nuevo elemento de lista
//     const li = document.createElement('li');
//     li.textContent = `${product.name} - $${product.price}: ${product.description}`;

//     // Añadir el nuevo elemento a la lista
//     productList.appendChild(li);
// }

// */

// document.addEventListener('DOMContentLoaded', () =>{
//     const agregarProducto = document.getElementById ('agregarProducto'); 

//     const nombre = document.getElementById ('nombre');
//     const codigo = document.getElementById ('codigo');
//     const precioProducto = document.getElementById ('precioProducto');
//     const descripcionProducto = document.getElementById ('descripcionProducto');


//     const productosAgregados = document.getElementById ('productosAgregados');
//     const eliminarProducto = document.getElementById ('eliminarProducto');

//     const productos = {


//         precioProducto: ${precioProducto},
//         descripcionProducto: ${descripcionProducto},
//             }

//         addProductToList(productos);




//     }

//     console.log(productos.nombre + productos.codigo + productos.precioProducto + productos.descripcionProducto)
//     console.log("hola")


//     function addProductToList(productos) {
//         const agregarProducto = document.getElementById('agregarProducto');

//         // Crear un nuevo elemento de lista
//         const li = document.createElement('li');
//         li.textContent = `${nombre} - ${precioProducto}: ${descripcionProducto}`;

//         // Añadir el nuevo elemento a la lista
//         agregarProducto.appendChild(li);
//     }

// )

//     agregarProducto.addEventListener ('submit', (e) =>{
//         e.preventDefault ();

//         const productosAdd = nombre.value();

//         const mostrarProducto = document.createElement('li');
//         mostrarProducto.textContent = productosAdd

//         agregarProducto.appendChild(mostrarProducto);
//     })


//     eliminarProducto.addEventListener('click', (e) =>{
//         const tareasCompletadas = productosAgregados.querySelectorAll('li.completada');
//         tareasCompletadas.forEach((nombre) =>{ 
//            nombre.remove();

// })
// });



document.getElementById('agregarProducto').addEventListener('submit', function (event) {
    event.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const codigo = document.getElementById('codigo').value;
    const imgProducto = document.getElementById('imgProducto');
    const precioProducto = document.getElementById('precioProducto').value;
    const descripcionProducto = document.getElementById('descripcionProducto').value;




    const productos = {
        nombre: nombre,
        codigo: codigo,
        imgProducto: imgProducto,
        precioProducto: precioProducto,
        descripcionProducto: descripcionProducto,

    }

    addProductToList(productos);

    document.getElementById('agregarProducto').reset();





    console.log('agregarProducto')
    console.log('productos.nombre')
    

});


function addProductToList(product) {
    const productList = document.getElementById('containerFormsProductos');

    // Crear un nuevo elemento de lista
    const div = document.createElement('div');
    li.textContent = ${product.nombre} - $${product.precioProducto}: ${product.descripcionProducto};

    // Añadir el nuevo elemento a la lista
    productList.appendChild(div);
}