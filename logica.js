function evaluarPerfil() {
  const edad = parseInt(document.getElementById("edad").value);
  const interes = document.getElementById("interes").value;
  const resultado = document.getElementById("resultados");

  resultado.innerHTML = ""; // limpia resultados anteriores

  // Validación
  if (isNaN(edad) || edad < 10) {
    resultado.innerHTML = "<p class='error'>Por favor ingresa una edad válida (10 años en adelante).</p>";
    return;
  }

  // Condicional por edad
  let etapa = "";
  if (edad < 15) {
    etapa = "Estás en una etapa de exploración temprana.";
  } else if (edad <= 17) {
    etapa = "Estás en una etapa de definición vocacional.";
  } else {
    etapa = "Es momento ideal para enfocar tu decisión profesional.";
  }

  // Sugerencia por área de interés (switch)
  let perfil = "";
  switch (interes) {
    case "ciencias":
      perfil = "Podrías explorar programas como medicina, biología, enfermería o nutrición.";
      break;
    case "arte":
      perfil = "Áreas como diseño gráfico, música, producción audiovisual o comunicación social pueden interesarte.";
      break;
    case "tecnologia":
      perfil = "Considera ingeniería, programación, robótica o arquitectura como rutas potentes.";
      break;
    case "sociales":
      perfil = "Psicología, trabajo social, pedagogía o derecho son caminos vinculados a lo que te apasiona.";
      break;
    default:
      perfil = "Por favor selecciona un interés.";
  }

  // Muestra la evaluación base
  resultado.innerHTML += `
    <p class="etapa">${etapa}</p>
    <p class="perfil"><strong>Sugerencia vocacional:</strong> ${perfil}</p>
    <p class="nota">Recuerda que esta es una guía inicial. ¡Explorar es parte del camino!</p>
  `;

  // Estructura repetitiva: proyección a futuro
  resultado.innerHTML += `<div class="proyecciones"><strong>Proyección de opciones si tuvieras más edad:</strong>`;
  for (let i = edad + 1; i <= edad + 2; i++) {
    resultado.innerHTML += `<p>A los ${i} años podrías considerar prácticas, pasantías o voluntariados en tu área de interés.</p>`;
  }
  resultado.innerHTML += `</div>`;
}