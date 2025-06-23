const peliculas = [
  {
    titulo: "Oddity",
    año: 2024,
    descripcion: "Tras el brutal asesinato de su hermana gemela, una médium quiere dar con los responsables. Para ello, regresa al lugar del crimen y echa mano de objetos malditos que le servirán como herramientas para su venganza",
    urlfoto: "./assets/images/Oddity-terror.jpg",
    genero: "Terror",
  },

  {
    titulo: "Depredador",
    año: 1987,
    descripcion: "Un grupo de mercenarios es contratado por la CIA para rescatar a unos pilotos que han sido apresados por la guerrilla en la selva centroamericana.",
    urlfoto: "./assets/images/Depredador-accion.jpg",
    genero: "Acción",
  },

  {
    titulo: "Esperando la carroza",
    año: 1985,
    descripcion: "La confusión invade a una familia luego de que Mamá Cora, una anciana de 80 años, desaparece. Aunque algunos creen que ha muerto, nada es tan sencillo como parece.",
    urlfoto: "./assets/images/EsperandoLaCarroza-comedia.jpg",
    genero: "Comedia",
  },
  {
    titulo: "Los puentes de Madison",
    año: 1995,
    descripcion: "La apacible pero aburrida vida de Francesca Johnson, un ama de casa que vive en una granja con su familia, se ve alterada con la llegada de Robert Kincaid, un veterano fotógrafo de la revista National Geographic, que visita el condado de Madison para fotografiar sus viejos puentes.",
    urlfoto: "./assets/images/madison-romantica.jpg",
    genero: "Romántica",
  }

];

document.getElementById("form-pelicula").addEventListener("submit", function (event) {
  event.preventDefault();//previene q se envie el form para trab en el

  const titulo = event.target.titulo.value;//guardo los valores q rellena en c/campo el usuario en una variable
  const descripcion = event.target.descripcion.value;
  const año = event.target.año.value;
  const urlfoto = event.target.urlfoto.value;
  const genero = event.target.genero.value;

  let msj = "";

  if (titulo.length < 3 || titulo.length > 30) {

    msj += "Título fuera de tamaño: debe contener entre 3 y 30 caracteres\n";
  }

  if (descripcion.length < 15 || descripcion.length > 70) {

    msj += "Descripción fuera de tamaño: debe contener entre 15 y 70 caracteres\n";
  }


  if (msj.length != 0) {//cuando msj no esta vacio, porque en la validacion hay algun error
    alert(msj);
    let p = document.createElement("pre");
    let mensaje = document.createTextNode(msj);
    p.style.color = "#DD1C1A";
    p.style.fontSize = "16px";
    p.appendChild(mensaje);

    //document.getElementById("Contacto").appendChild(p);
  } else {
  const tablaUno = document.getElementById("tabla-foto");//selecciono tabla
  const tbodyUno = tablaUno.querySelector("tbody");//seleccciono body dentro de tabla
  const filaUno = document.createElement("tr");//creo fila suelta

  const celdaTituloUno = document.createElement("td");//creo celda suelto
  celdaTituloUno.textContent = titulo;//añado a celda de arriba el contendio del titulo de mi form 
  filaUno.appendChild(celdaTituloUno);//añado a fila

  const celdaAñoUno = document.createElement("td");
  celdaAñoUno.textContent = año;
  filaUno.appendChild(celdaAñoUno);

  const celdaDescripcionUno = document.createElement("td");
  celdaDescripcionUno.textContent = descripcion;
  filaUno.appendChild(celdaDescripcionUno);

  const celdaurlFotoUno = document.createElement("td");
  const imagen = document.createElement("img");
  imagen.src = urlfoto;
  celdaurlFotoUno.appendChild(imagen);
  filaUno.appendChild(celdaurlFotoUno);

  const celdageneroUno = document.createElement("td");
  celdageneroUno.textContent = genero;
  filaUno.appendChild(celdageneroUno);

  tbodyUno.appendChild(filaUno);//cuando ya meti todas las celdas en la fila, añado la fila a mi tbody


  
  }});

//--------------------------------
function tablaPeliculas() {
  const tabla = document.getElementById("tabla-foto");
  let tbody = tabla.querySelector("tbody");
  peliculas.forEach(pelicula => {//itero por mi array peliculas
    const fila = document.createElement("tr");

    const celdaTitulo = document.createElement("td");
    celdaTitulo.textContent = pelicula.titulo;
    fila.appendChild(celdaTitulo);

    const celdaAño = document.createElement("td");
    celdaAño.textContent = pelicula.año;
    fila.appendChild(celdaAño);

    const celdaDescripcion = document.createElement("td");
    celdaDescripcion.textContent = pelicula.descripcion;
    fila.appendChild(celdaDescripcion);

    const celdaurlFoto = document.createElement("td");
    const imagen = document.createElement("img");
    imagen.src = pelicula.urlfoto;
    celdaurlFoto.appendChild(imagen);
    fila.appendChild(celdaurlFoto);

    const celdagenero = document.createElement("td");
    celdagenero.textContent = pelicula.genero;
    fila.appendChild(celdagenero);

    tbody.appendChild(fila);

  })};

tablaPeliculas();

