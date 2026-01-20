const Base_Url="https://latest.currency-api.pages.dev/v1/currencies/eur.json";

const dropdowns=document.querySelectorAll(".dropdown select");
let flags=document.querySelectorAll("dropdown img");

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