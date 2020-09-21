/**
 * 
 */
var colors = new Array('#3498db', '#e74c3c', '#2ecc71', '#e67e22', '#1abc9c', '#f1c40f');


//Function that prints required classes
function printCSS(){
	document.write('<style>');
	
	for(i = 0; i < colors.length; i++){
		document.write('.color-' + i + '{color:' + colors[i] + '}');
	}
	
	document.write('</style>');
}


//Function that generates the text
function generateText(text){
	document.write('<div class=\'textcolor\'>');

	for(i = 0; i < text.length; i++){
		var rnd = Math.floor(Math.random() * colors.length);
    
		document.write('<span id="letter-' + i + '" class="color-' + rnd + '" onmouseover="changeColor(this.id)">');
		document.write(text[i]);
		document.write('</span>');
	}
	document.write('</div>');
}


//Function that changes color of letter
function changeColor(el){
	el = document.getElementById(el);
	var rnd = Math.floor(Math.random() * colors.length);
  
	while(el.className == 'color-' + rnd){
		rnd = Math.floor(Math.random() * colors.length);
	}
  
	el.className = 'color-' + rnd;
}


printCSS();
generateText('맛있는 게살버거!');

