let form = document.querySelector('form');
let weather = form.querySelector('input');
let weth_btn = form.querySelector('button');
let spanTag = document.querySelectorAll('span');
let cityName = document.getElementById('u_city_name');
let temp = document.getElementById('u_temp');
let des = document.getElementById('u_des');

function apiFetc(city){
    fetch('https://api.weatherbit.io/v2.0/current?city='+city+'&key=8ed8870d1d834f76bd446b1163eb6c24')
   .then((res) => res.json())
   .then(data => {
    // console.log(data.data[0].weather.description);
    cityName.textContent = data.data[0].city_name;
    temp.textContent = data.data[0].temp +' C';
    des.textContent = data.data[0].weather.description;
   })
}

weth_btn.addEventListener('click', function(e){
    e.preventDefault();

    let city = weather.value;
    // console.log(city);

    
    apiFetc(city);

    weather.value = '';

});




