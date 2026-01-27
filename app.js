
const BASE_URL="https://v6.exchangerate-api.com/v6/b67e1cfe54afbad38db94b2e/latest/";
const dropdowns=document.querySelectorAll(".dropdown select");

const btn=document.querySelector("form button")
let flags=document.querySelectorAll("dropdown img");

const fromCurr=document.querySelector(".FROM select");
const toCurr=document.querySelector(".TO select");
const msg=document.querySelector(".msg p")


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
    if(amt==="" || amt<0){
        amount=1;
        amount.value =1;}

    
const url=`${BASE_URL}${fromCurr.value}`;
let response =await fetch(url);
console.log(response);
let data =await response.json();
let rate=data.conversion_rates;
console.log(data);
let to=toCurr.value;
 console.log(rate[to]);

let finalAmount=rate[to]*amt;
msg.innerText=`${amt} ${fromCurr.value}=${finalAmount} ${toCurr.value}`
});

