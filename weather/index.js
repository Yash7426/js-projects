let input=document.querySelector('input')
input.addEventListener("keypress",(e)=>{
    if(e.key=='Enter'){
        get(input.value);
        input.value='';
    };
});
const error=document.querySelector('.error');
const para=document.querySelector('.a');
async function get(a){
    try{
        para.innerText="Loading......"
        const data=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${a}&APPID=7de20f97a60b13550595fa676090f4c8&units=imperial`,{mode:'cors'});
        const obj=await data.json();
        showdata(obj);
        error.innerText='';
        error.classList.remove('active');
        para.innerText='';
    }
    catch{
        console.log("yes");
        para.innerText='';
        error.innerText="Match not found!!";
        error.classList.add("active");
    }
}
function showdata(obj){
    const div=document.querySelector('.data');
    const div1 = document.createElement('div');
    div1.classList.add('outer');
    const div2 = document.createElement('div');
    const div3 = document.createElement('div');
    const div4 = document.createElement('div');
    const div5 = document.createElement('div');
    div5.classList.add('extra');
    div3.classList.add('inner');
    const h1=document.createElement('h1');
    const h2=document.createElement('p');
    const h4=document.createElement('small');
    const temp=document.createElement('p');
    temp.classList.add('temp');
    const feel=document.createElement('p');
    const humidity=document.createElement('p');
    const pressure=document.createElement('p');
    const speed=document.createElement('p');
    h1.innerText=`${obj.name}`;
    temp.innerHTML=`${obj.main.temp}<sup><div class='circle'></div>F</sup>`;
    feel.innerHTML=`FEELS LIKE:${obj.main.feels_like}<sup><div class='circle2'></div> F</sup>`;
    humidity.innerText=`HUMIDITY: ${obj.main.humidity}%`;
    pressure.innerText=`PRESSURE: ${obj.main.pressure} hPa`;
    speed.innerText=`WIND SPEED: ${obj.wind.speed} MPH`;
    h2.innerText=`${obj.weather[0].main}`;
    h4.innerText=`${obj.weather[0].description}`;
    div2.appendChild(h1);
    div2.appendChild(h2);
    div2.appendChild(h4);
    div1.appendChild(div2);
    div4.appendChild(temp);
    div3.appendChild(div4);
    div5.appendChild(feel);
    div5.appendChild(humidity);
    div5.appendChild(pressure);
    div5.appendChild(speed);
    div3.appendChild(div5);
    div1.appendChild(div2);
    div1.appendChild(div3);
    div.innerHTML='';
    div.appendChild(div1);
}
get("Jaipur");


