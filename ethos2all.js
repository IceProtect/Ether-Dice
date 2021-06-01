function ethos2eth(ethos) {
    return ethos * 0.000001
}
function draw_boxCA() {
var box = "<div class='balance-container nav-item' id='caddiv'><span>CAD</span><span id='cad'>$0.00</span></div>"
var navbar = document.getElementsByClassName("navbar-collapse collapse")[0]
navbar.innerHTML = box + navbar.innerHTML
}
function start() {
    console.log("Made by Titan")
    if(document.getElementById("ethdiv")) {
        document.getElementById("ethdiv").remove()
    }
    if(document.getElementById("caddiv")) {
        document.getElementById("caddiv").remove()
    }
    if(document.getElementById("usddiv")) {
        document.getElementById("usddiv").remove()
    }
    var response = await fetch("https://api.coinbase.com/v2/exchange-rates?currency=ETH")
    var json = await response.json()
    const ETHPrice = await json.data.rates.CAD
    draw_boxUS()
    draw_boxCA()
    draw_boxETH()
    runUS(ETHPrice)
    runCA(ETHPrice)
    runETH()
}
function runCA(price) {
    setTimeout(async function() {
        var ethos = document.getElementById("cad").innerText
        ethos = ethos.split("$")[1]
        var ethdata = await ethos2eth(ethos)
        var CAD = await ethdata * price
        if (CAD == 0) {
            CAD = CAD + ".00"
        }
        document.getElementById("cad").innerText = "$" + CAD
        run(price)
    }, 2000);
}
function runETH() {
setTimeout(function(){
var ethbal = document.getElementById("eth").innerText
var eth = ethos2eth(ethbal)
if(eth == 0) {
eth = "0.00"
}
document.getElementById("eth").innerText = eth
run()
}, 2000);
}
function runUS(price) {
    setTimeout(async function() {
        var ethos = document.getElementById("usd").innerText
        ethos = ethos.split("$")[1]
        var ethdata = await ethos2eth(ethos)
        var USD = await ethdata * price
        if (USD == 0) {
            USD = USD + ".00"
        }
        document.getElementById("usd").innerText = "$" + USD
        run(price)
    }, 2000);
}
