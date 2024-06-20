function checkPopupPermissions() {
  var isAllowed = false;
  var popup = window.open("", "_blank", "width=100,height=100");

  if (popup) {
    popup.close();
    isAllowed = true;
  }

  return isAllowed;
}

if (checkPopupPermissions()) {
  TabCloak('/1')
} else {
document.getElementById("Popup").style.display = "flex";
}


document.getElementById('warn').onclick = function () {
  window.location.reload()
}