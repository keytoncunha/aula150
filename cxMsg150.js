export default class Cxmsg{
    static cor="#888"
    static destino=null
    static divmsg=null
    static tipo=null
    static comandoSn=null
    static textos = null
    
    static mostrar=(config,titulo,texto)=>{
        this.cor = config.cor
        this.tipo = config.tipo
        this.textos = config.textos
        this.comandoSn = config.comandoSn

        this.destino = document.body
        this.titulo=titulo
        this.texto=texto
        this.divmsg = document.createElement('div')
        const estilo_divmsg = 
        "display: flex;"+
        "justify-content: center;"+
        "align-items: center;"+
        "position: absolute;"+
        "top: 0px;"+
        "left: 0px;"+
        "width: 100%;"+
        "height: 100vh;"+
        "background-color: rgb(0,0,0,0.7);"+
        "z-index: 10;"
        this.divmsg.setAttribute('id','divmsg')
        this.divmsg.setAttribute('style',estilo_divmsg)
        this.destino.prepend(this.divmsg)
        
        const esilo_areaCxMsg=
            "display: flex;"+
            "justify-content: flex-start;"+
            "align-items: center;"+
            "flex-direction: column;"+
            "width: 300px;"
        const areaCxMsg = document.createElement('div')
        areaCxMsg.setAttribute('style',esilo_areaCxMsg)
        this.divmsg.appendChild(areaCxMsg)

        const estilo_tituloCxMsg =
            "display: flex;"+
            "justify-content: flex-start;"+
            "align-items: center;"+
            "width: 100%;"+
            "background-color:" + this.cor + ";"+
            "color: #FFF;"+
            "padding: 5px;"+
            "border-radius: 5px 5px 0px 0px"
        const tituloCxMsg = document.createElement('div')
        tituloCxMsg.setAttribute('style',estilo_tituloCxMsg)
        tituloCxMsg.innerHTML = this.titulo
        areaCxMsg.appendChild(tituloCxMsg)

        const estilo_corpoCxMsg =
            "display: flex;"+
            "justify-content: flex-start;"+
            "align-items: center;"+
            "width: 100%;"+
            "background-color: #EEE;"+
            "color: #000;"+
            "padding: 30px 5px;"
        const corpoCxMsg = document.createElement('div')
        corpoCxMsg.setAttribute('style',estilo_corpoCxMsg)
        corpoCxMsg.innerHTML = this.texto
        areaCxMsg.appendChild(corpoCxMsg)

        const estilo_rodapeCxMsg = 
            "display: flex;"+
            "justify-content: space-around;"+
            "align-items: center;"+
            "width: 100%;"+
            "background-color: #CCC;"+
            "color: #000;"+
            "padding: 5px;"+
            "border-radius: 0px 0px 5px 5px;"
        const rodapeCxMsg = document.createElement('div')
        rodapeCxMsg.setAttribute('style',estilo_rodapeCxMsg)
        areaCxMsg.appendChild(rodapeCxMsg)

        const estilo_btnOk = 
            "background-color:"+this.cor+";"+
            "color: #fff;"+
            "padding: 10px 50px;"+
            "border-radius: 5px;"+
            "cursor: pointer;"+
            "text-transform: uppercase;"
        if(this.tipo == 'ok'){
            const btnOk = document.createElement('button')
            btnOk.setAttribute('style',estilo_btnOk)
            btnOk.innerHTML="ok"
            btnOk.addEventListener('click',(evt)=>{
                this.ocultar()
            })
            rodapeCxMsg.appendChild(btnOk)

        } else if(this.tipo == 'sn'){
            const btnSim = document.createElement('button')
            btnSim.setAttribute('style',estilo_btnOk)
            btnSim.innerHTML = this.textos[0]
            btnSim.addEventListener('click',(evt)=>{
                this.comandoSn()
                this.ocultar()
            })
            rodapeCxMsg.appendChild(btnSim)
            
            const btnNao = document.createElement('button')
            btnNao.setAttribute('style',estilo_btnOk)
            btnNao.innerHTML = this.textos[1]
            btnNao.addEventListener('click',(evt)=>{
                this.ocultar()
            })
            rodapeCxMsg.appendChild(btnNao)
        }
    }    
    
    static ocultar=()=>{
        this.divmsg.remove()
    }    
}

