const toggleBtn = document.getElementById("toggle-button");
const navListItems = document.getElementById("toggle-button");

toggleBtn.addEventListener("click", function (){
    navListItems.classList.toggle("active");
});