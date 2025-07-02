//juego de robo de dinero y compra de influencia

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function comprarInfluencia(personaje) {
    // Permite comprar influencia mientras tenga suficiente dinero
    while (personaje.monto >= 3000) {
        personaje.monto -= costoInfluencia;
        personaje.influencia += 500; // 100 de influencia cuesta 500
    }
}

let i=0; // contador de rondas
let indice = document.getElementById("test");
let resultado;
let costoInfluencia = 1500;

const personajes = [ //vector de personajes
    {
        nombre: "Carlos",
        apellido: "Gomez",
        monto: 0,
        influencia: 0,
        fuerza: 0,
        puntos: 0,
        genero: "beast",
    },
    {
        nombre: "Colo",
        apellido: "Martinez",
        monto: 0,
        influencia: 0,
        fuerza: 0,
        puntos: 0,
        genero: "alien"
    }];

personajes[0].monto = getRandomInt(1000, 3000);
personajes[1].monto = getRandomInt(1000, 3000);

personajes[0].influencia = getRandomInt(1000, 2000);
personajes[1].influencia = getRandomInt(1000, 2000);

personajes[0].fuerza = getRandomInt(1000, 5000);
personajes[1].fuerza = getRandomInt(1000, 5000);



while (personajes[0].puntos < 20 && personajes[1].puntos < 20) {

    if (personajes[0].influencia > personajes[1].influencia) {
        personajes[0].puntos += 1;

    } else if (personajes[0].influencia < personajes[1].influencia) {
        personajes[1].puntos += 1;

    }

    if (personajes[0].fuerza > personajes[1].fuerza) {

        personajes[1].monto -= 50;
        personajes[0].monto += 50;
        personajes[0].fuerza -= 100;
        personajes[0].influencia -= 30;

    } else if (personajes[0].fuerza < personajes[1].fuerza) {

        personajes[0].monto -= 50;
        personajes[1].monto += 50;
        personajes[1].fuerza -= 100;
        personajes[1].influencia -= 100;
    }

switch (true) {
    case personajes[0].puntos > personajes[1].puntos:
        resultado = `Esta ronda la gano ${personajes[0].nombre} ${personajes[0].apellido} gana con ${personajes[0].puntos} puntos! <br>`;
        break;

    case personajes[1].puntos > personajes[0].puntos:
        resultado = `Esta ronda la gano ${personajes[1].nombre} ${personajes[1].apellido} gana con ${personajes[1].puntos} puntos!<br>`;
        break;
}

let muestraPunto;

muestraPunto = `<br>${personajes[0].nombre} ${personajes[0].apellido} tiene ${personajes[0].influencia} de influencia, ${personajes[0].monto} de monto y ${personajes[0].fuerza} de fuerza<br>` +
               `${personajes[1].nombre} ${personajes[1].apellido} tiene ${personajes[1].influencia} de influencia, ${personajes[1].monto} de monto y ${personajes[1].fuerza} de fuerza<br>`;

indice.innerHTML += muestraPunto;
indice.innerHTML += resultado + `Fin de ronda ${i + 1} <br>`;
i++;

if (personajes[0].monto >= 2500) {
        comprarInfluencia(personajes[0]);
        indice.innerHTML += `${personajes[0].nombre} ${personajes[0].apellido} ha comprado influencia. <br>`;
    }

    if (personajes[1].monto >= 2500) {
        comprarInfluencia(personajes[1]);
        indice.innerHTML += `${personajes[1].nombre} ${personajes[1].apellido} ha comprado influencia. <br>`;
    }
}


switch (true) {
    case personajes[0].puntos > personajes[1].puntos:
        resultado = `${personajes[0].nombre} ${personajes[0].apellido} (${personajes[0].genero}) gana con ${personajes[0].puntos} puntos!`;
        break;

    case personajes[1].puntos > personajes[0].puntos:
        resultado = `${personajes[1].nombre} ${personajes[1].apellido} (${personajes[1].genero}) gana con ${personajes[1].puntos} puntos!`;
        break;

    default:
        resultado = "¡Es un empate! Ambos jugadores tienen la misma cantidad de puntos.";
}

indice.innerHTML += resultado;