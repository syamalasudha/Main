

const products = [
{
id:1,
name:"Gaming Laptop",
category:"electronics",
price:75000,
rating:4.8,
image:"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500"
},
{
id:2,
name:"Wireless Headphones",
category:"electronics",
price:3500,
rating:4.5,
image:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
},
{
id:3,
name:"Smart Watch",
category:"electronics",
price:6500,
rating:4.4,
image:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500"
},
{
id:4,
name:"Men's Hoodie",
category:"fashion",
price:1200,
rating:4.3,
image:"https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=500"
},
{
id:5,
name:"Women's Jacket",
category:"fashion",
price:1800,
rating:4.6,
image:"https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=500"
},
{
id:6,
name:"Backpack",
category:"accessories",
price:2200,
rating:4.7,
image:"https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500"
},
{
id:7,
name:"Keyboard",
category:"electronics",
price:2800,
rating:4.5,
image:"https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=500"
},
{
id:8,
name:"Mouse",
category:"electronics",
price:900,
rating:4.2,
image:"https://images.unsplash.com/photo-1527814050087-3793815479db?w=500"
},
{
id:9,
name:"Shoes",
category:"fashion",
price:2500,
rating:4.4,
image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500"
},
{
id:10,
name:"Sunglasses",
category:"accessories",
price:1600,
rating:4.1,
image:"https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500"
},
{
id:11,
name:"Bluetooth Speaker",
category:"electronics",
price:4200,
rating:4.7,
image:"https://images.unsplash.com/photo-1507878866276-a947ef722fee?w=500"
},

{
id:12,
name:"Leather Wallet",
category:"accessories",
price:1500,
rating:4.5,
image:"https://images.unsplash.com/photo-1627123424574-724758594e93?w=500"
}
];




const productGrid=document.getElementById("productGrid");
const searchInput=document.getElementById("searchInput");
const categoryFilter=document.getElementById("categoryFilter");
const sortProducts=document.getElementById("sortProducts");

let filteredProducts=[...products];




function displayProducts(list){

productGrid.innerHTML="";

list.forEach(product=>{

productGrid.innerHTML+=`

<div class="product">

<img src="${product.image}" alt="${product.name}">

<h3>${product.name}</h3>

<p>${product.category}</p>

<div class="rating">

${"⭐".repeat(Math.floor(product.rating))}

(${product.rating})

</div>

<div class="price">

₹${product.price}

</div>

<button>

Add to Cart

</button>

</div>

`;

});

}

displayProducts(filteredProducts);



searchInput.addEventListener("input",filterProducts);

categoryFilter.addEventListener("change",filterProducts);

sortProducts.addEventListener("change",filterProducts);




function filterProducts(){

filteredProducts=products.filter(product=>{

const searchMatch=product.name
.toLowerCase()
.includes(searchInput.value.toLowerCase());

const categoryMatch=

categoryFilter.value==="all"

||

product.category===categoryFilter.value;

return searchMatch && categoryMatch;

});

sortItems();

}



function sortItems(){

switch(sortProducts.value){

case "low":

filteredProducts.sort((a,b)=>a.price-b.price);

break;

case "high":

filteredProducts.sort((a,b)=>b.price-a.price);

break;

case "rating":

filteredProducts.sort((a,b)=>b.rating-a.rating);

break;

}

displayProducts(filteredProducts);

}