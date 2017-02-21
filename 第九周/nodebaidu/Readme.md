# express

 - localhost:3000
 - localhost:3000/admin.html
> 防止js注入有些问题,我自己写了一个autoescape,但是没有任何效果
```
# expressbaidu/public/admin.js 末尾处添加
function autoscape(specialchars) {
    return specialchars.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    }
```
# restify

 - localhost:3900
 - localhost:3900/admin
>使用post时,不确定获得前端数据的方式是否正确,使用了bodyParse和自定义的strJson


```
# restifybaidu/app.js 末尾处
function strToJson(string) {
    var result = {};
    string.split('&').map(function(i) {
        return i.split('=')
    }).forEach(function(j) {
        result[j[0].trim()] = j[1] // 此处需要处理一下中文字符
    });
    return result;
}
server.use(restify.bodyParser());
```