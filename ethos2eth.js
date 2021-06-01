function ethos2eth(ethos) {
    return ethos * 0.000001
}
function draw_box() {
        var box = "<div class='balance-container nav-item' id='ethdiv'><span>ETH</span><span id='eth'>0.00</span></div>"
var navbar = document.getElementsByClassName("navbar-collapse collapse")[0]
    navbar.innerHTML = box + navbar.innerHTML
}
function start() {
    document.getElementsByClassName("balance-container nav-item")[0].id = "ethos"
    console.log("Made by Titan")
    if(document.getElementById("ethdiv")) {
        document.getElementById("ethdiv").remove()
    }
    draw_box()
    run()
}
function run() {
setTimeout(function(){
var ethbal = document.getElementById("ethos").innerText.split("ETHOS")[1]
var eth = ethos2eth(ethbal)
if(eth == 0) {
eth = "0.00"
}
document.getElementById("eth").innerText = eth
run()
}, 2000);
}
start()
