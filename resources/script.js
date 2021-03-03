function nav() {
  var x = document.getElementById("navigator");
  if (x.style.display === "none") {
    x.style.display = "block";
    document.getElementById("BEnav").innerHTML = "Hide Nav";
  } else {
    x.style.display = "none";
    document.getElementById("BEnav").innerHTML = "Show Nav";
  }
}

function cmbtArts() {
  var cmbtArts = document.getElementById("BEcmbtArts");
  if (cmbtArts.style.display === "none") {
    cmbtArts.style.display = "";
    document.getElementById("BEcmbtButton").innerHTML = "Hide";
  } else {
    cmbtArts.style.display = "none";
    document.getElementById("BEcmbtButton").innerHTML = "Show";
  }
}


