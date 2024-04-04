function challenge5(element){
    console.log("Hovering")
    console.log(element.src)
    console.log(element.alt)
    document.querySelector("#display").style.backgroundImage = "url('" + element.src + "')"
    document.querySelector("#display").innerHTML = element.alt
}

function challenge5leave(element){
    console.log("Leaving")
    document.querySelector("#display").style.backgroundImage = ""
    document.querySelector("#display").innerHTML = "Hover over an image below to display the image and the alt text."
}

document.querySelectorAll(".thumbnail").addEventListener("mouseover", function() {
    challenge5(this)
});

document.querySelectorAll(".thumbnail").addEventListener("mouseleave", function() {
    challenge5leave(this)
});