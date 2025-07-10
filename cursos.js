
//Función declarativa

function declara(curso,modalidad,horario){
    return curso+modalidad+horario;
}

const anonima=function(curso,modalidad,horario){
    return (curso+modalidad+horario)*0.20;
}

const flecha=(curso,modalidad,horario) =>((curso+modalidad+horario)-(curso+modalidad+horario)*0.20);

// Función calcularDobles llama a las tres funciones antes creadas
function calcularCursos(){
    //Obtener el valor ingresado por el usuario
    const curso=parseFloat(document.getElementById("curso").value);
    const modalidad=parseFloat(document.getElementById("modalidad").value);
    const horario=parseFloat(document.getElementById("horario").value);

    //Lllamado a cada una de las TRES funciones 
    const resultadoDeclara=declara(curso,modalidad,horario);
    const resultadoAnonima=anonima(curso,modalidad,horario);
    const resultadoFlecha=flecha(curso,modalidad,horario);
    //Mostrar los resultados de las TRES funciones
    document.getElementById("resultado").innerHTML = `
        <p>El Precio del curso es:$${resultadoDeclara}</p>
        <p>Tienes un descuento de:$${resultadoAnonima}</p>
        <p>El precio Curso con descuento:$${resultadoFlecha}</p>
    `;
}
