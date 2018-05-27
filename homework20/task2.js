var App = {
	variables: {
		positions: [],
		array: [],
		divMap: document.getElementById("content"),
		DB: firebase.database(),
		REF: firebase.database().ref("/points/"),
		SETTINGS : {
			center: {lat: 53.903709, lng: 27.558355},
			zoom: 12, 
			mapTypeId: google.maps.MapTypeId.ROADMAP
		},
	},

	start: function() {
		App.variables.REF.on("value", function(v) { 
			v.forEach(function(elem) {
				var val = elem.val();
				App.variables.array.push(val);
			})
			App.printMarker(App.variables.array);
		})
	},

	printMarker : function(obj) {
		var map = new google.maps.Map(App.variables.divMap, App.variables.SETTINGS);
		obj.forEach(function(e) {
			var marker = new google.maps.Marker({
				position : {lat: e.latitude, lng: e.longitude},
				map : map,
				title : e.name
			})
			var currentPosition = {lat: e.latitude, lng: e.longitude};
			var infoWindow = new google.maps.InfoWindow({
   				content : `<h3>${e.name}</h3><p>${e.discription}</p>`
  			})
  			marker.addListener("click", function(){
  				infoWindow.open(map, marker);
  			})
  			App.variables.positions.push(currentPosition);

		})
		App.createPath(map);
	},

	createPath: function(map) {
		var path = new google.maps.Polyline({
			path : App.variables.positions,
			geodesic : true,
			strokeColor: "red",
			strokeOpacity : 1.0,
			strokeWeight : 2
		})
		path.setMap(map);
	}
}

App.start();

