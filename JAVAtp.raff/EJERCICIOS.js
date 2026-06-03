// EJERCICIO 1// 

const nombre = "Lucía";
const carrera = "Diseño";
let edad = 21;
let ciudad = "Buenos Aires";
let leGustaProgramar = true;
let objetivoDelCurso = "hacer páginas más interactivas";

console.log("Hola, mi nombre es " + nombre + ".");
console.log("Tengo " + edad + " años y estudio " + carrera + ".");
console.log("Vivo en " + ciudad + ".");
console.log("¿Me gusta programar? " + leGustaProgramar);
console.log("Mi objetivo es " + objetivoDelCurso + ".");



//EJERCICIO 2// 
const nombreAlumna = "Martina";
let entregoTrabajo = true;
let trabajoCompleto = false;
let entregaTarde = true;

if (entregoTrabajo == true && trabajoCompleto == true) {
    console.log(nombreAlumna + " entregó el trabajo completo.");

    if (entregaTarde == true) {
        console.log(" la entrega  fue fuera de fecha.");
    }

} else if (entregoTrabajo == true && trabajoCompleto == false) {
    console.log(nombreAlumna + " entregó el trabajo, pero tiene que corregirlo");

    if (entregaTarde == true) {
        console.log("La entrega fue fuera de fecha.");
    }

} else {
    console.log(nombreAlumna + " todavía no entregó el trabajo.");
}


//EJERCICIO 3// 
const secciones = ["Inicio", "Sobre mí", "Portfolio", "Servicios", "Contacto"];

function mostrarSecciones(lista) {
    for (let i = 0; i < lista.length; i++) {
        console.log("Sección disponible: " + lista[i]);
    }
}

mostrarSecciones(secciones);


//EJERCICIO 4//
const secciones1 = ["Inicio", "Sobre mí", "Portfolio", "Servicios", "Contacto"];

function buscarSeccion(lista, seccionBuscada) {

    let encontrada = false;

    for (let i = 0; i < lista.length; i++) {

        if (lista[i] == seccionBuscada) {
            encontrada = true;
        }

    }

    if (encontrada == true) {
        console.log("La sección " + seccionBuscada + " existe en el sitio.");
    } else {
        console.log("La sección " + seccionBuscada + " no existe en el sitio.");
    }

}

buscarSeccion(secciones1, "Portfolio"); 
buscarSeccion(secciones1, "Blog"); 


//EJERCICIO 5// 
const servicios = ["Diseño web", "Branding", "Community management", "Edición de video"];

function generarMensajeServicio(servicio) {
    return "Servicio disponible: " + servicio + ". Consultanos para más información.";
}

function generarMensajesServicios(listaServicios) {

    for (let i = 0; i < listaServicios.length; i++) {
        console.log(generarMensajeServicio(listaServicios[i]));
    }

}

generarMensajesServicios(servicios);


//EJERCICIO 6//
const producto = {
  nombre: "Agenda creativa",
  categoria: "Papelería",
  color: "Lila",
  disponible: true
};

function mostrarProducto(prod) {
  console.log("Producto: " + prod.nombre);
  console.log("Categoría: " + prod.categoria);
  console.log("Color: " + prod.color);

  if (prod.disponible == true) {
    console.log("Disponible: Sí");
  } else {
    console.log("Disponible: No");
  }
}

mostrarProducto(producto);

//EJECICIO 7//
const personaje = {
    nombre: "Luna",
    rol: "Exploradora",
    energia: "alta",
    tieneMapa: true
};

function presentarPersonaje(personaje) {

    console.log(personaje.nombre + " es una " + personaje.rol + ".");

    if (personaje.energia == "alta") {
        console.log("Está lista para comenzar la aventura.");
    } else if (personaje.energia == "media") {
        console.log("Puede avanzar, pero debería descansar pronto.");
    } else {
        console.log("Necesita recuperar energía antes de seguir.");
    }

    if (personaje.tieneMapa == true) {
        console.log("Tiene un mapa para orientarse.");
    } else {
        console.log("No tiene mapa. Puede perderse.");
    }

}

presentarPersonaje(personaje);


//EJERCICIO 8//
const publicaciones = [
    {
        titulo: "Nuevo lanzamiento",
        red: "Instagram",
        estado: "aprobada"
    },
    {
        titulo: "Promo de temporada",
        red: "Facebook",
        estado: "pendiente"
    },
    {
        titulo: "Video institucional",
        red: "TikTok",
        estado: "corregir"
    }
];

function mostrarPublicaciones(lista) {

    for (let i = 0; i < lista.length; i++) {

        if (lista[i].estado == "aprobada") {
            console.log(lista[i].titulo + " - " + lista[i].red + ": lista para publicar.");
        } else if (lista[i].estado == "pendiente") {
            console.log(lista[i].titulo + " - " + lista[i].red + ": falta aprobación.");
        } else {
            console.log(lista[i].titulo + " - " + lista[i].red + ": necesita correcciones.");
        }

    }

}

mostrarPublicaciones(publicaciones);


//EJERCICIO 9//
function cambiarContenidoPrincipal() {

    let nuevoTitulo = "Bienvenidas a mi sitio web";
    let nuevaDescripcion = "Este contenido fue modificado con JavaScript.";

    document.getElementById("tituloPrincipal").innerHTML = nuevoTitulo;

    document.getElementById("descripcionPrincipal").innerHTML = nuevaDescripcion;

}

cambiarContenidoPrincipal();


//EJERCICIO 10// 
const perfil = {
    nombre: "Camila",
    bio: "Estudiante de diseño multimedial.",
    interes: "Diseño web interactivo",
};

function mostrarPerfil() {

    document.getElementById("nombrePerfil").innerHTML = perfil.nombre;

    document.getElementById("bioPerfil").innerHTML = perfil.bio;

    document.getElementById("interesPerfil").innerHTML = "Interés principal: " + perfil.interes;

}

mostrarPerfil();