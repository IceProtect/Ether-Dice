function ethos2eth(ethos) {
    return ethos * 0.000001
}
function draw_box() {
    var box = '<div class="balance-container nav-item" style="margin-left:500px !important;" id="ethdiv"><span>ETH</span><span id="eth">0.00</span></div>'
    var navbar = document.getElementsByClassName("navbar-collapse collapse")[0]
    navbar.innerHTML = box + navbar.innerHTML
}
function start() {
    console.log("Made by Titan")
    if(document.getElementById("ethdiv")) {
        document.getElementById("ethdiv").remove()
    }
    draw_box()
    run()
}
function run() {
setTimeout(function(){
var ethbal = document.getElementsByClassName("balance-container nav-item")[1].innerText
var ethos = ethbal.split("ETHOS")[1]
document.getElementById("eth").innerText = ethos2eth(ethos)
run()
}, 2000);
}
start()
