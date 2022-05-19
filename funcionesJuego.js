//Funciones Juego

function eleccionNPC() {
    eleccion = Math.floor((Math.random() * (3 - 1 + 1)) + 1);
    return eleccion;
}

function eleccionPlayer(valor) {
    if (valor == "piedra") {
        eleccion = 1;

    } else if (valor == "papel") {
        eleccion = 2;

    } else if (valor == "tijeras") {
        eleccion = 3

    }else{
        eleccion = false;
    }
    return eleccion;
}

function comprobarEleccion(valor){
    if(valor == "piedra" || valor == "papel" || valor == "tijeras"){
        return true;
    }else{
        return false;
    }
}