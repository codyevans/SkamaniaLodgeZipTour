
 function initialize() {
 	var myLatLng = new google.maps.LatLng(45.685622,-121.905244);
 	var myOptions = {
     	center: myLatLng,
       	zoom: 15,
       	mapTypeId: google.maps.MapTypeId.ROADMAP,
       	//scrollwheel: false
     };
     var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
     var markerIcon = 'assets/bkgd_img/treemarker2.png';
     var marker = new google.maps.Marker({
      	position: myLatLng,
       	map: map,
       	title:"Skamania Lodge Zip Line Tour",
       	icon: markerIcon
   	});
 }
  