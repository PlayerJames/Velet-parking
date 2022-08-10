//Create a reference for canvas 

//Give specific height and width to the car image

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.

function add() {

	function add() {
		background_imgTag = new Image();
		background_imgTag.onload = uploadBackground; background_imgTag.src = background_image;
		greencar_imgTag = new Image();
		greencar_imgTag.onload = uploadgreencar; greencar_imgTag.src = greencar_image;
		}
}

function uploadBackground() {
	Function uploadBackground() {
		ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
		}
		function uploadgreencar() {
		ctx.drawImage(greencar_imgTag, greencar_x, greencar_y, greencar_width, greencar_height);

}

function uploadgreencar() {
	function up()
	{
	if(greencar y >=0)
	{
	greencar y greencar y = 10;
	console.log("When up arrow is pressed, uploadBackground(); uploadgreencar(); x = " + greencar_x + +greencar_y);
	}
	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	canvas = document.getElementById('myCanvas'); ctx = canvas.getContext("1d");
}

function down()
{
	canvas = document.getElementById('myCanvas'); ctx = canvas.getContext("2d");
}

function left()
{
	canvas = document.getElementById('myCanvas'); ctx = canvas.getContext("3d");
}

function right()
{
	canvas = document.getElementById('myCanvas'); ctx = canvas.getContext("2d");
}
