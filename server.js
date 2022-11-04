const http = require('http')
const url = require('url')
const fs = require('fs')

//http://localhost:8888/getWeather测试
//req请求，res响应
http.createServer((req, res) => {
  let urlObj = url.parse(req.url)
  console.log(urlObj)
  //2.模拟url请求
  if(urlObj.pathname === '/getWeather') {
    res.end(JSON.stringify({data: '晴'}))
  } else {
    //1.读取文件，打开前端index.html文件
    res.end(fs.readFileSync(__dirname + '/index.html'))
  }
}).listen(8888)

//pathname为端口域名/后面的路径，如8888/getWeather


