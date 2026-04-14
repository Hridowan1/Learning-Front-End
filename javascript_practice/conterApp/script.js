let count=1;

document.getElementById("inrement").addEventListener("click",increment);
document.getElementById("decrement").addEventListener("click",decrement);
let hyear=45;
let dyear=7;

function increment()
{
    count=count+1;
    document.getElementById("count").innerText=count;
}

function decrement()
{
    count=count-1;
    document.getElementById("count").innerHTML=count;
}