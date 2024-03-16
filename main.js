// Dark,Light Mode Switch
var theme = document.getElementById("theme-btn");
theme.onclick = function() {
    document.body.classList.toggle("light");
    theme.style.transform = "translateY(-5px)";
    setTimeout(function() {
        theme.style.transform = "translateY(0px)";
    }, 200);
}
// diffeenrt pages in one
var hom = document.getElementById("hom");
var abo = document.getElementById("abo");
var por = document.getElementById("por");
var con = document.getElementById("con");
var hc = document.getElementById("header");
var ac = document.getElementById("about");
var pc = document.getElementById("work");
var cc = document.getElementById("contact");


hom.onclick = function () {
  hc.style.display = "block";
  ac.style.display = "none";
  pc.style.display = "none";
  cc.style.display = "none";

  hom.classList.add("active1");
  abo.classList.remove("active1");
  por.classList.remove("active1");
  con.classList.remove("active1");

  hc.classList.add("active");
  ac.classList.remove("active");
  pc.classList.remove("active");
  cc.classList.remove("active");
};

abo.onclick = function () {
  hc.style.display = "none";
  ac.style.display = "block";
  pc.style.display = "none";
  cc.style.display = "none";

  hom.classList.remove("active1");
  abo.classList.add("active1");
  por.classList.remove("active1");
  con.classList.remove("active1")

  hc.classList.remove("active")
  ac.classList.add("active");
  pc.classList.remove("active");
  cc.classList.remove("active");
};

por.onclick = function () {
  hc.style.display = "none";
  ac.style.display = "none";
  pc.style.display = "block";
  cc.style.display = "none";

  hom.classList.remove("active1");
  abo.classList.remove("active1");
  por.classList.add("active1");
  con.classList.remove("active1")

  hc.classList.remove("active")
  ac.classList.remove("active");
  pc.classList.add("active");
  cc.classList.remove("active");};

con.onclick = function () {
  hc.style.display = "none";
  ac.style.display = "none";
  pc.style.display = "none";
  cc.style.display = "block";

  hom.classList.remove("active1");
  abo.classList.remove("active1");
  por.classList.remove("active1");
  con.classList.add("active1")

  hc.classList.remove("active")
  ac.classList.remove("active");
  pc.classList.remove("active");
  cc.classList.add("active");
};

// END