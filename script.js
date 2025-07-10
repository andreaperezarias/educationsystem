
  const form = document.getElementById("formularioRegistro");

  //Validando el registro
  const nombre = document.getElementById("nombre");
  const edad = document.getElementById("edad");
  const sexo = document.getElementById("sexo");
  const email = document.getElementById("correo");
  const rol = document.getElementById("rol");
  const password = document.getElementById("contrasena");
  const confirmarPassword = document.querySelectorAll('input[type="password"]')[1];

  if (nombre) {
    const errorNombre = document.getElementById("errorNombre") || crearSpanError("errorNombre", nombre);
    const errorEdad = document.getElementById("errorEdad") || crearSpanError("errorEdad", edad);
    const errorEmail = document.getElementById("errorEmail") || crearSpanError("errorEmail", email);
    const errorPassword = document.getElementById("errorPassword") || crearSpanError("errorPassword", password);

    function crearSpanError(id, input) {
      const span = document.createElement("span");
      span.className = "error";
      span.id = id;
      span.style.color = "red";
      input.parentNode.appendChild(span);
      return span;
    }

    function validarNombre() {
      if (nombre.value.trim() === "") { //ver si hay algo, o no. 
        errorNombre.textContent = "El nombre es obligatorio.";
        return false;
      } else {
        errorNombre.textContent = "";
        return true;
      }
    }

    function validarEdad() {
      if (edad.value < 18) {
        errorEdad.textContent = "Debes tener al menos 18 años.";
        return false;
      } else {
        errorEdad.textContent = "";
        return true;
      }
    }

    function validarSexo() {
      if (!sexo.value) {// si no se selecciono campo
        alert("Selecciona tu sexo.");
        return false;
      }
      return true;
    }

    function validarRol() {
      if (!rol.value) { // si no se selecciono campo
        alert("Selecciona tu rol.");
        return false;
      }
      return true;
    }

    function validarEmail() {
      const regexEmail = /\S+@\S+\.\S+/; //patron definido
      if (!regexEmail.test(email.value)) {  //diferente de patron
        errorEmail.textContent = "Ingresa un correo electrónico válido.";
        return false;
      } else {
        errorEmail.textContent = "";
        return true;
      }
    }

    function validarPassword() {
      if (password.value.length < 6) {
        errorPassword.textContent = "La contraseña debe tener al menos 6 caracteres.";
        return false;
      } else if (password.value !== confirmarPassword.value) {
        errorPassword.textContent = "Las contraseñas no coinciden.";
        return false;
      } else {
        errorPassword.textContent = "";
        return true;
      }
    }

    nombre.addEventListener("input", validarNombre);
    edad.addEventListener("input", validarEdad);
    email.addEventListener("input", validarEmail);
    password.addEventListener("input", validarPassword);
    confirmarPassword.addEventListener("input", validarPassword);

    form.addEventListener("submit", function (event) {
      const valido =
        validarNombre() &&
        validarEdad() &&
        validarSexo() &&
        validarRol() &&
        validarEmail() &&
        validarPassword();

      if (!valido) {
        event.preventDefault();
      } else {
        alert("Formulario enviado con éxito.");
      }
    });
  }

  // Validando con bucles , repeticion y condicional.
  const formLogin = document.getElementById("formularioLogin"); //nombre del formulario en formulario.html
  const mensajeIntentos = document.getElementById("mensajeIntentos"); //toma el div para mostrar y ser guardado aqui
  let intentos = 0; //let se usa para cambiar el valor, sera variable.

  if (formLogin) {
    const usuarioInput = document.getElementById("usuario");
    const contrasenaInput = document.getElementById("contrasena");
    const errorUsuario = document.getElementById("errorUsuario");
    const errorContrasena = document.getElementById("errorContrasena");

    function validarUsuarioLogin() {
      const usuario = usuarioInput.value.trim();
      if (usuario.toLowerCase() !== "andrea") { // to lower case sirve para convertir cualquier cosa que se escribio en minúsculas
        errorUsuario.textContent = "Este usuario no existe.";
        return false;
      } else {
        errorUsuario.textContent = "";
        return true;
      }
    }

    function validarContrasenaLogin() {
      const contrasena = contrasenaInput.value.trim();
      if (contrasena.length < 6) {
        errorContrasena.textContent = "La contraseña debe tener al menos 6 caracteres.";
        return false;
      } else {
        errorContrasena.textContent = "";
        return true;
      }
    }

    usuarioInput.addEventListener("input", validarUsuarioLogin); //llamar funcion creada
    contrasenaInput.addEventListener("input", validarContrasenaLogin); //amar funcion creada

    formLogin.addEventListener("submit", function (e) {
      e.preventDefault(); //no permite avanzad si no esta bien

      const usuario = usuarioInput.value.trim();
      const contrasena = contrasenaInput.value.trim();
      const passwordCorrecta = "987654";
      let salida = ""; //variable para indicar mensaje final despues de verificar

      if (contrasena === passwordCorrecta && usuario.toLowerCase() === "andrea") {
        salida = "<p style='color: green;'>Acceso correcto. Bienvenida, Andrea.</p>";
        mensajeIntentos.innerHTML = salida; //imprimir en el div mensajeIntentos
        
        return;
      }

      intentos++;

      // if 
      let i = 0;
     if (intentos === 1) {
       salida += "<p>Primer intento fallido. Revisa tu contraseña.</p>";
      }

      // for para mostrar historial
      for (let j = 1; j <= intentos && intentos < 4; j++) {
        salida += `<p style="color:red;">Intento ${j} incorrecto.</p>`;
      }

      // while para bloquear en el intento 3
      let k = intentos;
      while (k >= 4) {
        salida += `<p style="color:red;font-weight:bold;">Cuenta bloqueada por múltiples intentos.</p>`;
        formLogin.querySelector("input[type='submit']").disabled = true; //deshabilita el boton
        break; //sale del while
      }

      mensajeIntentos.innerHTML = salida;
    });
  }

