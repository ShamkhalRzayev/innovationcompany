const sidebarNavClose = document.querySelector(".sidebar_nav_close");
const sideBar = document.querySelector(".sidebar");
const navBtn = document.querySelector(".nav_btn");
const closingBackground = document.querySelector(".closing_background");


navBtn.addEventListener("click", function(){
    sideBar.style.transition = "all 1s";
    sideBar.classList.toggle("transformed");
    closingBackground.classList.toggle("hidden");
    
});



sidebarNavClose.addEventListener("click", function(){
    
  sideBar.classList.remove("transformed");
  closingBackground.classList.add("hidden");

})

closingBackground.addEventListener("click", function(){
  sideBar.classList.remove("transformed");
  closingBackground.classList.add("hidden");

} )

const countingFunction = function(){

  const counters = document.querySelectorAll('.number');
  const speed = 1000;
  
  counters.forEach( counter => {
     const animate = () => {
        const value = +counter.getAttribute('akhi');
        const data = +counter.innerText;
       
        const time = value / speed;
          
          if(data < value) {
            counter.innerText = Math.ceil(data + time);
            setTimeout(animate, 1);
          }
          
          else{
            counter.innerText = value;
          }
       
     }
     
     animate();
  
  });
}

const numbers = document.querySelector(".numbers");

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}


window.addEventListener("scroll", function(){
  if(isInViewport(numbers)){
    countingFunction();
  }
})


