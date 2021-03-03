/**
 * Aqui dentro probar el codigo que quieran
 */
function probarEjercicio(){
	var mascota;
	var pelaje;
	var edadMascota;
	var raza;
	var nombreMascota;
	var peso;
	var estadoClinico;
	var temperatura;
	var perroMasPesado;
	var menorTemperatura;
	var estadoClinicoMenor;
	var gatoMasLivianoNombre;
	var	gatoRazaMasLiviano;
	var	gatoPesoMasLiviano;

	var contadorMascotas = 0;

	var contadorEnfermo = 0;
	var contadorAdopcion = 0;
	var contadorInternado = 0;
	var contadorPerro = 0;
	var contadorGato = 0;
	var contadorOtraCosa = 0;
	var acumuladorPeso = 0;
	
	var porcentajeEnfermos;
	var promedioPeso;
	var nombreUltimaMascota;

	var banderaMasPesado = true;
	var banderaUltimaMascota = true;
	var banderaMenorTemperatura = true;
	var banderaEstadoClinico = true;
	var banderaGato = true;
	var respuesta = true;

	while (respuesta == true)
	{
		
		do {

		mascota = prompt("Ingrese su mascota (Gato,perro u otra cosa) : ");
		contadorMascotas++;
		
		
		} while (mascota != "gato" && mascota != "perro" && mascota != "otra cosa");

		do {
		
		pelaje = prompt("Su mascota tiene el pelaje corto, largo o sin pelaje?")
		
		} while (pelaje != "corto" && pelaje != "largo" && pelaje != "sin pelaje");

		do {
		
		edadMascota = prompt("Ingrese la edad de su mascota: ");
		edadMascota = parseInt(edadMascota);
		
		}  while (isNaN(edadMascota) || edadMascota < 1 || edadMascota > 20);

		do {

		raza = prompt("Ingrese la raza");

		} while (isNaN(raza) == false);

		do {

		nombreMascota = prompt("Ingrese el nombre de su mascota");

		} while (isNaN(nombreMascota) == false);

		do {
		
		peso = prompt("El peso de su mascota ")
		peso = parseInt(peso);
		acumuladorPeso = acumuladorPeso + peso;
		
		}  while (isNaN(peso) || peso < 1 || peso > 50);

		do {
		
		estadoClinico = prompt("Ingrese el estado clinico de la mascota(enfermo,internado ó adopcion): ")
		
		} while (estadoClinico != "enfermo" && estadoClinico != "internado" && estadoClinico != "adopcion");

		do {
		
		temperatura = prompt("Ingrese la temperatura de la mascota ")
		temperatura = parseInt(temperatura);
		
		}  while (isNaN(temperatura) || temperatura < 35 || temperatura > 45);
	
	respuesta = confirm("Quiere ingresar otra mascota?")

	}

	if (mascota == "perro" && banderaMasPesado == true) {
		
		perroMasPesado = peso;
		document.write("ENUNCIADO A: El perro mas pesado pesa: "+perroMasPesado + "<br>");
		banderaMasPesado = false
	}
	else if (mascota == "perro" && peso > perroMasPesado) 
	{
		perroMasPesado = peso;

		document.write("ENUNCIADO A: El perro mas pesado pesa: "+perroMasPesado + "<br>");//A

	}

	switch (estadoClinico) 
	{
		case "enfermo":
			contadorEnfermo++;
			break;
		case"adopcion":
			contadorAdopcion++;
			break;
		case"internado":
			contadorInternado++;
			break;
	
		default:
			break;
	}

	if(estadoClinico == "enfermo" && contadorEnfermo < 1)
	{
		document.write("ENUNCIADO B: INGRESO UNA SOLA MASCOTA ENFERMA");	
	}
	else
	{
	porcentajeEnfermos = (contadorMascotas * 100)/contadorEnfermo;
	document.write("ENUNCIADO B: El porcentaje de mascotas enfermas es: "+porcentajeEnfermos+"%"+"<br>")//BB
	}
	

	if (banderaUltimaMascota == true && mascota == "otra cosa") 
	{
		
		nombreUltimaMascota = nombreMascota;
		
		document.write("ENUNCIADO C: La ultima mascota ingresa de otra cosa se llama "+nombreUltimaMascota +"<br>");//CC

		banderaUltimaMascota = false
	}
	else if (banderaUltimaMascota == false && mascota == "otra cosa") 
	{
		nombreUltimaMascota = nombreMascota;

		document.write("ENUNCIADO C: La ultima mascota ingresa de otra cosa se llama "+nombreUltimaMascota +"<br>");//CC

	}
	

	//ddd)El animal sin pelo con menor temperatura corporal
	if (pelaje == "sin pelaje" && banderaMenorTemperatura == true) {
		
		menorTemperatura = temperatura;
		document.write("ENUNCIADO D: La mascota con menor temperatura, tiene una temperatura de "+menorTemperatura + "<br>");//DD
		banderaMenorTemperatura = false
	}
	else if (pelaje == "sin pelaje" && temperatura < menorTemperatura) 
	{
		menorTemperatura = temperatura;

		document.write("ENUNCIADO D: La mascota con menor temperatura, tiene una temperatura de "+menorTemperatura + "<br>");//DD

	}

	//f)Sumando gatos y perros que porcentaje del total de mascotas son?
	switch (mascota) {
		case "gato":
			contadorGato++;
		case "perro":
			contadorPerro++;
		case "otra cosa":
			contadorOtraCosa++;
			
			break;
	
		default:
			break;
	}

	porcentajePerrosYGatos = contadorMascotas * 100 /(contadorGato+contadorPerro);
	document.write("ENUNCIADO F: Sumando gatos y perros que porcentaje del total de mascotas son? Representan el: " + porcentajePerrosYGatos + "%" + "<br>");//FF

	//g)Que estado clinico tiene la menor cantidad de mascotas
	
	if (banderaEstadoClinico == true) 
	{	
		estadoClinicoMenor = estadoClinico;
		
		if(contadorPerro < contadorGato && contadorPerro < contadorOtraCosa)
		{
			document.write("ENUNCIADO G: menor cantidad de mascotas son los perros y su estado clinico es:" + estadoClinicoMenor + "<br>")
		}else if(contadorGato< contadorPerro && contadorGato < contadorOtraCosa)
		{
			document.write("ENUNCIADO G: La menor cantidad de mascotas son los gatos y su estado clinico es:" + estadoClinicoMenor + "<br>")
		}else
		{
			document.write("ENUNCIADO G: La menor cantidad de mascotas son los Otra cosa y su estado clinico es:" + estadoClinicoMenor + "<br>")
		}
		
		banderaEstadoClinico = false

	}else if(banderaEstadoClinico = false)
	{
		estadoClinicoMenor = estadoClinico;
		
		if(contadorPerro < contadorGato && contadorPerro < contadorOtraCosa)
		{
			document.write("ENUNCIADO G: La menor cantidad de mascotas son los perros y su estado clinico es:" + estadoClinicoMenor + "<br>")
		}else if(contadorGato< contadorPerro && contadorGato < contadorOtraCosa)
		{
			document.write("ENUNCIADO G: La menor cantidad de mascotas son los gatos y su estado clinico es:" + estadoClinicoMenor + "<br>")
		}else
		{
			document.write("ENUNCIADO G: La menor cantidad de mascotas son los Otra cosa y su estado clinico es:" + estadoClinicoMenor + "<br>") //GG

		}
	}

	//H)Cual es el promedio de kilos de peso de tomando todas las mascotas 

	promedioPeso = acumuladorPeso/contadorMascotas;
	document.write("ENUNCIADO H: El peso promedio de todas las mascotas es : " + promedioPeso + "<br>" );

	//iEl nombre y raza del gato sin pelos mas liviano
	if(banderaGato = true && mascota == 'gato')
	{
		gatoMasLivianoNombre = nombreMascota;
		gatoRazaMasLiviano = raza;
		gatoPesoMasLiviano = peso;
				
		banderaGato = false;
	} else if (banderaGato = true && peso < gatoPesoMasLiviano)
	{
		gatoPesoMasLiviano = peso;
		gatoMasLivianoNombre = nombreMascota;
		gatoRazaMasLiviano = raza;

	}
	document.write("ENUNCIADO I: El gato mas liviano se llama: " + gatoPesoMasLiviano + "su raza es :" + gatoRazaMasLiviano + "y pesa" + gatoPesoMasLiviano+ "<br>" );

}