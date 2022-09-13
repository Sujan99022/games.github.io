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