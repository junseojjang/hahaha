function selectbar() {
  const selectList = document.getElementById("selectMenu");
  if (
    selectList.style.visibility == "hidden" ||
    selectList.style.visibility == ""
  ) {
    selectList.style.visibility = "visible";
    selectList.style.opacity = 1;
  } else {
    selectList.style.visibility = "hidden";
    selectList.style.opacity = 0;
  }
}

function goLink(link) {
  window.open(link);
}

let typeTranstoDiv = {
  SeeMore: ".main > .Commands > hr",
};

function scrollF(type) {
  const DivRoot = typeTranstoDiv[type];
  const aboutQuery = document.querySelector(DivRoot);
  window.scrollTo({
    top: aboutQuery.offsetTop - 100,
    behavior: "smooth",
  });
}
