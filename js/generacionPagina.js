
(function(){

	/*var contenidoP(p, i){
		p.appendChild(document.createTextNode(subtemas1[i]));
	}*/

	var anadir = function(tema, descripcionTema, imagen){
		//Creacion de los elementos
		var div1 = document.createElement("div"), 	//Columna
			div2 = document.createElement("div"),	//Card
			div3 = document.createElement("div"),	//Card Content
			div5 = document.createElement("div"),	//Card Image
			img = document.createElement("img"),	//Imagen
			i = document.createElement("i"),
			span = document.createElement("span"),
			p = document.createElement("p");
			contenidoSpan = document.createTextNode(tema);
			contenidoI = document.createTextNode("more_vert");
			contenidoP = document.createTextNode(descripcionTema);
			//contenidoA = document.createTextNode("Ir a la tabla de referencias");
			padre = document.getElementById("tablaPrincipal");

		//Asignacion de atributos
		div5.setAttribute("class", "card-image");
		div1.setAttribute("class","col s12");
		div2.setAttribute("class", "card activador");
		div2.setAttribute("name", "card");
		div2.style.background = "#2181AE";
		div3.setAttribute("class", "card-content white-text");
		img.setAttribute("src", imagen);
		i.setAttribute("class","material-icons right");
		span.setAttribute("class","card-title enlinea");

		//Añadimos los elementos al html
		p.appendChild(contenidoP);
		span.appendChild(contenidoSpan);
		i.appendChild(contenidoI);
		//a.appendChild(contenidoA);
		//div5.appendChild(a);
		div5.appendChild(img);
		div3.appendChild(i);
		div3.appendChild(span);
		div3.appendChild(p);
		div2.appendChild(div5);
		div2.appendChild(div3);
		div1.appendChild(div2);
		padre.appendChild(div1);
	}

	for (var i = 0; i < temas.length; i++) {
		var imagen = imagenes[i];
		var tema = temas[i];
		var descripcionTema = descripcionTemas[i];
		anadir(tema, descripcionTema, imagen);
	}
/*
	var mostrarMas = function(){
		
		var instrucciones = function(elemento0){
			if (elemento0.getElementsByTagName("div").length <= 1) {
				var padre2 = elemento0;	//padre
				var elemento4 = document.createElement("div");	//Contenido
				var ul = document.createElement("p");
				var contenido2 = document.createTextNode(temas[0]);

				elemento4.setAttribute("class","card-content white-text");

				ul.appendChild(contenido2);
				elemento4.appendChild(ul);
				padre2.appendChild(elemento4);
			}
			else {
				var hijo = elemento0.getElementsByTagName("div")[1];
				elemento0.removeChild(hijo);
			}
		}

		for (var i = 0; i < temas.length; i++) {
			var elemento0 = document.getElementsByName("card")[i];
			instrucciones(elemento0);
		}
	}
*/
	var anadirSubtemas = function(p, i, e, numeroDiv){
		/*var li = document.createElement("li"),
			contenido2 = document.createTextNode(subtemas1[i]);
		li.appendChild(contenido2);
		ul.appendChild(contenido2);*/
		var contenido2 = document.createTextNode(subtemas1[numeroDiv][i]),
			br = document.createElement("br");
		p.appendChild(contenido2);
		p.appendChild(br);
	}

	//Definimos el evento que queremos que se realize
	var mostrarMas = function(e){
		
		if (e.target.parentNode.parentNode.getElementsByTagName("div").length <= 2) {
			//numeroDiv almacena el numero del div principal en el que estamos trabjando.
			var numeroDiv = parseInt(e.target.parentNode.parentNode.getElementsByTagName("div")[1].textContent.substring(9,10))-1;
			var padre2 = e.target.parentNode.parentNode;	//padre, regresa la card
			var div4 = document.createElement("div");	//Contenido
			var p2 = document.createElement("p");
			var br2 = document.createElement("br");
			var a = document.createElement("a");
			var contenidoA = document.createTextNode("Ir a la tabla de referencias")
			//var contenido2 = document.createTextNode(temas[0]);

		    a.setAttribute("href",referencias[numeroDiv]);
		    a.style.color = "#F87C02";
			div4.setAttribute("class","card-content white-text");

			//ul.appendChild(contenido2);
			a.appendChild(contenidoA);
			for (var i = 0; i < subtemas1[numeroDiv].length; i++) {
				anadirSubtemas(p2, i, e, numeroDiv);
			}
			div4.appendChild(p2);
			div4.appendChild(br2);
			div4.appendChild(a);
			padre2.appendChild(div4);
		}
		else {
			var hijo = e.target.parentNode.parentNode.getElementsByTagName("div")[2];
			e.target.parentNode.parentNode.removeChild(hijo);
		}

		console.log(e.target.parentNode.parentNode);
		//console.log(typeof parseInt(e.target.parentNode.parentNode.getElementsByTagName("div")[0].textContent.substring(9,10)));
	}

	//Añadimos el evento a los elementos
	var opciones = function(elemento){
		elemento.addEventListener("click", mostrarMas);
	}

	//Seleccionamos los elementos que tendran el evento
	for (var i = 0; i < temas.length; i++) {
		var elemento = document.getElementsByName("card")[i].getElementsByTagName("div")[1];
		opciones(elemento);
	}

	//document.getElementsByName("card")[0].getElementsByTagName("i")[0].addEventListener("click", mostrarMas);

}())