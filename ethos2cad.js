function ethos2eth(ethos) {
    return ethos * 0.000001
}
function draw_box() {
        var box = "<div class='balance-container nav-item' id='caddiv'><span>CAD</span><span id='cad'>$0.00</span></div>"
var navbar = document.getElementsByClassName("navbar-collapse collapse")[0]
    navbar.innerHTML = box + navbar.innerHTML
}
async function start() {
    console.log("Made by Titan")
    if(document.getElementById("caddiv")) {
        document.getElementById("caddiv").remove()
    }
    var response = await fetch("https://api.coinbase.com/v2/exchange-rates?currency=ETH")
    var json = await response.json()
    const ETHPrice = await json.data.rates.CAD
    draw_box()
    run(ETHPrice)
}
function run(price) {
    setTimeout(async function() {
        var ethos = document.getElementById("cad").innerText
        ethos = ethos.split("$")[1]
        var ethdata = await ethos2eth(ethos)
        var USD = await ethdata * price
        if (USD == 0) {
            USD = USD + ".00"
        }
        document.getElementById("cad").innerText = "$" + USD
        run(price)
    }, 2000);
}
start()
