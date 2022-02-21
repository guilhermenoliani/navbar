//Título página
let h1 = document.querySelector("h1");
h1.innerHTML = "Simple Navbar";

//Função navbar
const openToggle = () => {
  let menu = document.querySelector("#menu-area");
  if (menu.style.width == "200px") {
    menu.style.width = "0px";
  } else {
    menu.style.width = "200px";
  }
};
