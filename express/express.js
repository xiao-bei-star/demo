//引入express
const express = require('express');
var bodyParser = require('body-parser');
//创建应用对象
const app = express();
var urlencodedParser = bodyParser.urlencoded({
    extended: false
});
app.use(bodyParser.urlencoded({
    extended: false
}));
app.get('/', function(req, res) {
    res.sendFile(__dirname + "/index.html");
});
//创建路由规则
app.all('/json-server', (require, response) => {
    //设置响应头，设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    const data = {
        message: '我是从后台服务器来的数据'
    }
    let str = JSON.stringify(data);
    //设置响应体
    response.send(str);
});
app.listen(8000, () => {
    console.log("服务已经启动，8000端口监听中……");
})