(function()
{
	const medias = {
		audio : false, video : {
			facingMode : {
				exact : "environment"
			}
		}
	};
	const video = document.getElementById("video");
	const canvas = document.getElementById("canvas");
	const ctx = canvas.getContext("2d");
	
	canvas.addEventListener("click", function()
	{
		saveCanvas(canvas);
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

		requestAnimationFrame(draw);
	}
})();