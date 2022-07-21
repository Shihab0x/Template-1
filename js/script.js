let navLinks = document.querySelectorAll(".nav-link");
let skill = document.getElementsByClassName("skill-box")[0];
let bar = document.getElementsByClassName("progress-bar");
let btn = document.querySelectorAll(".x");
let all = document.querySelectorAll(".picture");
let up = document.getElementById("up");
let navbar =document.getElementsByTagName("nav")[0];
let home = document.getElementById("home");

home.style.paddingTop = navbar.offsetHeight + "px";

navLinks.forEach((el) => {
  el.addEventListener("click", function(e) {
    let section = document.getElementById(this.getAttribute("data-scroll")).offsetTop;
    setTimeout(() => {
      scrollTo(0, section-30)
    },0)
    e.preventDefault()
  })
})





btn.forEach((el) => {
  el.onclick = function () {
    all.forEach((e) => {
      e.getAttribute("data-type") ===  this.getAttribute("data-show") ?
        e.style.display = "block" : e.style.display ="none"
      el.getAttribute("data-show") === "all" ? e.style.display = "block" : ""
    })
    btn.forEach((e) => {
      e.classList.remove("active");
    })
    this.classList.add("active");
  }
})

addEventListener("scroll", function() {
  for(let p = 0; p < bar.length; p++) {
    if(scrollY > skill.offsetTop-800 && scrollY < skill.offsetTop+200) {
      bar[p].classList.add("cat" + p);
      bar[p].classList.remove("cat");
    } else {
      bar[p].classList.remove("cat" + p);
      bar[p].classList.add("cat");
    }
  };
});


window.onscroll = function() {
  let y = scrollY;
  
  if(y >= screen.availHeight) {
    up.style.display = "block";
  } else {
    up.style.display = "none"
  }
}

up.onclick = function() {
  window.scroll(0, 0);
}

window.onscroll = function () {
  document.querySelectorAll("section[id]").forEach((el) => {
    let section = document.querySelector(`[data-scroll="${el.id}"]`)
    scrollY > el.offsetTop -31 && scrollY < el.nextElementSibling.offsetTop-30 ?
    section.classList.add("active") : section.classList.remove("active")
  })
}
