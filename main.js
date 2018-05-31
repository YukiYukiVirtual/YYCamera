(function()
{
	navigator.mediaDevices = navigator.mediaDevices || ((navigator.mozGetUserMedia || navigator.webkitGetUserMedia) ? {
   getUserMedia: function(c) {
     return new Promise(function(y, n) {
       (navigator.mozGetUserMedia ||
        navigator.webkitGetUserMedia).call(navigator, c, y, n);
     });
   }
} : null);

if (!navigator.mediaDevices) {
  console.log("getUserMedia() not supported.");
  return;
}

	// カメラの設定
	var media = { audio: true, video: { width: 1280, height: 720 } };/*{
		audio : false,
		video : {
			facingMode : {
				exact : "environment"
			}
		}
	};*/

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