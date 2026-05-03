const base_url="https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";
const dropdown=document.querySelectorAll(".conv select");
let result=document.querySelector(".res");
let btn=document.querySelector("button");
let from1=document.querySelector(".fr select");
let to1=document.querySelector(".to select");
let input1=document.querySelector(".disp input");


for(let select of dropdown){
    for(let cl in countryList){
        let newoption=document.createElement("option");
        newoption.innerText=cl;
        newoption.value=cl;
        if(select.name==="From" && cl==="USD"){
            newoption.selected="selected";
        }
        if(select.name==="To" && cl==="INR"){
            newoption.selected="selected";
        }
        select.append(newoption);
    }
    select.addEventListener("change",(evt)=>{
        updateflag(evt.target);
    })

}
const updateflag=(element)=>{
    let newopt=element.value;
    let newflagcode=countryList[newopt];
    let flagImg=element.parentElement.querySelector("img");
    flagImg.src=`https://flagsapi.com/${newflagcode}/flat/64.png`;
}

btn.addEventListener("click", async (evt)=>{
    evt.preventDefault();
    if(Number(input1.value)<0 || isNaN(Number(input1.value) || input1.value==="")){
        result.innerText="Incorrect Amount";
    }
    else{
        let inp=Number(input1.value);
        let from2=from1.value.toLowerCase();
        let to2=to1.value.toLowerCase();
        const url = `${base_url}/${from2}.json`;
        let response=await fetch(url);
        let data=await response.json();
        let ans=(inp*(data[from2][to2])).toFixed(4);
        console.log(ans);
        result.innerText=ans.toString();
    }
})