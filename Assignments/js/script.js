const toggleBtn = document.getElementById("toggle-button");
const navListItems = document.getElementById("toggle-button");
console.log("Howdy!");

toggleBtn.addEventListener("click", function (){
    navListItems.classList.toggle("active");
});