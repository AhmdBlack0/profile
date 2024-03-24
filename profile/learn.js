let btn = document.querySelectorAll(".btn");
let myList = document.querySelectorAll(".pop");

function fun (bt, myList) {
    bt.onclick = function () {
        myList.classList.toggle('show');
        if (myList.classList.contains('show')) {
            bt.innerHTML = '<i class="fa-solid fa-chevron-up"></i>';
        } else {
            myList.classList.remove('show');
            bt.innerHTML = '<i class="fa-solid fa-angle-down"></i>';
        }
    }
}
for (let i = 0; i < btn.length; i++) {
    fun(btn[i], myList[i]);
}

