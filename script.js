const productos = [
    { id: "1", nombre: "Remera", precio: 5000 },
    { id: "2", nombre: "Pantalon", precio: 8000 },
    { id: "3", nombre: "Blazer", precio: 18000 },
    { id: "4", nombre: "Sueter", precio: 12000 },
    { id: "5", nombre: "Top", precio: 15000 },
    { id: "6", nombre: "Zapatos", precio: 20000 },
    { id: "7", nombre: "Zapatillas", precio: 10000 },

];

const IVA = 0.21;
const DESC_EF = 0.1;
const RECARGO_CREDITO1 = 0.08;
const RECARGO_CREDITO2 = 0.16;
const RECARGO_CREDITO3 = 0.32;
let carrito = []


let seleccion = prompt("Bienvenido a Sorella\nDesea comprar algun producto?\n1-Si\n2-No")

while (seleccion != 1 && seleccion != 2) {
    alert("Por favor ingresa 1 para Si o 2 para NO")
    seleccion = prompt("Bienvenido a Sorella\nDesea comprar algun producto?\n1-Si\n2-No")
}

if (seleccion == 1) {
    alert("A continuacion le mostramos la lista de productos");
    let todoslosProductos = productos.map(producto => "Id-" + producto.id + " " + producto.nombre + " " + "$" + producto.precio);
    console.table(todoslosProductos);
    let producto = prompt("Agrega un producto a tu carrito colocando su ID\nColoque 0 para finalizar");
    let precio = 0
    while (producto != 0) {
        switch (producto) {
            case "1":
                precio = 5000;
                alert('Agregaste Remera a tu carrito 🛒');
                break;
            case "2":
                precio = 8000;
                alert('Agregaste Pantalon a tu carrito 🛒');
                break;
            case "3":
                precio = 18000;
                alert('Agregaste Blazer a tu carrito 🛒');
                break;
            case "4":
                precio = 12000;
                alert('Agregaste Sueter a tu carrito 🛒');
                break;
            case "5":
                precio = 15000;
                alert('Agregaste Top a tu carrito 🛒');
                break;
            case "6":
                precio = 20000;
                alert('Agregaste Zapatos a tu carrito 🛒'); 
                break;
            case "7":
                precio = 10000;
                alert('Agregaste Zapatillas a tu carrito 🛒');
                break;
            default:
                alert('Codigo inválido 😕');
                break;
        }
        let unidades = parseInt(prompt("Cuantas unidades desea llevar?"));

        carrito.push({ producto, unidades, precio })
        producto = prompt("Agrega un producto a tu carrito colocando su ID\nColoque 0 para finalizar");
        console.log(carrito)

    }


    carrito.forEach((carritoFinal) => {
        console.log(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades}, total a pagar por producto ${carritoFinal.unidades * carritoFinal.precio}`)
    })
}



const total = carrito.reduce((acum, el) => acum + el.precio * el.unidades, 0)


if (total != 0) {
   
    alert("Ahora seleccione el medio de pago")
    let modoPago = parseInt(prompt('💵 Como deseas abonar ?\n1-Efectivo\n2-Debito\n3-Credito\n0-Cancelar'));
    while (modoPago != 1 && modoPago != 2 && modoPago != 3 && modoPago != 0) {
        alert("Por favor ingresa un valor")
        modoPago = prompt('💵 Como deseas abonar ?\n1-Efectivo\n2-Debito\n3-Credito\n0-Cancelar')
    }
    if (modoPago == 1) {
        alert('Total a pagar 💵 $' + aplicarImpuestosyDescuentos(IVA, DESC_EF) + "\n Muchas Gracias Por Tu Compra!!");
    } else if (modoPago == 2) {
        alert('Total a pagar 💵 $' + aplicarImpuestosyDescuentos(IVA, 0) + "\n Muchas Gracias Por Tu Compra!!");
    } else if (modoPago == 3) {
        cuotas = parseInt(prompt(" cuantas cuotas?\n1-1 Pago\n2-3 Pagos\n3-6 Pagos\n0-Cancelar"));
        while (cuotas != 1 && cuotas != 2 && cuotas != 3 && cuotas != 0) {
            alert("Por favor ingresa un valor")
            cuotas = prompt(" cuantas cuotas?\n1-1 Pago\n2-3 Pagos\n3-6 Pagos\n0-Cancelar")
        }
        if (cuotas == 1)
            alert('Total a pagar 💵 $' + aplicarImpuestosyDescuentos(IVA + RECARGO_CREDITO1, 0) + "\n Muchas Gracias Por Tu Compra!!");
        else if (cuotas == 2) {
            alert('Total a pagar 💵 $' + aplicarImpuestosyDescuentos(IVA + RECARGO_CREDITO2, 0) + "\n Muchas Gracias Por Tu Compra!!");
        }
        else if (cuotas == 3) {
            alert('Total a pagar 💵 $' + aplicarImpuestosyDescuentos(IVA + RECARGO_CREDITO3, 0) + "\n Muchas Gracias Por Tu Compra!!");
        }
        else if (cuotas == 0) {
            alert("Compra cancelada")
            alert("Gracias por su visita, hasta pronto")
        }
        
    }
    else if (modoPago == 0) {
        alert("Compra cancelada")
        alert("Gracias por su visita, hasta pronto")
    }
    
}





function aplicarImpuestosyDescuentos(impuestos, descuentos) {
    let totalConImpuestos = total * (1 + impuestos);
    let totalConImpuestosYDescuentos;
    if (descuentos != 0) {
        totalConImpuestosYDescuentos = totalConImpuestos * (1 - descuentos);
    } else {
        totalConImpuestosYDescuentos = totalConImpuestos;
    }
    return totalConImpuestosYDescuentos;
}







/* const IVA = 0.21;
const DESC_EF = 0.1;
const RECARGO_CREDITO1 = 0.08;
const RECARGO_CREDITO2 = 0.16;
const RECARGO_CREDITO3 = 0.32;

alert("Bienvenido a Sorella")

let codProd = parseInt(prompt('Seleccione un producto\n1-Remeras...$5000\n2-Pantalon...$30000\n3-Buzos...$15000\n4-Shorts...$25000\n5-Calzado...$50000\n0-Salir del programa 📤'));
let total = 0;

while (codProd != 0) {
    switch (codProd) {
        case 1:
            total += 5000;
            alert('Agregaste Remeras a tu carrito 🛒 Total acumulado $' + total);
            break;
        case 2:
            total += 30000;
            alert('Agregaste Pantalon a tu carrito 🛒 Total acumulado $' + total);
            break;
        case 3:
            total += 15000;
            alert('Agregaste Buzos a tu carrito 🛒 Total acumulado $' + total);
            break;
        case 4:
            total += 25000;
            alert('Agregaste Short a tu carrito 🛒 Total acumulado $' + total);
            break;
        case 5:
            total += 50000;
            alert('Agregaste Calzado a tu carrito 🛒 Total acumulado $' + total);
            break;
        default:
            alert('Codigo inválido 😕');
            break;
    }

    codProd = parseInt(prompt('Seleccione un producto\n1-Remeras\n2-Pantalon\n3-Buzos\n4-Shorts\n5-Calzado\n0-Salir del programa 📤'));
}


if (total != 0) {

    let modoPago = parseInt(prompt('💵 Como deseas abonar ?\n1-Efectivo\n2-Debito\n3-Credito\n0-Cancelar'));

    if (modoPago == 1) {
        alert('Total a pagar 💵 $' + aplicarImpuestosyDescuentos(IVA, DESC_EF) + "\n Muchas Gracias Por Tu Compra!!");
    } else if (modoPago == 2) {
        alert('Total a pagar 💵 $' + aplicarImpuestosyDescuentos(IVA, 0) + "\n Muchas Gracias Por Tu Compra!!");
    } else if (modoPago == 3) {
        cuotas = parseInt(prompt(" cuantas cuotas?\n1-1 Pago\n2-3 Pagos\n3-6 Pagos\n0-Cancelar"));

        if (cuotas == 1)
            alert('Total a pagar 💵 $' + aplicarImpuestosyDescuentos(IVA + RECARGO_CREDITO1, 0) + "\n Muchas Gracias Por Tu Compra!!");
        else if (cuotas == 2) {
            alert('Total a pagar 💵 $' + aplicarImpuestosyDescuentos(IVA + RECARGO_CREDITO2, 0) + "\n Muchas Gracias Por Tu Compra!!");
        }
        else if (cuotas == 3) {
            alert('Total a pagar 💵 $' + aplicarImpuestosyDescuentos(IVA + RECARGO_CREDITO3, 0) + "\n Muchas Gracias Por Tu Compra!!");
        }
        else if (cuotas == 0) {
            alert("Compra cancelada")
        }
        else {
            alert('Codigo inválido 😕');
        }
    }
    else if (modoPago == 0) {
        alert("Compra cancelada")
    }
    else {
        alert('Codigo inválido 😕');
    }
}

alert("Gracias Por Su Visita!!!")

function aplicarImpuestosyDescuentos(impuestos, descuentos) {
    let totalConImpuestos = total * (1 + impuestos);
    let totalConImpuestosYDescuentos;
    if (descuentos != 0) {
        totalConImpuestosYDescuentos = totalConImpuestos * (1 - descuentos);
    } else {
        totalConImpuestosYDescuentos = totalConImpuestos;
    }
    return totalConImpuestosYDescuentos;
}


 */
/* const usuarios = [
    {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
        address: {
            street: "Kulas Light",
            suite: "Apt. 556",
            city: "Gwenborough",
            zipcode: "92998-3874",
            geo: {
                lat: "-37.3159",
                lng: "81.1496"
            }
        },
        phone: "1-770-736-8031 x56442",
        website: "hildegard.org",
        company: {
            name: "Romaguera-Crona",
            catchPhrase: "Multi-layered client-server neural-net",
            bs: "harness real-time e-markets"
        }
    },
    {
        id: 2,
        name: "Ervin Howell",
        username: "Antonette",
        email: "Shanna@melissa.tv",
        address: {
            street: "Victor Plains",
            suite: "Suite 879",
            city: "Wisokyburgh",
            zipcode: "90566-7771",
            geo: {
                lat: "-43.9509",
                lng: "-34.4618"
            }
        },
        phone: "010-692-6593 x09125",
        website: "anastasia.net",
        company: {
            name: "Deckow-Crist",
            catchPhrase: "Proactive didactic contingency",
            bs: "synergize scalable supply-chains"
        }
    },
    {
        id: 3,
        name: "Clementine Bauch",
        username: "Samantha",
        email: "Nathan@yesenia.net",
        address: {
            street: "Douglas Extension",
            suite: "Suite 847",
            city: "McKenziehaven",
            zipcode: "59590-4157",
            geo: {
                lat: "-68.6102",
                lng: "-47.0653"
            }
        },
        phone: "1-463-123-4447",
        website: "ramiro.org",
        company: {
            name: "Romaguera-Jacobson",
            catchPhrase: "Face to face bifurcated interface",
            bs: "e-enable strategic applications"
        }
    },
    {
        id: 4,
        name: "Patricia Lebsack",
        username: "Karianne",
        email: "Julianne.OConner@kory.org",
        address: {
            street: "Hoeger Mall",
            suite: "Apt. 692",
            city: "South Elvis",
            zipcode: "53919-4257",
            geo: {
                lat: "29.4572",
                lng: "-164.2990"
            }
        },
        phone: "493-170-9623 x156",
        website: "kale.biz",
        company: {
            name: "Robel-Corkery",
            catchPhrase: "Multi-tiered zero tolerance productivity",
            bs: "transition cutting-edge web services"
        }
    }
];

const listaOrg = usuarios.filter(usuarios => usuarios.website.includes(".org"));
console.table(listaOrg);

const listaNombres = usuarios.map(usuario => usuario.name)
console.log("Nombres de Usuarios:");
console.log(listaNombres)

const propVarias = usuarios.map(usuario => {
    return {


        id: usuario.id,
        company_name: usuario.company.name,
        username: usuario.username,
        city: usuario.address.city,
    }
})

console.table(propVarias) */
