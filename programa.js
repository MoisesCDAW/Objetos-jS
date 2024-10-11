

/**
 * Ejercicio nº1: Combina dos listas de equipos en una sola, elimina los repetidos y los ordena A -> Z
 * @param {Array<String>} lista1 
 * @param {Array<String>} lista2 
 * @returns Array de equipos ordenados y únicos
 */
function combinarEquipos(lista1, lista2){
    let concatenada = lista1.concat(lista2);
    let unicos = [];
    let contador = 0;

    for (let i=0; i<concatenada.length; i++){
        for(let j=0; j<concatenada.length; j++){
            if (concatenada[i]==concatenada[j]) {
                contador++;
            }
        }

        if (contador==1) {
            unicos.push(concatenada[i]);
        }else {
            if (unicos.indexOf(concatenada[i])==-1) {
                unicos.push(concatenada[i]);
            }
        }

        contador=0;
    }

    return unicos.sort();
}

// PRUEBAS
// console.log(combinarEquipos(["Barcelona", "Real Madrid"], ["PSG", "Real Madrid"]));
// console.log(combinarEquipos(["Lakers", "Warrior"], ["Nets", "Lakers"]));
// console.log(combinarEquipos(["Boca"], ["River", "Boca"]));



/**
 * Ejercicio nº2: Clasifica los juegos por género
 * @param {Array<String>} juegos 
 * @param {Array<String>} generos 
 * @returns Objeto con los juegos y sus respectivos géneros
 */
function clasificarVideojuegos(juegos, generos){
    let generosAux = [];
    let juegosAux = [];
    let objeto = {};

    for (let i=0; i<generos.length; i++){
        let indice = generosAux.indexOf(generos[i]);
        if (indice==-1) {
            generosAux.push(generos[i]);
            juegosAux.push(Array(juegos[i]));
        }else {
            juegosAux[indice] = juegosAux[indice].concat(Array(juegos[i]));
        }     
    }

    for (let i = 0; i < juegosAux.length; i++) {
        objeto[generosAux[i]] = juegosAux[i];
    }

    return objeto;
}

// PRUEBAS
// console.log(clasificarVideojuegos(["Fornite", "FIFA", "The Witcher"], ["Battle Royale", "Deportes", "RPG"]));
// console.log(clasificarVideojuegos(["League of Legends", "Call of Duty"], ["MOBA", "FPS"]));
// console.log(clasificarVideojuegos(["Minecraft", "Terraria"], ["Sandbox", "Sandbox"]));