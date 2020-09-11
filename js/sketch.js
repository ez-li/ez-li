var rainCount = 0;
var rains = {};
var sky = document.getElementById("sky");
function makeRain() {
    var rain = document.createElement('div');
    rain.innerHTML = "|";
    rain.setAttribute("class", "rain");
    rain.setAttribute("id", rainCount);
    rain.classList.add(rainCount);
    rains[rainCount] = true;

    var leftPosition = Math.random() * 20 + 20;
    rain.style.cssText = "left:" + leftPosition + "%;"

    setTimeout(() => {
        sky.appendChild(rain);
    }, Math.random() * 2000);

    // comment out this section to make rain infinite
    setTimeout(() => {
        sky.removeChild(rain);
        delete rains[rainCount]
    }, 10000);

    rainCount += 1;
}

while (Object.keys(rains).length <= 50) {
    makeRain();
}