const nav = document.querySelector("#cont-nav");
const btn_nav_hide = document.querySelector(".tit>.btn");
console.log(nav);
console.log(btn_nav_hide);

let toggle = false;
btn_nav_hide.onclick = function () {
  if (toggle === true) {
    nav.style.height = 0;
    nav.style.opacity = "0";
    nav.style.display = "none";
    toggle = false;
    console.log(toggle);

    return;
  }
  nav.style.height = null;
  nav.style.opacity = "1";
  nav.style.display = "block";

  toggle = true;

  console.log(toggle);
};
