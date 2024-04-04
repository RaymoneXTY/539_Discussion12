document.querySelector("#sameAddress").addEventListener("click", function() {
    console.log("clicked");
    if (this.checked) {
        document.querySelector("#home").value = document.querySelector("#bill").value;
        document.querySelector("#home").disabled = true;
    }
    else {
        document.querySelector("#home").disabled = false;
        document.querySelector("#home").value = "";
    }
});