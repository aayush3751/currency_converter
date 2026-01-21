const BaseUrl="https://www.amdoren.com/api/currency.php?api_key=MHYgNYAEjsyprSW5Xpwr6bdU3crHU6&";

const dropdowns=document.querySelectorAll(".dropdown select");

const btn=document.querySelector("form button")
let flags=document.querySelectorAll("dropdown img");

const fromCurr=document.querySelector(".FROM select");
const toCurr=document.querySelector(".TO select");
// for(code in countryList){console.log(code,countryList[code]);}

for(select of dropdowns)
{
    for(CurrCode in countryList)
    {
        let newOption =document.createElement("option");
        newOption.innerText=CurrCode;
        newOption.value=CurrCode;
        if(select.name==="from" && CurrCode==="USD")
        {
            newOption.selected="selected";
        }
        else if(select.name==="to" && CurrCode==="INR")
        {
            newOption.selected="selected";
        }
        select.append(newOption);
    }
    select.addEventListener("change",(evt) =>{
        updateFlag(evt.target);
    });
}
updateFlag= (element) =>
{
    console.log(element.value);
    let currCode=element.value;
    let countryCode=countryList[currCode];
    let newImg=`https://flagsapi.com/${countryCode}/flat/64.png`;
    let img=element.parentElement.querySelector("img");
    img.src=newImg;
};
btn.addEventListener("click" ,async (evt) =>{
    evt.preventDefault();
    let amount=document.querySelector(".Amount input");
    let amt=amount.value;
    if(amt==="" || amt<0){amount.value =1;}

    
const url=`${BaseUrl}from=${fromCurr.value}&to=${toCurr.value}`;
let response =await fetch(url);
let data =await response.json();
// let val=data[amount]
console.log(data);
// console.log(val);
});
