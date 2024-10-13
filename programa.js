

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
 * @param {Array<Object>} array con los juegos y sus respectivos géneros
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


/**
 * Ejercicio nº6: Lista los productos según su tipo
 * @param {Array<Object>} array con objetos de el nombre, isla y tipo de cada producto
 * @returns 
 */
function listarProductosPorTipo(array){
    let objeto = {};
    let tipoSinRepetir = [];

    for (let i = 0; i < array.length; i++) {
        if (tipoSinRepetir.indexOf(array[i].tipo)==-1) {
            tipoSinRepetir.push(array[i].tipo);
            objeto[array[i].tipo] = {};
        }
    }

    for (let i = 0; i < tipoSinRepetir.length; i++) {
        let tipo = tipoSinRepetir[i];

        for (let j = 0; j < array.length; j++) {
            let islaAlimento = {};

            if (array[j].tipo==tipo) {
                islaAlimento[array[j].isla] = [array[j].nombre];

                if (Object.values(objeto[tipo]).length==0) {
                    objeto[tipo] = islaAlimento;
                }else {
                    objeto[tipo] = Object.assign(objeto[tipo], islaAlimento);
                }
            }
        } 
    }
    return objeto;
}

// PRUEBAS
// console.log(listarProductosPorTipo([
//     {nombre:"Gofio", isla:"Tenerife", tipo:"Alimento"},
//     {nombre:"Queso Majorero", isla:"Fuerteventura", tipo:"Alimento"},
//     {nombre:"Ron Arehucas", isla:"Gran Canaria", tipo:"Bebida"},
//     {nombre:"Mojo Picón", isla:"Tenerife", tipo:"Salsa"}
// ]));

// console.log(listarProductosPorTipo([
//     {nombre:"Vino de Malvasía", isla:"Lanzarote", tipo:"Bebida"},
//     {nombre:"Papas Arrugadas", isla:"Tenerife", tipo:"Alimento"},
//     {nombre:"Dulce de Almendra", isla:"La Palma", tipo:"Postre"},
//     {nombre:"Puchero Canario", isla:"Gran Canaria", tipo:"Alimento"},
//     {nombre:"Gofio", isla:"La Gomera", tipo:"Alimento"},
//     {nombre:"Ron de La Palma", isla:"La Palma", tipo:"Bebida"},
// ]));


/**
 * Ejercicio nº7: Ordena playas según su puntuación de mayor a menor
 * @param {Array<String>} playas 
 * @param {Array<int>} puntuacion 
 * @returns un array con las playas en su respectivo orden. No muestra la puntuación
 */
function rankingPlayas(playas, puntuacion){
    let aux = [];
    let resultado = [];

    for (let i = 0; i < playas.length; i++) {
        aux.push([puntuacion[i], playas[i]]);
    }

    aux.sort((a,b)=>a[0]-b[0]);

    for (let i = aux.length-1; i >= 0; i--) {
        resultado.push(aux[i][1]);
    }

    return resultado;
}

// PRUEBAS
// console.log(rankingPlayas(["Las Teresitas", "Las Canteras", "Maspalomas"], [8,9,7]));
// console.log(rankingPlayas(["El Médano", "La Tejita"], [6,7]));
// console.log(rankingPlayas(["Benijo", "Papagayo"], [10,9]));


/**
 * Ejercicio nº8: Ordena una lista de destinos de A a Z y muestra solo una cierta cantidad de destinos
 * @param {Array<String>} lista1 
 * @param {Array<String>} lista2 
 * @param {int} numero 
 * @returns array con la cantidad de destinos especificados y ordenados de a -> z
 */
function rutasTuristicas(lista1, lista2, numero){
    let combi = lista1.concat(lista2);
    let unicos = [];

    for (let i = 0; i < combi.length; i++) {
        if (unicos.indexOf(combi[i])==-1) {
            unicos.push(combi[i]);
        }
    }

    unicos.sort();
    unicos = unicos.slice(0, numero);
    return unicos;
}

// PRUEBAS
// console.log(rutasTuristicas(["Teide", "Maspalomas"], ["Anaga", "Teide"], 3));
// console.log(rutasTuristicas(["Garajonay", "Timanfaya"], ["Timanfaya", "Cueva de los verdes"], 2));
// console.log(rutasTuristicas(["La Graciosa", "El Hierro"], ["La Gomera"], 1));


/**
 * Ejercicio nº9: Filtra los números pares y los guarda en un string separados por ", "
 * @param {Array<int>} conjunto 
 * @returns string con los números pares
 */
function filterAndJoinEvens(conjunto){
    let string = "";
    let pares = [];

    for (let i = 0; i < conjunto.length; i++) {
        if (conjunto[i]%2==0) {
            pares.push(conjunto[i]);
        }
    }

    for (let i = 0; i < pares.length; i++) {

        if (i==pares.length-1) {
            string += pares[i];
        }else {
            string += pares[i]+", ";
        }
    }

    return string;
}

// PRUEBAS
// console.log(filterAndJoinEvens([1,2,3,4,5,6]));
// console.log(filterAndJoinEvens([7,9,12,18,21]));
// console.log(filterAndJoinEvens([3,5,7]));


/**
 * Ejercicio nº10: Toma una lista de juegos y una de puntuaciones y devuelve los tres mejores
 * @param {Array<String>} juegos 
 * @param {Array<int>} puntos 
 * @returns 
 */
function topJuegos(juegos, puntos){
    let puntosAux = [].concat(puntos);
    let juegosAux = [];
    let contador = 0;

    puntosAux.sort((a,b)=>a-b);

    for (let i = puntosAux.length-1; i >= 0; i--) {
        if (contador<3) {
            let indice = puntos.indexOf(puntosAux[i]);
            juegosAux.push(juegos[indice]);
            contador++;
        }
    }

    return juegosAux
}

// PRUEBAS  
console.log(topJuegos(["Zelda", "Mario", "Metroid", "Doom"], [95,90,88,92]));
console.log(topJuegos(["Overwatch", "Apex Legends", "Valorant"], [85,90,88]));
console.log(topJuegos(["Stardew Valley", "Hades", "Celeste", "Undertale"], [94,92,95,93]));