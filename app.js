// El principal objetivo de este desafío es fortalecer tus habilidades en
//  lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

        function agregarAmigo() {
            // Capturar valor del campo de entrada
            let input = document.getElementById("amigo");
            let nombre = input.value.trim(); // trim() elimina espacios al inicio/final

            // Validar entrada
            // if (nombre === "") {
            //     alert("Por favor, inserte un nombre.");
            //     return;
            // }

            // Actualizar array
            amigos.push(nombre);

            // Mostrar en la lista
            let lista = document.getElementById("listaAmigos");
            let item = document.createElement("li");
            item.textContent = nombre;
            lista.appendChild(item);

            // Limpiar campo de entrada
            input.value = ""; }

    function sortearAmigo() {
        // 1. Validar que haya amigos en el array
        if (amigos.length === 0) {
            alert("No hay amigos para sortear.");
            return;
        }

        // 2. Generar índice aleatorio
        let indiceAleatorio = Math.floor(Math.random() * amigos.length);

        // 3. Obtener el nombre sorteado
        let amigoSorteado = amigos[indiceAleatorio];

        // 4. Mostrar el resultado
        document.getElementById("resultado").innerHTML = 
            "El amigo sorteado es: <strong>" + amigoSorteado + "</strong>";
    }

    let perro = 'hola perro1'
    const   perro1 = 'hola perro2'
    var perro2 = 'hola perro3'