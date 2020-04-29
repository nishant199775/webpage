window.onload=function(){
const btn=document.getElementById("paybtn")
const qnty=document.getElementById("quantity")
const size=document.getElementById("size")
const amount=document.getElementById('amount')
let ans=0
btn.onclick=function(){
    if(size.value==10)
    {
        ans=399*qnty.value
        amount.innerText="=Rs"+ans
        
    }
    else{
        ans=209*qnty.value
        amount.innerText="=Rs"+ans
    }
}
}
