(function()
{
	const filePath = "image/open.png";
	const yukiyuki = new Image();
	yukiyuki.src = filePath;
	yukiyuki.addEventListener("load", function()
	{
		yukiyuki.loaded = true;
	});
	const medias = {
		"audio": false,
		"video": {
			"facingMode": {
				"exact": "environment"
			}
		}
	};
	const video = document.getElementById("video");
	const canvas = document.getElementById("canvas");
	const ctx = canvas.getContext("2d");
	
	canvas.addEventListener("click", function()
	{
		var src = canvas.toDataURL("image/png");
		var img = '<img src="' + src + '" style="width:100vw;height:100vh;">';
		var html = document.head.innerHTML + img;
		var target = window.open("", "_blank");
		target.document.open();
		target.document.write(html);
		target.document.close();
	});

	navigator.getUserMedia(medias, successCallback, errorCallback);

	requestAnimationFrame(draw);

	function successCallback(stream) {
		video.srcObject = stream;
	};

	function errorCallback(err) {
		alert(err);
	};

	function draw() {
		canvas.width  = window.innerWidth;
		canvas.height = window.innerHeight;
		ctx.drawImage(video, 0, 0);
		
		if(yukiyuki.loaded)
		{
			var x = canvas.width - yukiyuki.width;
			var y = canvas.height - yukiyuki.height * 3 / 2;
			ctx.drawImage(yukiyuki, x, y);
		}
		
		requestAnimationFrame(draw);
	}
})();