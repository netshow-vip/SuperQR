// 获取输入框中的值
getCurrentAddress();

function getQrcode(url_s,bigsmall=120){
  
    var qrcode = new QRCode(document.getElementById("qrcode"), {
      width : bigsmall,//设置宽高
      height : bigsmall,
      correctLevel: QRCode.CorrectLevel.H
    });
    qrcode.makeCode(url_s);
  
}

function getCurrentAddress(){
	browser.tabs.query({currentWindow: true, active: true})
    .then((tabs) => {
      setCurrentAddress(tabs[0].url);
  })
} 

function setCurrentAddress(url){
	document.getElementById('currentAddress').value=url;
    getQrcode(url,120);
}
    
// 监听表单提交事件
document.getElementById('diy').addEventListener('click', function(e) {
  var value = document.getElementById('currentAddress').value;
  var bigsmall=document.getElementById('bigsmall').value;
  var fc=document.getElementById('fc').value;
  var bc=document.getElementById('bc').value;
  // 获取当前窗口的大小
  var windowWidth = screen.availWidth;
  var windowHeight = screen.availHeight;
 
  // 计算新窗口的位置
  var leftPosition = (windowWidth - 450) / 2; // 根据需要设定newWindowWidth为新窗口的宽度
  var topPosition = (windowHeight - 460) / 2; // 根据需要设定newWindowHeight为新窗口的高度
  let createData = {
		type: "detached_panel",
		url: "../mypage/my-page.html?url=" + value + "&bigsmall=" + bigsmall + "&fc=" + fc + "&bc=" + bc,
		width: 450,
		height: 460,
		top:topPosition,
		left:leftPosition
		};
  let creating = browser.windows.create(createData);
});

/*browser.runtime.sendMessage(
  {
    // 里面的值应该可以自定义，用于判断哪个请求之类的
    type: 'fetch',
    url: "" // 需要请求的url
  },
  response => JSON.parse(response.text()));
  */