function singleClick() {
    console.log("singleClick activated");
    var teaser = document.getElementById("teaserText");
    teaser.classList.remove("hidden");
}

function doubleClick() {
    console.log("doubleClick activated");
    document.body.style.background = "black";
    var teaser = document.getElementById("teaserText");
    teaser.classList.add("hidden");
    var quick = document.getElementById("doubleTrouble");
    quick.classList.add("afterDouble");
    quick.innerHTML = "Ooopsies!";
}