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
                  <img src="images/belss.png" alt="" width="20" />
                  <img src="images/menu.png" alt="" width="20px" />
                </div>
    
                <div class="image">
                  <img src="${foods[i].url}" alt="" width="120" />
                </div>
            </div>`
    
}
