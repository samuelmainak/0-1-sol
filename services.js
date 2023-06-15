window.addEventListener("scroll", function() {
    var header = document.getElementById("header");
    var limit = 200;

    if(window.pageYOffset >=limit) {
        header.classList.add("sticky"); 
    } else{
        header.classList.remove("sticky");
    }
});