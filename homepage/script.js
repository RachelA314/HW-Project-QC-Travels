const nav = document.querySelector('.nav')
window.addEventListener('scroll', fixNav)

function fixNav() {
    if(window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add('active')
    } else {
        nav.classList.remove('active')
    }
}



const toggles = document.querySelectorAll('.faq-toggle')

toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle('active')
    })
})

/*Live User Filter
const result = document.getElementById("result")
const filter = document.getElementById("filter")
const listItems = []

getData()

filter.addEventListener("input",(e) => filterData(e.target.value))

async function getData(){
   const res = await fetch(/*"https://randomuser.me/api?result=50")
   const { results } = await res.json()
  
 
   result.innerHTML = ""
  
   results.forEach(user => {
       const li = document.createElement("li")

       listItems.push(li)

       li.innerHTML = `
          <img src="${user.picture.large}" alt="${user.name.first}">
          <div class="user-info">
              <h4>${user.name.first} ${user.name.last}</h4>
              <p>${user.location.city}, ${user.location.country}</p>
         </div>
        `
       result.appendChild(li)
    
  
  })
}
   function filterData(searchTerm){
      listItems.forEach(item =>{
        if(item.innerText.toLowerCase().includes(searchTerm.toLowerCase())){
           item.classList.remove("hide")
        }else{
          item.classList.add("hide")
        }
        
   })
}*/

//slide show
let index = 0;
displayImages();
function displayImages() {
  let i;
  const images = document.getElementsByClassName("mySlides");
  for (i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }
  index++;
  if (index > images.length) {
    index = 1;
  }
  images[index-1].style.display = "block";
  setTimeout(displayImages, 2000); 
}
/*
function userButton() {
  var button = document.getElementsByClassName("user-list");
  
  if (button.style.display = "none") {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
  
}
userButton();*/
