let http = require('http');
http.createServer((req,res)=>{
	res.writeHead(200,{"Content-type":"text/html,charset=utf8"})

	
	

      let allData = '';
      req.on('data',(chunk)=>{
        allData+= chunk;

      })

      req.on('end',function(){
      	console.log(JSON.parse(allData))
      	// console.log(typeof allData)
      	console.log(JSON.parse(allData).user)

      	if(JSON.parse(allData).user === 'sdz' && JSON.parse(allData).pwd === '123')
      	{	
      		res.end('ok')
      	}else{
      		res.end('false')
      	}
      	// res.end(allData)
      })


	 
	
}).listen(3000,()=>{
	console.log('服务器已启动')
})