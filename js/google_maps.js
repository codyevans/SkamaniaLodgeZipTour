 // function initialize() {
 //        var mapOptions = {
 //          center: new google.maps.LatLng(-34.397, 150.644),
 //          zoom: 8,
 //          mapTypeId: google.maps.MapTypeId.ROADMAP
 //        };
 //        var map = new google.maps.Map(document.getElementById("map_canvas"),
 //            mapOptions);
 //      }




 function initialize() {
 	var myLatLng = new google.maps.LatLng(45.685622,-121.905244);
 	var myOptions = {
     	center: myLatLng,
       	zoom: 18,
       	mapTypeId: google.maps.MapTypeId.ROADMAP,
       	//scrollwheel: false
     };
     var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
     var markerIcon = 'assets/bkgd_img/marker.png';
     var marker = new google.maps.Marker({
      	position: myLatLng,
       	map: map,
       	title:"Skamania Lodge Zip Line Tour",
       	icon: markerIcon
   	});
 }
  