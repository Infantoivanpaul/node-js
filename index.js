console.log("Infanto ivan paul")



const os = require ('os')
console.log(os.homedir())




const fs = require ('fs')

fs.writeFile('./sample1.txt','This is a new file','utf-8',(error)=>{
    if(error)
    console.log("error")
else
console.log("File Write successfull")
})





fs.readFile('./sample.txt','utf-8',(error,data)=>{
    if(error)
    console.log(error)
else
console.log(data)
})

let data = fs.readFileSync('./sample.txt','utf-8')
console.log('sync',data)





const http = require('http');


const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  
  const currentTime = new Date();
  const currentTimeString = currentTime.toLocaleTimeString();


  res.end(`Current Server Time: ${currentTimeString}`);
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});





const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'application/json'
  });

  res.end(JSON.stringify({
    name: 'Infanto Ivan Paul',
    Email: 'ivan@gmail.com'
  }));
});

server.listen(8000, () => {
  console.log('Server is listening on port 8000');
});

