function ethos2eth(ethos) {
    return ethos * 0.000001
}
function draw_box() {
        var box = "<div style='-webkit-text-size-adjust: 100%;-webkit-tap-highlight-color: transparent;--blue: #007bff;--indigo: #6610f2;--purple: #6f42c1;--pink: #e83e8c;--red: #dc3545;--orange: #fd7e14;--yellow: #ffc107;--green: #28a745;--teal: #20c997;--cyan: #17a2b8;--white: #fff;--gray: #6c757d;--gray-dark: #343a40;--primary: #007bff;--secondary: #6c757d;--success: #28a745;--info: #17a2b8;    --warning: #ffc107;    --danger: #dc3545;    --light: #f8f9fa;    --dark: #343a40; --breakpoint-xs: 0; --breakpoint-sm: 576px;--breakpoint-md: 768px;--breakpoint-lg: 992px;--breakpoint-xl: 1200px;--font-family-sans-serif: -apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,\"Noto Sans\",sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\"; --font-family-monospace: SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace;font-weight: 400;text-align: left;font-family: \"Josefin Sans\",sans-serif; line-height: 1.42857; color: #eeeeef; font-size: 20px; text-transform: uppercase; list-style: none; box-sizing: border-box; -webkit-font-smoothing: antialiased;' id='ethdiv'><span>USD</span><span id='eth'>$0.00</span></div>"
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
