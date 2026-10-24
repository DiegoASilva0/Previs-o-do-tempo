const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;

const buscarClima = async (cityName) => {
    
     if(!cityName){
        console.error("Nome da Cidade não fornecido")
        return null
     }

      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(cityName + ",BR")}&appid=${apiKey}&units=metric&lang=pt_br`


        const result = await fetch(apiUrl)
        const json = await result.json()   

        if(json.cod === 200){
            const info = {
                city: json.name,
                country: json.sys.country,
                temp: Number(json.main.temp).toFixed(1).replace('.', ','),
                tempMax: Number(json.main.temp_max).toFixed(1).replace('.', ','),
                tempMin: Number(json.main.temp_min).toFixed(1).replace('.', ','),
                description: json.weather[0].description,
                tempIcon: json.weather[0].icon,
                windSpeed: json.wind.speed,
                humidity: json.main.humidity
            }
            
            return info
        } 
        
   
        
}

export default buscarClima

