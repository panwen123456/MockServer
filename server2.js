const http = require('http')
const url = require('url')
const fs = require('fs')

//http://localhost:8888/getWeather?city=beijing测试
http.createServer((req, res) => {
  //解析url字符串，转换成监听对象,加true异步
  let pathObj = url.parse(req.url, true) 
  switch(pathObj.pathname) {
    case '/getWeather': 
    //query:把 url ?后的参数,转换为json对象 
      if(pathObj.query.city === 'beijing') {
        res.end(JSON.stringify({city: 'beijing', weather: 'sunny'}))
      } else {
        res.end(JSON.stringify({city: pathObj.query.city, weather: 'unknown'}))
      }
      break
    default:
      try {
        let pathname = pathObj.pathname === '/' ? 'index.html' : pathObj.pathname
        res.end(fs.readFileSync(__dirname + pathname))
      } catch(e) {
        res.writeHead(404, 'Not Found')
        res.end('<h1>404 Not Found</h1>')
      }
  }
}).listen(8888)