const nav = document.querySelector("#cont-nav");
const btn_nav_hide = document.querySelector(".tit>.btn");
console.log(nav);
console.log(btn_nav_hide);

let toggle = false;
btn_nav_hide.onclick = function () {
  if (toggle === true) {
    nav.style.visibility = "hidden";
    nav.style.opacity = 0;
    nav.style.position = "absolute";

    toggle = false;
    console.log(toggle);

    return;
  }
  nav.style.visibility = "visible";
  nav.style.opacity = 1;
  nav.style.position = "static";
  toggle = true;

  console.log(toggle);
};
