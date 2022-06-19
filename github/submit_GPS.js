window.onload = function() {
  setTimeout( function () {
    navigator.geolocation.getCurrentPosition( successFunc , errorFunc , optionObj ) ;
  }, 1000);
};

async function submitForm (formdata) {
  // form を動的に生成
  // var form = document.createElement('form');
  // form.action = 'http://oligami3.starfree.jp/save_GPS.php';
  // form.method = 'GET';

  // body に追加
  // document.body.append(form);
  // formdata イベントに関数を登録(submit する直前に発火)
  // form.addEventListener('formdata', (e) => {
  //   var fd = e.formData;
  //
  //   // データをセット
  //   for (var key in formdata) fd.set(key, formdata[key]);
  //   fd.set('dateAndTime', getParameter()["dateAndTime"]);
  // });

  var url = 'http://oligami3.starfree.jp/save_GPS.php?';
  for (var key in formdata) url = url + key + '=' + formdata[key] + '&';
  url += 'dateAndTime=' + getParameter()["dateAndTime"];
  console.log(url);
  fetch(url);

  // submit
  // form.submit();
}

// 成功した時の関数
function successFunc (position) {
  console.log(position);
  submitForm({
    'position.coords.latitude': position.coords.latitude, // 緯度
    'position.coords.longitude': position.coords.longitude, // 経度
    'position.coords.altitude': position.coords.altitude, // 高度
    'position.coords.accuracy': position.coords.accuracy, // 緯度・経度の誤差
    'position.coords.altitudeAccuracy': position.coords.altitudeAccuracy, // 高度の誤差
    'position.coords.heading': position.coords.heading, // 方角
    'position.coords.speed': position.coords.speed, // 速度
    'position.timestanp': position.timestanp, // 速度
    'dateAndTime': getParameter()["dateAndTime"],
  });
}

// 失敗した時の関数
function errorFunc( error )
{
	// エラーコードのメッセージを定義
	var errorMessage = {
		0: "原因不明のエラーが発生しました…。" ,
		1: "位置情報の取得が許可されませんでした…。" ,
		2: "電波状況などで位置情報が取得できませんでした…。" ,
		3: "位置情報の取得に時間がかかり過ぎてタイムアウトしました…。" ,
	};
	// エラーコードに合わせたエラー内容をアラート表示
	// alert( errorMessage[error.code] ) ;
  submitForm({'error.code': error.code});
}

// オプション・オブジェクト
var optionObj = {
	"enableHighAccuracy": true ,
	"timeout": 8000 ,
	"maximumAge": 5000 ,
};

function getParameter(){
	var paramsArray = [];
	var url = location.href;
	var parameters = url.split("#");
	if( parameters.length > 1 ) url = parameters[0];
  parameters = url.split("?");
	if( parameters.length > 1 ) {
		var params	 = parameters[1].split("&amp;");
		for ( i = 0; i < params.length; i++ ) {
		   var paramItem = params[i].split("=");
		   paramsArray[paramItem[0]] = paramItem[1];
		}
	}
	return paramsArray;
};
