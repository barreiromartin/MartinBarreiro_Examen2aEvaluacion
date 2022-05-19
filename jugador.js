class personaje {
    constructor(nombre) {
        this.nombre = nombre;
        this.victorias = 0;
        this.derrotas = 0;
        this.empates = 0;
        this.partidasJugadas = 0;
    }

    //SETTERS
    set setNombre(nombre) {
        this.nombre = nombre;
    }

    set setVictorias(victorias) {
        this.victorias = victorias;
    }

    set setDerrotas(derrotas) {
        this.derrotas = derrotas;
    }

    set setEmpates(empates) {
        this.empates = empates;
    }

    set setPartidasJugadas(partidasJugadas) {
        this.partidasJugadas = partidasJugadas;
    }


    //GETTERS
    get getNombre() {
        return this.nombre;
    }

    get getVictorias() {
        return this.victorias;
    }

    get getDerrotas() {
        return this.derrotas;
    }

    get getEmpates() {
        return this.empates;
    }

    get getPartidasJugadas() {
        return this.partidasJugadas;
    }

    //FUNCIONES

    añadirVictoria() {
        this.victorias++;
    }

    añadirDerrota() {
        this.derrotas++;
    }

    añadirEmpate() {
        this.empates++;
    }

    añadirPartidasJugadas() {
        this.partidasJugadas++;
    }


}