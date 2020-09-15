var rainCount = 0;
var rains = {};
var sky = document.getElementById("sky");
var makeRain = () => {
    var rain = document.createElement('div');
    rain.innerHTML = "!";
    rain.setAttribute("class", "rain");
    rain.setAttribute("id", rainCount);
    rain.classList.add(rainCount);
    rains[rainCount] = true;

    var leftPosition = Math.random() * 60 + 20;
    rain.style.cssText = "left:" + leftPosition + "%;" + "visibility: hidden;" + "animation-delay:" + Math.random() + "s;"
    sky.appendChild(rain);

    rainCount += 1;
}

while (Object.keys(rains).length <= 50) {
    makeRain();
}

var makeBio = () => {
    var bio = document.createElement('div');
    bio.innerHTML = "hi, my name is eileen. i'm a lover of art, technology, and nature."
        + " i grew up watching the changing colors of the sky in san francisco's sunset district."
        + " and currently i work as a hybrid ux designer / engineer, formerly was a data analyst / scientist."
        + " however, the more interesting parts of who i am lie in my personal practices and passions."
        + " including a lifelong practice of giving healing and serving my community."
    bio.setAttribute("id", "bio");
    sky.appendChild(bio);
}
makeBio();

