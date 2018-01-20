/* 文档放服务器上，输入HTML文件URL运行*/
window.onload = function() {
	var url = "http://localhost/headfirst/gumball/sales.json";
	var request = new XMLHttpRequest();
	request.open("GET", url);
	request.onload = function() {
		if (request.status == 200) {
			updateSales(request.responseText);
		}
	};
	request.send(null);
}
function updateSales(responseText) {
	var salesDiv = document.getElementById("sales");
	//salesDiv.innerHTML = responseText;
	var sales = JSON.parse(responseText);//把JSON串转换为对象
	
}
	