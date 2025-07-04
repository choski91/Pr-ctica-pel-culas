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
    genero: "Accion",
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
    genero: "Romantica",
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

  if (titulo.length < 1 || titulo.length > 70) {

    msj += "Título fuera de tamaño: debe contener entre 1 y 70 caracteres\n";
  }

  if (descripcion.length < 15 || descripcion.length > 140) {

    msj += "Descripción fuera de tamaño: debe contener entre 15 y 140 caracteres\n";
  }

  if (año < 1800 || año > 2025) {
    msj += "El año debe estar comprendido entre 1800 y 2025\n";
  }

  if (msj.length != 0) {//cuando msj no esta vacio, porque en la validacion hay algun error
    alert(msj);
    let p = document.createElement("pre");
    let mensaje = document.createTextNode(msj);
    p.style.color = "#DD1C1A";
    p.style.fontSize = "16px";
    p.appendChild(mensaje);

    //añado peli nueva
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


    //creo el objeto con los valores q venian en el form(el q rellena el usuario) para añadir su peli a mi primer array de peliculas.
    //la añado al array de peliculas para desp en el filtro x gen, filtrar s/ese array (peliculas)
    const peliSumada =
    {
      titulo: titulo,
      año: año,
      descripcion: descripcion,
      urlfoto: urlfoto,
      genero: genero
    }
    console.log(peliSumada);
    peliculas.push(peliSumada);
    console.log(peliculas);

  }
});

//--------------------------------
//adapte la funcion para que pueda pasar como parametro cualquier array de pelis

function tablaPeliculas(tablaDePeliculas) {
  const tabla = document.getElementById("tabla-foto");
  let tbody = tabla.querySelector("tbody");
  tbody.innerHTML = "";
  tablaDePeliculas.forEach(peliculaEnTabla => {//itero por el array de pelis q le pase a la funcion
    const fila = document.createElement("tr");

    const celdaTitulo = document.createElement("td");
    celdaTitulo.textContent = peliculaEnTabla.titulo;
    fila.appendChild(celdaTitulo);

    const celdaAño = document.createElement("td");
    celdaAño.textContent = peliculaEnTabla.año;
    fila.appendChild(celdaAño);

    const celdaDescripcion = document.createElement("td");
    celdaDescripcion.textContent = peliculaEnTabla.descripcion;
    fila.appendChild(celdaDescripcion);

    const celdaurlFoto = document.createElement("td");
    const imagen = document.createElement("img");
    imagen.src = peliculaEnTabla.urlfoto;
    celdaurlFoto.appendChild(imagen);
    fila.appendChild(celdaurlFoto);

    const celdagenero = document.createElement("td");
    celdagenero.textContent = peliculaEnTabla.genero;
    fila.appendChild(celdagenero);

    const celdaBotonDelete = document.createElement("td");
    const botonDelete = document.createElement("button");
    botonDelete.textContent = "Eliminar"
    botonDelete.classList.add("btn-delete");
    celdaBotonDelete.appendChild(botonDelete);
    fila.appendChild(celdaBotonDelete);


    const buttonDelete = fila.querySelector(".btn-delete");
    buttonDelete.addEventListener("click", (event) => {
       const filaAEliminar = event.target.closest("tr");

      if (filaAEliminar) {
        filaAEliminar.remove();
      }
    });

    const celdaBotonEditar = document.createElement("td");
    const botonEditar = document.createElement("button");
    botonEditar.textContent = "Editar"
    botonEditar.classList.add("btn-editar");
    celdaBotonEditar.appendChild(botonEditar);
    fila.appendChild(celdaBotonEditar);

    const buttonEdit = fila.querySelector(".btn-editar");
    buttonEdit.addEventListener("click", (event) => {
     
      fila.innerHTML = `
        <form class="edit-form">
          <label> Título: <input type="text" name="titulo" value="${peliculaEnTabla.titulo}" required></label>
          <label>Año: <input type="number" name="año" value="${peliculaEnTabla.año}" required></label>
          <label>Descripción: <input type="text" name="descripcion" value="${peliculaEnTabla.descripcion}" required></label>
          <label>URL foto: <input type="url" name="urlfoto" value="${peliculaEnTabla.urlfoto}" required></label>
          <label>Género: <input type="text" name="genero" value="${peliculaEnTabla.genero}" required></label>

          <button type="submit">Guardar</button>
        </form>
      `;

      
    })


    tbody.appendChild(fila);

  })
};

tablaPeliculas(peliculas);

//cuando usuario envia el form de filtro x genero

document.getElementById("filtro-genero").addEventListener("submit", function (event) {
  event.preventDefault();

  const generoFiltrado = event.target.genero2.value;//me guardo el valor del genero q selecciono el usuario

  //busco en mi array peliculas las pelis cuyo genero coincida con el genero seleccionado x usuario
  const generoFinal = peliculas.filter(pelicula => pelicula.genero == generoFiltrado);
  console.log(generoFinal)
  tablaPeliculas(generoFinal);

});


//document.getElementById("añadir-pelicula").appendChild(p);
//(mensaje error en rojo)