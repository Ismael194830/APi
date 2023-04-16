let contianar =  document.querySelector(".Cards")
    let btn1 = document.querySelector(".button1");
    let btn2 = document.querySelector(".button2");
    let btn3 = document.querySelector(".button3");
    let continer = document.querySelector(".input")
let data = [];
function appenNewprodact(images,brand,description,title,price){
    let imag = document.createElement("img")
    imag.classList.add("imggg")
    imag.src = images;
// --------------------------------------------------
   let brandx = document.createElement("h2")
     brandx.classList.add("h2")
     brandx.innerText =brand;
// --------------------------------------------------
    let descriptionn = document.createElement("p")
      descriptionn.classList.add("pp")
      descriptionn.innerText = description
// -------------------------------------------------- 
    let titlee = document.createElement("p")
    titlee.classList.add("hh3")
    titlee.innerText = title
// -------------------------------------------------- 
    let pri = document.createElement("p");
    pri.classList.add("spann")
    pri.innerText = `${price}$`;
    // -------------------------------------------------- 
    let brandTitle = document.createElement("div")
    brandTitle.classList.add("bran-title")
    brandTitle.appendChild(brandx)
    brandTitle.appendChild(titlee)
    let buuton = document.createElement("button")
    buuton.classList.add("BAY")
    buuton.innerHTML = `BAY NOW`

    let continar = document.createElement("div")
    continar.classList.add("contt")
    
    continar.appendChild(imag)
    continar.appendChild(brandTitle)
    continar.appendChild(descriptionn)
    continar.appendChild(pri)
    continar.appendChild(buuton)
    contianar.appendChild(continar)
}
async function fetchcards(start,end) {
    await fetch("https://dummyjson.com/products")
    .then((result) => result.json())
    .then((result) => (data=result.products));
    for( i = start; i < end; i++ ) { 
        let item = data[i];
        appenNewprodact( item.images[0] , item.brand , item.description , item.title , item.price);
}}
    function topteen(start,end){
        fetchcards(start ,end)
    }
    topteen(start = 0, end = 10);




    btn1.addEventListener('click' , () => {
        contianar.innerHTML = "";
        start = 0;
         end = 10;
        topteen(start , end);
});

btn2.addEventListener('click' , () => {
    contianar.innerHTML = "";
if( start == 0 & end === 10 )
    {
    start += 10;
    end += +10;
    topteen(start , end);
} 
if( start == 20 & end == 30 ){
    start -= 10;
    end -= 10;
    topteen( start , end )}
});

btn3.addEventListener('click' , () => {
    contianar.innerHTML = "";
if( start == 10 & end == 20 ){
    start += 10;
    end += 10;
    topteen(start , end);
};
if( start==0 & end==10 ){
    start += 20;
    end += 20;
    
    topteen( start , end );
}});

    
