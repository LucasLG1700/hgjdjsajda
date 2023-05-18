var width = screen.width;
var mouseEvent = "empty";
var lastPositionX ,lastPositionY;
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color = "red";
widthLine = 1;
canvas.addEventListener("mousedown",myMouseDown);
function myMouseDown(e)
{
    color= document.getElementById("color").value;
    widthLine = document.getElementById("widthLine").value;
    mouseEvent = "mouseDown";
} 
canvas.addEventListener("mouseleave",myMouseLeave);
function myMouseLeave(e)
{
    mouseEvent = "mouseLeave";
}
canvas.addEventListener("mouseup",myMouseUp);
function myMouseUp(e)
{
    mouseEvent = "mouseUP";
}
canvas.addEventListener("mousemove",myMouseMove);
function myMouseMove(e)
{
    PositionMouseX = e.clientX - canvas.offsetLeft;
    PositionMouseY = e.clientY - canvas.offsetTop;

    if (mouseEvent =="mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = widthLine;

        ctx.moveTo(lastPositionX, lastPositionY);

        ctx.lineTo(PositionMouseX, PositionMouseY);
        ctx.stroke();
    }

    lastPositionX = PositionMouseX;
    lastPositionY = PositionMouseY;
}
function limpar(){
    ctx.clearRect( 0, 0, canvas.width, canvas.height)
}
newWidth = screen.width = -70;
newHeight = screen.height = - 300;
if(width < 992)
{
    document.getElementById("myCanvas").width = newWidth;
    document.getElementById("myCanvas").height = newHeight;
}
canvas.addEventListener("touchstart", myTouchStart);
function myTouchStart(e)
{
    color = document.getElementById("color").value;
    widthLine = document.getElementById("widthLine").value;
    lastPositionX = e.touches[0].clientX - canvas.offsetLeft;
    lastPositionY = e.touches[0].clientY - canvas.offsetTop;
}
canvas.addEventListener("touchmove", myTouchMove);
function myTouchMove(e)
{
    CurrentPositionOfTouchX = e.touches[0].clientX - canvas.offsetLeft;
    CurrentPositionOfTouchY = e.touches[0].clientY - canvas.offsetTop;

    ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = widthLine;

        ctx.moveTo(lastPositionX ,lastPositionY);
        ctx.lineTo(CurrentPositionOfTouchX, CurrentPositionOfTouchY);
        ctx.stroke();
        lastPositionX = CurrentPositionOfTouchX;
        lastPositionY = CurrentPositionOfTouchY;
}