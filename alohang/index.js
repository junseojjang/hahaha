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
