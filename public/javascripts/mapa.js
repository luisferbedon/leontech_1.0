function onDocumentReady(){
	console.log("Se inicio el modulo de Grafica Mapa");
	var id_vehiculo = $('#id_vehiculo').val();
	console.log(id_vehiculo)
	var map = L.map('mimapa',{
		center:[-1.237247 ,-78.641424],
		zoom :16	});
	var tiles = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
	map.addLayer(tiles);	
	var marker = L.marker([-1.237247 ,-78.641424]).addTo(map);
	marker.bindPopup('<form action="" method="post" ><input type="date" name="fecha_inicio" placeholder="Fecha Inicio" class="form-control"><input type="date" name="fecha_fin" placeholder="Fecha Fin" class="form-control"><button type="submit" class="btn btn-default">Consultar</button></form>');
	var url = 'http://104.197.148.48/api/1.3/index.php/now/'+id_vehiculo;
	var usuario = getJSON(url,function(result){
		console.log(result.GPS_LATITUD);
		console.log(result.GPS_LONGITUD);
		console.log(result.SPEED);
	})
}
$(document).on('ready',onDocumentReady);