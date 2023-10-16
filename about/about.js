const nav = document.querySelector('.nav')
window.addEventListener('scroll', fixNav)

function fixNav() {
    if(window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add('active')
    } else {
        nav.classList.remove('active')
    }
}

let panelIndex = 1;
showPanel(panelIndex);

function plusSlides(n) {
  showPanel(panelIndex += n);
}

function currentPanel(n) {
  showPanel(panelIndex = n);
}

function showPanel(n) {
  let i;
  let panels = document.getElementsByClassName("panel");
  let members = document.getElementsByClassName("teamp");
  if (n > panels.length) {panelIndex = 1}    
  if (n < 1) {panelIndex = panels.length}
  for (i = 0; i < panels.length; i++) {
    panels[i].style.display = "none";  
  }
  for (i = 0; i < members.length; i++) {
    members[i].className = members[i].className.replace(" active", "");
  }
  panels[panelIndex-1].style.display = "block";  
  members[panelIndex-1].className += " active";
}
