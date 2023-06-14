import Cxmsg from "./cxMsg150.js"

const callback_ok=()=>{
    console.log('Tudo OK.')
}
const callback_naook=()=>{
    const config={
        cor: '#800',
        tipo:'ok',
        texto: null,
        comando_sn: null
    }
    Cxmsg.mostrar(config,'ERRO','Usuário ou senha incorretos.')
}

Login.login(callback_ok,callback_naook)