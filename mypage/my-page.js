$(document).ready(function(){
	const params = new URLSearchParams(window.location.search);
	// 通过 get() 方法获取指定名称的参数值
	const paramValue1 = params.get('url'); // 'paramName'为要获取的参数名称
	const paramValue2 = params.get('bigsmall'); 
	const paramValue3 = params.get('fc'); // 'paramName'为要获取的参数名称
	const paramValue4  = params.get('bc'); 
    getQrcode(paramValue1,paramValue2,paramValue3,paramValue4);
});

function getQrcode(url_s,bigsmall=120,fc='black',bc='white'){
    var qrcode = new QRCode(document.getElementById("myCanvas"), {
      width : bigsmall,//设置宽高
      height : bigsmall,
	  colorDark:fc,
	  colorLight:bc,
      correctLevel: QRCode.CorrectLevel.H
    });
    qrcode.makeCode(url_s);  
}
