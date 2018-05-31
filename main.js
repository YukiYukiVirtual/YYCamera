(function()
{
	// カメラの設定
	var media = {
		audio : false,
		video : {
			facingMode : {
				exact : "environment"
			}
		}
	};

	// カメラ起動
	navigator.mediaDevices.getUserMedia(media)
	.then(function(stream) {	// 成功
		var video = document.getElementById("video");	// カメラ映像表示先
		video.src = window.URL.createObjectURL(stream);	// カメラ映像ソース
		video.onloadedmetadata = function(e) {
			video.play();	// 動画再生
		};
	})
	.catch(function(err) {	// 失敗
		alert(err.name + ": " + err.message);
	});
})();