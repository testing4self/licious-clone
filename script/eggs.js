eggsData1 = [
    
    {
        image : "https://dao54xqhg9jfa.cloudfront.net/ProductMerchantdising/9b68df08-94fe-02c0-569f-5b336bdba485/original/1574118852.2303--2019-11-1904_44_12--260.jpeg?format=webp",
        name : "Classic Eggs Pack of 6",
        discription : "pack of 6 naturally laid, white eggs from healthy hens",
        netWeight : "250gms",
        pieces : "6",
        price : "44",
        mrp : "119",
        discount : "17% OFF",
        delivery_time : "Tommorow 8 AM - 10 AM",
    },

    {
        image : "https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_as7ki5xe5ts/34/prod_display_image/1608296147.339--2020-12-1818:25:47--472",
        name : "Classic Eggs Pack of 12",
        discription : "pack of 6 naturally laid, white eggs from healthy hens",
        netWeight : "500gms",
        pieces : "12",
        price : "109",
        mrp : "119",
        discount : "17% OFF",
        delivery_time : "Tommorow 8 AM - 10 AM",
    },

    {
        image : "https://dao54xqhg9jfa.cloudfront.net/ProductMerchantdising/335d0117-0716-fee7-3370-12c5fca928de/original/1583852613.2809--2020-03-1020_33_33--472.jpeg?format=webp",
        name : "Classic Eggs Pack of 30",
        discription : "pack of 6 naturally laid, white eggs from healthy hens",
        netWeight : "500gms",
        pieces : "30",
        price : "269",
        mrp : "119",
        discount : "17% OFF",
        delivery_time : "Tommorow 8 AM - 10 AM",
    },
]

eggsData = [
    {
        image : "https://dao54xqhg9jfa.cloudfront.net/ProductMerchantdising/81f3aff6-3e28-225b-d400-4ab557418610/original/1583943132.4788--2020-03-1121_42_12--738.jpeg?format=webp",
        name : "Eggs - Brown Residue Free(Pack of 6)",
        discription : "pack of 6 naturally laid, white eggs from healthy hens",
        netWeight : "500gms",
        pieces : "6",
        price : "95",
        mrp : "119",
        discount : "17% OFF",
        delivery_time : "Tommorow 8 AM - 10 AM",
    },

    {
        image : "https://dao54xqhg9jfa.cloudfront.net/ProductMerchantdising/afc82bec-a93a-ed62-f2f0-9de1ed82a211/original/1595562713.988--2020-07-2409_21_53--472.jpeg?format=webp",
        name : "Eggs - Country Eggs (Pack of 6)",
        discription : "pack of 6 naturally laid, white eggs from healthy hens",
        netWeight : "500gms",
        pieces : "6",
        price : "75",
        mrp : "119",
        discount : "17% OFF",
        delivery_time : "Tommorow 8 AM - 10 AM",
    },
]


displayUI(eggsData1, "#main-container1") 
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

displayUI(eggsData, "#main-container2")
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
// function pull git removeEventListeneruest 


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