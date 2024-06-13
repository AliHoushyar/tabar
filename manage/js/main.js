function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  let user = getCookie("user");
  if (user != "") {
    alert("Welcome again " + user);
  } else {
    alert("nis");
  }
}

function menucome() {
	document.getElementById("SIDE").style.right="0px";
}
function menugo() {
	document.getElementById("SIDE").style.right="-400px";
}