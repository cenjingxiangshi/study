(function (window) {
  //1. jsonp
  function jsonp(url, params, callback) {
    var script = document.createElement('script');
    //把参数拼接到url中
    var paramsStr = '';
    for (k in params) {
      paramsStr += k + '=' + params[k] + '&';
    }
    url = url + '?' + paramsStr;
    //随机生成callback的函数名
    var cbName = "jsonp" + parseInt(Math.random() * 1000000000 + 10000000) + +new Date();
    //将生成的随机函数名放到window中
    window[cbName] = function (data) {
      callback(data);
      //删除之前生成的script标签
      document.head.removeChild(script);
      //删除window中的回调函数
      delete window[cbName];
    }
    //将随机函数名传给后台,让后台调用后返回参数
    url = url + 'callback=' + cbName;
    script.src = url;
    document.head.appendChild(script);
  }

  //暴露接口
  window.tools = {
    jsonp: jsonp
  }
})(window)