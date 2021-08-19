const nameExchanges = ['Bithumb','OKEX','Binance','Bittrex','Bitfinex','Gate.io','Bitforex','Poloniex','KuCoin','Bitcoin.com','Probit','Lbank','MXC','CoinTiger','HitBTC','P2PB2B','Coinsbit','Huobi','Upbit','VinDAX','BKex']
var validadorBTN = true

window.addEventListener('click', (e)=>{
    const lang = document.getElementsByClassName('header__nav--idiomas-sec')[0]
    if(e.target.id === "btnNavBar" && validadorBTN){
        document.getElementsByClassName('header__nav')[0].style.display = "flex"
        validadorBTN = false
    }else if(e.target.id === "btnNavBar" && !validadorBTN){
        document.getElementsByClassName('header__nav')[0].style.display = "none"
        validadorBTN = true
    }
    if(e.target.id === 'lenguaje-primario'){
        lang.style.display = "flex"
    }else if(lang.style.display === "flex"){
        lang.style.display = "none"
    }

    const ID = e.target.id
    const validar = ID.slice(0,-2)
    const numero = Number(ID.slice(4)) - 1

    if(validar==='img' || validar==='img-'){
        localizacion(nameExchanges, numero)
    }
})
function localizacion(name, numero){
    const local = document.getElementById('getExchanges')
    const nameExchange = document.getElementById('nameExchange')
    name.map((item, index) => {
        if(numero===index) {
            nameExchange.textContent = item
        }
    })

    local.scrollIntoView()
}