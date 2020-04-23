//toggle
const nav = document.querySelector("#cont-nav");
const btn_nav_hide = document.querySelector(".tit>.btn");
// console.log(nav);
// console.log(btn_nav_hide);

let toggle = false;
btn_nav_hide.onclick = function () {
  btn_nav_hide.classList.toggle("good!");

  if (toggle === true) {
    nav.style.visibility = "hidden";
    nav.style.opacity = 0;
    nav.style.position = "absolute";

    btn_nav_hide.style.backgroundPosition = null;
    toggle = false;
    console.log(toggle);

    return;
  }
  nav.style.visibility = "visible";
  nav.style.opacity = 1;
  nav.style.position = "static";

  btn_nav_hide.style.backgroundPosition = "0 -660px";
  toggle = true;

  console.log(toggle);
};

//tab menu
const tabTitle = document.querySelectorAll(".tab-menu>ul>li>a");
const oneTab = document.querySelectorAll(".tab-menu>ul>li>ul");

function tabMenuNavigate() {
  oneTab.forEach(function (item) {
    item.style.display = "none";
  });
  tabTitle.forEach(function (item) {
    item.classList.remove("active");
  });

  this.classList.add("active");

  this.parentElement.querySelector("ul").style.display = "block";
}

tabTitle.forEach(function (item) {
  //on clicking
  item.onclick = tabMenuNavigate;
  //on tab moving
  item.onfocus = tabMenuNavigate;
});

//pop-up advertisements
const popup = document.querySelectorAll(".popup>ul>li");
const window_popup = document.querySelector(".window-popup");
const btn_close = document.querySelector(".window-popup .close");

popup.forEach(function (item) {
  item.onclick = function () {
    window_popup.style.display = "block";
    window_popup.querySelector("img").src = item
      .querySelector("img")
      .getAttribute("src");
  };
});

btn_close.onclick = function () {
  window_popup.style.display = "none";
};
