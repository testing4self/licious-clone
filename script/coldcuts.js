coldData1 = [
    {
        image : "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/8f95b785-e216-ed38-b77b-697f3512873a/original/Chicken-Sausage-&-Salami-1.jpg?format=webp",
        name : "Cold Cut Combo - Chicken Sausages & Salami",
        discription : " 8 - 11 pieces of breakfast sausages & peppery salami",
        netWeight : "200gms",
        pieces : "7-8",
        price : "99",
        mrp : "119",
        discount : "17% OFF",
        delivery_time : "Tommorow 8 AM - 10 AM",
    },

    {
        image : "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/5aac262d-d37c-4d19-ecfb-f3ce4dfd4d5f/original/Peppery-Chicken-Salami+NEw.jpg?format=webp",
        name : "Peppery Chicken Salami (Mini) | Ready to Eat ",
        discription : " 8 pieces of peppery salami",
        netWeight : "120gms",
        pieces : "8",
        price : "199",
        mrp : "119",
        discount : "17% OFF",
        delivery_time : "Tommorow 8 AM - 10 AM",
    },

    {
        image : "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/195028ba-a8ff-5f4e-327f-c427a35de646/original/1585512844.jpg?format=webp",
        name : "Chicken Loaf (Smoked & SLiced) Ready to Eat",
        discription : " Chicken Salami Smoked of breakfast sausages & Chives",
        netWeight : "200gms",
        pieces : "210 gms",
        price : "299",
        mrp : "119",
        discount : "17% OFF",
        delivery_time : "Tommorow 8 AM - 10 AM",
    },
]

coldData = [
    {
        image : "https://dao54xqhg9jfa.cloudfront.net/ProductMerchantdising/24343516-3e6d-807d-991a-745bfac4d5a1/original/1585512768.9303--2020-03-3001_42_48--738.jpeg?format=webp",
        name : "Peppery Chicken Salami - Ready to Eat",
        discription : " 8 - 11 pieces of breakfast sausages & peppery salami",
        netWeight : "200gms",
        pieces : "7-8",
        price : "99",
        mrp : "119",
        discount : "17% OFF",
        delivery_time : "Tommorow 8 AM - 10 AM",
    },

    {
        image : "https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_mmfjrt702db/34/prod_display_image/1634296567.324--2021-10-1516:46:07--905?format=webp",
        name : "Chicken Breakfast Sausage with Chives",
        discription : " 8 pieces of breakfast sausages & peppery salami",
        netWeight : "200gms",
        pieces : "7-8",
        price : "315",
        mrp : "119",
        discount : "17% OFF",
        delivery_time : "Tommorow 8 AM - 10 AM",
    },

    {
        image : "https://dao54xqhg9jfa.cloudfront.net/ProductMerchantdising/97030479-abf4-ed9b-726d-b1e52eb622cc/original/1585514737.0333--2020-03-3002_15_37--738.jpeg?format=webp",
        name : "Chicken Lyoner | Ready to Eat",
        discription : " 8 - 11 pieces of breakfast sausages & peppery salami",
        netWeight : "200gms",
        pieces : "7-8",
        price : "299",
        mrp : "119",
        discount : "17% OFF",
        delivery_time : "Tommorow 8 AM - 10 AM",
    },


    {
        image : "https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_mkrjrt70keh/2/prod_display_image/1585513119.6882--2020-03-3001:48:39--738?format=webp",
        name : "Smoked Chicken Frankfurter | Ready to Eat",
        discription : " 11 pieces of breakfast sausages & peppery salami",
        netWeight : "200gms",
        pieces : "7-8",
        price : "319",
        mrp : "119",
        discount : "17% OFF",
        delivery_time : "Tommorow 8 AM - 10 AM",
    },

    {
        image : "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/433e1e14-c31d-d40e-2339-531daeab01db/original/1574099249.jpg?format=webp",
        name : "Classic Chicken Nurem Burger",
        discription : " 8 - 11 pieces of breakfast sausages & peppery salami",
        netWeight : "200gms",
        pieces : "7-8",
        price : "99",
        mrp : "299",
        discount : "17% OFF",
        delivery_time : "Tommorow 8 AM - 10 AM",
    },

    {
        image : "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/8f95b785-e216-ed38-b77b-697f3512873a/original/Chicken-Sausage-&-Salami-1.jpg?format=webp",
        name : "Cold Cut Combo - Chicken Sausages & Salami",
        discription : " 8 - 11 pieces of breakfast sausages & peppery salami",
        netWeight : "200gms",
        pieces : "7-8",
        price : "99",
        mrp : "119",
        discount : "17% OFF",
        delivery_time : "Tommorow 8 AM - 10 AM",
    },

]

displayUI(coldData1, "#main-container1") 
banerFun()
function banerFun(){

    var forBaner = document.querySelector("#banerId")
    var baner = document.createElement("div");
    baner.setAttribute("class","baner");


    var banerUp = document.createElement("div");
    banerUp.setAttribute("class","banerUp");
    
    var banerImage = document.createElement("img");
    banerImage.src = "https://www.licious.in/img/default/loyalty_licious_logo.svg";

    var banerbtn = document.createElement("button");
    banerbtn.setAttribute("class","banerBtn");
    banerbtn.innerText = "JOIN NOW";

    // second div of baner 
    var banerDown = document.createElement("div");
    banerDown.setAttribute("class","banerDown");

    var banerD = document.createElement("p");
    banerD.setAttribute("class","banerD");
    banerD.innerText = "Enjoy unlimited free delivery & perks crafted for true meat lovers";
    
    banerUp.append(banerImage, banerbtn)    
    banerDown.append(banerD)
    baner.append(banerUp, banerDown)
    forBaner.append(baner)

}


displayUI(coldData, "#main-container2")
var count  = 0;
function displayUI(data, container){
data.map(function(elem){
    
    var card = document.createElement("div")
    card.style.boxShadow = "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px" ; 
    card.style.borderRadius = "10px" ;
    // card.style.padding = "15px";

    var img = document.createElement("img");
    img.src = elem.image ;
    img.style.width = "100%";
    img.style.height = "240px"
    img.style.borderRadius = "10px 10px 0px 0px ";

    var itemName = document.createElement("p");
    itemName.innerText = elem.name ;
    itemName.style.fontWeight = "bold";
    itemName.style.padding = "10px";
    
    var itemDes = document.createElement("p");
    itemDes.innerText = elem.discription ;
    itemDes.style.padding = "10px";

    var netWt = document.createElement("p");
    netWt.innerText = "Net wt : " + elem.netWeight ;

    var pieces = document.createElement("p");
    pieces.innerText = "Pieces : " + elem.pieces ;

    var netWeight_line = document.createElement("div")
    netWeight_line.className = "net-wt-line";
    netWeight_line.style.fontWeight = "bold";

    var currentPrice = document.createElement("p");
    currentPrice.innerText = elem.price ;
    currentPrice.style.color = "red";

    var mrp = document.createElement("p");
    mrp.innerText = elem.mrp ;
    mrp.style.textDecoration = "line-through";
    mrp.style.color = "grey";

    var discount = document.createElement("p");
    discount.innerText = elem.discount ;
    discount.style.color = "green";

    var price_line = document.createElement("div")
    price_line.className = "price-line";

    var cart_btn = document.createElement("button");
    cart_btn.innerText = "Add to Cart";
    cart_btn.setAttribute("class", "add_to_cart")  
    cart_btn.addEventListener("click", function(){
        addToCartBtn(elem)
    })

    var deli_line = document.createElement("div");
    deli_line.setAttribute("class","deli-line") 

    var d_img = document.createElement("img");
    d_img.src = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn3.iconfinder.com%2Fdata%2Ficons%2Ftransportation-soft%2F512%2Ftruck_delivery_logistics_transportation_shipping_deliver_shipment_v3-512.png&f=1&nofb=1"
    d_img.setAttribute("class","deli-img")

    var d_time = document.createElement("p");
    d_time.innerText = elem.delivery_time ;
    d_time.style.textAlign = "center";
    d_time.setAttribute("class","dtime");



    deli_line.append(d_img,d_time)
    netWeight_line.append(netWt, pieces);
    price_line.append( currentPrice, mrp, discount, cart_btn);
    card.append(img, itemName, itemDes, netWeight_line, price_line, deli_line);
    document.querySelector(container).append(card);

   
})

}

 var cartData = JSON.parse(localStorage.getItem("cartData")) || [];
    function addToCartBtn(elem){
        cartData.push(elem)
        localStorage.setItem("cartData",JSON.stringify(cartData))
    }
