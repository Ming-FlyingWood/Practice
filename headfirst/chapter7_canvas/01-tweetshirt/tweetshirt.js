window.onload = function() {
    var button = document.getElementById("previewButton");
    button.onclick = previewHandler;
};
function previewHandler() {
    var canvas = document.getElementById("tshirtCanvas");
    var context = canvas.getContext("2d");
    fillBackgroundCoFor(canvas, context);
    
    var selectObj = document.getElementById("shape");
    var index = selectObj.selectedIndex;
    var shape = selectObj[index].value;
    
    if (shape == "squares") {
        for (var squares = 0; squares < 20; squares++) {
            drawSquare(canvas, context);
        }
    } else if (shape == "circles") {
        for (var circles = 0; circles < 20; circles++) {
            drawCircle(canvas, context);
        }
    }
}
function drawSquare(canvas, context) {
    var w = Math.floor(Math.random() * 40);
    var x = Math.floor(Math.random() * canvas.width);
    var y = Math.floor(Math.random() * canvas.height);
    
    context.fillStyle = "lightblue";
    context.fillRect(x, y, w, w);
}

function drawCircle(canvas, context) {
    var radius = Math.floor(Math.random() * 40);
    var x = Math.floor(Math.random() * canvas.width);
    var y = Math.floor(Math.random() * canvas.height);
    context.beginPath();
    context.arc(x, y, radius, 0, 2 * Math.PI, true);
    /*
    context.arc(x, y, radius, 0, degreesToRadians(360), false);
    转换度为弧度
    */
    context.fillStyle = "lightblue";
    context.fill();
    function degreesToRadians(degrees) {
        return (degrees * Math.PI)/180;
    }
}

function fillBackgroundCoFor(canvas, context) {
    var selectObj = document.getElementById("backgroundColor");
    var index = selectObj.selectedIndex;
    var bgColor = selectObj.options[index].value;  //选择的选项作为颜色字符串，使用该颜色
    context.fillStyle = bgColor;
    context.fillRect(0, 0, canvas.width, canvas.height);
}
/* Twitter can't connected*/
function updateTweets(tweets) {
    var tweetsSelection = document.getElementById("tweets");
    for (var i = 0; i < tweets.length; i++) {
        tweet = tweets[i];
        var option = document.createElement("option");
        option.text = tweet.text;
        option.value = tweet.text.replace("\"", "'");
        tweetsSelection.option.add(option);
    }
        tweetsSelection.selectedIndex = 0;
}

