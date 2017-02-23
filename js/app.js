
$(".word_split").lettering('words');


function splitString(){

	var str = "This is an amazing sentence.";
	var words = [];
	var buf = "";
	for(var i = 0; i < str.length; i++) {
	    buf += str[i];
	    if(str[i] == " ") {
	        words.push(buf);
	        buf = "";
	    }
	}

	if(buf.length > 0) {
	    words.push(buf);
	    console.log(words)
	}


}
splitString();


function getText(element) {
    setTimeout(function(){
        var pastedText = element.value;
          alert(pastedText);


    }, 3);
}
