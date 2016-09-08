{
	 
function login(form) {
	var phone = window.phone = PHONE({
	    number        : form.username.value || "Anonymous", // listen on username line else Anonymous
	    publish_key   : 'pub-c-561a7378-fa06-4c50-a331-5c0056d0163c',
	    subscribe_key : 'sub-c-17b7db8a-3915-11e4-9868-02ee2ddab7fe',
	});	
	phone.ready(function(){ form.username.style.background="#55ff5b"; 
	
	form.login_submit.hidden="true";
	});
	phone.receive(function(session){
	    session.connected(function(session) { video_out.appendChild(session.video); });
	    session.ended(function(session) { video_out.innerHTML='Video'; });	
		
	});
	
	return false; 	// So the form does not submit.
}

function makeCall(form){
	if (!window.phone) alert("Escoge un nombre primero");
	else phone.dial(form.number.value);
	return false;
}

function end(){
	phone.hangup();
}


function mute(){
	var audio = phone.toggleAudio();
	if (!audio) $("#mute").html("Unmute");
	else $("#mute").html("Mute");
}

function pause(){
	var video = phone.toggleVideo();
	if (!video) $('#pause').html('Unpause');
	else $('#pause').html('Pause');
}



}