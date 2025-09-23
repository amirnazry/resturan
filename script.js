const foods = [
    {
        name : "برگ",
        weight : "280 گرم",
        price : "920,000 تومان",
        url : "images/barg.jpg"
    },
    {
        name : "لقمه",
        weight : "280 گرم",
        price : "920,000 تومان",
        url : "images/lghome.jpg"
    }
]

const item = document.getElementById("item")

for (let i = 0; i < foods.length; i++) {
item.innerHTML += `
            <div class="foodbox">
                <div class="caption">
                  <h4 id="foodname">${foods[i].name}</h4>
                  <h6 id="weghit">${foods[i].weight}</h6>
                  <h3 id="price">${foods[i].price}</h3>
                  <img src="images/shopping.svg" alt="" width="18" onclick="shopbuket()" />
                  <img src="images/favorit.svg" alt="" width="18"  />
                </div>
    
                <div class="image">
                  <img src="${foods[i].url}" alt="" width="120" />
                </div>
            </div>`
    
}


const shopBuket = [
  {
    1 : 41
  }
]
console.log(shopBuket);

const buketModal = document.getElementById("shop-modal")
function shopbuket(){
  buketModal.style.display = "block" 
  setTimeout(()=> buketModal.style.display = "none" 
  ,2000)

shopBuket.push(foods[0])

}
console.log(shopBuket.push(foods));



