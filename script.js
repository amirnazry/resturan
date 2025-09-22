const foods = {
    iranianfoods:{
        name : "برگ",
        weight : "280 گرم",
        price : "920,000 تومان"
    }
}
console.log(foods);
const foodname = document.getElementById("foodname")
const weghit = document.getElementById("weghit")
const price = document.getElementById("price")

foodname.innerHTML = foods.iranianfoods.name
weghit.innerHTML = foods.iranianfoods.weight
price.innerHTML = foods.iranianfoods.price