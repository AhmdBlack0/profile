let btn = document.querySelectorAll("#btn");
let sum = document.querySelectorAll(".download");

function fun (bt, su) {
    bt.onclick = function () {
        if (su.style.display === "flex") {
            bt.innerHTML = '<i class="fa-solid fa-angle-down"></i>';
            su.style.display = "none";
        } else {
            su.style.display = "flex"
            su.style.flexDirection = "column";
            su.style.justifyContent = "space-between";
            su.style.alignItems = "center";
            bt.innerHTML = '<i class="fa-solid fa-chevron-up"></i>';
        }
    }
}
for (let i = 0; i < btn.length; i++) {
    fun(btn[i], sum[i]);
}

