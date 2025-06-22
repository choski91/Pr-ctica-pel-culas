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


function peliculasAñadidas() {
  const familiaDePeliculas = document.getElementById("añadir-pelicula");
  peliculas.forEach((pelicula) => {
    const article = document.createElement("article");
    article.innerHTML = `
      <h3>${pelicula.titulo}</h3>
      <p>${pelicula.año}</p>
      <p>${pelicula.descripcion}</p>
      <img src = "${pelicula.urlfoto}"/>
      <p>${pelicula.genero}</p>
     `;
    familiaDePeliculas.appendChild(article);
  });
}

peliculasAñadidas();

document.getElementById("form-genero").addEventListener("submit", (event) => {
  event.preventDefault();

  const peliculasSeleccionadas = event.target.elements.genero.value.trim();// es lo q selecciona usuario en el form

  const seccionGenero = document.getElementById("peliculas");//selecciona por id mi seleccion viajes y lo guardo
  seccionGenero.innerHTML = ""; //limpio la sección que habia seleccionado

  const articuloFinal = document.createElement("article");//creo un articulo html
  if (peliculasSeleccionadas == "terror") { //si el usuario selecciono malaga
    //relleno el art con los datos de abajo que corresp con malaga
    article.innerHTML = `
      <h3>${pelicula.titulo}</h3>
      <p>${pelicula.año}</p>
      <p>${pelicula.descripcion}</p>
      <img src = "${pelicula.urlfoto}"/>
      <p>${pelicula.genero}</p>
     `;

    seccionGenero.appendChild(articuloFinal);
  }//le añado como hijo mi artfinal
  
  else if (destinoElegido == "sevilla") {

    articuloFinal.innerHTML = `
      <h3>${viajes[1].title}</h3>
      <p>${viajes[1].description}</p>
      <img src= "${viajes[1].url_img}"/>
     `;
    seccionViajes.appendChild(articuloFinal);
  }
  else if (destinoElegido == "granada") {
     articuloFinal.innerHTML = `
      <h3><b>${viajes[2].title}</b></h3>
      <p>${viajes[2].description}</p>
      <img src= "${viajes[2].url_img}"/>
     `;
    seccionViajes.appendChild(articuloFinal);
  }

  else {
    viajesDespegar();
  }
});

