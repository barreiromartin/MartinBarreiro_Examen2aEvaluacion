function tiempo() {
    sCron++
    if (sCron > 59) {
        mCron++;
        sCron = 0;
    }
    if (mCron > 60) {
        hCron++;
        mCron = 0;
    }

    if (sCron < 10) {
        sAuxCron = "0" + sCron;
    } else {
        sAuxCron = sCron;
    }

    if (mCron < 10) {
        mAuxCron = "0" + mCron
    } else {
        mAuxCron = mCron;
    }

    if (hCron < 10) {
        hAuxCron = "0" + hCron
    } else {
        hAuxCron = hCron;
    }

    localStorage.setItem("horasJugadas", hCron);
    localStorage.setItem("minJugadas", mCron);
    localStorage.setItem("segJugadas", sCron);

    document.getElementById("text_cronometro").innerHTML = hAuxCron + ":" + mAuxCron + ":" + sAuxCron;

}

function botonCronometro() {
    if (!localStorage.getItem("segJugadas")) {
        hCron = 0;
        mCron = 0;
        sCron = 0;
    } else {
        hCron = localStorage.getItem("horasJugadas");
        mCron = localStorage.getItem("minJugadas");
        sCron = localStorage.getItem("segJugadas");

    }


    tiempo();
    intervaloCrono = setInterval(tiempo, 1000);

}