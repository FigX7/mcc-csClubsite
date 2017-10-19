window.onload = () => {
  myCenter = new google.maps.LatLng(33.1908066,-117.3029278); //don't touch this please. confirmed on google maps.
  var mapOptions= {
    center:myCenter,
    zoom:12, scrollwheel: false, draggable: false,
    mapTypeId:google.maps.MapTypeId.ROADMAP
  };
  var map=new google.maps.Map(document.getElementById("googleMap"),mapOptions);

  var marker = new google.maps.Marker({
    position: myCenter,
  });
  marker.setMap(map);
}




// Change style of navbar on scroll
window.onscroll = function() {myFunction()};
function myFunction() {
  var navbar = document.getElementById("myNavbar");
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    navbar.className = "w3-bar" + " w3-card-2" + " w3-animate-top" + " w3-white";
  } else {
    navbar.className = navbar.className.replace(" w3-card-2 w3-animate-top w3-white", " w3-opacity-min");
  }
}

// Used to toggle the menu on small screens when clicking on the menu button
function toggleFunction() {
  var x = document.getElementById("navDemo");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else {
    x.className = x.className.replace(" w3-show", "");
  }
}
//<-------------- lOGIN fUNCTIONS
document.getElementById("loginBtn").onclick = function() {myHide()};

function myHide() {
  var x =  document.getElementById("cont_centrar");
  
}

function sign_up(){
	  var inputs = document.querySelectorAll('.input_form_sign');
	document.querySelectorAll('.ul_tabs > li')[0].className=""; 
	document.querySelectorAll('.ul_tabs > li')[1].className="active"; 
	  
	  for(var i = 0; i < inputs.length ; i++  ) {
	if(i == 2  ){

	}else{  
	document.querySelectorAll('.input_form_sign')[i].className = "input_form_sign d_block";
	}
	} 

	setTimeout( function(){
	for(var d = 0; d < inputs.length ; d++  ) {
	 document.querySelectorAll('.input_form_sign')[d].className = "input_form_sign d_block active_inp";  
	   }


	 },100 );
	 document.querySelector('.link_forgot_pass').style.opacity = "0";
	   document.querySelector('.link_forgot_pass').style.top = "-5px";
	   document.querySelector('.btn_sign').innerHTML = "SIGN UP";    
	  setTimeout(function(){

	 document.querySelector('.terms_and_cons').style.opacity = "1";
	  document.querySelector('.terms_and_cons').style.top = "5px";
	 
	  },500);
	  setTimeout(function(){
	    document.querySelector('.link_forgot_pass').className = "link_forgot_pass d_none";
	 document.querySelector('.terms_and_cons').className = "terms_and_cons d_block";
	  },450);

	}



	function sign_in(){
	  var inputs = document.querySelectorAll('.input_form_sign');
	document.querySelectorAll('.ul_tabs > li')[0].className = "active"; 
	document.querySelectorAll('.ul_tabs > li')[1].className = ""; 
	  
	  for(var i = 0; i < inputs.length ; i++  ) {
	switch(i) {
	    case 1:
	 console.log(inputs[i].name);
	        break;
	    case 2:
	 console.log(inputs[i].name);
	    default: 
	document.querySelectorAll('.input_form_sign')[i].className = "input_form_sign d_block";
	}
	} 

	setTimeout( function(){
	for(var d = 0; d < inputs.length ; d++  ) {
	switch(d) {
	    case 1:
	 console.log(inputs[d].name);
	        break;
	    case 2:
	 console.log(inputs[d].name);

	    default:
	 document.querySelectorAll('.input_form_sign')[d].className = "input_form_sign d_block";  
	 document.querySelectorAll('.input_form_sign')[2].className = "input_form_sign d_block active_inp";  

	   }
	  }
	 },100 );

	 document.querySelector('.terms_and_cons').style.opacity = "0";
	  document.querySelector('.terms_and_cons').style.top = "-5px";

	  setTimeout(function(){
	 document.querySelector('.terms_and_cons').className = "terms_and_cons d_none"; 
	document.querySelector('.link_forgot_pass').className = "link_forgot_pass d_block";

	 },500);

	  setTimeout(function(){

	 document.querySelector('.link_forgot_pass').style.opacity = "1";
	   document.querySelector('.link_forgot_pass').style.top = "5px";
	    

	for(var d = 0; d < inputs.length ; d++  ) {

	switch(d) {
	    case 1:
	 console.log(inputs[d].name);
	        break;
	    case 2:
	 console.log(inputs[d].name);

	         break;
	    default:
	 document.querySelectorAll('.input_form_sign')[d].className = "input_form_sign";  
	}
	  }
	   },1500);
	   document.querySelector('.btn_sign').innerHTML = "SIGN IN";    
	}


	window.onload =function(){
	  document.querySelector('.cont_centrar').className = "cont_centrar cent_active";

	}
