

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


/**
 * Ejercicio nº3: Elimina el primer y último valor de un array
 * @param {Array<T>} array con valores de cualquier tipo
 * @returns el nuevo array
 */
function eliminarPrimeroYUltimo(array){
    if (Array.isArray(array)) {
        array.pop();
        array.shift();
    }else {
        array = false;
    }

    return array;
}

// PRUEBAS
// console.log(eliminarPrimeroYUltimo([1,2,3,4]));
// console.log(eliminarPrimeroYUltimo([9,8,7,6,5]));
// console.log(eliminarPrimeroYUltimo([10,20]));


/**
 * Ejercicio nº4: Cuenta cuántos juegos hay de cada género de la lista
 * @param {Array<String>} array con los juegos y sus respectivos géneros
 * @returns un objeto con el género y la cantidad de juegos
 */
function contarVideojuegosPorGenero(array){
    let objeto = {};
    let repetidos = [];
    
    for (let i = 0; i < array.length; i++) {
        let indice = repetidos.indexOf(array[i].genero);

        if (indice==-1) {
            repetidos.push(array[i].genero);
            objeto[array[i].genero] = 1;
        }else {
            objeto[repetidos[indice]]++;
        }
    }
    return objeto;
}

// PRUEBAS
// console.log(contarVideojuegosPorGenero([
//     {nombre:"Zelda", genero:"Aventura"},
//     {nombre:"Mario", genero:"Plataforma"},
//     {nombre:"Halo", genero:"FPS"},
//     {nombre:"FIFA", genero:"Deportes"},
//     {nombre:"Zelda II", genero:"Aventura"}
// ]));

// console.log(contarVideojuegosPorGenero([
//     {nombre:"Overwatch", genero:"FPS"},
//     {nombre:"Call of Duty", genero:"FPS"},
//     {nombre:"FIFA", genero:"Deportes"},
// ]));


/**
 * Ejercicio nº5: Combina dos conjuntos y el conjunto resultante lo ordena ascendentemente
 * @param {Array<int>} conjunto1 
 * @param {Array<int>} conjunto2 
 * @returns Nuevo array combinado y ordenado
 */
function mergeAndSortNumbers(conjunto1, conjunto2){
    let aux = conjunto1.concat(conjunto2);
    return aux.sort((a,b)=>a-b);
}

// PRUEBAS
// console.log(mergeAndSortNumbers([5,2,8],[1,9,3]));
// console.log(mergeAndSortNumbers([10,20],[5,15,25]));
// console.log(mergeAndSortNumbers([100],[50,150]));


