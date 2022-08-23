// CONSTANTES CON REFERENCIAS DE ETIQUETAS HTML CON ID //
const audioVolumen = document.getElementById("audio-control");
const audioBattle = document.getElementById("audio-battle");
const creditosUno = document.getElementById("creditos-uno");
const creditos = document.getElementById("creditos");
const botonJugar = document.getElementById("boton-comenzar-juego");
const botonHabilidades = document.getElementById("boton-habilidades");
const botonVolver = document.getElementById("boton-volver-uno");
const botonVolverDos = document.getElementById("boton-volver-dos");
const botonVolverTres = document.getElementById("boton-volver-tres");
const botonSeleccionarUno = document.getElementById("boton-seleccionar-uno");
const botonSeleccionarDos = document.getElementById("boton-seleccionar-dos");
const botonSeleccionarTres = document.getElementById("boton-seleccionar-tres");
const seccionComenzar = document.getElementById("seccion-comenzar-juego");
const seccionPersonaje = document.getElementById("seccion-elegir-personaje");
const personajeUno = document.getElementById("input-primer-personaje");
const personajeDos = document.getElementById("input-segundo-personaje");
const personajeTres = document.getElementById("input-tercer-personaje");
const nombreNila = document.getElementById("nombre-nila");
const nombreSpark = document.getElementById("nombre-spark");
const nombreKriol = document.getElementById("nombre-kriol");
const cardPersonajeUno = document.getElementById("card-primer-personaje");
const cardPersonajeDos = document.getElementById("card-segundo-personaje");
const cardPersonajeTres = document.getElementById("card-tercer-personaje");
const primerPersonaje = document.getElementById("primer-personaje");
const segundoPersonaje = document.getElementById("segundo-personaje");
const tercerPersonaje = document.getElementById("tercer-personaje");
const persUnoElegido = document.getElementById("seccion-personaje-uno-elegido");
const enemigoUnoH3 = document.getElementById("enemigo-uno-h3");
const persDosElegido = document.getElementById("seccion-personaje-dos-elegido");
const enemigoDosH3 = document.getElementById("enemigo-dos-h3");
const persTresElegido = document.getElementById("seccion-personaje-tres-elegido");
const enemigoTresH3 = document.getElementById("enemigo-tres-h3");
const enemigoImagenUnoOp1 = document.getElementById("enemigo-uno-elegido-op1");
const enemigoImagenDosOp1 = document.getElementById("enemigo-dos-elegido-op1");
const enemigoImagenTresOp1 = document.getElementById("enemigo-tres-elegido-op1");
const enemigoImagenUnoOp2 = document.getElementById("enemigo-uno-elegido-op2");
const enemigoImagenDosOp2 = document.getElementById("enemigo-dos-elegido-op2");
const enemigoImagenTresOp2 = document.getElementById("enemigo-tres-elegido-op2");
const enemigoImagenUnoOp3 = document.getElementById("enemigo-uno-elegido-op3");
const enemigoImagenDosOp3 = document.getElementById("enemigo-dos-elegido-op3");
const enemigoImagenTresOp3 = document.getElementById("enemigo-tres-elegido-op3");
const bodyPagina = document.getElementById("body-pagina");
const continuarUno = document.getElementById("boton-continuar-uno");
const continuarDos = document.getElementById("boton-continuar-dos");
const continuarTres = document.getElementById("boton-continuar-tres");
const nombrePersonajeUno = document.getElementById("personaje-uno-h3");
const nombrePersonajeDos = document.getElementById("personaje-dos-h3");
const nombrePersonajeTres = document.getElementById("personaje-tres-h3");
const vidaPersonajeUno = document.getElementById("vida-player-uno");
const vidaPersonajeDos = document.getElementById("vida-player-dos");
const vidaPersonajeTres = document.getElementById("vida-player-tres");
const vidaEnemigoUno = document.getElementById("vida-enemigo-uno");
const vidaEnemigoDos = document.getElementById("vida-enemigo-dos");
const vidaEnemigoTres = document.getElementById("vida-enemigo-tres");
const ataqueUnoNilaRef = document.getElementById("ataque-uno-Nila");
const ataqueDosNilaRef = document.getElementById("ataque-dos-Nila");
const ataqueTresNilaRef = document.getElementById("ataque-tres-Nila");
const ataqueUnoSparkRef = document.getElementById("ataque-uno-Spark");
const ataqueDosSparkRef = document.getElementById("ataque-dos-Spark");
const ataqueTresSparkRef= document.getElementById("ataque-tres-Spark");
const ataqueUnoKriolRef = document.getElementById("ataque-uno-Kriol");
const ataqueDosKriolRef = document.getElementById("ataque-dos-Kriol");
const ataqueTresKriolRef = document.getElementById("ataque-tres-Kriol");
const combatirUno = document.getElementById("boton-combatir-uno");
const mensajesBox = document.getElementById("mensajes-box");
const pasarTurno = document.getElementById("pasar-turno");
const combatirDos = document.getElementById("boton-combatir-dos");
const mensajesBoxDos = document.getElementById("mensajes-box-dos");
const pasarTurnoDos = document.getElementById("pasar-turno-dos");
const combatirTres = document.getElementById("boton-combatir-tres");
const mensajesBoxTres = document.getElementById("mensajes-box-tres");
const pasarTurnoTres = document.getElementById("pasar-turno-tres");
const reiniciarUno = document.getElementById("reiniciar-uno");
const reiniciarDos = document.getElementById("reiniciar-dos");
const reiniciarTres = document.getElementById("reiniciar-tres");
const victorias = document.getElementById("victorias");
const derrotas = document.getElementById("derrotas");
const finalSec = document.getElementById("seccion-final");
const finalMsj = document.getElementById("mensaje-final");
const finalMsjUno = document.getElementById("mensaje-final-uno");
const finalMsjDos = document.getElementById("mensaje-final-dos");
const finalMsjTres = document.getElementById("mensaje-final-tres");

const imagenCaraNila = document.getElementById("imagen-personaje-uno");
const imagenCaraSpark = document.getElementById("imagen-personaje-dos");
const imagenCaraKriol = document.getElementById("imagen-personaje-tres");

let opcionElegida;
let enemigoElegido;
let personajeElegido;
let contVictorias = 0;
let contDerrotas = 0;

// HP PERSONAJES //

let vidaNilaPlayer = 100;
let vidaSparkPlayer = 90;
let vidaKriolPlayer = 110;

let vidaNilaPc = 100;
let vidaSparkPc = 90;
let vidaKriolPc = 110;

// NILA //
let ataqueUnoDamageNila = 20;
let ataqueDosDamageNila = 40;
let ataqueTresCuraNila = 20;

// SPARK //
let ataqueUnoDamageSpark = 25;
let ataqueDosDamageSpark = 35;
let ataqueTresCuraSpark = 25;

// KRIOL //
let ataqueUnoDamageKriol = 20;
let ataqueDosDamageKriol = 50;
let ataqueTresCuraKriol = 20;

let turnoInt;
let turno;
let ataqueRandom;
let randomCuraPc;
let aleatoriedad;

// FUNCION PRINCIPAL //

function comenzarJuego()
{
    // Setear volumen audio //
    configurarAudio();
    // Botones e interacciones //
    botonJugar.addEventListener("click", cambiarSeccionPersonaje);
    botonHabilidades.addEventListener("click", seleccionarPersonaje);
    botonVolver.addEventListener("click", volverMenuPersonajesUno);
    botonVolverDos.addEventListener("click", volverMenuPersonajesDos);
    botonVolverTres.addEventListener("click", volverMenuPersonajesTres);
    botonSeleccionarUno.addEventListener("click", seleccionarPersonajeUno); 
    botonSeleccionarDos.addEventListener("click", seleccionarPersonajeDos);
    botonSeleccionarTres.addEventListener("click", seleccionarPersonajeTres);
    primerPersonaje.addEventListener("click", elegirPersonajeUno);
    segundoPersonaje.addEventListener("click", elegirPersonajeDos);
    tercerPersonaje.addEventListener("click", elegirPersonajeTres);
    continuarUno.addEventListener("click", continuar);
    continuarDos.addEventListener("click", continuar);
    continuarTres.addEventListener("click", continuar);
    combatirUno.addEventListener("click", definirTurno)
    combatirDos.addEventListener("click", definirTurno);
    combatirTres.addEventListener("click", definirTurno);
    ataqueUnoNilaRef.addEventListener("click", ataqueUnoNila);
    ataqueDosNilaRef.addEventListener("click", ataqueDosNila);
    ataqueTresNilaRef.addEventListener("click", ataqueTresNila);
    ataqueUnoSparkRef.addEventListener("click", ataqueUnoSpark);
    ataqueDosSparkRef.addEventListener("click", ataqueDosSpark);
    ataqueTresSparkRef.addEventListener("click", ataqueTresSpark);
    ataqueUnoKriolRef.addEventListener("click", ataqueUnoKriol);
    ataqueDosKriolRef.addEventListener("click", ataqueDosKriol);
    ataqueTresKriolRef.addEventListener("click", ataqueTresKriol);
    pasarTurno.addEventListener("click", pasarTurnoFunc);
    pasarTurnoDos.addEventListener("click", pasarTurnoFunc);
    pasarTurnoTres.addEventListener("click", pasarTurnoFunc);
    reiniciarUno.addEventListener("click", reiniciarFuncion);
    reiniciarDos.addEventListener("click", reiniciarFuncion);
    reiniciarTres.addEventListener("click", reiniciarFuncion);
    // Botones ataques //
    // Secciones ocultas hasta ser mostradas con botones //
    audioVolumen.style.display = "none";
    audioBattle.style.display = "none";
    creditos.style.display = "none";
    seccionPersonaje.style.display = "none";
    cardPersonajeUno.style.display = "none";
    cardPersonajeDos.style.display = "none";
    cardPersonajeTres.style.display = "none";
    persUnoElegido.style.display = "none";
    persDosElegido.style.display = "none";
    persTresElegido.style.display = "none";
    ataqueUnoNilaRef.style.display = "none";
    ataqueDosNilaRef.style.display = "none";
    ataqueTresNilaRef.style.display = "none";
    ataqueUnoSparkRef.style.display = "none";
    ataqueDosSparkRef.style.display = "none";
    ataqueTresSparkRef.style.display = "none";
    ataqueUnoKriolRef.style.display = "none";
    ataqueDosKriolRef.style.display = "none";
    ataqueTresKriolRef.style.display = "none";
    combatirUno.style.display = "none";
    mensajesBox.style.display = "none";
    pasarTurno.style.display = "none";
    combatirDos.style.display = "none";
    mensajesBoxDos.style.display = "none";
    pasarTurnoDos.style.display = "none";
    combatirTres.style.display = "none";
    mensajesBoxTres.style.display = "none";
    pasarTurnoTres.style.display = "none";
    reiniciarUno.style.display = "none";
    reiniciarDos.style.display = "none";
    reiniciarTres.style.display = "none";
    victorias.style.display = "none";
    derrotas.style.display = "none";
    finalSec.style.display = "none";
}

// FUNCIONES //

function configurarAudio()
{
    audioVolumen.volume = 0.04;
    audioBattle.volume = 0.04;
}

function cambiarSeccionPersonaje()
{
    seccionComenzar.style.display = "none";
    seccionPersonaje.style.display = "flex";
    audioVolumen.style.display = "block";
    //creditos.style.display = "block";
    creditosUno.style.display = "none";
    audioVolumen.play();
    victorias.style.display = "block";
    derrotas.style.display = "block";
}


function seleccionarPersonaje()
{
    if(personajeUno.checked)
    {
        seccionPersonaje.style.display = "none";
        cardPersonajeUno.style.display = "flex";
    }
    else if(personajeDos.checked)
    {
        seccionPersonaje.style.display = "none";
        cardPersonajeDos.style.display = "flex";
    }
    else if(personajeTres.checked)
    {
        seccionPersonaje.style.display = "none";
        cardPersonajeTres.style.display = "flex";
    }
    else
    {
        alert("No elegiste ningún personaje");
    }
}

// FUNCIONES PARA CAMBIAR ESTILO A CARD PERSONAJES //

function elegirPersonajeUno()
{
    primerPersonaje.style.backgroundColor = "#A5C9CA";
    segundoPersonaje.style.backgroundColor = "#395B64";
    tercerPersonaje.style.backgroundColor = "#395B64";
    nombreNila.style.color = "#2C3333";
    nombreSpark.style.color = "#E7F6F2";
    nombreKriol.style.color = "#E7F6F2";
}

function elegirPersonajeDos()
{
    primerPersonaje.style.backgroundColor = "#395B64";
    segundoPersonaje.style.backgroundColor = "#A5C9CA";
    tercerPersonaje.style.backgroundColor = "#395B64";
    nombreNila.style.color = "#E7F6F2";
    nombreSpark.style.color = "#2C3333";
    nombreKriol.style.color = "#E7F6F2";
}

function elegirPersonajeTres()
{
    primerPersonaje.style.backgroundColor = "#395B64";
    segundoPersonaje.style.backgroundColor = "#395B64";
    tercerPersonaje.style.backgroundColor = "#A5C9CA"
    nombreNila.style.color = "#E7F6F2";
    nombreSpark.style.color = "#E7F6F2";
    nombreKriol.style.color = "#2C3333";
}

// FUNCIONES DEL BOTON VOLVER A MENU PERSONAJES // 

function volverMenuPersonajesUno()
{
    seccionPersonaje.style.display = "flex";
    cardPersonajeUno.style.display = "none";
}

function volverMenuPersonajesDos()
{
    seccionPersonaje.style.display = "flex";
    cardPersonajeDos.style.display = "none";
}

function volverMenuPersonajesTres()
{
    seccionPersonaje.style.display = "flex";
    cardPersonajeTres.style.display = "none";
}

// FUNCIONES BOTON SELECCIONAR PERSONAJES //

function seleccionarPersonajeUno()
{
    cardPersonajeUno.style.display = "none";
    persUnoElegido.style.display = "flex";
    personajeElegido = 1;
    enemigoElegido = numeroAleatorio(1, 3);
    if(enemigoElegido == 1)
    {
        enemigoUnoH3.innerHTML = "Enemigo elige Nila";
        enemigoImagenUnoOp1.style.display = "flex";
        enemigoImagenDosOp1.style.display = "none";
        enemigoImagenTresOp1.style.display = "none";
        opcionElegida = 1;
    }
    else if(enemigoElegido == 2)
    {
        enemigoUnoH3.innerHTML = "Enemigo elige Spark";
        enemigoImagenUnoOp1.style.display = "none";
        enemigoImagenDosOp1.style.display = "flex";
        enemigoImagenTresOp1.style.display = "none";
        opcionElegida = 2;
    }
    else
    {
        enemigoUnoH3.innerHTML = "Enemigo elige Kriol";
        enemigoImagenUnoOp1.style.display = "none";
        enemigoImagenDosOp1.style.display = "none";
        enemigoImagenTresOp1.style.display = "flex";
        opcionElegida = 3;
    }
}

function seleccionarPersonajeDos()
{
    cardPersonajeDos.style.display = "none";
    persDosElegido.style.display = "flex";
    personajeElegido = 2;
    enemigoElegido = numeroAleatorio(1, 3);
    if(enemigoElegido == 1)
    {
        enemigoDosH3.innerHTML = "Enemigo elige Nila";
        enemigoImagenUnoOp2.style.display = "flex";
        enemigoImagenDosOp2.style.display = "none";
        enemigoImagenTresOp2.style.display = "none";
        opcionElegida = 4;
    }
    else if(enemigoElegido == 2)
    {
        enemigoDosH3.innerHTML = "Enemigo elige Spark";
        enemigoImagenUnoOp2.style.display = "none";
        enemigoImagenDosOp2.style.display = "flex";
        enemigoImagenTresOp2.style.display = "none";
        opcionElegida = 5;
    }
    else
    {
        enemigoDosH3.innerHTML = "Enemigo elige Kriol";
        enemigoImagenUnoOp2.style.display = "none";
        enemigoImagenDosOp2.style.display = "none";
        enemigoImagenTresOp2.style.display = "flex";
        opcionElegida = 6;
    }

}

function seleccionarPersonajeTres()
{
    cardPersonajeTres.style.display = "none";
    persTresElegido.style.display = "flex";
    personajeElegido = 3;
    enemigoElegido = numeroAleatorio(1, 3);
    if(enemigoElegido == 1)
    {
        enemigoTresH3.innerHTML = "Enemigo elige Nila";
        enemigoImagenUnoOp3.style.display = "flex";
        enemigoImagenDosOp3.style.display = "none";
        enemigoImagenTresOp3.style.display = "none";
        opcionElegida = 7;
    }
    else if(enemigoElegido == 2)
    {
        enemigoTresH3.innerHTML = "Enemigo elige Spark";
        enemigoImagenUnoOp3.style.display = "none";
        enemigoImagenDosOp3.style.display = "flex";
        enemigoImagenTresOp3.style.display = "none";
        opcionElegida = 8;
    }
    else
    {
        enemigoTresH3.innerHTML = "Enemigo elige Kriol";
        enemigoImagenUnoOp3.style.display = "none";
        enemigoImagenDosOp3.style.display = "none";
        enemigoImagenTresOp3.style.display = "flex";
        opcionElegida = 9;
    }
}

function numeroAleatorio(min, max)
{
    let resultadoEnemigo;
    resultadoEnemigo = Math.floor(Math.random() * (max - min + 1) + min);
    return resultadoEnemigo;
}


function continuar()
{
    continuarUno.style.display = "none";
    continuarDos.style.display = "none";
    continuarTres.style.display = "none";
    audioVolumen.pause();
    audioVolumen.style.display = "none";
    audioBattle.style.display = "block";
    audioBattle.play();
    bodyPagina.style.backgroundImage = "url(Assets/1138740.png)";
    habilitarBotones(0);
    // Insertar nombres personajes en combate //
    nombrePersonajeUno.innerHTML = "Nila";
    nombrePersonajeDos.innerHTML = "Spark";
    nombrePersonajeTres.innerHTML = "Kriol";
    if(enemigoElegido == 1)
    {
        enemigoUnoH3.innerHTML = "Nila";
        enemigoDosH3.innerHTML = "Nila";
        enemigoTresH3.innerHTML = "Nila";
    }
    else if(enemigoElegido == 2)
    {
        enemigoUnoH3.innerHTML = "Spark";
        enemigoDosH3.innerHTML = "Spark";
        enemigoTresH3.innerHTML = "Spark";
    }
    else
    {
        enemigoUnoH3.innerHTML = "Kriol";
        enemigoDosH3.innerHTML = "Kriol";
        enemigoTresH3.innerHTML = "Kriol";
    }

    if(opcionElegida == 1)
    {
        vidaPersonajeUno.style.display = "flex";
        vidaEnemigoUno.style.display = "flex";
        vidaPersonajeUno.innerHTML = "100 HP";
        vidaEnemigoUno.innerHTML = "100 HP";
    }
    else if(opcionElegida == 2)
    {
        vidaPersonajeUno.style.display = "flex";
        vidaEnemigoUno.style.display = "flex";
        vidaPersonajeUno.innerHTML = "100 HP";
        vidaEnemigoUno.innerHTML = "90 HP";
    }
    else if(opcionElegida == 3)
    {
        vidaPersonajeUno.style.display = "flex";
        vidaEnemigoUno.style.display = "flex";
        vidaPersonajeUno.innerHTML = "100 HP";
        vidaEnemigoUno.innerHTML = "110 HP";
    }
    else if(opcionElegida == 4)
    {
        vidaPersonajeDos.style.display = "flex";
        vidaEnemigoDos.style.display = "flex";
        vidaPersonajeDos.innerHTML = "90 HP";
        vidaEnemigoDos.innerHTML = "100 HP";
    }
    else if(opcionElegida == 5)
    {
        vidaPersonajeDos.style.display = "flex";
        vidaEnemigoDos.style.display = "flex";
        vidaPersonajeDos.innerHTML = "90 HP";
        vidaEnemigoDos.innerHTML = "90 HP";
    }
    else if(opcionElegida == 6)
    {
        vidaPersonajeDos.style.display = "flex";
        vidaEnemigoDos.style.display = "flex";
        vidaPersonajeDos.innerHTML = "90 HP";
        vidaEnemigoDos.innerHTML = "110 HP";
    }
    else if(opcionElegida == 7)
    {
        vidaPersonajeTres.style.display = "flex";
        vidaEnemigoTres.style.display = "flex";
        vidaPersonajeTres.innerHTML = "110 HP";
        vidaEnemigoTres.innerHTML = "100 HP";

    }
    else if(opcionElegida == 8)
    {
        vidaPersonajeTres.style.display = "flex";
        vidaEnemigoTres.style.display = "flex";
        vidaPersonajeTres.innerHTML = "110 HP";
        vidaEnemigoTres.innerHTML = "90 HP";

    }
    else if(opcionElegida == 9)
    {
        vidaPersonajeTres.style.display = "flex";
        vidaEnemigoTres.style.display = "flex";
        vidaPersonajeTres.innerHTML = "110 HP";
        vidaEnemigoTres.innerHTML = "110 HP";
    }

    if(personajeElegido == 1)
    {
        ataqueUnoNilaRef.style.display = "flex";
        ataqueDosNilaRef.style.display = "flex";
        ataqueTresNilaRef.style.display = "flex";
        combatirUno.style.display = "flex";
    }
    else if(personajeElegido == 2)
    {
        ataqueUnoSparkRef.style.display = "flex";
        ataqueDosSparkRef.style.display = "flex";
        ataqueTresSparkRef.style.display = "flex";
        combatirDos.style.display = "flex";
    }
    else if(personajeElegido == 3)
    {
        ataqueUnoKriolRef.style.display = "flex";
        ataqueDosKriolRef.style.display = "flex";
        ataqueTresKriolRef.style.display = "flex";
        combatirTres.style.display = "flex";
    }
}

function definirTurno()
{   
    if(opcionElegida == 1 || opcionElegida == 2 || opcionElegida == 3)
    {
        combatirUno.style.display = "none";
        mensajesBox.style.display = "block";
        turnoInt = numeroAleatorio(1,2);
        if(turnoInt == 1)
        {
            turno = true;
            mensajesBox.innerHTML = "Empiezas atacando";
            habilitarBotones(1);
        }
        else
        {
            turno = false;
            mensajesBox.innerHTML = "Enemigo empieza atacando";
            habilitarBotones(0);
            pasarTurno.style.display = "block";
            pasarTurno.innerHTML = "Seguir turno";
        }
    }

    if(opcionElegida == 4 || opcionElegida == 5 || opcionElegida == 6)
    {
        combatirDos.style.display = "none";
        mensajesBoxDos.style.display = "block";
        turnoInt = numeroAleatorio(1,2);
        if(turnoInt == 1)
        {
            turno = true;
            mensajesBoxDos.innerHTML = "Empiezas atacando";
            habilitarBotones(1);
        }
        else
        {
            turno = false;
            mensajesBoxDos.innerHTML = "Enemigo empieza atacando";
            habilitarBotones(0);
            pasarTurnoDos.style.display = "block";
            pasarTurnoDos.innerHTML = "Seguir turno";
        }
    }

    if(opcionElegida == 7 || opcionElegida == 8 || opcionElegida == 9)
    {
        combatirTres.style.display = "none";
        mensajesBoxTres.style.display = "block";
        turnoInt = numeroAleatorio(1,2);
        if(turnoInt == 1)
        {
            turno = true;
            mensajesBoxTres.innerHTML = "Empiezas atacando";
            habilitarBotones(1);
        }
        else
        {
            turno = false;
            mensajesBoxTres.innerHTML = "Enemigo empieza atacando";
            habilitarBotones(0);
            pasarTurnoTres.style.display = "block";
            pasarTurnoTres.innerHTML = "Seguir turno";
        }
    }
}
   

function pasarTurnoFunc()
{
    // NILA VS NILA //
    if(opcionElegida == 1)
    {
        if(vidaNilaPlayer > 0 && vidaNilaPc > 0)
        {
            if(!turno)
            {
                ataqueRandom = numeroAleatorio(1,3);
                if(ataqueRandom == 1)
                {
                    ataqueUnoEnemigoNila();
                 
                }
                else if(ataqueRandom == 2)
                {
                    ataqueDosEnemigoNila();
            
                }
                else
                {
                    if(vidaNilaPc < 100)
                    {
                        ataqueTresEnemigoNila();
                    }
                    else
                    {
                        ataqueDosEnemigoNila();
                    }
                } 
            }
        }
  
        if(vidaNilaPlayer <= 0 || vidaNilaPc <= 0)
        {
            if(vidaNilaPc <= 0)
            {
                mensajesBox.innerHTML = "Ganaste";
                contVictorias++;
                victorias.innerHTML = "Victorias: " + contVictorias;
                habilitarBotones(0);
                pasarTurno.style.display = "none";
                reiniciarUno.style.display = "block";
            }
            else
            {
                mensajesBox.innerHTML = "Perdiste";
                contDerrotas++;
                derrotas.innerHTML = "Derrotas: " + contDerrotas;
                habilitarBotones(0);
                reiniciarUno.style.display = "block";
            }
        }
    }
    // NILA VS SPARK //
    if(opcionElegida == 2)
    {
        if(vidaNilaPlayer > 0 && vidaSparkPc > 0)
        {
            if(!turno)
            {
                ataqueRandom = numeroAleatorio(1,3);
                if(ataqueRandom == 1)
                {
                    ataqueUnoEnemigoSpark();
                 
                }
                else if(ataqueRandom == 2)
                {
                    ataqueDosEnemigoSpark();
            
                }
                else
                {
                    if(vidaSparkPc < 90)
                    {
                        ataqueTresEnemigoSpark();
                    }
                    else
                    {
                        ataqueDosEnemigoSpark();
                    }
                }
                
            }
        }
      
        if(vidaNilaPlayer <= 0 || vidaSparkPc <= 0)
        {
            if(vidaSparkPc <= 0)
            {
                mensajesBox.innerHTML = "Ganaste";
                contVictorias++;
                victorias.innerHTML = "Victorias: " + contVictorias;
                pasarTurno.style.display = "none";
                reiniciarUno.style.display = "block";
                habilitarBotones(0);
            }
            else
            {
                mensajesBox.innerHTML = "Perdiste";
                contDerrotas++;
                derrotas.innerHTML = "Derrotas: " + contDerrotas;
                reiniciarUno.style.display = "block";
                habilitarBotones(0);
            }
        }
    }
    // NILA VS KRIOL //
    if(opcionElegida == 3)
    {
        if(vidaNilaPlayer > 0 && vidaKriolPc > 0)
        {
            if(!turno)
            {
                ataqueRandom = numeroAleatorio(1,3);
                if(ataqueRandom == 1)
                {
                    ataqueUnoEnemigoKriol();
                 
                }
                else if(ataqueRandom == 2)
                {
                    ataqueDosEnemigoKriol();
            
                }
                else
                {
                    if(vidaKriolPc < 110)
                    {
                        ataqueTresEnemigoKriol();
                    }
                    else
                    {
                        ataqueDosEnemigoKriol();
                    }
                }
                
            }
        }
   
        if(vidaNilaPlayer <= 0 || vidaKriolPc <= 0)
        {
            if(vidaKriolPc <= 0)
            {
                mensajesBox.innerHTML = "Ganaste";
                contVictorias++;
                victorias.innerHTML = "Victorias: " + contVictorias;
                pasarTurno.style.display = "none";
                reiniciarUno.style.display = "block";
                habilitarBotones(0);
            }
            else
            {
                mensajesBox.innerHTML = "Perdiste";
                contDerrotas++;
                derrotas.innerHTML = "Derrotas: " + contDerrotas;
                reiniciarUno.style.display = "block";
                habilitarBotones(0);
            }
        }
    }  
    // SPARK VS NILA //
    if(opcionElegida == 4)
    {
        if(vidaSparkPlayer > 0 && vidaNilaPc > 0)
        {
            if(!turno)
            {
                ataqueRandom = numeroAleatorio(1,3);
                if(ataqueRandom == 1)
                {
                    ataqueUnoEnemigoNila();
                 
                }
                else if(ataqueRandom == 2)
                {
                    ataqueDosEnemigoNila();
            
                }
                else
                {
                    if(vidaNilaPc < 100)
                    {
                        ataqueTresEnemigoNila();
                    }
                    else
                    {
                        ataqueDosEnemigoNila();
                    }
                }
                
            }
        }

        if(vidaSparkPlayer <= 0 || vidaNilaPc <= 0)
        {
            if(vidaNilaPc <= 0)
            {
                mensajesBoxDos.innerHTML = "Ganaste";
                contVictorias++;
                victorias.innerHTML = "Victorias: " + contVictorias;
                pasarTurnoDos.style.display = "none";
                reiniciarDos.style.display = "block";
                habilitarBotones(0);
            }
            else
            {
                mensajesBoxDos.innerHTML = "Perdiste";
                contDerrotas++;
                derrotas.innerHTML = "Derrotas: " + contDerrotas;
                reiniciarDos.style.display = "block";
                habilitarBotones(0);
            }
        }
    }

    if(opcionElegida == 5)
    {
        if(vidaSparkPlayer > 0 && vidaSparkPc > 0)
        {
            if(!turno)
            {
                ataqueRandom = numeroAleatorio(1,3);
                if(ataqueRandom == 1)
                {
                    ataqueUnoEnemigoSpark();
                 
                }
                else if(ataqueRandom == 2)
                {
                    ataqueDosEnemigoSpark();
            
                }
                else
                {
                    if(vidaSparkPc < 90)
                    {
                        ataqueTresEnemigoSpark();
                    }
                    else
                    {
                        ataqueDosEnemigoSpark();
                    }
                }
                
            }
        }

        if(vidaSparkPlayer <= 0 || vidaSparkPc <= 0)
        {
            if(vidaSparkPc <= 0)
            {
                mensajesBoxDos.innerHTML = "Ganaste";
                contVictorias++;
                victorias.innerHTML = "Victorias: " + contVictorias;
                pasarTurnoDos.style.display = "none";
                reiniciarDos.style.display = "block";
                habilitarBotones(0);
            }
            else
            {
                mensajesBoxDos.innerHTML = "Perdiste";
                contDerrotas++;
                derrotas.innerHTML = "Derrotas: " + contDerrotas;
                reiniciarDos.style.display = "block";
                habilitarBotones(0);
            }
        }
    }

    if(opcionElegida == 6)
    {
        if(vidaSparkPlayer > 0 && vidaKriolPc > 0)
        {
            if(!turno)
            {
                ataqueRandom = numeroAleatorio(1,3);
                if(ataqueRandom == 1)
                {
                    ataqueUnoEnemigoKriol();
                 
                }
                else if(ataqueRandom == 2)
                {
                    ataqueDosEnemigoKriol();
            
                }
                else
                {
                    if(vidaKriolPc < 110)
                    {
                        ataqueTresEnemigoKriol();
                    }
                    else
                    {
                        ataqueDosEnemigoKriol();
                    }
                }
                
            }
        }

        if(vidaSparkPlayer <= 0 || vidaKriolPc <= 0)
        {
            if(vidaKriolPc <= 0)
            {
                mensajesBoxDos.innerHTML = "Ganaste";
                contVictorias++;
                victorias.innerHTML = "Victorias: " + contVictorias;
                pasarTurnoDos.style.display = "none";
                reiniciarDos.style.display = "block";
                habilitarBotones(0);
            }
            else
            {
                mensajesBoxDos.innerHTML = "Perdiste";
                contDerrotas++;
                derrotas.innerHTML = "Derrotas: " + contDerrotas;
                reiniciarDos.style.display = "block";
                habilitarBotones(0);
            }
        }
    }

    if(opcionElegida == 7)
    {
        if(vidaKriolPlayer > 0 && vidaNilaPc > 0)
        {
            if(!turno)
            {
                ataqueRandom = numeroAleatorio(1,3);
                if(ataqueRandom == 1)
                {
                    ataqueUnoEnemigoNila();
                 
                }
                else if(ataqueRandom == 2)
                {
                    ataqueDosEnemigoNila();
            
                }
                else
                {
                    if(vidaNilaPc < 100)
                    {
                        ataqueTresEnemigoNila();
                    }
                    else
                    {
                        ataqueDosEnemigoNila();
                    }
                }
                
            }
        }

        if(vidaKriolPlayer <= 0 || vidaNilaPc <= 0)
        {
            if(vidaNilaPc <= 0)
            {
                mensajesBoxTres.innerHTML = "Ganaste";
                contVictorias++;
                victorias.innerHTML = "Victorias: " + contVictorias;
                pasarTurnoTres.style.display = "none";
                reiniciarTres.style.display = "block";
                habilitarBotones(0);
            }
            else
            {
                mensajesBoxTres.innerHTML = "Perdiste";
                contDerrotas++;
                derrotas.innerHTML = "Derrotas: " + contDerrotas;
                reiniciarTres.style.display = "block";
                habilitarBotones(0);
            }
        }
    }

    if(opcionElegida == 8)
    {
        if(vidaKriolPlayer > 0 && vidaSparkPc > 0)
        {
            if(!turno)
            {
                ataqueRandom = numeroAleatorio(1,3);
                if(ataqueRandom == 1)
                {
                    ataqueUnoEnemigoSpark();
                 
                }
                else if(ataqueRandom == 2)
                {
                    ataqueDosEnemigoSpark();
            
                }
                else
                {
                    if(vidaSparkPc < 90)
                    {
                        ataqueTresEnemigoSpark();
                    }
                    else
                    {
                        ataqueDosEnemigoSpark();
                    }
                }
                
            }
        }

        if(vidaKriolPlayer <= 0 || vidaSparkPc <= 0)
        {
            if(vidaSparkPc <= 0)
            {
                mensajesBoxTres.innerHTML = "Ganaste";
                contVictorias++;
                victorias.innerHTML = "Victorias: " + contVictorias;
                pasarTurnoTres.style.display = "none";
                reiniciarTres.style.display = "block";
                habilitarBotones(0);
            }
            else
            {
                mensajesBoxTres.innerHTML = "Perdiste";
                contDerrotas++;
                derrotas.innerHTML = "Derrotas: " + contDerrotas;
                reiniciarTres.style.display = "block";
                habilitarBotones(0);
            }
        }
    }

    if(opcionElegida == 9)
    {
        if(vidaKriolPlayer > 0 && vidaKriolPc > 0)
        {
            if(!turno)
            {
                ataqueRandom = numeroAleatorio(1,3);
                if(ataqueRandom == 1)
                {
                    ataqueUnoEnemigoKriol();
                 
                }
                else if(ataqueRandom == 2)
                {
                    ataqueDosEnemigoKriol();
            
                }
                else
                {
                    if(vidaKriolPc < 110)
                    {
                        ataqueTresEnemigoKriol();
                    }
                    else
                    {
                        ataqueDosEnemigoKriol();
                    }
                }
                
            }
        }

        if(vidaKriolPlayer <= 0 || vidaKriolPc <= 0)
        {
            if(vidaKriolPc <= 0)
            {
                mensajesBoxTres.innerHTML = "Ganaste";
                contVictorias++;
                victorias.innerHTML = "Victorias: " + contVictorias;
                pasarTurnoTres.style.display = "none";
                reiniciarTres.style.display = "block";
                habilitarBotones(0);
            }
            else
            {
                mensajesBoxTres.innerHTML = "Perdiste";
                contDerrotas++;
                derrotas.innerHTML = "Derrotas: " + contDerrotas;
                reiniciarTres.style.display = "block";
                habilitarBotones(0);
            }
        }
    }
}

function reiniciarFuncion()
{
    persUnoElegido.style.display = "none";
    persDosElegido.style.display = "none";
    persTresElegido.style.display = "none";
    seccionPersonaje.style.display = "flex";
    reiniciarUno.style.display = "none";
    reiniciarDos.style.display = "none";
    reiniciarTres.style.display = "none";
    reiniciarVariables();
    mensajesBox.style.display = "none";
    mensajesBoxDos.style.display = "none";
    mensajesBoxTres.style.display = "none";
    vidaPersonajeUno.style.display = "none";
    vidaPersonajeDos.style.display = "none";
    vidaPersonajeTres.style.display = "none";
    vidaEnemigoUno.style.display = "none";
    vidaEnemigoDos.style.display = "none";
    vidaEnemigoTres.style.display = "none";
    ataqueUnoNilaRef.style.display = "none";
    ataqueDosNilaRef.style.display = "none";
    ataqueTresNilaRef.style.display = "none";
    ataqueUnoSparkRef.style.display = "none";
    ataqueDosSparkRef.style.display = "none";
    ataqueTresSparkRef.style.display = "none";
    ataqueUnoKriolRef.style.display = "none";
    ataqueDosKriolRef.style.display = "none";
    ataqueTresKriolRef.style.display = "none";
    continuarUno.style.display = "flex";
    continuarDos.style.display = "flex";
    continuarTres.style.display = "flex";
    bodyPagina.style.backgroundImage = "none";
    audioBattle.pause();
    audioBattle.currentTime = 0;
    audioBattle.style.display = "none";
    audioVolumen.style.display = "block";
    audioVolumen.play();
    nombrePersonajeUno.innerHTML = "Elegiste a Nila";
    nombrePersonajeDos.innerHTML = "Elegiste a Spark";
    nombrePersonajeTres.innerHTML = "Elegiste a Kriol";
    if(contVictorias == 10)
    {
        seccionPersonaje.style.display = "none";
        finalSec.style.display = "flex";
        finalMsjUno.innerHTML = "FELICIDADES!";
        finalMsjDos.innerHTML = "Llegaste a 10 victorias!";
        finalMsjTres.innerHTML = "Gracias por jugar"
    }
    else if(contDerrotas == 10)
    {
        seccionPersonaje.style.display = "none";
        finalSec.style.display = "flex";
        finalMsjUno.innerHTML = "UNA LASTIMA :(";
        finalMsjDos.innerHTML = "Llegaste a 10 derrotas";
        finalMsjTres.innerHTML = "Gracias por jugar"
    }
}

function reiniciarVariables()
{   
vidaNilaPlayer = 100;
vidaSparkPlayer = 90;
vidaKriolPlayer = 110;

vidaNilaPc = 100;
vidaSparkPc = 90;
vidaKriolPc = 110;
}

 
// ATAQUES NILA PLAYER Y PC //
    
function ataqueUnoNila()
{
    if(opcionElegida == 1)
    {
        vidaNilaPc = vidaNilaPc - ataqueUnoDamageNila;
        if(vidaNilaPc < 0)
        {
            vidaEnemigoUno.innerHTML = "0 HP";
        }
        else
        {
            vidaEnemigoUno.innerHTML = vidaNilaPc + " HP"; 
        }
        mensajesBox.innerHTML = "Nila quita 20 HP al enemigo";
        habilitarBotones(0);
        pasarTurno.style.display = "block";
        turno = false;
    }
    if(opcionElegida == 2)
    {
        vidaSparkPc = vidaSparkPc - ataqueUnoDamageNila;
        if(vidaSparkPc < 0)
        {
            vidaEnemigoUno.innerHTML = "0 HP";
        }
        else
        {
            vidaEnemigoUno.innerHTML = vidaSparkPc + " HP";
        }
        mensajesBox.innerHTML = "Nila quita 20 HP al enemigo";
        habilitarBotones(0);
        pasarTurno.style.display = "block";
        turno = false;
    }
    if(opcionElegida == 3)
    {
        vidaKriolPc = vidaKriolPc - ataqueUnoDamageNila;
        if(vidaKriolPc < 0)
        {
            vidaEnemigoUno.innerHTML = "0 HP";
        }
        else
        {
            vidaEnemigoUno.innerHTML = vidaKriolPc + " HP";
        }
        mensajesBox.innerHTML = "Nila quita 20 HP al enemigo";
        habilitarBotones(0);
        pasarTurno.style.display = "block";
        turno = false;
    }
}

function ataqueDosNila()
{
    if(opcionElegida == 1)
    {
        aleatoriedad = numeroAleatorio(1,3);
        {
            if(aleatoriedad == 1)
            {
                vidaNilaPc = vidaNilaPc - ataqueDosDamageNila;
                if(vidaNilaPc < 0)
                {
                    vidaEnemigoUno.innerHTML = "0 HP";
                }
                else
                {
                    vidaEnemigoUno.innerHTML = vidaNilaPc + " HP"; 
                }
                mensajesBox.innerHTML = "Nila quita 40 HP al enemigo";
                habilitarBotones(0);
                pasarTurno.style.display = "block";
                turno = false;
            }
            else
            {
                mensajesBox.innerHTML = "Nila ha fallado";
                habilitarBotones(0);
                pasarTurno.style.display = "block";
                turno = false;
            }
        }
    }

    if(opcionElegida == 2)
    {
        aleatoriedad = numeroAleatorio(1,3);
        {
            if(aleatoriedad == 1)
            {
                vidaSparkPc = vidaSparkPc - ataqueDosDamageNila;
                if(vidaSparkPc < 0)
                {
                    vidaEnemigoUno.innerHTML = "0 HP";
                }
                else
                {
                    vidaEnemigoUno.innerHTML = vidaSparkPc + " HP"; 
                }
                mensajesBox.innerHTML = "Nila quita 40 HP al enemigo";
                habilitarBotones(0);
                pasarTurno.style.display = "block";
                turno = false;
            }
            else
            {
                mensajesBox.innerHTML = "Nila ha fallado";
                habilitarBotones(0);
                pasarTurno.style.display = "block";
                turno = false;
            }
        }
    }

    if(opcionElegida == 3)
    {
        aleatoriedad = numeroAleatorio(1,3);
        {
            if(aleatoriedad == 1)
            {
                vidaKriolPc = vidaKriolPc - ataqueDosDamageNila;
                if(vidaKriolPc < 0)
                {
                    vidaEnemigoUno.innerHTML = "0 HP";
                }
                else
                {
                    vidaEnemigoUno.innerHTML = vidaKriolPc + " HP"; 
                }
                mensajesBox.innerHTML = "Nila quita 40 HP al enemigo";
                habilitarBotones(0);
                pasarTurno.style.display = "block";
                turno = false;
            }
            else
            {
                mensajesBox.innerHTML = "Nila ha fallado";
                habilitarBotones(0);
                pasarTurno.style.display = "block";
                turno = false;
            }
        }
    }
}

function ataqueTresNila()
{
    if(opcionElegida == 1 || opcionElegida == 2 || opcionElegida == 3)
    {
        if(vidaNilaPlayer >= 100)
        {
            mensajesBox.innerHTML = "Nila se cura pero su vida está al máximo";
            vidaPersonajeUno.innerHTML = "100 HP";
            vidaNilaPlayer = 100;
        }
        else
        {
            vidaNilaPlayer = vidaNilaPlayer + ataqueTresCuraNila;
            mensajesBox.innerHTML = "Nila se cura 20 HP";
            vidaPersonajeUno.innerHTML = vidaNilaPlayer + " HP";
        }
        habilitarBotones(0);
        pasarTurno.style.display = "block";
        turno = false;
    }
}

function ataqueUnoEnemigoNila()
{
    if(opcionElegida == 1)
    {
        vidaNilaPlayer = vidaNilaPlayer - ataqueUnoDamageNila;
        if(vidaNilaPlayer < 0)
        {
            vidaPersonajeUno.innerHTML = "0 HP";
        }
        else
        {
            vidaPersonajeUno.innerHTML = vidaNilaPlayer + " HP";
        }
        mensajesBox.innerHTML = "Enemigo te quita 20 HP";
        habilitarBotones(1);
        pasarTurno.style.display = "none";
        turno = true;
    }

    if(opcionElegida == 4)
    {
        vidaSparkPlayer = vidaSparkPlayer - ataqueUnoDamageNila;
        if(vidaSparkPlayer < 0)
        {
            vidaPersonajeDos.innerHTML = "0 HP";
        }
        else
        {
            vidaPersonajeDos.innerHTML = vidaSparkPlayer + " HP";
        }
        mensajesBoxDos.innerHTML = "Enemigo te quita 20 HP";
        habilitarBotones(1);
        pasarTurnoDos.style.display = "none";
        turno = true;
    }

    if(opcionElegida == 7)
    {
        vidaKriolPlayer = vidaKriolPlayer - ataqueUnoDamageNila;
        if(vidaKriolPlayer < 0)
        {
            vidaPersonajeTres.innerHTML = "0 HP";
        }
        else
        {
            vidaPersonajeTres.innerHTML = vidaKriolPlayer + " HP";
        }
        mensajesBoxTres.innerHTML = "Enemigo te quita 20 HP";
        habilitarBotones(1);
        pasarTurnoTres.style.display = "none";
        turno = true;
    }

}

function ataqueDosEnemigoNila()
{
    if(opcionElegida == 1)
    {
        aleatoriedad = numeroAleatorio(1,3);
        {
            if(aleatoriedad == 1)
            {
                vidaNilaPlayer = vidaNilaPlayer - ataqueDosDamageNila;
                if(vidaNilaPlayer < 0)
                {
                    vidaPersonajeUno.innerHTML = "0 HP";
                }
                else
                {
                    vidaPersonajeUno.innerHTML = vidaNilaPlayer + " HP"; 
                }
                mensajesBox.innerHTML = "Enemigo te quita 40 HP";
                habilitarBotones(1);
                pasarTurno.style.display = "none";
            }
            else
            {
                mensajesBox.innerHTML = "Enemigo ha fallado";
                habilitarBotones(1);
                pasarTurno.style.display = "none";
            }
        }
        turno = true;
    }

    if(opcionElegida == 4)
    {
        aleatoriedad = numeroAleatorio(1,3);
        {
            if(aleatoriedad == 1)
            {
                vidaSparkPlayer = vidaSparkPlayer - ataqueDosDamageNila;
                if(vidaSparkPlayer < 0)
                {
                    vidaPersonajeDos.innerHTML = "0 HP";
                }
                else
                {
                    vidaPersonajeDos.innerHTML = vidaSparkPlayer + " HP"; 
                }
                mensajesBoxDos.innerHTML = "Enemigo te quita 40 HP";
                habilitarBotones(1);
                pasarTurnoDos.style.display = "none";
            }
            else
            {
                mensajesBoxDos.innerHTML = "Enemigo ha fallado";
                habilitarBotones(1);
                pasarTurnoDos.style.display = "none";
            }
        }
        turno = true;
    }

    if(opcionElegida == 7)
    {
        aleatoriedad = numeroAleatorio(1,3);
        {
            if(aleatoriedad == 1)
            {
                vidaKriolPlayer = vidaKriolPlayer - ataqueDosDamageNila;
                if(vidaKriolPlayer < 0)
                {
                    vidaPersonajeTres.innerHTML = "0 HP";
                }
                else
                {
                    vidaPersonajeTres.innerHTML = vidaKriolPlayer + " HP"; 
                }
                mensajesBoxTres.innerHTML = "Enemigo te quita 40 HP";
                habilitarBotones(1);
                pasarTurnoTres.style.display = "none";
            }
            else
            {
                mensajesBoxTres.innerHTML = "Enemigo ha fallado";
                habilitarBotones(1);
                pasarTurnoTres.style.display = "none";
            }
        }
        turno = true;
    }
}

function ataqueTresEnemigoNila()
{
    if(opcionElegida == 1)
    {
            vidaNilaPc = vidaNilaPc + ataqueTresCuraNila;
            if(vidaNilaPc >= 100)
            {
                vidaEnemigoUno.innerHTML = "100 HP";
                vidaNilaPc = 100;
            }
            else
            {
                vidaEnemigoUno.innerHTML = vidaNilaPc + " HP";
            }
            mensajesBox.innerHTML = "Enemigo se cura 20 HP";
            habilitarBotones(1);
            pasarTurno.style.display = "none";
            turno = true;
    }

    if(opcionElegida == 4)
    {
            vidaNilaPc = vidaNilaPc + ataqueTresCuraNila;
            if(vidaNilaPc >= 100)
            {
                vidaEnemigoDos.innerHTML = "100 HP";
                vidaNilaPc = 100;
            }
            else
            {
                vidaEnemigoDos.innerHTML = vidaNilaPc + " HP";
            }
            mensajesBoxDos.innerHTML = "Enemigo se cura 20 HP";
            habilitarBotones(1);
            pasarTurnoDos.style.display = "none";
            turno = true;
    }

    if(opcionElegida == 7)
    {
            vidaNilaPc = vidaNilaPc + ataqueTresCuraNila;
            if(vidaNilaPc >= 100)
            {
                vidaEnemigoTres.innerHTML = "100 HP";
                vidaNilaPc = 100;
            }
            else
            {
                vidaEnemigoTres.innerHTML = vidaNilaPc + " HP";
            }
            mensajesBoxTres.innerHTML = "Enemigo se cura 20 HP";
            habilitarBotones(1);
            pasarTurnoTres.style.display = "none";
            turno = true;
    }
}

// ATAQUES SPARK PLAYER Y PC //
function ataqueUnoSpark()
{
    if(opcionElegida == 4)
    {
        vidaNilaPc = vidaNilaPc - ataqueUnoDamageSpark;
        if(vidaNilaPc < 0)
        {
            vidaEnemigoDos.innerHTML = "0 HP";
        }
        else
        {
            vidaEnemigoDos.innerHTML = vidaNilaPc + " HP";
        }
        mensajesBoxDos.innerHTML = "Spark quita 25 HP al enemigo";
        habilitarBotones(0);
        pasarTurnoDos.style.display = "block";
        turno = false;
    }
    if(opcionElegida == 5)
    {
        vidaSparkPc = vidaSparkPc - ataqueUnoDamageSpark;
        if(vidaSparkPc < 0)
        {
            vidaEnemigoDos.innerHTML = "0 HP";
        }
        else
        {
            vidaEnemigoDos.innerHTML = vidaSparkPc + " HP";
        }
        mensajesBoxDos.innerHTML = "Spark quita 25 HP al enemigo";
        habilitarBotones(0);
        pasarTurnoDos.style.display = "block";
        turno = false;
    }
    if(opcionElegida == 6)
    {
        vidaKriolPc = vidaKriolPc - ataqueUnoDamageSpark;
        if(vidaKriolPc < 0)
        {
            vidaEnemigoDos.innerHTML = "0 HP";
        }
        else
        {
            vidaEnemigoDos.innerHTML = vidaKriolPc + " HP";
        }
        mensajesBoxDos.innerHTML = "Spark quita 25 HP al enemigo";
        habilitarBotones(0);
        pasarTurnoDos.style.display = "block";
        turno = false;
    }
}

function ataqueDosSpark()
{
    if(opcionElegida == 4)
    {
        aleatoriedad = numeroAleatorio(1,2);
        {
            if(aleatoriedad == 1)
            {
                vidaNilaPc = vidaNilaPc - ataqueDosDamageSpark;
                if(vidaNilaPc < 0)
                {
                    vidaEnemigoDos.innerHTML = "0 HP";
                }
                else
                {
                    vidaEnemigoDos.innerHTML = vidaNilaPc + " HP"; 
                }
                mensajesBoxDos.innerHTML = "Spark quita 35 HP al enemigo";
                habilitarBotones(0);
                pasarTurnoDos.style.display = "block";
                turno = false;
            }
            else
            {
                mensajesBoxDos.innerHTML = "Spark ha fallado";
                habilitarBotones(0);
                pasarTurnoDos.style.display = "block";
                turno = false;
            }
        }
    }

    if(opcionElegida == 5)
    {
        aleatoriedad = numeroAleatorio(1,2);
        {
            if(aleatoriedad == 1)
            {
                vidaSparkPc = vidaSparkPc - ataqueDosDamageSpark;
                if(vidaSparkPc < 0)
                {
                    vidaEnemigoDos.innerHTML = "0 HP";
                }
                else
                {
                    vidaEnemigoDos.innerHTML = vidaSparkPc + " HP"; 
                }
                mensajesBoxDos.innerHTML = "Spark quita 35 HP al enemigo";
                habilitarBotones(0);
                pasarTurnoDos.style.display = "block";
                turno = false;
            }
            else
            {
                mensajesBoxDos.innerHTML = "Spark ha fallado";
                habilitarBotones(0);
                pasarTurnoDos.style.display = "block";
                turno = false;
            }
        }
    }

    if(opcionElegida == 6)
    {
        aleatoriedad = numeroAleatorio(1,2);
        {
            if(aleatoriedad == 1)
            {
                vidaKriolPc = vidaKriolPc - ataqueDosDamageSpark;
                if(vidaKriolPc < 0)
                {
                    vidaEnemigoDos.innerHTML = "0 HP";
                }
                else
                {
                    vidaEnemigoDos.innerHTML = vidaKriolPc + " HP"; 
                }
                mensajesBoxDos.innerHTML = "Spark quita 35 HP al enemigo";
                habilitarBotones(0);
                pasarTurnoDos.style.display = "block";
                turno = false;
            }
            else
            {
                mensajesBoxDos.innerHTML = "Spark ha fallado";
                habilitarBotones(0);
                pasarTurnoDos.style.display = "block";
                turno = false;
            }
        }
    }
}

function ataqueTresSpark()
{
    if(opcionElegida == 4 || opcionElegida == 5 || opcionElegida == 6)
    {
        if(vidaSparkPlayer >= 90)
        {
            mensajesBoxDos.innerHTML = "Spark se cura pero su vida está al máximo";
            vidaPersonajeDos.innerHTML = "90 HP";
            vidaSparkPlayer = 90;
        }
        else
        {
            vidaSparkPlayer = vidaSparkPlayer + ataqueTresCuraSpark;
            if(vidaSparkPlayer >= 90)
            {
                vidaSparkPlayer = 90;
            }
            mensajesBoxDos.innerHTML = "Spark se cura 25 HP";
            vidaPersonajeDos.innerHTML = vidaSparkPlayer + " HP";
        }
        habilitarBotones(0);
        pasarTurnoDos.style.display = "block";
        turno = false;
    }
}

function ataqueUnoEnemigoSpark()
{
    if(opcionElegida == 2)
    {
        vidaNilaPlayer = vidaNilaPlayer - ataqueUnoDamageSpark;
        if(vidaNilaPlayer < 0)
        {
            vidaPersonajeUno.innerHTML = "0 HP";
        }
        else
        {
            vidaPersonajeUno.innerHTML = vidaNilaPlayer + " HP";
        }
        mensajesBox.innerHTML = "Enemigo te quita 25 HP";
        habilitarBotones(1);
        pasarTurno.style.display = "none";
        turno = true;
    }

    if(opcionElegida == 5)
    {
        vidaSparkPlayer = vidaSparkPlayer - ataqueUnoDamageSpark;
        if(vidaSparkPlayer < 0)
        {
            vidaPersonajeDos.innerHTML = "0 HP";
        }
        else
        {
            vidaPersonajeDos.innerHTML = vidaSparkPlayer + " HP";
        }
        mensajesBoxDos.innerHTML = "Enemigo te quita 25 HP";
        habilitarBotones(1);
        pasarTurnoDos.style.display = "none";
        turno = true;
    }

    if(opcionElegida == 8)
    {
        vidaKriolPlayer = vidaKriolPlayer - ataqueUnoDamageSpark;
        if(vidaKriolPlayer < 0)
        {
            vidaPersonajeTres.innerHTML = "0 HP";
        }
        else
        {
            vidaPersonajeTres.innerHTML = vidaKriolPlayer + " HP";
        }
        mensajesBoxTres.innerHTML = "Enemigo te quita 25 HP";
        habilitarBotones(1);
        pasarTurnoTres.style.display = "none";
        turno = true;
    }
}

function ataqueDosEnemigoSpark()
{
    if(opcionElegida == 2)
    {
        aleatoriedad = numeroAleatorio(1,2);
        {
            if(aleatoriedad == 1)
            {
                vidaNilaPlayer = vidaNilaPlayer - ataqueDosDamageSpark;
                if(vidaNilaPlayer < 0)
                {
                    vidaPersonajeUno.innerHTML = "0 HP";
                }
                else
                {
                    vidaPersonajeUno.innerHTML = vidaNilaPlayer + " HP"; 
                }
                mensajesBox.innerHTML = "Enemigo te quita 35 HP";
                habilitarBotones(1);
                pasarTurno.style.display = "none";
            }
            else
            {
                mensajesBox.innerHTML = "Enemigo ha fallado";
                habilitarBotones(1);
                pasarTurno.style.display = "none";
            }
        }
        turno = true;
    }

    if(opcionElegida == 5)
    {
        aleatoriedad = numeroAleatorio(1,2);
        {
            if(aleatoriedad == 1)
            {
                vidaSparkPlayer = vidaSparkPlayer - ataqueDosDamageSpark;
                if(vidaSparkPlayer < 0)
                {
                    vidaPersonajeDos.innerHTML = "0 HP";
                }
                else
                {
                    vidaPersonajeDos.innerHTML = vidaSparkPlayer + " HP"; 
                }
                mensajesBoxDos.innerHTML = "Enemigo te quita 35 HP";
                habilitarBotones(1);
                pasarTurnoDos.style.display = "none";
            }
            else
            {
                mensajesBoxDos.innerHTML = "Enemigo ha fallado";
                habilitarBotones(1);
                pasarTurnoDos.style.display = "none";
            }
        }
        turno = true;
    }

    if(opcionElegida == 8)
    {
        aleatoriedad = numeroAleatorio(1,2);
        {
            if(aleatoriedad == 1)
            {
                vidaKriolPlayer = vidaKriolPlayer - ataqueDosDamageSpark;
                if(vidaKriolPlayer < 0)
                {
                    vidaPersonajeTres.innerHTML = "0 HP";
                }
                else
                {
                    vidaPersonajeTres.innerHTML = vidaKriolPlayer + " HP"; 
                }
                mensajesBoxTres.innerHTML = "Enemigo te quita 35 HP";
                habilitarBotones(1);
                pasarTurnoTres.style.display = "none";
            }
            else
            {
                mensajesBoxTres.innerHTML = "Enemigo ha fallado";
                habilitarBotones(1);
                pasarTurnoTres.style.display = "none";
            }
        }
        turno = true;
    }
}

function ataqueTresEnemigoSpark()
{
    if(opcionElegida == 2)
    {
            vidaSparkPc = vidaSparkPc + ataqueTresCuraSpark;
            if(vidaSparkPc >= 90)
            {
                vidaEnemigoUno.innerHTML = "90 HP";
                vidaSparkPc = 90;
            }
            else
            {
                vidaEnemigoUno.innerHTML = vidaSparkPc + " HP";
            }
            mensajesBox.innerHTML = "Enemigo se cura 25 HP";
            habilitarBotones(1);
            pasarTurno.style.display = "none";
            turno = true;
    }

    if(opcionElegida == 5)
    {
            vidaSparkPc = vidaSparkPc + ataqueTresCuraSpark;
            if(vidaSparkPc >= 90)
            {
                vidaEnemigoDos.innerHTML = "90 HP";
                vidaSparkPc = 90;
            }
            else
            {
                vidaEnemigoDos.innerHTML = vidaSparkPc + " HP";
            }
            mensajesBoxDos.innerHTML = "Enemigo se cura 25 HP";
            habilitarBotones(1);
            pasarTurnoDos.style.display = "none";
            turno = true;
    }

    if(opcionElegida == 8)
    {
            vidaSparkPc = vidaSparkPc + ataqueTresCuraSpark;
            if(vidaSparkPc >= 90)
            {
                vidaEnemigoTres.innerHTML = "90 HP";
                vidaSparkPc = 90;
            }
            else
            {
                vidaEnemigoTres.innerHTML = vidaSparkPc + " HP";
            }
            mensajesBoxTres.innerHTML = "Enemigo se cura 25 HP";
            habilitarBotones(1);
            pasarTurnoTres.style.display = "none";
            turno = true;
    }
}

// ATAQUES KRIOL PLAYER Y PC //

function ataqueUnoKriol()
{
    if(opcionElegida == 7)
    {
        vidaNilaPc = vidaNilaPc - ataqueUnoDamageKriol;
        if(vidaNilaPc < 0)
        {
            vidaEnemigoTres.innerHTML = "0 HP";
        }
        else
        {
            vidaEnemigoTres.innerHTML = vidaNilaPc + " HP";
        }
        mensajesBoxTres.innerHTML = "Kriol quita 20 HP al enemigo";
        habilitarBotones(0);
        pasarTurnoTres.style.display = "block";
        turno = false;
    }

    if(opcionElegida == 8)
    {
        vidaSparkPc = vidaSparkPc - ataqueUnoDamageKriol;
        if(vidaSparkPc < 0)
        {
            vidaEnemigoTres.innerHTML = "0 HP";
        }
        else
        {
            vidaEnemigoTres.innerHTML = vidaSparkPc + " HP";
        }
        mensajesBoxTres.innerHTML = "Kriol quita 20 HP al enemigo";
        habilitarBotones(0);
        pasarTurnoTres.style.display = "block";
        turno = false;
    }

    if(opcionElegida == 9)
    {
        vidaKriolPc = vidaKriolPc - ataqueUnoDamageKriol;
        if(vidaKriolPc < 0)
        {
            vidaEnemigoTres.innerHTML = "0 HP";
        }
        else
        {
            vidaEnemigoTres.innerHTML = vidaKriolPc + " HP";
        }
        mensajesBoxTres.innerHTML = "Kriol quita 20 HP al enemigo";
        habilitarBotones(0);
        pasarTurnoTres.style.display = "block";
        turno = false;
    }
}

function ataqueDosKriol()
{
    if(opcionElegida == 7)
    {
        aleatoriedad = numeroAleatorio(1,5);
        {
            if(aleatoriedad == 1)
            {
                vidaNilaPc = vidaNilaPc - ataqueDosDamageKriol;
                if(vidaNilaPc < 0)
                {
                    vidaEnemigoTres.innerHTML = "0 HP";
                }
                else
                {
                    vidaEnemigoTres.innerHTML = vidaNilaPc + " HP"; 
                }
                mensajesBoxTres.innerHTML = "Kriol quita 50 HP al enemigo";
                habilitarBotones(0);
                pasarTurnoTres.style.display = "block";
                turno = false;
            }
            else
            {
                mensajesBoxTres.innerHTML = "Kriol ha fallado";
                habilitarBotones(0);
                pasarTurnoTres.style.display = "block";
                turno = false;
            }
        }
    }

    if(opcionElegida == 8)
    {
        aleatoriedad = numeroAleatorio(1,5);
        {
            if(aleatoriedad == 1)
            {
                vidaSparkPc = vidaSparkPc - ataqueDosDamageKriol;
                if(vidaSparkPc < 0)
                {
                    vidaEnemigoTres.innerHTML = "0 HP";
                }
                else
                {
                    vidaEnemigoTres.innerHTML = vidaSparkPc + " HP"; 
                }
                mensajesBoxTres.innerHTML = "Kriol quita 50 HP al enemigo";
                habilitarBotones(0);
                pasarTurnoTres.style.display = "block";
                turno = false;
            }
            else
            {
                mensajesBoxTres.innerHTML = "Kriol ha fallado";
                habilitarBotones(0);
                pasarTurnoTres.style.display = "block";
                turno = false;
            }
        }
    }

    if(opcionElegida == 9)
    {
        aleatoriedad = numeroAleatorio(1,5);
        {
            if(aleatoriedad == 1)
            {
                vidaKriolPc = vidaKriolPc - ataqueDosDamageKriol;
                if(vidaKriolPc < 0)
                {
                    vidaEnemigoTres.innerHTML = "0 HP";
                }
                else
                {
                    vidaEnemigoTres.innerHTML = vidaKriolPc + " HP"; 
                }
                mensajesBoxTres.innerHTML = "Kriol quita 50 HP al enemigo";
                habilitarBotones(0);
                pasarTurnoTres.style.display = "block";
                turno = false;
            }
            else
            {
                mensajesBoxTres.innerHTML = "Kriol ha fallado";
                habilitarBotones(0);
                pasarTurnoTres.style.display = "block";
                turno = false;
            }
        }
    }
}

function ataqueTresKriol()
{
    if(opcionElegida == 7 || opcionElegida == 8 || opcionElegida == 9)
    {
        if(vidaKriolPlayer >= 110)
        {
            mensajesBoxTres.innerHTML = "Kriol se cura pero su vida está al máximo";
            vidaPersonajeTres.innerHTML = "110 HP";
            vidaSparkPlayer = 110;
        }
        else
        {
            vidaKriolPlayer = vidaKriolPlayer + ataqueTresCuraSpark;
            if(vidaKriolPlayer >= 110)
            {
                vidaKriolPlayer = 110;
            }
            mensajesBoxTres.innerHTML = "Kriol se cura 20 HP";
            vidaPersonajeTres.innerHTML = vidaKriolPlayer + " HP";
        }
        habilitarBotones(0);
        pasarTurnoTres.style.display = "block";
        turno = false;
    }
}

function ataqueUnoEnemigoKriol()
{
    if(opcionElegida == 3)
    {
        vidaNilaPlayer = vidaNilaPlayer - ataqueUnoDamageKriol;
        if(vidaNilaPlayer < 0)
        {
            vidaPersonajeUno.innerHTML = "0 HP";
        }
        else
        {
            vidaPersonajeUno.innerHTML = vidaNilaPlayer + " HP";
        }
        mensajesBox.innerHTML = "Enemigo te quita 20 HP";
        habilitarBotones(1);
        pasarTurno.style.display = "none";
        turno = true;
    }

    if(opcionElegida == 6)
    {
        vidaSparkPlayer = vidaSparkPlayer - ataqueUnoDamageKriol;
        if(vidaSparkPlayer < 0)
        {
            vidaPersonajeDos.innerHTML = "0 HP";
        }
        else
        {
            vidaPersonajeDos.innerHTML = vidaSparkPlayer + " HP";
        }
        mensajesBoxDos.innerHTML = "Enemigo te quita 20 HP";
        habilitarBotones(1);
        pasarTurnoDos.style.display = "none";
        turno = true;
    }

    if(opcionElegida == 9)
    {
        vidaKriolPlayer = vidaKriolPlayer - ataqueUnoDamageKriol;
        if(vidaKriolPlayer < 0)
        {
            vidaPersonajeTres.innerHTML = "0 HP";
        }
        else
        {
            vidaPersonajeTres.innerHTML = vidaKriolPlayer + " HP";
        }
        mensajesBoxTres.innerHTML = "Enemigo te quita 20 HP";
        habilitarBotones(1);
        pasarTurnoTres.style.display = "none";
        turno = true;
    }

}

function ataqueDosEnemigoKriol()
{
    if(opcionElegida == 3)
    {
        aleatoriedad = numeroAleatorio(1,5);
        {
            if(aleatoriedad == 1)
            {
                vidaNilaPlayer = vidaNilaPlayer - ataqueDosDamageKriol;
                if(vidaNilaPlayer < 0)
                {
                    vidaPersonajeUno.innerHTML = "0 HP";
                }
                else
                {
                    vidaPersonajeUno.innerHTML = vidaNilaPlayer + " HP"; 
                }
                mensajesBox.innerHTML = "Enemigo te quita 50 HP";
                habilitarBotones(1);
                pasarTurno.style.display = "none";
            }
            else
            {
                mensajesBox.innerHTML = "Enemigo ha fallado";
                habilitarBotones(1);
                pasarTurno.style.display = "none";
            }
        }
        turno = true;
    }

    if(opcionElegida == 6)
    {
        aleatoriedad = numeroAleatorio(1,5);
        {
            if(aleatoriedad == 1)
            {
                vidaSparkPlayer = vidaSparkPlayer - ataqueDosDamageKriol;
                if(vidaSparkPlayer < 0)
                {
                    vidaPersonajeDos.innerHTML = "0 HP";
                }
                else
                {
                    vidaPersonajeDos.innerHTML = vidaSparkPlayer + " HP"; 
                }
                mensajesBoxDos.innerHTML = "Enemigo te quita 50 HP";
                habilitarBotones(1);
                pasarTurnoDos.style.display = "none";
            }
            else
            {
                mensajesBoxDos.innerHTML = "Enemigo ha fallado";
                habilitarBotones(1);
                pasarTurnoDos.style.display = "none";
            }
        }
        turno = true;
    }

    if(opcionElegida == 9)
    {
        aleatoriedad = numeroAleatorio(1,5);
        {
            if(aleatoriedad == 1)
            {
                vidaKriolPlayer = vidaKriolPlayer - ataqueDosDamageKriol;
                if(vidaKriolPlayer < 0)
                {
                    vidaPersonajeTres.innerHTML = "0 HP";
                }
                else
                {
                    vidaPersonajeTres.innerHTML = vidaKriolPlayer + " HP"; 
                }
                mensajesBoxTres.innerHTML = "Enemigo te quita 50 HP";
                habilitarBotones(1);
                pasarTurnoTres.style.display = "none";
            }
            else
            {
                mensajesBoxTres.innerHTML = "Enemigo ha fallado";
                habilitarBotones(1);
                pasarTurnoTres.style.display = "none";
            }
        }
        turno = true;
    }
}

function ataqueTresEnemigoKriol()
{
    if(opcionElegida == 3)
    {
            vidaKriolPc = vidaKriolPc + ataqueTresCuraKriol;
            if(vidaKriolPc >= 110)
            {
                vidaEnemigoUno.innerHTML = "110 HP";
                vidaKriolPc = 110;
            }
            else
            {
                vidaEnemigoUno.innerHTML = vidaKriolPc + " HP";
            }
            mensajesBox.innerHTML = "Enemigo se cura 20 HP";
            habilitarBotones(1);
            pasarTurno.style.display = "none";
            turno = true;
    }

    if(opcionElegida == 6)
    {
            vidaKriolPc = vidaKriolPc + ataqueTresCuraKriol;
            if(vidaKriolPc >= 110)
            {
                vidaEnemigoDos.innerHTML = "110 HP";
                vidaKriolPc = 110;
            }
            else
            {
                vidaEnemigoDos.innerHTML = vidaKriolPc + " HP";
            }
            mensajesBoxDos.innerHTML = "Enemigo se cura 20 HP";
            habilitarBotones(1);
            pasarTurnoDos.style.display = "none";
            turno = true;
    }

    if(opcionElegida == 9)
    {
            vidaKriolPc = vidaKriolPc + ataqueTresCuraKriol;
            if(vidaKriolPc >= 110)
            {
                vidaEnemigoTres.innerHTML = "110 HP";
                vidaKriolPc = 110;
            }
            else
            {
                vidaEnemigoTres.innerHTML = vidaKriolPc + " HP";
            }
            mensajesBoxTres.innerHTML = "Enemigo se cura 20 HP";
            habilitarBotones(1);
            pasarTurnoTres.style.display = "none";
            turno = true;
    }
}
// HABILITAR BOTONES EN HTML //

function habilitarBotones(opcion)
{
    if(opcion == 1)
    {
        ataqueUnoNilaRef.disabled = false;
        ataqueDosNilaRef.disabled = false;
        ataqueTresNilaRef.disabled = false;

        ataqueUnoSparkRef.disabled = false;
        ataqueDosSparkRef.disabled = false;
        ataqueTresSparkRef.disabled = false;

        ataqueUnoKriolRef.disabled = false;
        ataqueDosKriolRef.disabled = false;
        ataqueTresKriolRef.disabled = false;
    }
    else if(opcion == 0)
    {
        ataqueUnoNilaRef.disabled = true;
        ataqueDosNilaRef.disabled = true;
        ataqueTresNilaRef.disabled = true;

        ataqueUnoSparkRef.disabled = true;
        ataqueDosSparkRef.disabled = true;
        ataqueTresSparkRef.disabled = true;

        ataqueUnoKriolRef.disabled = true;
        ataqueDosKriolRef.disabled = true;
        ataqueTresKriolRef.disabled = true;
    }
    
}
// Cargar HTMl antes de JS //
window.addEventListener("load", comenzarJuego);