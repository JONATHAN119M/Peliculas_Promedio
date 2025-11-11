// --- DATOS Y CONFIGURACIÓN ---
const API_KEY = '3fd2be6f0c70a2a598f084ddfb75487c';

// Tu array original de 100 películas
const peliculas = [
    { id: 1, titulo: "The Shawshank Redemption", año: 1994, director: "Frank Darabont", genero: "Drama", duracion: 142, calificacion: 9.3 },
    { id: 2, titulo: "The Godfather", año: 1972, director: "Francis Ford Coppola", genero: "Crimen", duracion: 175, calificacion: 9.2 },
    { id: 3, titulo: "The Dark Knight", año: 2008, director: "Christopher Nolan", genero: "Acción", duracion: 152, calificacion: 9.0 },
    { id: 4, titulo: "Pulp Fiction", año: 1994, director: "Quentin Tarantino", genero: "Crimen", duracion: 154, calificacion: 8.9 },
    { id: 5, titulo: "Forrest Gump", año: 1994, director: "Robert Zemeckis", genero: "Drama", duracion: 142, calificacion: 8.8 },
    { id: 6, titulo: "Inception", año: 2010, director: "Christopher Nolan", genero: "Ciencia ficción", duracion: 148, calificacion: 8.8 },
    { id: 7, titulo: "Fight Club", año: 1999, director: "David Fincher", genero: "Drama", duracion: 139, calificacion: 8.8 },
    { id: 8, titulo: "The Matrix", año: 1999, director: "Lana Wachowski, Lilly Wachowski", genero: "Ciencia ficción", duracion: 136, calificacion: 8.7 },
    { id: 9, titulo: "The Lord of the Rings: The Fellowship of the Ring", año: 2001, director: "Peter Jackson", genero: "Aventura", duracion: 178, calificacion: 8.8 },
    { id: 10, titulo: "The Lord of the Rings: The Two Towers", año: 2002, director: "Peter Jackson", genero: "Aventura", duracion: 179, calificacion: 8.7 },
    { id: 11, titulo: "The Lord of the Rings: The Return of the King", año: 2003, director: "Peter Jackson", genero: "Aventura", duracion: 201, calificacion: 8.9 },
    { id: 12, titulo: "Interstellar", año: 2014, director: "Christopher Nolan", genero: "Ciencia ficción", duracion: 169, calificacion: 8.6 },
    { id: 13, titulo: "Gladiator", año: 2000, director: "Ridley Scott", genero: "Acción", duracion: 155, calificacion: 8.5 },
    { id: 14, titulo: "Goodfellas", año: 1990, director: "Martin Scorsese", genero: "Crimen", duracion: 146, calificacion: 8.7 },
    { id: 15, titulo: "The Silence of the Lambs", año: 1991, director: "Jonathan Demme", genero: "Thriller", duracion: 118, calificacion: 8.6 },
    { id: 16, titulo: "Se7en", año: 1995, director: "David Fincher", genero: "Thriller", duracion: 127, calificacion: 8.6 },
    { id: 17, titulo: "Saving Private Ryan", año: 1998, director: "Steven Spielberg", genero: "Bélica", duracion: 169, calificacion: 8.6 },
    { id: 18, titulo: "Schindler’s List", año: 1993, director: "Steven Spielberg", genero: "Histórico", duracion: 195, calificacion: 9.0 },
    { id: 19, titulo: "The Green Mile", año: 1999, director: "Frank Darabont", genero: "Drama", duracion: 189, calificacion: 8.6 },
    { id: 20, titulo: "The Prestige", año: 2006, director: "Christopher Nolan", genero: "Drama", duracion: 130, calificacion: 8.5 },
    { id: 21, titulo: "Titanic", año: 1997, director: "James Cameron", genero: "Romance", duracion: 195, calificacion: 7.9 },
    { id: 22, titulo: "Avatar", año: 2009, director: "James Cameron", genero: "Ciencia ficción", duracion: 162, calificacion: 7.8 },
    { id: 23, titulo: "The Departed", año: 2006, director: "Martin Scorsese", genero: "Crimen", duracion: 151, calificacion: 8.5 },
    { id: 24, titulo: "The Wolf of Wall Street", año: 2013, director: "Martin Scorsese", genero: "Comedia", duracion: 180, calificacion: 8.2 },
    { id: 25, titulo: "Joker", año: 2019, director: "Todd Phillips", genero: "Drama", duracion: 122, calificacion: 8.4 },
    { id: 26, titulo: "Parasite", año: 2019, director: "Bong Joon-ho", genero: "Thriller", duracion: 132, calificacion: 8.6 },
    { id: 27, titulo: "Spirited Away", año: 2001, director: "Hayao Miyazaki", genero: "Animación", duracion: 125, calificacion: 8.6 },
    { id: 28, titulo: "Toy Story", año: 1995, director: "John Lasseter", genero: "Animación", duracion: 81, calificacion: 8.3 },
    { id: 29, titulo: "Finding Nemo", año: 2003, director: "Andrew Stanton", genero: "Animación", duracion: 100, calificacion: 8.2 },
    { id: 30, titulo: "Inside Out", año: 2015, director: "Pete Docter", genero: "Animación", duracion: 95, calificacion: 8.1 },
    { id: 31, titulo: "Up", año: 2009, director: "Pete Docter", genero: "Animación", duracion: 96, calificacion: 8.3 },
    { id: 32, titulo: "Coco", año: 2017, director: "Lee Unkrich", genero: "Animación", duracion: 105, calificacion: 8.4 },
    { id: 33, titulo: "WALL·E", año: 2008, director: "Andrew Stanton", genero: "Animación", duracion: 98, calificacion: 8.4 },
    { id: 34, titulo: "Avengers: Endgame", año: 2019, director: "Anthony y Joe Russo", genero: "Acción", duracion: 181, calificacion: 8.4 },
    { id: 35, titulo: "Iron Man", año: 2008, director: "Jon Favreau", genero: "Acción", duracion: 126, calificacion: 7.9 },
    { id: 36, titulo: "Black Panther", año: 2018, director: "Ryan Coogler", genero: "Acción", duracion: 134, calificacion: 7.3 },
    { id: 37, titulo: "Guardians of the Galaxy", año: 2014, director: "James Gunn", genero: "Aventura", duracion: 121, calificacion: 8.0 },
    { id: 38, titulo: "Doctor Strange", año: 2016, director: "Scott Derrickson", genero: "Acción", duracion: 115, calificacion: 7.5 },
    { id: 39, titulo: "Spider-Man: No Way Home", año: 2021, director: "Jon Watts", genero: "Acción", duracion: 148, calificacion: 8.3 },
    { id: 40, titulo: "Dune: Part One", año: 2021, director: "Denis Villeneuve", genero: "Ciencia ficción", duracion: 155, calificacion: 8.0 },
    { id: 41, titulo: "Blade Runner 2049", año: 2017, director: "Denis Villeneuve", genero: "Ciencia ficción", duracion: 164, calificacion: 8.0 },
    { id: 42, titulo: "Arrival", año: 2016, director: "Denis Villeneuve", genero: "Ciencia ficción", duracion: 116, calificacion: 7.9 },
    { id: 43, titulo: "Mad Max: Fury Road", año: 2015, director: "George Miller", genero: "Acción", duracion: 120, calificacion: 8.1 },
    { id: 44, titulo: "The Revenant", año: 2015, director: "Alejandro G. Iñárritu", genero: "Aventura", duracion: 156, calificacion: 8.0 },
    { id: 45, titulo: "Birdman", año: 2014, director: "Alejandro G. Iñárritu", genero: "Comedia", duracion: 119, calificacion: 7.7 },
    { id: 46, titulo: "The Grand Budapest Hotel", año: 2014, director: "Wes Anderson", genero: "Comedia", duracion: 99, calificacion: 8.1 },
    { id: 47, titulo: "La La Land", año: 2016, director: "Damien Chazelle", genero: "Romance", duracion: 128, calificacion: 8.0 },
    { id: 48, titulo: "Whiplash", año: 2014, director: "Damien Chazelle", genero: "Drama", duracion: 107, calificacion: 8.5 },
    { id: 49, titulo: "Oppenheimer", año: 2023, director: "Christopher Nolan", genero: "Histórico", duracion: 180, calificacion: 8.6 },
    { id: 50, titulo: "Barbie", año: 2023, director: "Greta Gerwig", genero: "Comedia", duracion: 114, calificacion: 6.9 },
    { id: 51, titulo: "The Social Network", año: 2010, director: "David Fincher", genero: "Drama", duracion: 120, calificacion: 7.8 },
    { id: 52, titulo: "Her", año: 2013, director: "Spike Jonze", genero: "Romance", duracion: 126, calificacion: 8.0 },
    { id: 53, titulo: "The Truman Show", año: 1998, director: "Peter Weir", genero: "Drama", duracion: 103, calificacion: 8.2 },
    { id: 54, titulo: "Cast Away", año: 2000, director: "Robert Zemeckis", genero: "Aventura", duracion: 143, calificacion: 7.8 },
    { id: 55, titulo: "The Sixth Sense", año: 1999, director: "M. Night Shyamalan", genero: "Thriller", duracion: 107, calificacion: 8.1 },
    { id: 56, titulo: "American Beauty", año: 1999, director: "Sam Mendes", genero: "Drama", duracion: 122, calificacion: 8.3 },
    { id: 57, titulo: "The Lion King", año: 1994, director: "Roger Allers, Rob Minkoff", genero: "Animación", duracion: 88, calificacion: 8.5 },
    { id: 58, titulo: "Beauty and the Beast", año: 1991, director: "Gary Trousdale, Kirk Wise", genero: "Animación", duracion: 84, calificacion: 8.0 },
    { id: 59, titulo: "Frozen", año: 2013, director: "Chris Buck, Jennifer Lee", genero: "Animación", duracion: 102, calificacion: 7.4 },
    { id: 60, titulo: "Shrek", año: 2001, director: "Andrew Adamson, Vicky Jenson", genero: "Animación", duracion: 90, calificacion: 7.9 },
    { id: 61, titulo: "The Incredibles", año: 2004, director: "Brad Bird", genero: "Animación", duracion: 115, calificacion: 8.0 },
    { id: 62, titulo: "Ratatouille", año: 2007, director: "Brad Bird", genero: "Animación", duracion: 111, calificacion: 8.1 },
    { id: 63, titulo: "Monsters, Inc.", año: 2001, director: "Pete Docter", genero: "Animación", duracion: 92, calificacion: 8.1 },
    { id: 64, titulo: "The Pursuit of Happyness", año: 2006, director: "Gabriele Muccino", genero: "Drama", duracion: 117, calificacion: 8.0 },
    { id: 65, titulo: "Slumdog Millionaire", año: 2008, director: "Danny Boyle", genero: "Drama", duracion: 120, calificacion: 8.0 },
    { id: 66, titulo: "12 Years a Slave", año: 2013, director: "Steve McQueen", genero: "Histórico", duracion: 134, calificacion: 8.1 },
    { id: 67, titulo: "The Pianist", año: 2002, director: "Roman Polanski", genero: "Histórico", duracion: 150, calificacion: 8.5 },
    { id: 68, titulo: "The Intouchables", año: 2011, director: "Olivier Nakache, Éric Toledano", genero: "Comedia", duracion: 112, calificacion: 8.5 },
    { id: 69, titulo: "Amélie", año: 2001, director: "Jean-Pierre Jeunet", genero: "Romance", duracion: 122, calificacion: 8.3 },
    { id: 70, titulo: "Life of Pi", año: 2012, director: "Ang Lee", genero: "Aventura", duracion: 127, calificacion: 7.9 },
    { id: 71, titulo: "Gravity", año: 2013, director: "Alfonso Cuarón", genero: "Ciencia ficción", duracion: 91, calificacion: 7.7 },
    { id: 72, titulo: "Children of Men", año: 2006, director: "Alfonso Cuarón", genero: "Ciencia ficción", duracion: 109, calificacion: 7.9 },
    { id: 73, titulo: "Roma", año: 2018, director: "Alfonso Cuarón", genero: "Drama", duracion: 135, calificacion: 7.7 },
    { id: 74, titulo: "The Shape of Water", año: 2017, director: "Guillermo del Toro", genero: "Fantasía", duracion: 123, calificacion: 7.3 },
    { id: 75, titulo: "Pan’s Labyrinth", año: 2006, director: "Guillermo del Toro", genero: "Fantasía", duracion: 118, calificacion: 8.2 },
    { id: 76, titulo: "Hellboy", año: 2004, director: "Guillermo del Toro", genero: "Acción", duracion: 122, calificacion: 6.8 },
    { id: 77, titulo: "No Country for Old Men", año: 2007, director: "Joel Coen, Ethan Coen", genero: "Thriller", duracion: 122, calificacion: 8.2 },
    { id: 78, titulo: "Fargo", año: 1996, director: "Joel Coen, Ethan Coen", genero: "Crimen", duracion: 98, calificacion: 8.1 },
    { id: 79, titulo: "The Big Lebowski", año: 1998, director: "Joel Coen, Ethan Coen", genero: "Comedia", duracion: 117, calificacion: 8.1 },
    { id: 80, titulo: "There Will Be Blood", año: 2007, director: "Paul Thomas Anderson", genero: "Drama", duracion: 158, calificacion: 8.2 },
    { id: 81, titulo: "Boogie Nights", año: 1997, director: "Paul Thomas Anderson", genero: "Drama", duracion: 155, calificacion: 7.9 },
    { id: 82, titulo: "Magnolia", año: 1999, director: "Paul Thomas Anderson", genero: "Drama", duracion: 188, calificacion: 8.0 },
    { id: 83, titulo: "Oldboy", año: 2003, director: "Park Chan-wook", genero: "Thriller", duracion: 120, calificacion: 8.4 },
    { id: 84, titulo: "Memories of Murder", año: 2003, director: "Bong Joon-ho", genero: "Crimen", duracion: 132, calificacion: 8.1 },
    { id: 85, titulo: "Snowpiercer", año: 2013, director: "Bong Joon-ho", genero: "Ciencia ficción", duracion: 126, calificacion: 7.1 },
    { id: 86, titulo: "Train to Busan", año: 2016, director: "Yeon Sang-ho", genero: "Terror", duracion: 118, calificacion: 7.6 },
    { id: 87, titulo: "Get Out", año: 2017, director: "Jordan Peele", genero: "Terror", duracion: 104, calificacion: 7.8 },
    { id: 88, titulo: "Us", año: 2019, director: "Jordan Peele", genero: "Terror", duracion: 116, calificacion: 6.8 },
    { id: 89, titulo: "Nope", año: 2022, director: "Jordan Peele", genero: "Terror", duracion: 130, calificacion: 6.9 },
    { id: 90, titulo: "A Quiet Place", año: 2018, director: "John Krasinski", genero: "Terror", duracion: 90, calificacion: 7.5 },
    { id: 91, titulo: "It", año: 2017, director: "Andy Muschietti", genero: "Terror", duracion: 135, calificacion: 7.3 },
    { id: 92, titulo: "The Conjuring", año: 2013, director: "James Wan", genero: "Terror", duracion: 112, calificacion: 7.5 },
    { id: 93, titulo: "Insidious", año: 2010, director: "James Wan", genero: "Terror", duracion: 103, calificacion: 6.8 },
    { id: 94, titulo: "Saw", año: 2004, director: "James Wan", genero: "Terror", duracion: 103, calificacion: 7.6 },
    { id: 95, titulo: "The Exorcist", año: 1973, director: "William Friedkin", genero: "Terror", duracion: 122, calificacion: 8.1 },
    { id: 96, titulo: "Psycho", año: 1960, director: "Alfred Hitchcock", genero: "Thriller", duracion: 109, calificacion: 8.5 },
    { id: 97, titulo: "Rear Window", año: 1954, director: "Alfred Hitchcock", genero: "Suspenso", duracion: 112, calificacion: 8.4 },
    { id: 98, titulo: "Vertigo", año: 1958, director: "Alfred Hitchcock", genero: "Misterio", duracion: 128, calificacion: 8.3 },
    { id: 99, titulo: "North by Northwest", año: 1959, director: "Alfred Hitchcock", genero: "Aventura", duracion: 136, calificacion: 8.3 },
    { id: 100, titulo: "Citizen Kane", año: 1941, director: "Orson Welles", genero: "Drama", duracion: 119, calificacion: 8.3 }
];


// --- EJECUCIÓN PRINCIPAL ---

document.addEventListener("DOMContentLoaded", () => {
    const contenedorPeliculas = document.getElementById("contenedor-peliculas");
    const contenedorPromedios = document.getElementById("promedios-genero");

    if (contenedorPeliculas && contenedorPromedios) {
        // Renderizado inicial
        mostrarPeliculasConAPI(peliculas);
        calcularYMostrarPromedios(peliculas);

        // --- ¡NUEVO! AÑADIR EVENT LISTENERS ---
        // Usamos delegación de eventos para manejar clics en todas las estrellas
        contenedorPeliculas.addEventListener('click', manejarClickEstrella);
    }
});


// --- FUNCIONES DE LA API ---

/**
 * Busca el póster de una película en TMDb.
 * @param {string} titulo El título de la película.
 * @param {number} año El año de estreno.
 * @returns {Promise<string>} La URL del póster o un placeholder.
 */
async function buscarImagenPelicula(titulo, año) {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(titulo)}&year=${año}&language=es`;
    const placeholderUrl = `https://via.placeholder.com/220x330/333/fff?text=${encodeURIComponent(titulo)}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.results && data.results.length > 0) {
            const posterPath = data.results[0].poster_path;
            return posterPath 
                ? `https://image.tmdb.org/t/p/w500${posterPath}` 
                : placeholderUrl;
        }
        return placeholderUrl;
    } catch (error) {
        console.error(`Error al buscar ${titulo}:`, error);
        return placeholderUrl;
    }
}


// --- FUNCIONES DE RENDERIZADO (MODIFICADAS) ---

/**
 * Muestra todas las películas, cargando sus imágenes desde la API.
 * @param {Array} listaPeliculas 
 */
async function mostrarPeliculasConAPI(listaPeliculas) {
    const contenedor = document.getElementById("contenedor-peliculas");
    contenedor.innerHTML = ""; 

    for (const peli of listaPeliculas) {
        const card = document.createElement("div");
        card.classList.add("pelicula-card");
        // ¡NUEVO! Añadimos el ID de la película a la tarjeta para encontrarla fácil
        card.dataset.movieId = peli.id;

        const info = document.createElement("div");
        info.classList.add("pelicula-info");
        
        // --- HTML DE LA TARJETA MODIFICADO ---
        info.innerHTML = `
            <h3>${peli.titulo}</h3>
            <p><strong>Año:</strong> ${peli.año}</p>
            <p><strong>Género:</strong> ${peli.genero}</p>
            <p><strong>Director:</strong> ${peli.director}</p>
            
            <div class="estrellas-info">
                <strong>Calificación:</strong>
                <div class="estrellas-interactivas" data-movie-id="${peli.id}">
                    </div>
                (<span class="calificacion-texto">${peli.calificacion.toFixed(1)}</span>)
            </div>
        `;

        // 2. Crear la imagen con placeholder
        const img = document.createElement("img");
        img.src = `https://via.placeholder.com/220x330/666/fff?text=Cargando...`;
        img.alt = `Póster de ${peli.titulo}`;
        
        // 3. Montar la tarjeta
        card.appendChild(img);
        card.appendChild(info);
        
        // --- ¡NUEVO! Renderizar las estrellas iniciales ---
        const contenedorEstrellas = card.querySelector(".estrellas-interactivas");
        renderizarEstrellas(contenedorEstrellas, peli.calificacion);

        // 4. Añadir la tarjeta al DOM
        contenedor.appendChild(card);

        // 5. Buscar y cargar la imagen real
        const imagenUrl = await buscarImagenPelicula(peli.titulo, peli.año);
        img.src = imagenUrl;
    }
}

/**
 * Función para calcular el promedio de calificación por género y mostrarlo
 */
function calcularYMostrarPromedios(peliculas) {
    const contenedor = document.getElementById("promedios-genero");
    contenedor.innerHTML = "";

    const generosData = peliculas.reduce((acc, pelicula) => {
        const genero = pelicula.genero;
        if (!acc[genero]) {
            acc[genero] = { suma: 0, conteo: 0 };
        }
        acc[genero].suma += pelicula.calificacion;
        acc[genero].conteo += 1;
        return acc;
    }, {});

    for (const genero in generosData) {
        const data = generosData[genero];
        const promedio = data.suma / data.conteo;
        const promedioHtml = `
            <div class="promedio-item">
                ${genero}: <span>${promedio.toFixed(1)}</span>
            </div>
        `;
        contenedor.innerHTML += promedioHtml;
    }
}

// --- ¡NUEVAS FUNCIONES PARA INTERACTIVIDAD! ---

/**
 * ¡NUEVO!
 * Dibuja (o redibuja) las 5 estrellas dentro de un contenedor.
 * @param {HTMLElement} contenedorEl - El div.estrellas-interactivas
 * @param {number} calificacion - La calificación (ej. 9.3)
 */
function renderizarEstrellas(contenedorEl, calificacion) {
    contenedorEl.innerHTML = ""; // Limpia estrellas anteriores
    
    // Mapeamos la calificación 1-10 a una escala de 1-5 estrellas
    const estrellasLlenas = Math.round(calificacion / 2);

    for (let i = 1; i <= 5; i++) {
        const estrella = document.createElement('span');
        // Mapeamos la estrella (1-5) a un valor de calificación (2-10)
        estrella.dataset.value = i * 2; 
        estrella.innerHTML = '&#9733;'; // Carácter de estrella
        
        if (i <= estrellasLlenas) {
            estrella.classList.add('filled');
        }
        contenedorEl.appendChild(estrella);
    }
}

/**
 * ¡NUEVO!
 * Se ejecuta CADA VEZ que el usuario hace clic en el contenedor de películas.
 * @param {Event} e - El objeto del evento de clic
 */
function manejarClickEstrella(e) {
    // Si el clic NO fue en una de nuestras estrellas, no hacemos nada
    if (!e.target.matches('.estrellas-interactivas span')) {
        return;
    }

    // 1. Obtener datos del clic
    const estrellaClickeada = e.target;
    const contenedorEstrellas = estrellaClickeada.parentElement;
    const tarjeta = estrellaClickeada.closest('.pelicula-card');
    
    const movieId = tarjeta.dataset.movieId;
    const nuevaCalificacion = parseFloat(estrellaClickeada.dataset.value); // (2, 4, 6, 8, o 10)

    // 2. Actualizar el dato en el array 'peliculas'
    const peliculaIndex = peliculas.findIndex(p => p.id == movieId);
    if (peliculaIndex > -1) {
        peliculas[peliculaIndex].calificacion = nuevaCalificacion;
    }

    // 3. Actualizar la UI (interfaz de usuario)
    
    // 3a. Actualizar el número de texto (ej. "8.0")
    const textoSpan = tarjeta.querySelector('.calificacion-texto');
    textoSpan.textContent = nuevaCalificacion.toFixed(1);

    // 3b. Redibujar las estrellas de esta tarjeta
    renderizarEstrellas(contenedorEstrellas, nuevaCalificacion);

    // 3c. ¡TU REQUISITO! Recalcular promedios automáticamente
    calcularYMostrarPromedios(peliculas);
}


// --- TUS 10 CONSULTAS ORIGINALES (REFERENCIA PARA LA CONSOLA) ---
// (Este código no se usa para la página, solo para la consola)

console.log("--- INICIO DE CONSULTAS ORIGINALES (CONSOLA) ---");
const movieDrama = peliculas.filter(movie => movie.genero === "Drama");
console.log("1. Películas de Drama:", movieDrama.length);
const movieAction = peliculas.filter(movie => movie.genero === "Acción");
console.log("2. Películas de Acción:", movieAction.length);
const movieCienciaF = peliculas.filter(movie => movie.genero === "Ciencia ficción");
console.log("3. Películas de Ciencia Ficción:", movieCienciaF.length);
const movieAventuraDrama = peliculas.filter(movie => movie.genero === "Aventura" || movie.genero === "Drama");
console.log("4. Películas de Aventura o Drama:", movieAventuraDrama.length);
const movieLetraS = peliculas.filter(movie => movie.titulo.startsWith("S"));
console.log("5. Películas que empiezan con S:", movieLetraS.length);
const movie2000a2010 = peliculas.filter(movie => movie.año >= 2000 && movie.año <= 2010);
console.log("6. Películas de 2000 a 2010:", movie2000a2010.length);
const movie90a100min = peliculas.filter(movie => movie.duracion >= 90 && movie.duracion <= 100);
console.log("7. Películas de 90 a 100 min:", movie90a100min.length);
const dramaMovies = peliculas.filter(movie => movie.genero === "Drama");
const CalificacionPeliculasDrama = dramaMovies.reduce((acc, movie) => acc + movie.calificacion, 0) / dramaMovies.length;
console.log("8. Promedio Calificación Drama:", CalificacionPeliculasDrama.toFixed(2));
const fantasiaGDT = peliculas.filter(movie => movie.genero === "Fantasía" && movie.director === "Guillermo del Toro");
console.log("9. Fantasía de Guillermo del Toro:", fantasiaGDT.length);
const dura2Hr = peliculas.some(movie => movie.duracion === 120);
console.log("10. ¿Alguna película dura 2 horas (120 min)?:", dura2Hr);
console.log("--- FIN DE CONSULTAS ORIGINALES (CONSOLA) ---");