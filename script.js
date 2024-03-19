const IVA = 0.21;
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

alert("Gracias Por Su Visita!!!")

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


