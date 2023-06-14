import Cxmsg from "./cxMsg150.js"

const callback_ok=()=>{
    console.log('Tudo OK.')
}
const callback_naook=()=>{
    const config={
        cor: '#880',
        tipo:'ok',
        texto: null,
        comando_sn: null
    }
    Cxmsg.mostrar(config,'ERRO','Usuário ou senha incorretos.')
}
const config={
    cor: '#123',
    img:'./logo150.png',
    endpoint: "http://127.0.0.1:8080"
}
Login.login(callback_ok,callback_naook,config)