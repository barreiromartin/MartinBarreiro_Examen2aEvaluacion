function nuevaPartida() {
    localStorage.clear();
    location.reload();
}

function continuarJugando(){
    botonContinuar = document.getElementById("botonContinuar");
    usuarioEsperando = document.getElementById("usuarioEsperando");
    maquinaEsperando = document.getElementById("maquinaEsperando");
    usuarioMovimiento = document.getElementById("usuarioMovimiento");
    maquinaMovimiento = document.getElementById("maquinaMovimiento");
    alertaLog = document.getElementById("alertaLog");

    botonContinuar.hidden = true;
    usuarioEsperando.hidden = false;
    maquinaEsperando.hidden = false;
    usuarioMovimiento.hidden = true;
    maquinaMovimiento.hidden = true;
    alertaLog.hidden = true;
}


function mostrarJugada() {
    usuarioEsperando = document.getElementById("usuarioEsperando");
    maquinaEsperando = document.getElementById("maquinaEsperando");
    usuarioMovimiento = document.getElementById("usuarioMovimiento");
    maquinaMovimiento = document.getElementById("maquinaMovimiento");
    botonContinuar = document.getElementById("botonContinuar");

    botonContinuar.hidden = false;
    usuarioEsperando.hidden = true;
    maquinaEsperando.hidden = true;
    usuarioMovimiento.hidden = false;
    maquinaMovimiento.hidden = false;
}


function botonesJugador() {
    //Eleccion de movimiento
    document.getElementById("botonPiedra").addEventListener("click", (event) => {
        eleccionPlayer(event);
        mostrarJugada()
    })
    document.getElementById("botonPapel").addEventListener("click", (event) => {
        eleccionPlayer(event);
        mostrarJugada()
    })
    document.getElementById("botonTijeras").addEventListener("click", (event) => {
        eleccionPlayer(event);
        mostrarJugada();

    })

    //Limpiar LocalStorage y recargar
    document.getElementById("nuevaPartida").addEventListener("click", nuevaPartida);

    //Seguir Jugando
    document.getElementById("botonContinuar").addEventListener("click", continuarJugando);
}


function transformarEleccion(eleccion) {
    //Mecanismo para facilitar el resultado en caso de Empate
    var auxEleccion = ""

    if (eleccion == 1) {
        auxEleccion = "Piedra";
    } else if (eleccion == 2) {
        auxEleccion = "Papel";
    } else if (eleccion == 3) {
        auxEleccion = "Tijeras";
    }

    return auxEleccion;
}


function eleccionPlayer(event) {
    maquina = JSON.parse(localStorage.getItem("maquina"));
    jugador = JSON.parse(localStorage.getItem("jugador"));
    alertaLog = document.getElementById("alertaLog");

    jugadorCon = event.currentTarget.value;
    maquinaCon = eleccionNPC();

    maquina.partidasJugadas++
    jugador.partidasJugadas++



    alertaLog.hidden = false

    if (jugadorCon == maquinaCon) {

        maquina.empates++
        jugador.empates++
        resultado = "¡EMPATE! ";

    } else if (jugadorCon == 1 && maquinaCon == 2) {

        maquina.victorias++;
        jugador.derrotas++;
        resultado = "¡DERROTA!";

    } else if (jugadorCon == 2 && maquinaCon == 3) {
        maquina.victorias++;
        jugador.derrotas++;
        resultado = "¡DERROTA!";


    } else if (jugadorCon == 3 && maquinaCon == 1) {
        maquina.victorias++;
        jugador.derrotas++;
        resultado = "¡DERROTA!";


    } else if (jugadorCon == 3 && maquinaCon == 2) {
        jugador.victorias++;
        maquina.derrotas++;
        resultado = "¡VICTORIA!";

    } else if (jugadorCon == 2 && maquinaCon == 1) {
        jugador.victorias++;
        maquina.derrotas++;
        resultado = "¡VICTORIA!";

    } else if (jugadorCon == 1 && maquinaCon == 3) {
        jugador.victorias++;
        maquina.derrotas++;
        resultado = "¡VICTORIA!";
    }

    alertaLog.innerHTML = resultado;

    entradaLog = document.createElement("li");
    entradaLog.innerHTML = "Jugador con: " + transformarEleccion(jugadorCon) + " | Maquina con: " + transformarEleccion(maquinaCon) + " | RESULTADO: " + resultado;

    document.getElementById("ulLog").appendChild(entradaLog);

    localStorage.setItem("jugador", JSON.stringify(jugador));
    localStorage.setItem("maquina", JSON.stringify(maquina));

    //Mostrar Elecciones
    document.getElementById("spanMaquina").innerHTML = transformarEleccion(maquinaCon);
    document.getElementById("spanUsuario").innerHTML = transformarEleccion(jugadorCon);

    //Boton para Continuar
    

    //Actualizar Estadísticas
    estadisticasJugador = document.getElementById("estadisticasJugador")

    estadisticas = "Estadisticas:" +
        "<br>Victorias: " + jugador.victorias +
        "<br>Derrotas: " + jugador.derrotas +
        "<br>Empates: " + jugador.empates +
        "<br>Partidos Jugados: " + jugador.partidasJugadas

    estadisticasJugador.innerHTML = estadisticas;
}

function preload() {
    if (!localStorage.getItem("jugador")) {
        nombre = prompt("Introduce tu nombre: ")
        var jugador = new personaje(nombre);
        var maquina = new personaje("Maquina");

        localStorage.setItem("jugador", JSON.stringify(jugador));
        localStorage.setItem("maquina", JSON.stringify(maquina));
    } else {
        maquina = JSON.parse(localStorage.getItem("maquina"));
        jugador = JSON.parse(localStorage.getItem("jugador"));
    }

    estadisticasJugador = document.getElementById("estadisticasJugador")

    estadisticas = "Estadisticas:" +
        "<br>Victorias: " + jugador.victorias +
        "<br>Derrotas: " + jugador.derrotas +
        "<br>Empates: " + jugador.empates +
        "<br>Partidos Jugados: " + jugador.partidasJugadas

    estadisticasJugador.innerHTML = estadisticas;

    nombreUsuario = document.getElementsByClassName("nombreUsuario");

    for (i = 0; i < nombreUsuario.length; i++) {
        nombreUsuario[i].innerHTML = jugador.nombre;
    }
}

function tiempoJugado(){
    
}


function __main__() {
    botonCronometro()

    preload();

    botonesJugador();

}

__main__()
