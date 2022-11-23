(function () {
    // navbar item click
    [...document.querySelectorAll(".item")].forEach(button => {
        button.addEventListener("click", function() {
            // delete the item--active & active class before
            document.querySelector(".item--active").classList.remove("item--active");
            document.querySelector(".active").classList.remove("active");
            
            // add a item--active & active class 
            this.classList.add("item--active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });

    // theme button click
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();
