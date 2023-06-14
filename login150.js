
class Login{
    
    static logado = false
    static matLogado = null
    static nomeLogado = null
    static acessoLogado = null
    static estiloCss = null
    static callback_ok = null
    static callback_naook = null
    static config = {
        cor: '#048',
        img: './logo150.png'
    }
    static endPoint = "http://127.0.0.1:8080"
    // http://127.0.0.1:8080/?matricula=123&senha=321

    static login=(callback_ok,callback_naook,config=null)=>{
        if(config != null){
            this.config = config
        }

        this.callback_ok=()=>{callback_ok()}
        this.callback_naook=()=>{callback_naook()}

        this.estiloCss =
        ".fundoLogin{display: flex; justify-content: center; align-items: center; width: 100%; height: 100vh; position: absolute; top: 0px; left: 0px;  background-color: rgba(0, 0, 0, 0.75); box-sizing: border-box;}" +
        ".baseLogin{ display: flex; justify-content: center; align-items: stretch; width: inherit; max-width: 600px; box-sizing: inherit; }" +
        ".elementosLogin{ display: flex; flex-direction: column; justify-content: center; align-items: flex-start; width: 50%; background-color: #EEE; padding: 10px; border-radius: 10px 0px 0px 10px; box-sizing: inherit;}" +
        ".logoLogin{ display: flex; justify-content: center; align-items: center; width: 50%; background-color: #BBB; padding: 10px; border-radius: 0px 10px 10px 0px; box-sizing: inherit; }" +
        ".logoLogin img{ width: 50%; box-sizing: inherit; }" +
        ".campoLogin{ display: flex; flex-direction: column; justify-content: flex-start; align-items: flex-start; box-sizing: inherit; }" +
        ".campoLogin label{ font-size: 1.1rem; }" +
        ".campoLogin input{ background-color: #fff; font-size: 1.1rem; padding: 5px; margin-bottom: 10px; border-radius: 5px; }" +
        ".botoesLogin{ display: flex; justify-content: space-around; align-items: center; width: 100%; padding: 5px; box-sizing: inherit; }" +
        `.botoesLogin button{ width: 90px; background-color: ${this.config.cor}; color: #e8e8e8; padding: 10px; border-radius: 5px; box-shadow: 0px 0px 10px #00000088; cursor: pointer; box-sizing: inherit; }`

        const styleEstilo = document.createElement('style')
        styleEstilo.setAttribute('id','id_estiloLogin')
        styleEstilo.setAttribute('rel','stylesheet')
        styleEstilo.setAttribute('type','text/css')
        styleEstilo.innerHTML = this.estiloCss
        document.head.appendChild(styleEstilo)
        
        const fundoLogin = document.createElement('div')
        fundoLogin.setAttribute('id','fundoLogin')
        fundoLogin.setAttribute('class','fundoLogin')
        document.body.prepend(fundoLogin)
        
        const baseLogin = document.createElement('div')
        baseLogin.setAttribute('id','baseLogin')
        baseLogin.setAttribute('class','baseLogin')
        fundoLogin.appendChild(baseLogin)
        
        const elementosLogin = document.createElement('div')
        elementosLogin.setAttribute('id','elementosLogin')
        elementosLogin.setAttribute('class','elementosLogin')
        baseLogin.appendChild(elementosLogin)

        const campoLoginUserName = document.createElement('div') // USERNAME
        campoLoginUserName.setAttribute('id','campoLoginUserName')
        campoLoginUserName.setAttribute('class','campoLogin')
        elementosLogin.appendChild(campoLoginUserName)
        
        const labelUserName = document.createElement('label')
        labelUserName.setAttribute('for','f_username')
        labelUserName.innerHTML = "UserName: "
        campoLoginUserName.appendChild(labelUserName)
        
        const inputUserName = document.createElement('input')
        inputUserName.setAttribute('id','f_username')
        inputUserName.setAttribute('type','text')
        inputUserName.setAttribute('name','f_username')
        campoLoginUserName.appendChild(inputUserName)
        
        const campoLoginSenha = document.createElement('div') // SENHA
        campoLoginSenha.setAttribute('id','campoLoginSenha')
        campoLoginSenha.setAttribute('class','campoLogin')
        elementosLogin.appendChild(campoLoginSenha)
        
        const labelSenha = document.createElement('label')
        labelSenha.setAttribute('for','f_senha')
        labelSenha.innerHTML = "Senha: "
        campoLoginSenha.appendChild(labelSenha)
        
        const inputSenha = document.createElement('input')
        inputSenha.setAttribute('id','f_senha')
        inputSenha.setAttribute('type','password')
        inputSenha.setAttribute('name','f_senha')
        campoLoginSenha.appendChild(inputSenha)

        const botoesLogin = document.createElement('div')
        botoesLogin.setAttribute('class','botoesLogin')
        elementosLogin.appendChild(botoesLogin)

        const btn_logi = document.createElement('button')
        btn_logi.setAttribute('id','btn_login')
        btn_logi.innerHTML = 'Login'
        btn_logi.addEventListener('click',()=>{
            this.verificaLogin()
        })
        botoesLogin.appendChild(btn_logi)
        
        const btn_cancelar = document.createElement('button')
        btn_cancelar.setAttribute('id','btn_cancelar')
        btn_cancelar.innerHTML = 'Cancelar'
        btn_cancelar.addEventListener('click',()=>{
            this.fechar()
        })
        botoesLogin.appendChild(btn_cancelar)

        const logoLogin = document.createElement('div')
        logoLogin.setAttribute('id','logoLogin')
        logoLogin.setAttribute('class','logoLogin')
        baseLogin.appendChild(logoLogin)

        const imgLogoLogin = document.createElement('img')
        imgLogoLogin.setAttribute('src',this.config.img)
        imgLogoLogin.setAttribute('title','CFB Cursos')
        logoLogin.appendChild(imgLogoLogin)        
    }

    static verificaLogin=()=>{
        const mat = document.querySelector('#f_username').value
        const pas = document.querySelector('#f_senha').value

        const endPoint = `http://127.0.0.1:8080/?matricula=${mat}&senha=${pas}`
        fetch(endPoint)
        .then(res=>res.json())
        .then(res=>{
            if(res){
                this.logado = true
                this.matLogado = mat
                this.nomeLogado = res.nome
                this.acessoLogado = res.acesso
                this.callback_ok()
                this.fechar()
            } else{
                this.logado = false
                this.matLogado = null
                this.nomeLogado = null
                this.acessoLogado = null
                this.callback_naook()
            }
        })

        if(mat == '123' && pas == '321'){
            return true
        } else {
            return false
        }
    }

    static fechar=()=>{
        const fundoLogin = document.querySelector('#fundoLogin')
        fundoLogin.remove()
        const id_estiloLogin = document.querySelector('#id_estiloLogin')
        id_estiloLogin.remove()
    }
}

