const btnContact = document.getElementById("btn2");
const modal = document.getElementById("contactModal");
const closeBtn = document.getElementById("closeModal");

btnContact.onclick = function () {
    modal.style.display = "flex";
};

closeBtn.onclick = function () {
    modal.style.display = "none";
};