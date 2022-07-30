
//Task Replace the image (Product Page)
var imageGallery = document.querySelector(".galleryImage img");
var imagesContain = document.querySelectorAll(".imgContain img");




imagesContain.forEach((image)=>{
    image.addEventListener("click",()=>{
        var setSRC = image.getAttribute("src");
        imageGallery.setAttribute("src",setSRC);
        let source = imageGallery.getAttribute("src");
        console.log(source)    
        window.localStorage.setItem("source",source);
    });
});


//Task increase number of image quantm
var decreaseNum = document.getElementById("decreaseNum");
var increaseNum = document.getElementById("increaseNum");
var numChange = document.getElementById("numChange");
var heartColor = document.getElementById("heartColor");


if(heartColor){
    heartColor.addEventListener("click",()=>{
        if(heartColor.style.color==="red"){
            heartColor.style.color="black";
        }else{
            heartColor.style.color="red";
        }
    });
}
if(increaseNum){
    increaseNum.addEventListener("click",()=>{
        console.log(numChange.innerHTML);
        parseInt(numChange.innerHTML++);
    });
}
if(decreaseNum){
    decreaseNum.addEventListener("click",()=>{
        if(+numChange.innerHTML <= 0){
            numChange.innerHTML = 0;
            alert("THE MUCH NOT BEE ZERO");
        }else{
            parseInt(numChange.innerHTML--);
        }
    });
}


//Task in Form Html page 
var masters = document.querySelectorAll(".master")
masters.forEach((master)=>{
    master.addEventListener("click",()=>{
        masters.forEach((mas)=>{
            mas.classList.remove("btn-dark");
        })
        master.classList.add('btn-dark')
    })
})




//Task local Storage 
let ask =(JSON.parse(localStorage.getItem('contact'))||[]);
document.addEventListener('DOMContentLoaded',loadData);

function getData(){
    ask.push({
        unitPrice : 200 ,
        numcartchange : 0,
        totalPrice : 0,
    })
    localStorage.setItem("contact",JSON.stringify(ask))
}
let tbody = document.getElementById("tbody");
function displayContentbody(){
    let tr = '';
    for(let i = 0; i < ask.length ; i++){
        tr+=`
        <tr>
            <td class="productImg">
                <span class="mx-2">Lorem, ipsum.</span>
            </td>
            <td id="unitPrice">${ask[i].unitPrice}</td>
            <td class="qty">
                <i id="increaseCart" onclick = "increaseIt(event)" class="mx-3 border fa-solid fa-plus"></i>
                <span class="numcartchange">${ask[i].numcartchange}</span>
                <i class="mx-3 fa-solid fa-minus border" id="decreaseCart" onclick="decreasIt(event)"></i>
            </td>
            <td id="totalPrice" class="tot">${ask[i].totalPrice}</td>
            </tr>
        `
    }
    if(tbody){
        tbody.innerHTML = tr;
    }
}


function increaseIt(event){
    let quanm = event.path[0].nextElementSibling;
    +quanm.innerHTML++;
    event.path[0].parentElement.nextElementSibling.innerHTML = +quanm.innerHTML * +quanm.parentElement.previousElementSibling.innerHTML;
}
function decreasIt(event){
    if(+event.path[0].previousElementSibling.innerHTML == 0){
        alert("QuantuityNot Be Zero ")
        event.path[0].previousElementSibling.innerHTML = 0;
    }else{
        let dec = event.path[0].previousElementSibling;
        +dec.innerHTML--;
        event.path[0].parentElement.nextElementSibling.innerHTML = +dec.innerHTML * +dec.parentElement.previousElementSibling.innerHTML;
    }
}


let save = document.querySelector('.save');
let moveCart = document.getElementById('moveCart')
if(moveCart){
    moveCart.addEventListener('click',()=>{
        getData();
        displayContentbody();
    })
}
function loadData(){
    if(ask.length > 0){
        ask.forEach(a=>{
            displayContentbody(a)
        })
    }
}