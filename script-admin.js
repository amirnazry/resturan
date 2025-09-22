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
                  <input type="button" value="edit" onclick="cheangename()"/>
                  
                  <h6 id="weight">${foods[i].weight}</h6>
                  <input type="button" value="edit" onclick="cheangeweight()"/>
                  <h3 id="price">${foods[i].price}</h3>
                  <input type="button" value="edit" onclick="cheangeprice()"/>
                  <br>
                  <img src="images/belss.png" alt="" width="20" />
                  <img src="images/menu.png" alt="" width="20px" />
                </div>
    
                <div class="image">
                  <img src="${foods[i].url}" alt="" width="120" />
                </div>
            </div>`
            
function cheangename(){
  const change = prompt("نام غذا را عوض کنید")
  foods[i].name = change
  const foodname = document.getElementById("foodname")
  foodname.innerText=foods[i].name
}
function cheangeweight(){
  const change = prompt("نام غذا را عوض کنید")
  foods[i].weight = change
  const weight = document.getElementById("weight")
  weight.innerText=foods[i].weight
}
function cheangeprice(){
  const change = prompt("نام غذا را عوض کنید")
  foods[i].price = change
  const price = document.getElementById("price")
  price.innerText=foods[i].price
}

}
