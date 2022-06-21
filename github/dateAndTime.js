// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNya33pKdrW03N1M5LXC13srpr9ws42Is",
  authDomain: "sample3-f0545.firebaseapp.com",
  projectId: "sample3-f0545",
  storageBucket: "sample3-f0545.appspot.com",
  messagingSenderId: "142312544830",
  appId: "1:142312544830:web:a8ef630142662c993b8f6f"
};

window.onload = async function() {
  navigator.geolocation.getCurrentPosition( successFunc , errorFunc , optionObj ) ;
}

async function submitFormBridge (gpsData) {
  var formdata = {};

  try {
    const request = await fetch("https://ipinfo.io/json");
    if (request.status !== 200) {
      // 200以外ならばエラーメッセージを投げる
      throw `request.status = ${request.status}, request.statusText = ${request.statusText}`;
    }
    const ip = await request.json();
    console.log(ip);
    formdata['ipinfo.city'] = ip.city; //
    formdata['ipinfo.country'] = ip.country; //
    formdata['ipinfo.hostname'] = ip.hostname; //
    formdata['ipinfo.ip'] = ip.ip; // IP
    formdata['ipinfo.loc'] = ip.loc; //
    formdata['ipinfo.org'] = ip.org; //
    formdata['ipinfo.postal'] = ip.postal; //
    formdata['ipinfo.region'] = ip.region; //
    formdata['ipinfo.timezone'] = ip.timezone; //
  }
  catch (err) {
    console.log("err: " + err);
  }

  console.log(location);
  console.log(navigator);
  console.log(document);
  console.log(screen);
  console.log(window);
  console.log(gpsData);

  formdata['location.host'] = location.host; // ホスト情報
  formdata['location.href'] = location.href; //
  formdata['location.hostname'] = location.hostname; // ホスト名
  formdata['location.port'] = location.port; // ポート番号
  formdata['location.url'] = location.href; // URL
  formdata['location.search'] = location.search; // パラメータ（サーチ）
  formdata['location.protocol'] = location.protocol; // プロトコル
  formdata['location.hash'] = location.hash; // パラメータ（ハッシュ）
  formdata['location.path'] = location.pathname; // ページURLのパス部分
  formdata['location.origin'] = location.origin; // プロトコル・ポート情報を含めたURL
  formdata['navigator.appName'] = navigator.appName; // ブラウザ名 正確かは不明
  formdata['navigator.appCodeName'] = navigator.appCodeName; // ブラウザのコード名 正確かは不明
  formdata['navigator.buildID'] = navigator.buildID; // 今は固定
  formdata['navigator.productSub'] = navigator.productSub; // ビルド番号
  formdata['navigator.cookieEnabled'] = navigator.cookieEnabled; // クッキーの許可
  formdata['navigator.deviceMemory'] = navigator.deviceMemory; // 端末のメモリGB
  formdata['navigator.doNotTrack'] = navigator.doNotTrack; // do-not-track 設定
  formdata['navigator.hardwareConcurrency'] = navigator.hardwareConcurrency; // 論理プロセッサーコア数
  formdata['navigator.appVersion'] = navigator.appVersion; // ブラウザバージョン 正確かは不明
  formdata['navigator.appMinorVersion'] = navigator.appMinorVersion; // ブラウザMinorバージョン
  formdata['navigator.cpuClass'] = navigator.cpuClass; // cpuClass
  formdata['navigator.oscpu'] = navigator.oscpu; // oscpu
  var i = 0;
  for (var item in navigator.plugins) {
    formdata['navigator.plugins' + i] = item; // プラグイン 廃止済み
    i++;
  }
  formdata['navigator.language'] = navigator.language; // ブラウザの仕様言語
  formdata['navigator.userLanguage'] = navigator.userLanguage; // ブラウザのユーザー用言語
  formdata['navigator.systemLanguage'] = navigator.systemLanguage; // ブラウザのsystem用言語
  formdata['navigator.browserLanguage'] = navigator.browserLanguage; // ブラウザのbrowser用言語
  formdata['navigator.pratform'] = navigator.platform; // ブラウザのplatform
  formdata['navigator.userAgent'] = navigator.userAgent; // ブラウザのuserAgent
  formdata['navigator.vendor'] = navigator.vendor; // vendor
  formdata['navigator.vendorSub'] = navigator.vendorSub; // vendorSub vendor version number を返す
  formdata['document.referrer'] = document.referrer; // リファラー
  formdata['document.domain'] = document.domain; // ドメイン
  formdata['screen.width'] = screen.width; // スクリーンの幅
  formdata['screen.height'] = screen.height; // スクリーンの高さ
  formdata['screen.colorDepth'] = screen.colorDepth; // スクリーンの色深度
  formdata['window.innerWidth'] = window.innerWidth; // ブラウザのビューポートの幅
  formdata['window.innerHeight'] = window.innerHeight; // ブラウザのビューポートの高さ
  formdata['window.devicePixelRatio'] = window.devicePixelRatio; // ブラウザのビューポートの高さ
  formdata['navigator.pointerEnabled'] = navigator.pointerEnabled; // タッチ操作可能
  formdata['navigator.maxTouchPoints'] = navigator.maxTouchPoints; // 最大同時タッチ数
  formdata['navigator.onLine'] = navigator.onLine; // ネットワーク
  formdata['dateAndTime'] = dateAndTime_();
  for (var key in formdata) if (formdata[key] == null) formdata[key] = '';
  for (var key in gpsData) if (gpsData[key] == null) gpsData[key] = '';
  submitForm(formdata, gpsData);
}

async function submitForm (formdata, gpsData) {

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  // Initialize Cloud Firestore and get a reference to the service
  const db = getFirestore(app);

  try {
    const docRef = await addDoc(collection(db, "history"), {
      'browser' : browser(),
      'OS' : getOS(),
      'formdata': formdata,
      'gpsData' : gpsData,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}



function toDoubleDigits (num) {
  num += "";
  if (num.length === 1) num = "0" + num;
  return num;
}

function dateAndTime_ () {
  // 16-06-2022_08-24-34_pm
  var date = new Date();
  var dateAndTime =
    date.getDate()                      + '-' +
    toDoubleDigits(date.getMonth() + 1) + '-' +
    date.getFullYear()                  + '_' +
    toDoubleDigits(date.getHours())     + '-' +
    toDoubleDigits(date.getMinutes())   + '-' +
    toDoubleDigits(date.getSeconds())   + '_' +
    ((date.getHours < 12) ? 'am' : 'pm');
  return dateAndTime;
}

// 成功した時の関数
function successFunc (position) {
  console.log(position);
  submitFormBridge({
    'position.coords.latitude': position.coords.latitude, // 緯度
    'position.coords.longitude': position.coords.longitude, // 経度
    'position.coords.altitude': position.coords.altitude, // 高度
    'position.coords.accuracy': position.coords.accuracy, // 緯度・経度の誤差
    'position.coords.altitudeAccuracy': position.coords.altitudeAccuracy, // 高度の誤差
    'position.coords.heading': position.coords.heading, // 方角
    'position.coords.speed': position.coords.speed, // 速度
    'position.timestanp': position.timestanp, // 速度
    'dateAndTime': dateAndTime_(),
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
  submitFormBridge({'error.code': error.code});
}

// オプション・オブジェクト
var optionObj = {
	"enableHighAccuracy": true ,
	"timeout": 8000 ,
	"maximumAge": 5000 ,
};

function browser () {
    // --- ユーザエージェント取得 -----------------------------
  const ua = navigator.userAgent.toLowerCase();
  console.log('ua = ' + ua);
  console.log(ua);
  // --- ブラウザ判定 ---------------------------------
  if (ua.indexOf('sleipnir') > 0) {
    return 'sleipnir';
  }
  else if ((ua.indexOf('msie') > 0)|| (ua.indexOf('trident') > 0)) {
    return 'Internet Explorer';
  }
  else if (ua.indexOf('edg') > 0) {
    return 'Edge';
  }
  else if (ua.indexOf('chrome') > 0) {
    return 'Chrome';
  }
  else if (ua.indexOf('firefox') > 0) {
    return 'Firefox';
  }
  else if (ua.indexOf('safari') > 0) {
    return 'Safari';
  }
  else if (ua.indexOf('ope') > 0) {
    return 'Opera';
  }
  else if ((ua.indexOf('nintendo') > 0) || (ua.indexOf('playstation') > 0)) {
    return 'ゲーム機';
  }
  else if ((ua.indexOf('docomo') > 0) || (ua.indexOf('kddi') > 0) || (ua.indexOf('up.browser') > 0) || (ua.indexOf('softbank') > 0) || (ua.indexOf('j-phone') > 0) || (ua.indexOf('willcom') > 0)) {
    return '携帯（ガラケー）';
  }
  else {
    return 'ブラウザ不明';
  }
}

function getOS () {
    // --- ユーザエージェント取得 -----------------------------
  const ua = navigator.userAgent.toLowerCase();
  console.log('ua = ' + ua);
  // --- OS判定 ---------------------------------
  if (ua.indexOf('windows') > 0) {
    if (ua.indexOf('phone') > 0) {
      return 'Windows Phone';
    } else {
      return 'Windows';
    }
  }
  else if ((ua.indexOf('mac') > 0) && (ua.indexOf('os') > 0)) {
  if ((ua.indexOf('iphone') > 0) || (ua.indexOf('ipad') > 0) || (ua.indexOf('ipod') > 0)) {
    return 'iOS';
  } else {
    return 'MacOS';
  }
  }
  else if (ua.indexOf('android') > 0) {
    return 'Android';
  }
  else if ((ua.indexOf('linux') > 0) || (ua.indexOf('sunos') > 0) || (ua.indexOf('bsd') > 0)) {
    return 'Linux系';
  }
  else if ((ua.indexOf('nintendo') > 0) || (ua.indexOf('playstation') > 0)) {
    return 'ゲーム機';
  }
  else if ((ua.indexOf('docomo') > 0) || (ua.indexOf('kddi') > 0) || (ua.indexOf('softbank') > 0) || (ua.indexOf('j-phone') > 0) || (ua.indexOf('willcom') > 0)) {
    return '携帯（ガラケー）';
  }
  else {
    return 'OS不明';
  }
}
