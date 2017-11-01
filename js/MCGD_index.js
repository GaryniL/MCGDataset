//should go inside your <head> tag
function onHover() {
	var items = new Array('image/idea2-1.png','image/idea2-2.png','image/idea2-3.png');
	var item = items[Math.floor(Math.random()*items.length)];
	$("#menuImg").attr('src', item);
}

function offHover() {
	var items = new Array('image/idea2-1.png','image/idea2-2.png','image/idea2-3.png');
	var item = items[Math.floor(Math.random()*items.length)];
	$("#menuImg").attr('src', item);
}