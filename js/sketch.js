var rainCount = 0;
var rains = {};
var sky = document.getElementById("sky");
var body = document.querySelector("body");
var makeRain = () => {
    var rain = document.createElement('div');
    rain.innerHTML = "|";
    rain.setAttribute("class", "rain");
    rain.setAttribute("id", rainCount);
    rain.classList.add(rainCount);
    rains[rainCount] = true;

    var leftPosition = Math.random() * 50 + 15;
    rain.style.cssText = "left:" + leftPosition + "%;" + "visibility: hidden;" + "animation-delay:" + Math.random() + "s;"
    sky.appendChild(rain);

    rainCount += 1;
}

while (Object.keys(rains).length <= 50) {
    makeRain();
}

var makeBio = () => {
    var bio = document.createElement('div');
    bio.innerHTML = `hi, my name is eileen. i'm a lover of art, technology, and nature.`
        + ` i grew up watching the changing colors of the sky in san francisco's sunset district.`
        + ` and currently i work as a hybrid ux designer / engineer, formerly a data analyst / scientist.`
        + ` however, the more interesting parts of who i am lie in my <a id="pp">personal practices</a> and passions.`
        + ` including a lifelong practice of giving healing and serving my <a href="https://gitcoin.co/grants/982/future-modern" target="_blank" id="fm">community</a>.`
        + ` find me on <a href="https://instagram.com/ei__li" target="_blank">instagram</a> and <a href="https://twitter.com/lstnq" target="_blank">twitter</a>.`
    bio.setAttribute("id", "bio");
    sky.appendChild(bio);
}
makeBio();

var quote = document.createElement('div');
quote.innerHTML = `to listen, is to let you in; <div id="q2">to question is expansion.</div>`
quote.setAttribute("id", "quote");
quote.onclick = () => sky.removeChild(quote);

var pp = document.getElementById("pp");
pp.onclick = () => sky.appendChild(quote);

var fm = document.getElementById("fm");
