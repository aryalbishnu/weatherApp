const cityName = document.getElementById('cityName');
const submitBtn = document.getElementById('submit');
const city_Name = document.getElementById('city_name');
const temp = document.getElementById('temp');
const temp_status = document.getElementById('temp_status');
const day = document.getElementById('day');
const today_date = document.getElementById('today_date');
const dataHide = document.getElementById('dataHide');


const weatherInfo = async(e) =>{
    e.preventDefault();
    let city = cityName.value;
    if (city === "") {
        city_Name.innerText = `Please write the city name befor serch`;
        dataHide.classList.add('data_hide');
    } else {
        try {
            const api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=260ab9d5f0425cc96cba8432b0ea9ab4`;
            const resonse = await fetch(api);
            const data = await resonse.json();
            const arrayData = [data];
            dataHide.classList.remove('data_hide');
            temp.innerText = `${(arrayData[0].main.temp -273.15).toFixed(1)}`;
            city_Name.innerText = `${arrayData[0].name}, ${arrayData[0].sys.country}`;
            
            let tempStatus = `${arrayData[0].weather[0].main}`;

            if (tempStatus == "Clear") {
                temp_status.innerHTML = "<i class='fas fa-sun' style='color: #eef218;'></i> "
            } else if (tempStatus == "Clouds") {
                temp_status.innerHTML = "<i class='fas fa-cloud' style='color: #f1f2f6;'></i> "
            } else if (tempStatus == "Rainy") {
                temp_status.innerHTML = "<i class='fas fa-cloud-rain' style='color: #a4b0be;'></i> "
            } else {
                temp_status.innerHTML = "<i class='fas fa-cloud' style='color: #44c3de;'></i> "
            }
            

        } catch {
            city_Name.innerText = `Please write the proper city name`;
            dataHide.classList.remove('data_hide');
        }
        
    }
}

submitBtn.addEventListener('click', weatherInfo);
    const currentDate = () =>{
        let days = [
            "Sun",
            "Mon",
            "Tue",
            "Wen",
            "Thu",
            "Fri",
            "Sat"
        ]
        let months = [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec"
        ]
        let now =  new Date();
        let day = now.getDay();
        let month = now.getMonth();
        let date = now.getDate();

        day.innerText = `${days[day]}`;
        today_date.innerText = `${date} ${months[month]}`;
        }
currentDate();