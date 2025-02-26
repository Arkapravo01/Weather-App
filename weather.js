const input=document.getElementById('search')
const btn=document.getElementById('btn')

const cityName=document.getElementById('cityName')
const cityTemp=document.getElementById('temp')
const cityTime=document.getElementById('time')
const img=document.getElementById('img')

=
async function getData(myInputData) {
    const data=await fetch(`https://api.weatherapi.com/v1/current.json?key=156f06ec9bb54731967110553252602&q=${myInputData}&aqi=yes`)
    return data.json()
}

btn.addEventListener('click',async()=>{
    const myInputData=input.value
    console.log(myInputData);
    const result=await getData(myInputData)
    console.log(result.Location);

    cityName.innerText=result.location.region
    cityTemp.innerText=result.current.temp_c
    cityTime.innerText=result.location.localtime
    img.innerHTML=`<img src="${result.current.condition.icon}" alt="Image"/>`
})
