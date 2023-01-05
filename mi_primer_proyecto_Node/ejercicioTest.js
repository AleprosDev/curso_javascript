let cuenta = 10;

switch (cuenta) {
    case (cuenta > 0 && cuenta <= 10):
        console.log("quebrado")
        break;
    case (cuenta > 10 && cuenta <= 20):
        console.log("te queda poco")
        break;
    case (cuenta > 20):
        newFunction();
        break;
    default:
        console.log("El valor no es correcto")
        break;
}

function newFunction() {
    console.log("tienes efectivo");
}
