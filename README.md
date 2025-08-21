# 🎬 Netfly

**Netfly** es una aplicación web que permite agregar, mostrar, filtrar, editar y eliminar películas de manera dinámica.  
El proyecto fue desarrollado usando **HTML, CSS y JavaScript**, aplicando buenas prácticas de validación de formularios y manipulación del DOM.

---

## 🚀 Funcionalidades

### Gestión de películas
- Añadir nuevas películas mediante un formulario con los campos:  
  - Título  
  - Año  
  - Descripción  
  - URL de la imagen  
  - Género (Terror, Acción, Comedia, Romántica)  
- Validación de los campos:
  - Título: 1-70 caracteres  
  - Descripción: 15-140 caracteres  
  - Año: 4 cifras, entre 1800 y 2025  
- Las películas se almacenan en un **array** y se muestran en una **tabla HTML**.  

### Filtros
- Filtrado por **género** usando un formulario específico.  
- Filtrado por **nombre de película** en tiempo real mientras el usuario escribe.  

### Edición y eliminación
- Cada película tiene botones para:
  - **Editar:** abrir un formulario en la fila para modificar los datos y actualizar la tabla.  
  - **Eliminar:** confirmar antes de borrar la película del DOM.  

---

## 🛠️ Tecnologías y conceptos aplicados
- **HTML5:** formulario y tabla semántica.  
- **CSS3:** diseño responsive, efectos hover, estilo de tablas y botones.  
- **JavaScript:**  
  - Manipulación del DOM para renderizar la tabla de películas.  
  - Validación de formularios antes de agregar películas.  
  - Filtrado dinámico por género y texto.  
  - Creación dinámica de botones de edición y eliminación en cada fila.  
  - Uso de arrays de objetos para almacenar películas y actualizar la tabla.  
- **Buenas prácticas:**  
  - Funciones reutilizables (`tablaPeliculas`)  
  - Confirmaciones para eliminar elementos  
  - Mensajes de error claros para validación  

---

## 📸 Vista previa
 
![Vista de Netfly](assets/images/Captura%20de%20pantalla%20%20Netfly.png)
![Vista de Netfly](assets/images/Captura%20de%20pantalla%20filtro%20por%20género%20Netfly.png)
![Vista de Netfly](assets/images/Captura%20de%20pantalla%20formulario%20Netfly.png)


---

## 📂 Cómo usar el proyecto
1. Clonar este repositorio:  
   ```bash
   git clone https://github.com/choski91/Pr-ctica-pel-culas.git

---

👩‍💻 Autor

María Laura Smichowski