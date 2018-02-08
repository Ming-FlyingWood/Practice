window.onload = function drawSmileyFace() {
    var canvas = document.getElementById("smiley");
    var context = canvas.getContext("2d");
    
    context.beginPath();
    context.arc(300, 300 - 50, 200, 0, 2 * Math.PI, true);
    context.fillStyle = "#ffffcc";
    context.fill();
    context.stroke();

    context.beginPath();
    context.arc(200, 250 - 50, 25, 0, 2* Math.PI, true);
    context.stroke();
    
    context.beginPath();
    context.arc(400, 250 - 50, 25, 0, 2 * Math.PI, true);
    context.stroke();
    
    context.beginPath();
    context.moveTo(300, 300 - 50);
    context.lineTo(300, 359 - 50);
    context.stroke();
    
    context.beginPath();
    context.arc(300, 350 - 50, 75,
                (20 * Math.PI)/180,
                (160 * Math.PI)/180, false);
    context.stroke();
}
