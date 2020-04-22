const nav = document.querySelector("#cont-nav");
const btn_nav_hide = document.querySelector(".tit>.btn");
btn_nav_hide.onClick = () => {
  console.log(nav);
  nav.style.display = "block";
};
