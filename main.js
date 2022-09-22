var counterContainer = document.querySelector(".website-counter");
var visitCount = localStorage.getItem("page_view");

// Check if page_view entry is present
if (visitCount) {
  visitCount = Number(visitCount) + 1;
  localStorage.setItem("page_view", visitCount);
} else {
  visitCount = 1;
  localStorage.setItem("page_view", 1);
}
counterContainer.innerHTML = visitCount;

        const search=()=>{
            const searchBox = document.getElementById("search-item").value.toUpperCase();
            const product = document.querySelectorAll(".con");
            const pname = document.getElementsByTagName("h5");
            for(var i = 0; i < pname.length; i++){
                let match = product[i].getElementsByTagName("h5")[0];

                if(match){
                    let textValue = match.textContent || match.innerHTML

                    if(textValue.toUpperCase().indexOf(searchBox) > -1){
                      product[i].style.display = "";
                    }
                    else{
                      product[i].style.display = "none";
                    }
                }
            }
        }

        var preloader=document.getElementById('load');
        function MyFunction(){
        preloader.style.display='none';
        }

        gsap.from('.b1', { duration: 4, delay: 1.2, y: '-100vh', ease: "power-1" });
        gsap.from('.b2', { duration: 4, delay: 1.2, y: '100vh', ease: "power.in" });
        gsap.from('.b3', { duration: 2.2, delay: 1.2, x: '-100vw', ease: "power.in" });
        gsap.from('.b4', { duration: 2.2, delay: 1.2, x: '100vw', ease: "power.in" });
        gsap.from('.b5', { duration: .6, delay: 1, y: '-100vh', ease: "power.in" });
        gsap.from('.b6', { duration: 1.8, delay: 1.2, y: '100vh', ease: "power.in" });
        gsap.from('.b7', { duration: 1.1, delay: 1, y: '-100vh', ease: "power.in" });
        gsap.fromTo('.b8', { opacity: 0, scale: 0, rotation: 0 }, { duration: 3, opacity: 1, scale: 1, rotation: 0 })
        gsap.from('.all1', { duration: 6, delay: 3, y: '100vh', ease: "elastic" });
        gsap.from('.all2', { duration: 6, delay: 3.2, y: '100vh', ease: "elastic" });
        gsap.from('.all3', { duration: 6, delay: 3.4, y: '100vh', ease: "elastic" });
        gsap.from('#bg-2', { duration: 1, delay: 1, y: '100vh', ease: "power.in" });
        
        // gsap.fromTo('.left', { opacity: 0, scale: 1, rotationX: 720 }, { duration: 3,delay:3, opacity: 1, scale: 1, rotationX: 0 })
        
// gsap.from(".card", {
//   scrollTrigger: {
//     trigger: '.card',
//     start: "center center",
//     pin: true,
//     ease:"bounce"
//   },
//   y:500
//         })
        
      
        
