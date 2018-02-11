//all of these problems were written out side by side with the following YouTube video by Derek Banas
//https://www.youtube.com/watch?v=BWXggB-T1jQ&feature=youtu.be&t=37m37s

$("document").ready(function() {

	$("#main-title").css("color", "lightgreen");

	//target id or class, using # and .
	$("#intro-text").css({
		"background-color" : "lightpink",
		"color": "blue"
	});

	//target element directly
	$("li").css("color", "green");

	//target child of element
	$("li:nth-child(3)").css("font-weight", "bold");

	//target element following element
	$("p + a").css("color", "red");

	//target styling element within another element directly
	$("em").css("color", "orange");

	// $("p[name]").html("<em>Eating animals is not cruelty-free.</em>") //this replaces the text entirely

	//target attribute containing particular verbiage
	$("li[class*='arf']").css("font-weight", "bolder");

	//target every even element selected
	$("#list li:even").css("background-color", "#D2B48C");

	//target every odd element selected
	$("#list li:odd").css("background-color", "#ADD8E6");

	//target element not containing specific text
	$("#list2 li:not(:contains(Animal))").css("color", "pink");

	//change background of element containing specified text
	$("p:contains('animal')").css("background-color", "yellow");

	//hide target element having a given attribute
	$("p:has(em)").hide();

	// alert($("p:has(em)").html());

	//show target element having a given attribute
	$("p:has(em)").html("<i>Some normal text</i>").show();

	//tack on before current element
	$("p:has(i)").append(" I go at the end");

	//tack on after current element
	$("p:has(i)").prepend("I go at the beginning ");

	//add element before targeted element
	$("p:has(i)").before("<p id='before_p'>A new paragraph before</p>");

	//add element after targeted element
	$("p:has(i)").after("<p id='after_p'>A new paragraph after</p>");

	//remove text or element upon clicking
	$("#after_p").click(function() {
		$(this).remove();
	});

	//replace text or element upon clicking
	$("#before_p").click(function() {
		$(this).replaceWith("<p>I\'m the new paragraph");
	});

	//grab element and move it into input area
	$("#list li").each(function(index) {

		var inputListStuff = $("#input-area").val();

		$("#input-area").val(inputListStuff + " " + $(this).text());

	});

	//add a class
	$("li").addClass("reasons");

	// add and subtract different classes through clicking
	// print the rgb to input area
	$("li").click(function(){
		$(this).toggleClass("highlight");

		var bgColor = $(this).css("background-color");

		$("input[type=text]#yourName").val(bgColor);
	});


	//print to input field the class of clicked on elements
	$("li").click(function() {
		var liName = $(this).attr("class");

		$("input[type=text]#yourName").val(liName);
	});

	//changes color when use mouses onto element
	//use attr to change the photo and put in "src" and url
	$("h1").mouseover(function() {
		$(this).css("color", "purple");
	});

	//changes color when user mouses off of element
	$("h1").mouseout(function() {
		$(this).css("color", "lightgreen");
	});

	//another way to change element when mousing over
	$("h3").hover(function(){
		$(this).css("color", "green");
		},
		function() {
			$(this).css("color", "black");
	});

	//changes element on doubleclick
	//use attr to change image, include src and url
	$("h1").dblclick(function(){
		$(this).css("color", "red");
	});

	//outputs the coordinates of clicking into input field
	$(document).click(function(e){
		$("#mClickX").val(e.pageX);
		$("#mClickY").val(e.pageY);
	});

	//outs the coordinates of moving the mouse
	$(document).mousemove(function(e){
		$("#mMouseX").val(e.screenX);
		$("#mMouseY").val(e.screenY);
	});

	//add key pressed to input field
	$(document).keypress(function(e) {
		var keyPressed = String.fromCharCode(e.which);
		$("#keyPressed").val(keyPressed);
	});

	//alters text or element outside of input upon clicking out of text field
	$("#inputFormEvent").blur(function(){
		$("#formEvent").text("Left Input Element");
	});

	//indicates change to value in input field (try adding spaces to value and then pressing enter to see this message)
	$("#inputFormEvent").change(function(){
		$("#formEvent").text("Left Input Changed");
	});

	//indicates that the input box has been clicked into
	$("#inputFormEvent").focus(function(){
		$("#formEvent").text("Left Input Focused");
	});

	//indicates that the input box values have been selected
	$("#inputFormEvent").select(function(){
		$("#formEvent").text("Left Input Selected");
	});

	//prompts an alert when an element has been moused over
	// function showWhatTouched(e) {
	// 	alert(e.data.message);
	// }

	// var TrackEvents = { message: "Touched Tracking Events"};

	// $("#track").on("mouseover", TrackEvents, showWhatTouched);

	//slideshow that changes images when you click
	//NOTE that this example is not in use with the HTML code
	// var images = ["image1.png", "image2.png", "image3.png", "image4.png"];

	// var focusImg = 1;

	// $("imageLocationOnHtml").click(function() {
	// 	var image = images[focusImg];
	// 	focusImg++;
	// 	if (focusImg > 3) {
	// 		focusImg = 0;
	// 	}
	// });

	// $("#imageLocationOnHtml").attr("src", image);

	//hide an element on click
	$("#track").click(function() {
		$(this).hide();
	});

	//fade out an element while toggling another to its place
	$("#third-paragraph").click(function() {
		$(this).fadeOut(2000);

		$("#second-paragraph").fadeToggle(2000);
	});

	//fade element by speed and opacity
	$("#outputs").click(function() {
		$(this).fadeTo("slow", .5);
	});

	//makes particular elements disappear in tables/lists
	//use slideDown to make element reappear upon click
	$("ul:contains('Health')").click(function(){
		$("ul:has(li:contains('Health'))").slideUp(1000);
	});

	//moves element and adjusts styling
	//NOTE you must set position in order to move the element this way
	// $("#intro-text").click(function() {
	// 	$(this).css("position", "relative");

	// 	$("#intro-text").animate(
	// 	{

	// 		left: 300,
	// 		opacity: .5,
	// 		'font-size': '22px',
	// 		width: 300

	// 	}, 2000, "easeinQuad");
	// });

	//AJAX allows you to pull information from the server without reloading the page

});

