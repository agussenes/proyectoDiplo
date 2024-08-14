
// document.addEventListener('DOMContentLoaded', () => {

//     const agregarProducto = document.getElementById('agregarProducto');
//     const nombre = document.getElementById('nombre');
//     const codigo = document.getElementById('codigo');
//     const imgProducto = document.getElementById('imgProducto');
//     const precioProducto = document.getElementById('precioProducto');
//     const descripcionProducto = document.getElementById('descripcionProducto');
//     const productosAgregados = document.getElementById('productosAgregados');
//     const eliminarProducto = document.getElementById('eliminarProducto');


//     agregarProducto.addEventListener('click', () => {
//         const nombre = document.querySelector('#nombre').value;
//         const codigo = document.querySelector('#codigo').value;
//         const imgProducto = document.querySelector('#imgProducto').value;
//         const precioProducto = document.querySelector('#precioProducto').value;
//         const descripcionProducto = document.querySelector('#descripcionProducto').value;
//         const producto = {
//             nombre: nombre,
//             codigo: codigo,
//             precioProducto: precioProducto,
//             descripcionProducto: descripcionProducto,
//         }

//         const mostrarProducto = document.createElement('li');
//         mostrarProducto.textContent = producto;
//         productosAgregados.appendChild(mostrarProducto);
//     })



//     productosAgregados.addEventListener('click', (e) => {
//         if (e.target.tagName === "LI") {
//             e.target.classList.toggle('completada');
//             e.target.style.textDecoration = 'line-through';
//         }

//     })


//     eliminarProducto.addEventListener('click', (e) => {
//         const tareasCompletadas = productosAgregados.querySelectorAll('li.completada');
//         tareasCompletadas.forEach((nombre) => {
//             nombre.remove();
//         })
//     }

//     )

// })





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



// document.getElementById('agregarProducto').addEventListener('submit', function (event) {
//     event.preventDefault();
//     const nombre = document.getElementById('nombre').value;
//     const codigo = document.getElementById('codigo').value;
//     const imgProducto = document.getElementById('imgProducto');
//     const precioProducto = document.getElementById('precioProducto').value;
//     const descripcionProducto = document.getElementById('descripcionProducto').value;




//     const productos = {
//         nombre: nombre,
//         codigo: codigo,
//         imgProducto: imgProducto,
//         precioProducto: precioProducto,
//         descripcionProducto: descripcionProducto,

//     }

//     addProductToList(productos);

//     document.getElementById('agregarProducto').reset();





//     console.log('agregarProducto')
//     console.log('productos.nombre')


// });


// function addProductToList(product) {
//     const productList = document.getElementById('containerFormsProductos');

//     Crear un nuevo elemento de lista
//     const div = document.createElement('div');
//     li.textContent = ${product.nombre} - $${product.precioProducto}: ${product.descripcionProducto};

//     Añadir el nuevo elemento a la lista
//     productList.appendChild(div);
// }





// agregarProducto.addEventListener('submit', (e) =>{
//     e.preventDefault(); 


//     const tareaTexto = nombre.value;
//     const tareaTexto1 = codigo.value;
//     const tareaTexto2 = imgProducto.value;
//     const tareaTexto3 = precioProducto.value;
//     const tareaTexto4 = descripcionProducto.value;






/*/* document.getElementById('productForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario
    
    // Obtener los valores de los campos del formulario
    const productName = document.getElementById('productName').value;
    const productPrice = document.getElementById('productPrice').value;
    const productDescription = document.getElementById('productDescription').value;
    
    // Crear un objeto de producto
    const product = {
        name: productName,
        price: productPrice,
        description: productDescription
    };
    
    // Añadir el producto a la lista de productos
    addProductToList(product);
    
    // Limpiar el formulario
    document.getElementById('productForm').reset();
});

function addProductToList(product) {
    const productList = document.getElementById('productList');
    
    // Crear un nuevo elemento de lista
    const li = document.createElement('li');
    li.textContent = `${product.name} - $${product.price}: ${product.description}`;
    
    // Añadir el nuevo elemento a la lista
    productList.appendChild(li);
}



document.addEventListener('DOMContentLoaded', () =>{
    const agregarProducto = document.getElementById ('agregarProducto'); 
    
    const nombre = document.getElementById ('nombre');
    const codigo = document.getElementById ('codigo');
    const precioProducto = document.getElementById ('precioProducto');
    const descripcionProducto = document.getElementById ('descripcionProducto');


    const productosAgregados = document.getElementById ('productosAgregados');
    const eliminarProducto = document.getElementById ('eliminarProducto');

    const productos = {
        
        
        precioProducto: ${precioProducto},
        descripcionProducto: ${descripcionProducto},
            }

        addProductToList(productos);


        

    }

    console.log(productos.nombre + productos.codigo + productos.precioProducto + productos.descripcionProducto)
    console.log("hola")


    function addProductToList(productos) {
        const agregarProducto = document.getElementById('agregarProducto');
        
        // Crear un nuevo elemento de lista
        const li = document.createElement('li');
        li.textContent = `${nombre} - ${precioProducto}: ${descripcionProducto}`;
        
        // Añadir el nuevo elemento a la lista
        agregarProducto.appendChild(li);
    }

)

    agregarProducto.addEventListener ('submit', (e) =>{
        e.preventDefault ();

        const productosAdd = nombre.value();

        const mostrarProducto = document.createElement('li');
        mostrarProducto.textContent = productosAdd

        agregarProducto.appendChild(mostrarProducto);
    })
        

    eliminarProducto.addEventListener('click', (e) =>{
        const tareasCompletadas = productosAgregados.querySelectorAll('li.completada');
        tareasCompletadas.forEach((nombre) =>{ 
           nombre.remove();
        
})
});
        
    
*/

/*
document.addEventListener('DOMContentLoaded', () =>{

    const agregarForm = document.getElementById('agregarForm');
    const tarea = document.getElementById('tarea');
    const tareasListas = document.getElementById('tareasListas');
    const eliminarCompletadas = document.getElementById('eliminarCompletadas');

    agregarForm.addEventListener('submit', (e) =>{
        e.preventDefault(); // Es lo que hace que el valor venga, creando una doble validacion de que el formulario fue completado por el usuario, asociado a required
      
        const tareaTexto = tarea.value;


        const tareaNueva = document.createElement('li');
        tareaNueva.textContent = tareaTexto
        tareasListas.appendChild(tareaNueva);
    })

    tareasListas.addEventListener('click', (e) =>{
        if (e.target.tagName ==="LI"){
            e.target.classList.toggle('completada');
            e.target.style.textDecoration = 'line-through';
        }
        
    })
    eliminarCompletadas.addEventListener('click', (e) =>{
       const tareasCompletadas = tareasListas.querySelectorAll('li.completada');
       tareasCompletadas.forEach((tarea) =>{
        tarea.remove();
        })
    })
})




*/







/*document.getElementById('productForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario
    
    // Obtener los valores de los campos del formulario
    const productName = document.getElementById('productName').value;
    const productPrice = document.getElementById('productPrice').value;
    const productDescription = document.getElementById('productDescription').value;
    
    // Crear un objeto de producto
    const product = {
        name: productName,
        price: productPrice,
        description: productDescription
    };
    
    // Añadir el producto a la lista de productos
    addProductToList(product);
    
    // Limpiar el formulario
    document.getElementById('productForm').reset();
});

function addProductToList(product) {
    const productList = document.getElementById('productList');
    
    // Crear un nuevo elemento de lista
    const li = document.createElement('li');
    li.textContent = `${product.name} - $${product.price}: ${product.description}`;
    
    // Añadir el nuevo elemento a la lista
    productList.appendChild(li);
}

*/


/*    document.addEventListener('DOMContentLoaded', () =>{
        const agregarProducto = document.getElementById ('agregarProducto'); 
        
        const nombre = document.getElementById ('nombre');
        const codigo = document.getElementById ('codigo');
        const precioProducto = document.getElementById ('precioProducto');
        const descripcionProducto = document.getElementById ('descripcionProducto');

        /* const productos = [${nombre}, ${codigo}, ${precioProducto}, ${descripcionProducto}]; */
     /*   const imgProducto = document.getElementById ('imgProducto');

        const productosAgregados = document.getElementById ('productosAgregados');
        const eliminarProducto = document.getElementById ('eliminarProducto');



        agregarProducto.addEventListener ('submit', (e) =>{
            e.preventDefault ();

            const productosAdd = nombre.value();

            const mostrarProducto = document.createElement('li');
            mostrarProducto.textContent = productosAdd

            agregarProducto.appendChild(mostrarProducto);

            

          /*  const mostrarImg = document.createElement('i')  */

    /*    })
        
        

    })

    */



/* const agregarProducto = document.querySelectorAll('#agregarProducto');

agregarProducto.addEventListener ('click', () => {
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
        mostrarProducto.textContent = producto; 
            productosAgregados.appendChild(mostrarProducto);
        })

       

        productosAgregados.addEventListener('click', (e) =>{
            if (e.target.tagName ==="LI"){
                e.target.classList.toggle('completada');
                e.target.style.textDecoration = 'line-through';
                }

          

})

/*

/*
    document.addEventListener('DOMContentLoaded', () =>{
 
        const agregarProducto = document.getElementById('agregarProducto');
        const nombre = document.getElementById('nombre');
        const codigo = document.getElementById('codigo');
        const imgProducto = document.getElementById('imgProducto');
        const precioProducto = document.getElementById('precioProducto');
        const descripcionProducto = document.getElementById('descripcionProducto');
        const productosAgregados = document.getElementById('productosAgregados');
        const eliminarProducto = document.getElementById('eliminarProducto');

        agregarProducto.addEventListener('submit', (e) =>{
            e.preventDefault(); 
                 

            const tareaTexto = nombre.value;
            const tareaTexto1 = codigo.value;
            const tareaTexto2 = imgProducto.value;
            const tareaTexto3 = precioProducto.value;
            const tareaTexto4 = descripcionProducto.value;
            

            const tareaNueva = document.createElement('li');
            tareaNueva.textContent = ("${tareaTexto}, ${tareaTexto1}, ${tareaTexto3}, ${tareaTexto4}")
            productosAgregados.appendChild(tareaNueva);
        })

       
        productosAgregados.addEventListener('click', (e) =>{
            if (e.target.tagName ==="LI"){
                e.target.classList.toggle('completada');
                e.target.style.textDecoration = 'line-through';
                }
        
        })



        eliminarProducto.addEventListener('click', (e) =>{
            const tareasCompletadas = productosAgregados.querySelectorAll('li.completada');
            tareasCompletadas.forEach((nombre) =>{ /*codigo, imgProducto, precioProducto, descripcionProducto */
 /*           nombre.remove();
            codigo.remove();
            imgProducto.remove();
            precioProducto.remove();
            descripcionProducto.remove(); 
            })
        })
    })

 */   






