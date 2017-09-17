
(function(){
	var agregarLibro = function(i){
		var tabla = document.getElementById("tabla"),
			renglon = document.createElement("tr"),
			col1 = document.createElement("td"),
			col2 = document.createElement("td"),
			col3 = document.createElement("td"),
			col4 = document.createElement("td"),
			libro = document.createTextNode(libros[i]),
			lugar = document.createTextNode(ubicacion[i]),
			clasifica = document.createTextNode(clasificacion[i]);
			//libOnline = document.createTextNode(libLinea[i]);

		col1.appendChild(libro);
		col2.appendChild(lugar);
		col3.appendChild(clasifica);
		//col4.appendChild(libOnline);
		renglon.appendChild(col1);
		renglon.appendChild(col2);
		renglon.appendChild(col3);
		//renglon.appendChild(col4);
		tabla.appendChild(renglon);
	}

	for (var i = 0; i < libros.length; i++) {
		agregarLibro(i);
	}
	
}())