
  
  
//   like button
  var elem = document.getElementsByClassName('like');
     console.log(elem )
     for( let i=0;i<elem.length; i++){
        let likes=elem[i]
        console.log(likes)
  likes.addEventListener("click",function() {
        if(likes.style.color !=='red'){
            likes.style.color ="red"
        }else{
            likes.style.color="black"
        }
       }); 
     }
     
       
//   remove button
var remove = document. getElementsByClassName('delete'); 
console.log(remove )
     for( let i=0;i<remove.length; i++){
        let del=remove[i]
        console.log(del)
        del.addEventListener("click",function () {
        this.parentNode.remove()
        })};


    //  btn minus-btn
    var minus = document. getElementsByClassName('minus-btn'); 
console.log(minus )
for( let i=0;i<minus.length; i++){
    let minusBtn=minus[i]
    console.log(minus)
    minusBtn.addEventListener("click",function (){ 
        if(
            minusBtn.nextElementSibling.value>0 
        ){
            minusBtn.nextElementSibling.value--
            price1();
            price2();
            price3();
            priceT();
        }
        
   
    })}

// btn plus
var Plus=document.getElementsByClassName('plus-btn')
for ( let i=0;i<Plus.length; i++){
    let btnPlus=Plus[i]
    console.log(btnPlus)
    btnPlus.addEventListener("click",function (){
       
            btnPlus.previousElementSibling.value++
            price1();
            price2();
            price3();
            priceT();
    })}

    //  price
   function price1() {
        let price=document.getElementById('p1')
        let Quant1=document.getElementById('q1')
  price.innerHTML=1379.00 * Quant1.value
} 
function price2() {
    let price=document.getElementById('p2')
    let Quant2=document.getElementById('q2')
price.innerHTML=176.00  * Quant2.value
} 
function price3() {
    let price=document.getElementById('p3')
    let Quant3=document.getElementById('q3')
price.innerHTML=249.00 * Quant3.value
} 

//  total-price

function priceT() {
    let finalPrice=document.getElementById('totalprice')
    let Quant1=document.getElementById('q1')
    let Quant2=document.getElementById('q2')
    let Quant3=document.getElementById('q3')
    finalPrice.innerHTML=(1379.00 * Quant1.value) + (176.00  * Quant2.value) + (249.00 * Quant3.value)
}