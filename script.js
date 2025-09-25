const foods = [
    {
        name : "برگ",
        weight : "280 گرم",
        price : 920000,
        url : "images/barg.jpg"
    },
    {
        name : "لقمه",
        weight : "360 گرم",
        price : 520000,
        url : "images/lghome.jpg"
    }
    ,
    {
        name : "پلو",
        weight : "360 گرم",
        price : 520000,
        url : "images/lghome.jpg"
    }
    ,
    {
        name : "کباب",
        weight : "360 گرم",
        price : 520000,
        url : "images/lghome.jpg"
    }
    ,
    {
        name : "برنج",
        weight : "360 گرم",
        price : 520000,
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
                  <img src="images/shopping.svg" alt="" width="18" onclick="shopbuket(${i})" />
                  <img src="images/favorit.svg" alt="" width="18"  />
                </div>
    
                <div class="image">
                  <img src="${foods[i].url}" alt="" width="120" />
                </div>
            </div>`
    
}

const shopBuket = []


const buketModal = document.getElementById("shop-modal")
function shopbuket(index){
  buketModal.style.display = "block" 
  setTimeout(()=> buketModal.style.display = "none" 
  ,2000)
  
  shopBuket.push(foods[index])
  
  const shopsidebar = document.getElementById("shopsidebar").innerHTML += `
              <div class="shopitems">
                <div class="caption">
                    <h4 id="foodname">${shopBuket[shopBuket.length-1].name}</h4>
                    <h6 id="weghit">${shopBuket[shopBuket.length-1].weight}</h6>
                    <h3 id="price">${shopBuket[shopBuket.length-1].price}</h3>
                </div>
      
                <div class="image">
                  <img src="${shopBuket[shopBuket.length-1].url}" alt="" width="120" />
                </div>
              </div>`
              
}


const showshopbtn = document.getElementById("showshopbtn")
function showshop(){
  shopsidebar.style.display = "block"
  backshopsidebar.style.display = "block"
}
function closeShop(){
  shopsidebar.style.display = "none"
  backshopsidebar.style.display = "none"

}
totalprice.innerHTML += foods[0].price + foods[1].price + " تومان"