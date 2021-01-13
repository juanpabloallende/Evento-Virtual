//Guardado de los datos de los participantes mediante LocalStorage

//Declaración de constantes
const enviar = document.getElementById("enviar");
const paises = document.querySelector("#pais");

//Función para guardar datos de los participantes en LocalStorage
enviar.onclick = function() {
					let nombre = document.querySelector("#nombre").value;
					let apellido = document.querySelector("#apellido").value;
					let mail = document.querySelector("#email").value;
					let paiselegido = paises.options[paises.selectedIndex].value;
					let telefono = document.querySelector("#telefono").value;
					let puesto = document.querySelector("#puesto").value;
					if (nombre == "" || apellido == "" || mail == "" || paiselegido == "" || telefono == ""|| puesto == "") { 
					let mostrarAlerta = document.querySelector("#popup");
					let botonCerrar = document.querySelector("#cerrar_obligatorios");
					mostrarAlerta.style.display = "block";
					botonCerrar.addEventListener("click", function(){
						mostrarAlerta.style.display = 'none';
					});
					return false;
				};
					data = { nombre: nombre, apellido: apellido, email: email, pais: paiselegido, telefono : telefono, puesto: puesto }
					console.log(data);
					if (!localStorage.consulta){
						array_para_data = []
					} else {
						array_para_data = JSON.parse(localStorage.getItem("consulta"));
					}
					array_para_data.push(data);
					localStorage.setItem("consulta", JSON.stringify(array_para_data));	
	
					console.log(array_para_data);
					let alerta = document.getElementById("prompt");
					var botonCerrar = document.getElementById("cerrar");
					alerta.style.display = "block";
					botonCerrar.addEventListener("click", function(){
						alerta.style.display = 'none';
					});
					return false;
}
