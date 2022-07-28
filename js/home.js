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



var buttonMoveCart = document.getElementById("moveCart");
var tbodyOfTable = document.getElementById("tbody");
if(buttonMoveCart){
    buttonMoveCart.addEventListener("click",()=>{
            let tr =`
        <tr>
            <td class="productImg">
                <div class="ss" style="background-image: url(${window.localStorage.getItem('source')})">
                </div>
                <span class="mx-2">Lorem, ipsum.</span>
            </td>
        <td id="unitPrice">199</td>
        <td class="qty">
            <i id="increaseCart" class="mx-3 border fa-solid fa-plus"></i>
            <span class="numcartchange">0</span>
            <i class="mx-3 fa-solid fa-minus border" id="decreaseCart"></i>
        </td>
        <td id="totalPrice">0</td>
        </tr>`
        window.localStorage.setItem('trtable',tr);
        // location.href = "cart.html";
    })
}

window.addEventListener("load",()=>{
    if(location.href=="http://127.0.0.1:5500/cart.html"){
        tbodyOfTable.innerHTML = window.localStorage.getItem("trtable"); 
        let increaseCartProduct = document.getElementById("increaseCart");
        let decreaseCartProduct = document.getElementById("decreaseCart");
        let unitPrice = document.getElementById("unitPrice");
        let totalPrice = document.getElementById("totalPrice");
        let numCartChange = document.querySelector(".numcartchange");
        increaseCartProduct.addEventListener('click',()=>{
            parseInt(numCartChange.innerHTML++);
            totalPrice.innerHTML = parseInt(unitPrice.innerHTML)* parseInt(numCartChange.innerHTML)
        })
        decreaseCartProduct.addEventListener('click',()=>{
            if( parseInt(numCartChange.innerHTML) <= 0){
                alert("no the buyin quantm must be greater than zero");
                parseInt(numCartChange.innerHTML) = 0;
            }else{
                parseInt(numCartChange.innerHTML--);
                totalPrice.innerHTML = parseInt(unitPrice.innerHTML)* parseInt(numCartChange.innerHTML)
            }
        })
    }
})



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