//     http://127.0.0.1:8080/?matricula=123&senha=321

const http = require('http')
const url = require('url')

http.createServer(function(req,res){
    res.setHeader('Access-Control-Allow-Origin','*')
    res.writeHead(200,{'Contentt-Type':'application/json'})

    let parametros = url.parse(req.url, true)
    let mat = parametros.query.matricula
    let pas = parametros.query.senha

    let dados = null

    if(mat == '123' && pas == '321'){
        dados = {
            nome: "Keyton Cunha",
            acesso: 10
        }
    }
    res.end(JSON.stringify(dados))
})
.listen(8080,()=>{console.log("API 150 Rodando Keyton.")})