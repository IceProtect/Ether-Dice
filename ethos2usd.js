function ethos2eth(ethos) {
    return ethos * 0.000001
}
function draw_box() {
        var box = "<div class='balance-container nav-item' id='usddiv'><span>ETH</span><span id='usd'>0.00</span></div>"
var navbar = document.getElementsByClassName("navbar-collapse collapse")[0]
    navbar.innerHTML = box + navbar.innerHTML
}
function start() {
    console.log("Made by Titan")
    if(document.getElementById("usddiv")) {
        document.getElementById("usddiv").remove()
    }
    draw_box()
    run()
}
function run() {
    setTimeout(async function() {
        var ethos = document.getElementById("usd").innerText
        var ethdata = await ethos2eth(ethos)
        fetch("https://api.coinbase.com/v2/exchange-rates?currency=ETH").then(response => {
            response.text().then(data => {
                var jsondata = JSON.parse(data)
                var ETHPrice = jsondata.data.rates.USD
                var USD = ethdata * ETHPrice
                if (USD == 0) {
                    USD = USD + ".00"
                }
                document.getElementById("usd").innerText = "$" + USD
            })
        })
        run()
    }, 2000);
}
start()
